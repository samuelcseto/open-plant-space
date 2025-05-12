<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import Konva from 'konva'
import { Toast, type ToastProps } from '@renderer/components/ui/toast'
import FloorPlanCsvImport from './FloorPlanCsvImport.vue'

// Type definitions
interface Plant {
  id: number
  name: string
  width: number
  length: number
  // Add other plant properties if any
}

interface Machine {
  id: number
  name: string
  serialNumber?: string
  typeId: number
  plantId: number
  length: number
  width: number
  height: number
  ownerId?: number
  x?: number
  y?: number
  rotation?: number
  color?: string
  // Add other machine properties if any
}

interface ExternalFactor {
  id: number
  name: string
  // Add other factor properties if any
}

interface MachineFactorAssociation {
  id: number
  machineId: number
  factorId: number
  isProducer: boolean
  isSensitive: boolean
  intensity?: number
}

interface FloorPlanMachine {
  id: string
  x: number
  y: number
  width: number
  height: number
  fill: string
  name: string
  hasForbiddenZone: boolean
  forbiddenRadius: number
  machineData: Machine // Original machine data
  rotation: number
  factorZones: Konva.Rect[] // Changed from any[] to Konva.Rect[] or a more specific type
  factorSensitivities: MachineFactorData[]
}

interface MachineFactorData {
  factor: ExternalFactor
  isProducer: boolean
  isSensitive: boolean
  intensity: number
}

interface CsvLayoutItem {
  ID: number
  X: number
  Y: number
  // Add other CSV properties if any
}

// Toast notification state
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref<ToastProps['variant']>('success') // Use ToastProps for variant

