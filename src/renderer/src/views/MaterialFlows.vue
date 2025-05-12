<template>
  <div class="container py-4">
    <div class="flex flex-col gap-3">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Material Flows</h1>
        <div class="flex items-center gap-2">
          <label for="plant-select" class="text-sm font-medium">Select Plant:</label>
          <select
            id="plant-select"
            v-model="selectedPlantId"
            class="h-9 rounded-md border border-input bg-background px-3 text-sm"
            @change="loadPlantMachines"
          >
            <option v-if="plants.length === 0" value="">No plants available</option>
            <option v-for="plant in plants" :key="plant.id" :value="plant.id">
              {{ plant.name }}
            </option>
          </select>
        </div>
      </div>

      <Separator />

      <div v-if="loading" class="flex justify-center p-8">
        <div class="flex flex-col items-center">
          <svg
            class="animate-spin h-8 w-8 text-blue-600 mb-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-gray-600">Loading...</span>
        </div>
      </div>

      <div v-else-if="!selectedPlantId" class="text-center py-8 bg-gray-50 rounded-md">
        Please select a plant to view and edit material flows.
      </div>

      <div v-else-if="machines.length === 0" class="text-center py-8 bg-gray-50 rounded-md">
        No machines found in this plant. Add machines to the plant first.
      </div>

      <div v-else class="flex flex-col gap-2 w-full bg-white p-4 rounded-md shadow-sm">
        <!-- Header row with machine names -->
        <div class="flex flex-row gap-2">
          <div class="flex flex-col flex-grow w-28 min-w-28">
            <div class="invisible">-</div>
            <div class="flex flex-col flex-grow justify-center font-medium">FROM / TO</div>
          </div>
          <div v-for="machine in machines" :key="`header-${machine.id}`" class="flex-grow">
            <div class="font-medium text-center">{{ machine.name }}</div>
          </div>
        </div>

        <!-- Matrix rows for each machine -->
        <div
          v-for="fromMachine in machines"
          :key="`row-${fromMachine.id}`"
          class="flex flex-row gap-2"
        >
          <div class="self-center flex-grow font-medium w-28 min-w-28">{{ fromMachine.name }}</div>
          <div
            v-for="toMachine in machines"
            :key="`cell-${fromMachine.id}-${toMachine.id}`"
            class="flex-grow"
          >
            <input
              :disabled="fromMachine.id === toMachine.id"
              :value="getFlowValue(fromMachine.id, toMachine.id)"
              type="number"
              min="0"
              class="w-full h-9 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              :placeholder="fromMachine.id === toMachine.id ? '-' : '0'"
              @input="updateFlowValue(fromMachine.id, toMachine.id, $event)"
              @focus="
                (event) => {
                  const target = event.target as HTMLInputElement
                  if (target) target.select()
                }
              "
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end mt-4 gap-2">
        <Button
          variant="outline"
          :disabled="loading || !selectedPlantId || machines.length === 0"
          @click="exportToCSV"
        >
          Export to CSV
        </Button>
        <Button :disabled="loading || !selectedPlantId || machines.length === 0" @click="saveFlows">
          {{ saving ? 'Saving...' : 'Save Material Flows' }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { Button } from '@renderer/components/ui/button'
import { Separator } from '@renderer/components/ui/separator'
import { debounce } from '@renderer/lib/utils'

interface Plant {
  id: number
  name: string
  // Add other relevant plant properties if needed
}

interface Machine {
  id: number
  name: string
  plantId: number
}

// State
const plants = ref<Plant[]>([]) // Changed from any[] to Plant[]
const machines = ref<Machine[]>([])
const selectedPlantId = ref<number | null>(null)
const loading = ref(false)
const saving = ref(false)
const flowMatrix = reactive<Record<number, Record<number, number>>>({})

// Create a debounced update function to prevent excessive re-renders
const debouncedUpdate = debounce((fromId: number, toId: number, value: number) => {
  if (!flowMatrix[fromId]) {
    flowMatrix[fromId] = {}
  }
  flowMatrix[fromId][toId] = value
}, 50)

// Load all plants on component mount
onMounted(async () => {
  try {
    loading.value = true
    const plantsData = await window.electron.ipcRenderer.invoke('plants:list')
    plants.value = plantsData

    // Check if plantId is provided in the URL query parameters
    const urlParams = new URLSearchParams(window.location.search)
    const urlPlantId = urlParams.get('plantId')

    if (urlPlantId) {
      // If plantId is in URL, select that plant
      selectedPlantId.value = Number(urlPlantId)
    } else if (plants.value.length > 0) {
      // Otherwise, select the first plant by default
      selectedPlantId.value = plants.value[0].id
    }

    if (selectedPlantId.value) {
      await loadPlantMachines()
    }
  } catch (error) {
    console.error('Failed to load plants:', error)
    alert('Error loading plants')
  } finally {
    loading.value = false
  }
})

// Load machines for the selected plant and existing flow data
async function loadPlantMachines() {
  if (!selectedPlantId.value) return

  try {
    loading.value = true

    // Load machines in the selected plant
    const machinesData = await window.electron.ipcRenderer.invoke('machines:list')
    // Filter only machines in the current plant
    machines.value = machinesData.filter((m) => m.plantId === selectedPlantId.value)

    // Initialize flow matrix with zeros
    resetFlowMatrix()

    // Load existing material flows
    const flows = await window.electron.ipcRenderer.invoke(
      'material-flows:list-for-plant',
      selectedPlantId.value
    )

    // Populate the flow matrix with existing data
    flows.forEach((flow) => {
      if (!flowMatrix[flow.fromMachineId]) {
        flowMatrix[flow.fromMachineId] = {}
      }
      flowMatrix[flow.fromMachineId][flow.toMachineId] = flow.flowAmount
    })
  } catch (error) {
    console.error('Failed to load machines or flows:', error)
    alert('Error loading data')
  } finally {
    loading.value = false
  }
}

// Reset the flow matrix to prepare for new data
function resetFlowMatrix() {
  // Clear the current matrix
  Object.keys(flowMatrix).forEach((key) => delete flowMatrix[key])

  // Initialize with zero values for all machine combinations
  machines.value.forEach((fromMachine) => {
    flowMatrix[fromMachine.id] = {}
    machines.value.forEach((toMachine) => {
      // Initialize to 0 except for self-references (diagonals)
      if (fromMachine.id !== toMachine.id) {
        flowMatrix[fromMachine.id][toMachine.id] = 0
      }
    })
  })
}

// Save the material flows
async function saveFlows() {
  if (!selectedPlantId.value || machines.value.length === 0) return

  try {
    saving.value = true

    // Convert matrix to array of flow objects
    const flows: Array<{ fromMachineId: number; toMachineId: number; flowAmount: number }> = []

    machines.value.forEach((fromMachine) => {
      machines.value.forEach((toMachine) => {
        // Skip self-references
        if (fromMachine.id === toMachine.id) return

        const amount = flowMatrix[fromMachine.id]?.[toMachine.id] || 0
        flows.push({
          fromMachineId: fromMachine.id,
          toMachineId: toMachine.id,
          flowAmount: amount
        })
      })
    })

    await window.electron.ipcRenderer.invoke('material-flows:save-batch', {
      plantId: selectedPlantId.value,
      flows
    })

    alert('Material flows saved successfully')
  } catch (error) {
    console.error('Failed to save material flows:', error)
    alert('Error saving material flows')
  } finally {
    saving.value = false
  }
}

// Get flow value for a specific machine combination
function getFlowValue(fromMachineId: number, toMachineId: number): number {
  if (fromMachineId === toMachineId) return 0
  return flowMatrix[fromMachineId]?.[toMachineId] || 0
}

// Update flow value for a specific machine combination
function updateFlowValue(fromMachineId: number, toMachineId: number, event: Event) {
  const input = event.target as HTMLInputElement
  const value = parseInt(input.value, 10) || 0

  // Skip if same machine or value hasn't changed
  if (fromMachineId === toMachineId) return

  // Ensure the fromMachine entry exists
  if (!flowMatrix[fromMachineId]) {
    flowMatrix[fromMachineId] = {}
  }

  // Only update if value actually changed
  if (flowMatrix[fromMachineId][toMachineId] !== value) {
    debouncedUpdate(fromMachineId, toMachineId, value)
  }
}

// Export material flows to CSV
async function exportToCSV() {
  if (!selectedPlantId.value || machines.value.length === 0) return

  try {
    // Get the selected plant name to use in the filename
    const selectedPlant = plants.value.find((p) => p.id === selectedPlantId.value)
    const plantName = selectedPlant?.name || 'plant'

    // Build CSV content
    let csvContent = 'From\\To;'

    // Add header row with machine IDs
    machines.value.forEach((machine, index) => {
      csvContent += machine.id // Use machine ID instead of name
      if (index < machines.value.length - 1) {
        csvContent += ';'
      }
    })
    csvContent += '\n'

    // Add data rows
    machines.value.forEach((fromMachine) => {
      // Add row machine ID
      csvContent += fromMachine.id + ';' // Use machine ID instead of name

      // Add flow values for each destination machine
      machines.value.forEach((toMachine, index) => {
        if (fromMachine.id === toMachine.id) {
          // Empty cell for diagonal (same machine)
          csvContent += ''
        } else {
          // Get flow value or empty string if 0
          const flowValue = flowMatrix[fromMachine.id]?.[toMachine.id] || 0
          csvContent += flowValue > 0 ? flowValue : ''
        }

        // Add semicolon separator except for the last column
        if (index < machines.value.length - 1) {
          csvContent += ';'
        }
      })
      csvContent += '\n'
    })

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob)

    // Create a temporary link element to trigger the download
    const link = document.createElement('a')
    link.href = url
    link.setAttribute(
      'download',
      `material_flows_${plantName}_${new Date().toISOString().slice(0, 10)}.csv`
    )
    link.style.visibility = 'hidden'

    // Add the link to the DOM
    document.body.appendChild(link)

    // Trigger the download
    link.click()

    // Clean up
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Failed to export material flows to CSV:', error)
    alert('Error exporting material flows to CSV')
  }
}
</script>

<style scoped></style>
