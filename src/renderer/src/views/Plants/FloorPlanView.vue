<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FloorPlan from '@renderer/components/FloorPlan.vue'

interface Plant {
  id: number
  name: string
  description: string | null
  width: number
  length: number
  height: number
}

const route = useRoute()
const router = useRouter()
const plantId = ref<number | null>(null)
const allPlants = ref<Plant[]>([])
const isLoading = ref(true)
const floorPlanRef = ref<InstanceType<typeof FloorPlan> | null>(null)
const message = ref('')
const messageType = ref<'success' | 'error' | 'info'>('info')

// Load all plants a user has access to
const loadPlants = async () => {
  try {
    isLoading.value = true
    const plants = await window.electron.ipcRenderer.invoke('plants:list')
    allPlants.value = plants

    // If plantId is not set in route params, use the first plant
    if (!plantId.value && plants.length > 0) {
      plantId.value = plants[0].id
    }

    isLoading.value = false
  } catch (error: unknown) {
    console.error('Error loading plants:', error)
    isLoading.value = false
  }
}

// Change the selected plant
const changePlant = (id: number | null) => {
  if (id !== null) {
    plantId.value = Number(id)
  }
}

// Save the floor plan
const saveFloorPlan = async () => {
  if (!floorPlanRef.value) {
    showMessage('FloorPlan component reference not available', 'error')
    return
  }

  try {
    const result = await floorPlanRef.value.save()

    if (result.success) {
      showMessage('Floor plan saved successfully!', 'success')
    } else {
      showMessage(result.message || 'Failed to save floor plan', 'error')
    }
  } catch (error: unknown) {
    console.error('Error saving floor plan:', error)
    showMessage('An error occurred while saving the floor plan', 'error')
  }
}

// Force initialize the canvas (for debugging)
const forceInitCanvas = () => {
  if (!floorPlanRef.value) {
    showMessage('FloorPlan component reference not available', 'error')
    return
  }

  try {
    // Call a direct initialization method on the FloorPlan component
    floorPlanRef.value.forceCanvasInit()
    showMessage('Canvas initialization forced', 'info')
  } catch (error: unknown) {
    console.error('Error forcing canvas initialization:', error)
    showMessage(
      `Failed to initialize canvas: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'error'
    )
  }
}

// Show a temporary message
const showMessage = (text: string, type: 'success' | 'error' | 'info' = 'info') => {
  message.value = text
  messageType.value = type

  // Clear the message after a few seconds
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

onMounted(async () => {
  // Check if plantId was provided in the route
  if (route.params.id) {
    plantId.value = Number(route.params.id)
  }

  await loadPlants()
})
</script>

<template>
  <div class="floor-plan-view">
    <div class="header">
      <h1>Plant Floor Plan</h1>

      <div v-if="message" :class="['message', messageType]">
        {{ message }}
      </div>

      <div class="controls">
        <label for="plant-select">Select Plant:</label>
        <select
          id="plant-select"
          v-model="plantId"
          :disabled="isLoading"
          @change="changePlant(plantId)"
        >
          <option v-if="isLoading" value="">Loading plants...</option>
          <option v-else-if="allPlants.length === 0" value="">No plants available</option>
          <option v-for="plant in allPlants" :key="plant.id" :value="plant.id">
            {{ plant.name }}
          </option>
        </select>

        <button :disabled="isLoading || !plantId" class="save-button" @click="saveFloorPlan">
          Save Floor Plan
        </button>
      </div>
    </div>

    <div v-if="isLoading" class="loading">Loading plants...</div>
    <div v-else-if="allPlants.length === 0" class="empty-state">
      <p>You don't have any plants yet. Create a plant first to design its floor plan.</p>
      <button class="action-button" @click="router.push('/plants/create')">Create Plant</button>
    </div>
    <div v-else-if="!plantId" class="empty-state">
      <p>Please select a plant to view its floor plan.</p>
    </div>
    <div v-else class="floor-plan-container">
      <FloorPlan ref="floorPlanRef" :plant-id="plantId" />
      <div class="debug-actions">
        <button class="action-button debug-button" @click="forceInitCanvas">
          Force Initialize Canvas
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.floor-plan-view {
  padding: 1rem;
}

.header {
  margin-bottom: 1.5rem;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.controls label {
  font-weight: 500;
}

.controls select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  min-width: 200px;
}

.message {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-weight: 500;
}

.message.success {
  background-color: #e8f5e9;
  color: #1b5e20;
  border: 1px solid #a5d6a7;
}

.message.error {
  background-color: #ffebee;
  color: #b71c1c;
  border: 1px solid #ef9a9a;
}

.message.info {
  background-color: #e3f2fd;
  color: #0d47a1;
  border: 1px solid #90caf9;
}

.loading,
.empty-state {
  padding: 2rem;
  text-align: center;
  color: #666;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 1rem;
}

.empty-state p {
  margin-bottom: 1rem;
}

.action-button,
.save-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.action-button {
  background-color: #2196f3;
  color: white;
}

.action-button:hover {
  background-color: #1976d2;
}

.save-button {
  background-color: #4caf50;
  color: white;
}

.save-button:hover {
  background-color: #388e3c;
}

.save-button:disabled,
.action-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.floor-plan-container {
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