// Function to show a toast message
const displayToast = (message: string, type: ToastProps['variant'] = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true

  // Auto-hide toast after 3 seconds
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

// Close toast handler
const closeToast = () => {
  showToast.value = false
}

const props = defineProps({
  plantId: {
    type: Number,
    required: true
  }
})

const containerRef = ref<HTMLDivElement | null>(null)
let stage: Konva.Stage | null = null
let layer: Konva.Layer | null = null

// Plant data
const plant = ref<Plant | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

const machines = ref<FloorPlanMachine[]>([])

// External factors data
const allFactors = ref<ExternalFactor[]>([])
const machineFactorsMap = ref<Map<number, MachineFactorData[]>>(new Map()) // Map of machineId -> MachineFactorData[]
const loadingFactors = ref(true)

// Generate a random color based on machine type
const getColorForMachineType = (): string => {
  // Generate a random color instead of using a fixed map
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

// Preload all external factors data
const preloadFactorsData = async () => {
  loadingFactors.value = true
  try {
    // Load all external factors
    const factors: ExternalFactor[] =
      await window.electron.ipcRenderer.invoke('external-factors:list')
    allFactors.value = factors

    // Load all machines to get their factor associations
    const allMachines: Machine[] = await window.electron.ipcRenderer.invoke('machines:list')

    // Create a map of machineId -> factors it produces/is sensitive to
    for (const machine of allMachines) {
      const machineId = machine.id
      const factorAssociations: MachineFactorAssociation[] =
        await window.electron.ipcRenderer.invoke('machine-factors:list', machineId)

      if (factorAssociations && factorAssociations.length > 0) {
        const factorDataList: MachineFactorData[] = factorAssociations.map((assoc) => ({
          factor: allFactors.value.find((f) => f.id === assoc.factorId) || {
            id: assoc.factorId,
            name: 'Unknown Factor'
          },
          isProducer: assoc.isProducer,
          isSensitive: assoc.isSensitive,
          intensity: assoc.intensity || 0
        }))
        machineFactorsMap.value.set(machineId, factorDataList)
      }
    }

    console.log('Preloaded factors data:', {
      factors: allFactors.value.length,
      machinesWithFactors: machineFactorsMap.value.size
    })
  } catch (err) {
    console.error('Error preloading factors data:', err)
    error.value = 'Failed to load external factors data'
  } finally {
    loadingFactors.value = false
  }
}

// Load plant and machine data from the database
const loadPlantData = async () => {
  isLoading.value = true
  error.value = null

  try {
    // Load plant details
    const plantData: Plant = await window.electron.ipcRenderer.invoke('plants:get', props.plantId)
    plant.value = plantData
    console.log('Retrieved plant data:', plantData)

    // Load machines for this plant
    const machinesData: Machine[] = await window.electron.ipcRenderer.invoke('machines:list')
    console.log('All machines data:', machinesData)

    // Filter machines for this plant
    const plantMachines = machinesData.filter((m) => {
      return String(m.plantId) === String(props.plantId)
    })
    console.log('Filtered machines for plant:', plantMachines)

    // Transform machine data to the format used by our floorplan component
    machines.value = plantMachines.map((machine): FloorPlanMachine => {
      return {
        id: machine.id.toString(),
        x: machine.x || 100,
        y: machine.y || 100,
        width: machine.width / 5, // Scale down from cm to pixels
        height: machine.length / 5, // Scale down from cm to pixels
        fill: machine.color || getColorForMachineType(), // Removed argument
        name: machine.name,
        hasForbiddenZone: true,
        forbiddenRadius: 20, // Default safety zone
        machineData: machine, // Keep original data for reference
        rotation: machine.rotation || 0, // Ensure rotation is included
        factorZones: [], // Initialize as empty array
        factorSensitivities: machineFactorsMap.value.get(machine.id) || []
      }
    })

    console.log('Loaded machines:', machines.value)

    isLoading.value = false

    // We'll handle canvas initialization in the nextTick after the template is rendered
    // instead of immediately trying to initialize the canvas here
  } catch (err) {
    console.error('Error loading plant data:', err)
    error.value = 'Failed to load plant data'
    isLoading.value = false
  }
}

// Check for collisions with other objects including factor zones (bi-directional)
const hasObjectCollisions = (group: Konva.Group): boolean => {
  if (!layer) return false
  const machinesKonva = layer.find<Konva.Group>('.machine')

  // Get the machine ID from the group
  const machineId = parseInt(group.id())

  // Get factors this machine is sensitive to or produces
  const machineFactors = machineFactorsMap.value.get(machineId) || []
  const sensitiveTo = machineFactors.filter((f) => f.isSensitive)
  const produces = machineFactors.filter((f) => f.isProducer)

  return machinesKonva.some((other) => {
    if (other._id === group._id) return false

    // First check for direct collision - always prevent machines from overlapping
    if (checkDirectCollision(group, other)) {
      return true
    }

    // If the machine has no factor relationships, we're done
    if (sensitiveTo.length === 0 && produces.length === 0) {
      return false
    }

    // Get the other machine's ID
    const otherMachineId = parseInt(other.id())

    // Get the other machine's factor data
    const otherFactors = machineFactorsMap.value.get(otherMachineId) || []
    const otherProduces = otherFactors.filter((f) => f.isProducer)
    const otherSensitiveTo = otherFactors.filter((f) => f.isSensitive)

    // CASE 1: Check if the dragged machine is sensitive to factors produced by the other machine
    if (sensitiveTo.length > 0 && otherProduces.length > 0) {
      for (const sensitivity of sensitiveTo) {
        const matchingFactor = otherProduces.find(
          (production) =>
            production.factor.id === sensitivity.factor.id &&
            production.intensity >= sensitivity.intensity
        )

        if (matchingFactor) {
          if (checkFactorCollision(group, other, matchingFactor.intensity)) {
            console.log(
              `Factor-based collision: Machine ${machineId} is sensitive to ${matchingFactor.factor.name} produced by machine ${otherMachineId}`
            )
            return true
          }
        }
      }
    }

    // CASE 2: Check if the dragged machine produces factors that the other machine is sensitive to
    if (produces.length > 0 && otherSensitiveTo.length > 0) {
      for (const production of produces) {
        const matchingFactor = otherSensitiveTo.find(
          (sensitivity) =>
            sensitivity.factor.id === production.factor.id &&
            production.intensity >= sensitivity.intensity
        )

        if (matchingFactor) {
          if (checkFactorCollision(group, other, production.intensity)) {
            console.log(
              `Factor-based collision: Machine ${machineId} produces ${matchingFactor.factor.name} that machine ${otherMachineId} is sensitive to`
            )
            return true
          }
        }
      }
    }

    return false
  })
}

// Helper function to check for direct collision between two machines (without considering factors)
const checkDirectCollision = (group1: Konva.Group, group2: Konva.Group): boolean => {
  const rect1 = group1.findOne<Konva.Rect>('.machine-rect')
  const rect2 = group2.findOne<Konva.Rect>('.machine-rect')

  if (!rect1 || !rect2) return false // Should not happen

  const box1 = rect1.getClientRect()
  const box2 = rect2.getClientRect()

  // Simple AABB collision detection (Axis-Aligned Bounding Box)
  return !(
    box1.x > box2.x + box2.width ||
    box1.x + box1.width < box2.x ||
    box1.y > box2.y + box2.height ||
    box1.y + box1.height < box2.y
  )
}

// Helper function to check for factor-based collision between two machines
const checkFactorCollision = (
  group1: Konva.Group,
  group2: Konva.Group,
  intensity: number
): boolean => {
  // Calculate danger zone size based on intensity
  const baseSize = 20
  const intensityMultiplier = 10
  const dangerPadding = baseSize + intensity * intensityMultiplier

  // Get the rectangles for both machines
  const rect1 = group1.findOne<Konva.Rect>('.machine-rect')
  const rect2 = group2.findOne<Konva.Rect>('.machine-rect')

  if (!rect1 || !rect2) return false // Should not happen

  // Get absolute positions
  const box1 = rect1.getClientRect()
  const box2 = rect2.getClientRect()

  // Calculate the enlarged bounding box of the second machine (the danger zone)
  const dangerBox = {
    x: box2.x - dangerPadding,
    y: box2.y - dangerPadding,
    width: box2.width + dangerPadding * 2,
    height: box2.height + dangerPadding * 2
  }

  // Check if the first machine intersects with the danger box
  return !(
    box1.x > dangerBox.x + dangerBox.width ||
    box1.x + box1.width < dangerBox.x ||
    box1.y > dangerBox.y + dangerBox.height ||
    box1.y + box1.height < dangerBox.y
  )
}

// Check if object is out of bounds (ignoring red zones)
const isOutOfBounds = (box: Konva.NodeConfig): boolean => {
  if (!stage) return true // If stage is not defined, consider it out of bounds
  // Get the actual rectangle bounds without the red zone
  const actualBox = {
    x: box.x ?? 0,
    y: box.y ?? 0,
    width: box.width ?? 0,
    height: box.height ?? 0
  }

  return (
    actualBox.x < 0 ||
    actualBox.y < 0 ||
    actualBox.x + actualBox.width > stage.width() ||
    actualBox.y + actualBox.height > stage.height()
  )
}

// Get factor color based on factor name
const getFactorColor = (factorName: string): string => {
  const factorColorMap = {
    Vibrácie: 'rgba(255, 100, 100, 0.2)', // Vibrations - red
    Hluk: 'rgba(100, 100, 255, 0.2)', // Noise - blue
    'Tepelné vyžarovanie': 'rgba(255, 170, 50, 0.2)', // Heat - orange
    'Elektromagnetické rušenie': 'rgba(255, 50, 255, 0.2)', // EMI - purple
    Prašnosť: 'rgba(170, 170, 170, 0.2)', // Dust - gray
    'Výpary a chemikálie': 'rgba(100, 255, 100, 0.2)' // Vapors - green
  }

  return factorColorMap[factorName] || 'rgba(100, 100, 100, 0.2)' // Default gray for unknown factors
}

// Show danger zones for machines based on factors - works both ways:
// 1. When dragging a machine sensitive to factors, show zones around producers
// 2. When dragging a machine that produces factors, show zones around sensitive machines
const showFactorDangerZones = (draggedGroup: Konva.Group | undefined) => {
  if (layer === null) return
  if (!draggedGroup) return

  // Get the machine ID from the group
  const machineId = parseInt(draggedGroup.id())

  // Find the machine in our machines array
  const draggedMachine = machines.value.find((m) => m.id === draggedGroup.id())
  if (!draggedMachine) return

  // Get the factors this machine is sensitive to or produces
  const machineFactors = machineFactorsMap.value.get(machineId) || []
  const sensitiveTo = machineFactors.filter((f) => f.isSensitive)
  const produces = machineFactors.filter((f) => f.isProducer)

  // Process both cases: machine is sensitive to factors or produces factors others are sensitive to

  // CASE 1: When dragging a machine sensitive to factors, show zones around machines that produce those factors
  if (sensitiveTo.length > 0) {
    console.log('Machine is sensitive to factors:', sensitiveTo)

    // For each machine in the layer
    layer.find<Konva.Group>('.machine').forEach((group) => {
      if (group === draggedGroup) return // Skip the machine being dragged

      const otherMachineId = parseInt(group.id())
      const otherMachine = machines.value.find((m) => m.id === group.id())
      if (!otherMachine) return

      // Get the factors this other machine produces
      const factorProduction = machineFactorsMap.value.get(otherMachineId) || []
      const otherProduces = factorProduction.filter((f) => f.isProducer)

      if (otherProduces.length === 0) return // This machine doesn't produce any factors

      // For each factor the dragged machine is sensitive to, check if this machine produces it
      sensitiveTo.forEach((sensitivity) => {
        const matchingFactor = otherProduces.find(
          (production) =>
            production.factor.id === sensitivity.factor.id &&
            production.intensity >= sensitivity.intensity // Only show danger zone if production intensity >= sensitivity intensity
        )

        console.log('Matching factor:', matchingFactor)

        if (matchingFactor) {
          createDangerZone(group, matchingFactor, 'producer')
        }
      })
    })
  }

  // CASE 2: When dragging a machine that produces factors, show zones around machines sensitive to those factors
  if (produces.length > 0) {
    console.log('Machine produces factors:', produces)

    // For each machine in the layer
    layer.find<Konva.Group>('.machine').forEach((group) => {
      if (group === draggedGroup) return // Skip the machine being dragged

      const otherMachineId = parseInt(group.id())
      const otherMachine = machines.value.find((m) => m.id === group.id())
      if (!otherMachine) return

      // Get the factors this other machine is sensitive to
      const factorSensitivities = machineFactorsMap.value.get(otherMachineId) || []
      const otherSensitiveTo = factorSensitivities.filter((f) => f.isSensitive)

      if (otherSensitiveTo.length === 0) return // This machine isn't sensitive to any factors

      // For each factor the dragged machine produces, check if this machine is sensitive to it
      produces.forEach((production) => {
        const matchingFactor = otherSensitiveTo.find(
          (sensitivity) =>
            sensitivity.factor.id === production.factor.id &&
            production.intensity >= sensitivity.intensity // Only show danger zone if production intensity >= sensitivity intensity
        )

        if (matchingFactor) {
          createDangerZone(group, matchingFactor, 'sensitive')
        }
      })
    })
  }

  if (layer) {
    layer.batchDraw()
  }
}

// Helper function to create a danger zone on a machine group
const createDangerZone = (
  group: Konva.Group,
  matchingFactor: MachineFactorData,
  zoneType: 'producer' | 'sensitive'
) => {
  console.log(
    `Creating ${zoneType} danger zone for factor ${matchingFactor.factor.name} with intensity ${matchingFactor.intensity}`
  )

  // Calculate danger zone size based on intensity
  const baseSize = 20 // Base safety padding
  const intensityMultiplier = 10 // How much each intensity point increases the padding
  const dangerPadding = baseSize + matchingFactor.intensity * intensityMultiplier

  // Get machine rectangle dimensions
  const machineRect = group.findOne<Konva.Rect>('.machine-rect')
  if (!machineRect) return

  const width = machineRect.width()
  const height = machineRect.height()

  // Calculate danger zone dimensions by adding padding around the machine
  const dangerWidth = width + dangerPadding * 2
  const dangerHeight = height + dangerPadding * 2

  // Create a unique name for this factor zone based on its type (producer or sensitive)
  const zoneName = `factor-danger-zone-${zoneType}-${matchingFactor.factor.id}`

  // Create or update the danger zone
  const existingDangerZone = group.findOne(`.${zoneName}`)

  if (existingDangerZone) {
    // Update existing zone dimensions
    existingDangerZone.width(dangerWidth)
    existingDangerZone.height(dangerHeight)
    existingDangerZone.x(-dangerPadding) // Center it on the machine
    existingDangerZone.y(-dangerPadding)
    existingDangerZone.visible(true)
  } else {
    // Create a new danger zone rectangle
    const dangerZone = new Konva.Rect({
      x: -dangerPadding, // Position relative to the machine group
      y: -dangerPadding,
      width: dangerWidth,
      height: dangerHeight,
      fill: getFactorColor(matchingFactor.factor.name),
      stroke: zoneType === 'producer' ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 255, 0.5)', // Red for producers, blue for sensitive
      strokeWidth: 1,
      cornerRadius: 4, // Very slight rounding
      name: zoneName,
      opacity: 0.7
    })

    // Add the danger zone to the group
    group.add(dangerZone)

    // Make sure the danger zone is below the machine rectangle in the drawing order
    dangerZone.moveToBottom()
  }

  if (layer) {
    layer.batchDraw()
  }
}

// Clear all factor danger zones
const clearFactorDangerZones = () => {
  if (layer === null) return
  layer.find<Konva.Group>('.machine').forEach((group) => {
    // Find all elements with names starting with 'factor-danger-zone' or 'factor-label'
    const factorElements = group.find(
      (node) =>
        node.name().startsWith('factor-danger-zone') || node.name().startsWith('factor-label')
    )

    // Hide or remove these elements
    factorElements.forEach((element: Konva.Node) => {
      element.visible(false) // Or we could use element.destroy() to completely remove them
    })
  })

  if (layer) {
    layer.batchDraw()
  }
}

// New methods for CSV import functionality
// Process the imported CSV layout data
const handleCsvLayout = async (layoutData: CsvLayoutItem[]) => {
  try {
    console.log('Received layout data:', layoutData)

    if (!layoutData || layoutData.length === 0) {
      displayToast('No layout data received', 'error')
      return
    }

    // Validate that all machines in the CSV exist in our machines array
    const machineIds = machines.value.map((m) => parseInt(m.id))
    const invalidMachines = layoutData.filter((item) => !machineIds.includes(item.ID))

    if (invalidMachines.length > 0) {
      displayToast(`${invalidMachines.length} machines in CSV not found in this plant`, 'warning')
      console.warn(
        'Machines not found:',
        invalidMachines.map((m) => m.ID)
      )
    }

    // Filter to only include valid machines
    const validLayoutData = layoutData.filter((item) => machineIds.includes(item.ID))

    if (validLayoutData.length === 0) {
      displayToast('No valid machines found in CSV', 'error')
      return
    }

    // Apply the optimized layout
    await applyOptimizedLayout(validLayoutData)

    // Success message
    displayToast(`Layout applied for ${validLayoutData.length} machines`, 'success')
  } catch (err: unknown) {
    console.error('Error handling CSV layout:', err)
    displayToast(`Error applying layout: ${(err as Error).message}`, 'error')
  }

  if (layer) {
    layer.batchDraw()
  }
}

// Apply the optimized layout from CSV data to the machines
const applyOptimizedLayout = async (layoutData: CsvLayoutItem[]) => {
  if (!layer || !stage) return
  // First normalize the coordinates to get the relative positions
  const normalizedData = normalizeLayoutCoordinates(layoutData)

  // Create a mapping of machine IDs to their normalized positions
  const positionMap = new Map<number, { x: number; y: number }>()
  normalizedData.forEach((item) => {
    positionMap.set(item.ID, { x: item.X, y: item.Y })
  })

  // Get machine groups from Konva layer
  const machineGroups = layer.find<Konva.Group>('.machine')
  const groupMap = new Map<number, Konva.Group>()
  machineGroups.forEach((group) => {
    groupMap.set(parseInt(group.id()), group)
  })

  // Apply positions to the machines in sequence with collision checking
  // Sort machines by size (larger machines first) to improve placement
  const sortedMachines = [...machines.value].sort((a, b) => {
    const aArea = a.width * a.height
    const bArea = b.width * b.height
    return bArea - aArea // Largest first
  })

  // Clear all existing factor danger zones before layout processing
  clearFactorDangerZones()

  // Place machines in order, applying collision avoidance
  for (const machine of sortedMachines) {
    const machineId = parseInt(machine.id)
    const position = positionMap.get(machineId)

    if (!position) continue

    const group = groupMap.get(machineId)
    if (!group) continue

    await placeMachineWithCollisionAvoidance(group, position.x, position.y)
  }

  // Update the reactive array with new positions
  machineGroups.forEach((group) => {
    const index = machines.value.findIndex((m) => m.id === group.id())
    if (index !== -1) {
      machines.value[index].x = group.x()
      machines.value[index].y = group.y()
      machines.value[index].machineData.x = group.x()
      machines.value[index].machineData.y = group.y()
    }
  })

  if (layer) {
    layer.batchDraw()
  }
}

// Normalize layout coordinates to fit our stage
const normalizeLayoutCoordinates = (layoutData: CsvLayoutItem[]): CsvLayoutItem[] => {
  if (!stage) return layoutData // Should not happen if called correctly
  // Find min/max values to normalize
  let minX = Infinity,
    minY = Infinity
  let maxX = -Infinity,
    maxY = -Infinity

  layoutData.forEach((item) => {
    minX = Math.min(minX, item.X)
    minY = Math.min(minY, item.Y)
    maxX = Math.max(maxX, item.X)
    maxY = Math.max(maxY, item.Y)
  })

  // Calculate range
  const rangeX = maxX - minX
  const rangeY = maxY - minY

  // Use a smaller scale factor to place machines closer together
  // The compactness factor controls how close machines are placed (smaller = closer)
  const compactnessFactor = 0.3 // Adjust this value between 0.1-1.0 to control spacing

  // Calculate scale factor to fit within stage dimensions with tighter spacing
  const stageWidth = stage.width() * 0.9 // Use more of the available width
  const stageHeight = stage.height() * 0.9 // Use more of the available height

  // Use the compactness factor to bring machines closer
  const scaleX = rangeX > 0 ? (stageWidth * compactnessFactor) / rangeX : 1
  const scaleY = rangeY > 0 ? (stageHeight * compactnessFactor) / rangeY : 1

  // Use the smaller scale to maintain aspect ratio
  const scale = Math.min(scaleX, scaleY)

  // Calculate offset to center the layout
  const offsetX = (stage.width() - rangeX * scale) / 2
  const offsetY = (stage.height() - rangeY * scale) / 2

  // Normalize coordinates and flip Y-axis
  return layoutData.map((item) => ({
    ID: item.ID,
    X: (item.X - minX) * scale + offsetX,
    Y: (stage?.height() || 0) - ((item.Y - minY) * scale + offsetY) // Flip Y coordinate, add null check for stage
  }))
}

// Place a machine with collision avoidance
const placeMachineWithCollisionAvoidance = (
  group: Konva.Group,
  targetX: number,
  targetY: number
): Promise<boolean> => {
  return new Promise((resolve) => {
    // Original position for restoration if needed
    const originalX = group.x()
    const originalY = group.y()

    // Try placing at the target position first
    group.position({ x: targetX, y: targetY })
    const machineRect = group.findOne<Konva.Rect>('.machine-rect')
    if (!machineRect) {
      resolve(false) // Should not happen
      return
    }

    // Check if this position causes collisions
    if (!hasObjectCollisions(group) && !isOutOfBounds(machineRect.getClientRect())) {
      // Success - position is good
      resolve(true)
      return
    }

    // If there's a collision, try to find a nearby position using a spiral pattern
    const spiralSearch = (centerX: number, centerY: number, success: (found: boolean) => void) => {
      const maxAttempts = 100
      const stepSize = 20
      let x = 0
      let y = 0
      let dx = 0
      let dy = -1

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        // Change direction at certain points in the spiral
        if (x === y || (x < 0 && x === -y) || (x > 0 && x === 1 - y)) {
          const temp = dx
          dx = -dy
          dy = temp
        }

        // Take a step in the current direction
        x += dx
        y += dy

        // Calculate position based on step
        const testX = centerX + x * stepSize
        const testY = centerY + y * stepSize

        // Try this position
        group.position({ x: testX, y: testY })

        // Check if valid
        const currentRect = group.findOne<Konva.Rect>('.machine-rect')
        if (!currentRect) {
          // If for some reason rect is not found, we can't validate, assume invalid
          // Or handle this case more gracefully depending on expected behavior
          continue
        }

        if (!hasObjectCollisions(group) && !isOutOfBounds(currentRect.getClientRect())) {
          success(true)
          return
        }
      }

      // If we couldn't find a valid position, restore original position
      group.position({ x: originalX, y: originalY })
      success(false)
    }

    // Start spiral search
    spiralSearch(targetX, targetY, resolve)
  })
}

onMounted(() => {
  loadPlantData()
})

// Watch for changes in the plantId prop
watch(
  () => props.plantId,
  (newPlantId, oldPlantId) => {
    console.log('Plant ID changed:', { newPlantId, oldPlantId })
    if (newPlantId && newPlantId !== oldPlantId) {
      // Reset the stage when plant ID changes
      if (stage) {
        console.log('Destroying existing stage for plant change')
        stage.destroy()
        stage = null
        layer = null
      }
      // Load data for the new plant
      loadPlantData()
    }
  }
)

// Watch for changes in the machines ref and isLoading to initialize or update canvas
watch(
  [() => machines.value, () => isLoading.value],
  ([newMachines, newIsLoading]) => {
    console.log('Watch triggered:', {
      machinesCount: newMachines.length,
      isLoading: newIsLoading,
      containerRef: containerRef.value,
      containerExists: !!containerRef.value,
      condition: !newIsLoading && !!containerRef.value
    })

    // Force initialization after a short delay regardless of condition
    setTimeout(() => {
      console.log('Delayed check - container exists:', !!containerRef.value)
      if (containerRef.value && !stage) {
        console.log('Initializing canvas after delay')
        initCanvas()
      }
    }, 500) // Increased delay to 500ms

    if (!newIsLoading && containerRef.value) {
      // If the data is loaded and container is available
      console.log('Condition passed, initializing in nextTick')
      nextTick(() => {
        console.log('In nextTick - about to initialize canvas')
        if (!stage) {
          // Initialize canvas if it doesn't exist yet
          console.log('Initializing canvas - container:', containerRef.value)
          initCanvas()
          console.log('Canvas initialized:', { stage: !!stage, layer: !!layer })
        } else if (stage && layer) {
          // Update canvas if it already exists
          console.log('Updating existing canvas')
          updateCanvas()
        }
      })
    }
  },
  { deep: true }
)

// Initialize the canvas and preload factor data
const initCanvas = () => {
  console.log('Starting canvas initialization')

  // Preload the external factors data right away
  preloadFactorsData()

  // Make sure containerRef exists
  if (!containerRef.value) {
    console.error('Container reference is null during initialization')
    return
  }
  if (!plant.value) {
    console.error('Plant data is null during initialization')
    error.value = 'Plant data not available for canvas initialization.' // Use single quotes
    return
  }

  try {
    // Set canvas dimensions based on plant size if available
    const canvasWidth = plant.value ? Math.max(600, plant.value.width / 2) : 600
    const canvasHeight = plant.value ? Math.max(400, plant.value.length / 2) : 400

    console.log('Canvas dimensions:', { canvasWidth, canvasHeight })
    console.log('Container element:', containerRef.value)
    console.log('Container element dimensions:', {
      offsetWidth: containerRef.value.offsetWidth,
      offsetHeight: containerRef.value.offsetHeight,
      clientWidth: containerRef.value.clientWidth,
      clientHeight: containerRef.value.clientHeight
    })

    // Force the container to have valid dimensions if needed
    // Check clientWidth and clientHeight as offsetWidth/Height might include borders/padding
    if (containerRef.value.clientWidth === 0 || containerRef.value.clientHeight === 0) {
      console.log('Setting explicit dimensions on container as clientWidth/Height is zero')
      containerRef.value.style.width = canvasWidth + 'px'
      containerRef.value.style.height = canvasHeight + 'px'
    } else if (containerRef.value.offsetWidth === 0 || containerRef.value.offsetHeight === 0) {
      console.log('Setting explicit dimensions on container as offsetWidth/Height is zero')
      containerRef.value.style.width = canvasWidth + 'px'
      containerRef.value.style.height = canvasHeight + 'px'
    }

    console.log('Creating Konva Stage...')
    // Create the stage
    stage = new Konva.Stage({
      container: containerRef.value,
      width: canvasWidth,
      height: canvasHeight
    })

    console.log('Stage created:', stage)

    // Create a layer
    layer = new Konva.Layer()
    stage.add(layer)

    // Add background
    const background = new Konva.Rect({
      x: 0,
      y: 0,
      width: stage.width(),
      height: stage.height(),
      fill: '#f5f5f5',
      stroke: '#e0e0e0',
      strokeWidth: 2
    })
    layer.add(background)

    // Create a global transformer that will stay consistent
    const tr = new Konva.Transformer({
      resizeEnabled: false,
      rotateEnabled: true,
      rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315],
      rotationSnapTolerance: 10,
      enabledAnchors: [],
      borderStroke: '#666',
      borderStrokeWidth: 1,
      padding: 5
    })
    layer.add(tr)

    // Track active transformations to prevent interruption
    let activeTransform = false

    // Click handler for selection
    stage.on('click', (e: Konva.KonvaEventObject<MouseEvent>) => {
      // If we're in the middle of a transform, don't change selection
      if (activeTransform) {
        console.log('Transform in progress, ignoring click')
        return
      }

      const clickedGroup = e.target.findAncestor('.machine', true) as Konva.Group | undefined // Cast to Konva.Group

      // Update all groups' draggable state
      layer?.find<Konva.Group>('.machine').forEach((group) => {
        group.draggable(true) // Reset draggable to true by default
      })

      if (e.target === background) {
        tr.nodes([])
        layer?.draw()
        return
      }

      if (clickedGroup) {
        // When selecting a group for transform, disable its dragging
        tr.nodes([clickedGroup])
        clickedGroup.draggable(false)
        layer?.draw()
      }
    })

    // Handle transformer transform events
    tr.on('transformstart', () => {
      activeTransform = true
      console.log('Transform started')
    })

    tr.on('transformend', () => {
      setTimeout(() => {
        activeTransform = false
        console.log('Transform ended')
      }, 200) // Small delay to ensure transform is complete
    })

    // Create furniture items
    updateCanvas()
    addGrid()

    // Handle transformer keydown events
    stage.container().tabIndex = 1
    stage.container().addEventListener('keydown', (e: KeyboardEvent) => {
      if (!tr.nodes().length) return

      const selectedGroup = tr.nodes()[0] as Konva.Group // Cast to Konva.Group
      const rotationStep = e.shiftKey ? 15 : 5 // Smaller step with Shift
      let newRotation = selectedGroup.rotation()

      if (e.keyCode === 37) {
        // Left arrow
        newRotation -= rotationStep
      } else if (e.keyCode === 39) {
        // Right arrow
        newRotation += rotationStep
      } else {
        return
      }

      // Apply the new rotation
      selectedGroup.rotation(newRotation)

      // Update the machine data
      const index = machines.value.findIndex((i) => i.id === selectedGroup.id())
      if (index !== -1) {
        machines.value[index].rotation = newRotation
        machines.value[index].machineData.rotation = newRotation
      }

      if (layer) {
        layer.batchDraw()
      }
      e.preventDefault()
    })

    console.log('Canvas initialization complete')
  } catch (err: unknown) {
    console.error('Error initializing canvas:', err)
    error.value = 'Failed to initialize canvas: ' + (err as Error).message
  }
}

// Update the canvas with machines and their factor data
const updateCanvas = () => {
  console.log('updateCanvas called with machines:', machines.value)
  if (!layer || !stage) {
    console.error('Layer or stage not initialized in updateCanvas')
    return
  }

  // Preload factor data if it hasn't been loaded yet
  if (allFactors.value.length === 0 && !loadingFactors.value) {
    preloadFactorsData()
  }

  // Clear existing furniture
  const existingFurniture = layer.find<Konva.Group>('.machine')
  console.log('Clearing existing furniture:', existingFurniture.length)
  existingFurniture.forEach((node) => node.destroy())

  if (machines.value.length === 0) {
    console.log('No machines to display on canvas')
    if (layer) {
      layer.batchDraw()
    }
    return
  }

  // Recreate furniture items from the reactive array
  machines.value.forEach((item, index) => {
    console.log(`Creating machine ${index}:`, item)

    const group = new Konva.Group({
      id: item.id,
      x: item.x,
      y: item.y,
      rotation: item.rotation || 0, // Ensure rotation is applied
      draggable: true,
      name: 'machine'
    })

    const rect = new Konva.Rect({
      width: item.width,
      height: item.height,
      fill: item.fill,
      stroke: '#666',
      strokeWidth: 1,
      cornerRadius: 0, // Changed from 5 to 0 for right-angled corners
      name: 'machine-rect'
    })

    const text = new Konva.Text({
      text: item.name,
      fontSize: 14,
      fontFamily: 'Arial',
      fill: '#333',
      align: 'center',
      name: 'machine-text'
    })

    text.position({
      x: (item.width - text.width()) / 2,
      y: (item.height - text.height()) / 2
    })

    // Store factor data in the group for use during dragging
    group.setAttr('factorData', {
      machineId: parseInt(item.id),
      sensitivities: machineFactorsMap.value.get(parseInt(item.id)) || []
    })

    group.add(rect)
    group.add(text)

    let lastGoodPosition: { x: number; y: number; rotation: number } = {
      x: item.x,
      y: item.y,
      rotation: item.rotation || 0 // Ensure rotation has a default
    }

    let isDragging = false

    group.on('dragstart', (e: Konva.KonvaEventObject<DragEvent>) => {
      const tr = layer?.findOne('Transformer') as Konva.Transformer | undefined
      if (tr && tr.nodes().includes(e.target as Konva.Group)) {
        e.evt.preventDefault()
        return // Explicitly return to satisfy all code paths
      }

      isDragging = true

      // Show factor-based danger zones when dragging starts
      showFactorDangerZones(group)
      return // Explicitly return
    })

    group.on('dragend', () => {
      isDragging = false

      // Clear factor-based danger zones when dragging ends
      clearFactorDangerZones()

      // Update the reactive array when dragging ends
      const index = machines.value.findIndex((i) => i.id === group.id())
      if (index !== -1) {
        machines.value[index].x = group.x()
        machines.value[index].y = group.y()

        // Also update the original machine data for saving
        machines.value[index].machineData.x = group.x()
        machines.value[index].machineData.y = group.y()
      }
    })

    group.on('dragmove', () => {
      // Get the actual rectangle bounds for boundary checking
      const actualBoxNode = group.findOne<Konva.Rect>('.machine-rect')
      if (!actualBoxNode || !stage || !layer) return
      const actualBox = actualBoxNode.getClientRect()

      // Handle object collisions with factor-based danger zones
      if (hasObjectCollisions(group)) {
        group.position(lastGoodPosition)
        group.rotation(lastGoodPosition.rotation)
      } else {
        // Handle boundaries
        if (isOutOfBounds(actualBox)) {
          // Clamp to stage boundaries
          const dx = actualBox.x - group.x()
          const dy = actualBox.y - group.y()

          let newX = group.x()
          let newY = group.y()

          if (actualBox.x < 0) newX = group.x() - actualBox.x // group.x() - (actualBox.x - dx)
          if (actualBox.y < 0) newY = group.y() - actualBox.y // group.y() - (actualBox.y - dy)
          if (actualBox.x + actualBox.width > stage.width())
            newX = stage.width() - actualBox.width - dx
          if (actualBox.y + actualBox.height > stage.height())
            newY = stage.height() - actualBox.height - dy

          group.position({ x: newX, y: newY })
        }

        // Update last good position
        lastGoodPosition = {
          x: group.x(),
          y: group.y(),
          rotation: group.rotation()
        }
      }
      if (layer) {
        layer.batchDraw() // Add null check for layer
      }
    })

    group.on('transform', () => {
      if (isDragging) return

      // Get current rotation
      const rotation = group.rotation()

      // Get bounding box
      const box = group.getClientRect()

      // Handle object collisions
      if (hasObjectCollisions(group)) {
        group.position(lastGoodPosition)
        group.rotation(lastGoodPosition.rotation)
      } else if (isOutOfBounds(box)) {
        // Restore position if rotation causes out of bounds
        group.position(lastGoodPosition)
        group.rotation(lastGoodPosition.rotation)
      } else {
        // Update last good position with current state
        lastGoodPosition = {
          x: group.x(),
          y: group.y(),
          rotation: rotation
        }

        // Store the rotation in a temporary attribute to reduce Vue reactivity updates
        // This helps prevent rerender during active transformation
        group.setAttr('pendingRotation', rotation)

        // We'll update the Vue state in transformend event for smoother operation
        // This prevents reactive updates from interrupting the drag operation
      }
    })

    // Add transformend event to ensure rotation is finalized
    group.on('transformend', () => {
      // Get the rotation, either from the pending attribute or directly from the group
      const rotation = group.getAttr('pendingRotation') || group.rotation()

      // Clear the pending attribute
      group.setAttr('pendingRotation', null)

      // Final update of the reactive array
      const index = machines.value.findIndex((i) => i.id === group.id())
      if (index !== -1) {
        // We use nextTick to defer the update until after the current render cycle
        nextTick(() => {
          machines.value[index].rotation = rotation
          machines.value[index].machineData.rotation = rotation
          console.log(`Machine ${group.id()} rotation updated to: ${rotation}`)
        })
      }
    })

    layer?.add(group) // Add null check for layer
  })

  if (layer) {
    layer.batchDraw() // Add null check for layer
  }
}

// Add grid
const addGrid = () => {
  if (!stage) return
  const gridSize = 20
  const gridColor = '#ddd'
  const gridLayer = new Konva.Layer()

  for (let i = 0; i < stage.width(); i += gridSize) {
    gridLayer.add(
      new Konva.Line({
        points: [i, 0, i, stage.height()],
        stroke: gridColor,
        strokeWidth: 0.5
      })
    )
  }

  for (let i = 0; i < stage.height(); i += gridSize) {
    gridLayer.add(
      new Konva.Line({
        points: [0, i, stage.width(), i],
        stroke: gridColor,
        strokeWidth: 0.5
      })
    )
  }

  stage.add(gridLayer)
  gridLayer.moveToBottom()
}

// Save the floor plan to the database
const save = async (): Promise<{ success: boolean; message: string }> => {
  try {
    if (!machines.value || machines.value.length === 0) {
      console.log('No machines to save')
      displayToast('No machines to save in the floor plan', 'warning')
      return { success: false, message: 'No machines to save' }
    }

    console.log('Saving floor plan with machines:', machines.value)

    // For each machine, update its position in the database
    const updatePromises = machines.value.map((machineItem) => {
      const { machineData } = machineItem // Use machineItem to avoid conflict with outer scope 'machine'

      if (!machineData || typeof machineData.id === 'undefined') {
        console.error('Invalid machine data:', machineItem)
        return Promise.resolve(null) // Skip invalid machines
      }

      console.log(`Updating machine ${machineData.id}:`, {
        x: machineItem.x,
        y: machineItem.y,
        rotation: machineItem.rotation || 0
      })

      // Create a serializable version of the machine data with only the properties we need
      // This avoids the "object could not be cloned" error by ensuring we only send serializable data
      const serializedMachineData: Partial<Machine> & {
        x: number
        y: number
        rotation: number
        color?: string
      } = {
        id: machineData.id,
        name: machineData.name,
        serialNumber: machineData.serialNumber,
        typeId: machineData.typeId,
        plantId: machineData.plantId,
        length: machineData.length,
        width: machineData.width,
        height: machineData.height,
        ownerId: machineData.ownerId,
        x: machineItem.x,
        y: machineItem.y,
        rotation: machineItem.rotation || 0,
        color: machineData.color || machineItem.fill // Preserve the color when saving
      }

      // Use the serialized data for the IPC call
      return window.electron.ipcRenderer.invoke(
        'machines:update',
        serializedMachineData.id,
        serializedMachineData
      )
    })

    const results: (Machine | null)[] = await Promise.all(updatePromises)
    console.log('Update results:', results)

    // Check if any updates failed
    const failedUpdates = results.filter((r) => r === null || (r && !r.id))
    if (failedUpdates.length > 0) {
      console.error('Some machine updates failed:', failedUpdates)

      // Show error toast
      displayToast(
        `Failed to save ${failedUpdates.length} out of ${machines.value.length} machines`,
        'error'
      )

      return {
        success: false,
        message: `Failed to save ${failedUpdates.length} out of ${machines.value.length} machines`
      }
    }

    // Show success toast
    displayToast('🎉 Floor plan saved successfully!', 'success')

    return { success: true, message: 'Floor plan saved successfully' }
  } catch (err: unknown) {
    console.error('Error saving floor plan:', err)

    // Show error toast
    displayToast(`Failed to save floor plan: ${(err as Error).message}`, 'error')

    return { success: false, message: `Failed to save floor plan: ${(err as Error).message}` }
  }
}

// Function to add a new machine item (not used directly in the floorplan but exposed for parent)
const addMachineItem = (machine: Machine) => {
  // Create a new item from the machine data
  const newItem: FloorPlanMachine = {
    id: machine.id.toString(),
    x: machine.x || 100,
    y: machine.y || 100,
    width: machine.width / 5,
    height: machine.length / 5,
    fill: machine.color || getColorForMachineType(), // Removed argument
    name: machine.name,
    hasForbiddenZone: true,
    forbiddenRadius: 20,
    rotation: machine.rotation || 0, // Ensure rotation is included
    machineData: machine,
    factorZones: [],
    factorSensitivities: machineFactorsMap.value.get(machine.id) || []
  }

  machines.value.push(newItem)
  // Canvas will update automatically due to the watcher
}

// Function to remove a machine item
const removeMachineItem = (id: number | string) => {
  const index = machines.value.findIndex((item) => item.id === id.toString())
  if (index !== -1) {
    machines.value.splice(index, 1)
    // Canvas will update automatically due to the watcher
  }
}

// Function to update a machine item
const updateMachineItem = (id: number | string, updatedProps: Partial<FloorPlanMachine>) => {
  const index = machines.value.findIndex((item) => item.id === id.toString())
  if (index !== -1) {
    // Update the visual properties
    machines.value[index] = {
      ...machines.value[index],
      ...updatedProps
    }

    // Also update the machine data if provided
    if (updatedProps.machineData) {
      machines.value[index].machineData = updatedProps.machineData
    }

    // Canvas will update automatically due to the watcher
  }
}

// Force canvas initialization (for debugging)
const forceCanvasInit = () => {
  console.log('Force canvas initialization called')

  try {
    // If stage already exists, destroy it first
    if (stage) {
      console.log('Destroying existing stage')
      stage.destroy()
      stage = null
    }

    // Initialize canvas directly without conditions
    console.log('Forcing canvas initialization directly')
    initCanvas()

    return true
  } catch (err: unknown) {
    console.error('Error in forceCanvasInit:', err)
    error.value = 'Error initializing canvas: ' + (err as Error).message
    return false
  }
}

// Expose these methods to parent components
defineExpose({
  machines,
  addMachineItem,
  removeMachineItem,
  updateMachineItem,
  save,
  forceCanvasInit
})
</script>

<template>
  <div class="floor-plan-container">
    <div v-if="isLoading" class="loading">Loading plant data...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="content-wrapper">
      <h3 v-if="plant">Floor Plan: {{ plant.name }}</h3>

      <!-- CSV Import Component -->
      <FloorPlanCsvImport @layout-imported="handleCsvLayout" />

      <!-- Key change: Add v-show instead of conditional rendering to ensure the div is always in the DOM -->
      <div ref="containerRef" class="floor-plan"></div>
      <div class="actions">
        <button class="save-button" @click="save">Save Floor Plan</button>
      </div>
    </div>

    <!-- Toast notification -->
    <Toast :open="showToast" :title="toastMessage" :variant="toastType" @close="closeToast" />
  </div>
</template>

<style scoped>
.floor-plan-container {
  width: 100%;
  height: calc(100vh - 120px); /* Use viewport height with space for header/footer */
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; /* Ensure padding doesn't add to total width/height */
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensure it takes full height of parent */
  overflow: hidden; /* Prevent outer container overflow */
  flex-grow: 1; /* Allow content-wrapper to grow */
}

.floor-plan {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: auto; /* Enable scrolling */
  flex-grow: 1; /* Let the floor plan expand to fill available space */
  width: 100%; /* Take full width */
  /* display: block; // Not strictly necessary with flex-grow */
  position: relative; /* For Konva positioning or absolute children */
  background-color: #f9f9f9;
  min-height: 400px; /* Adjusted minimum height */
  box-sizing: border-box; /* Ensure padding/border don't add to dimensions */
}

/* Add scrollbar styling for better visibility */
.floor-plan::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.floor-plan::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.floor-plan::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.floor-plan::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.loading,
.error {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.error {
  color: #e53935;
}

.actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.save-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.save-button:hover {
  background-color: #388e3c;
}
</style>
