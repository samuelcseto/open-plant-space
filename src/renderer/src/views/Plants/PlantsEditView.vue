<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Edit Plant</h1>
      <Button @click="$router.push('/plants')">Back to Plants</Button>
    </div>

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
        <span class="text-gray-600">Loading plant data...</span>
      </div>
    </div>

    <form v-else class="max-w-xl space-y-4" @submit.prevent="updatePlant">
      <div>
        <Label for="name">Name</Label>
        <Input id="name" v-model="form.name" required />
      </div>

      <div>
        <Label for="description">
          Description <span class="text-gray-400 text-sm font-normal">(optional)</span>
        </Label>
        <Input id="description" v-model="form.description" placeholder="Enter plant description" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label for="width">Width (cm)</Label>
          <Input id="width" v-model.number="form.width" type="number" required min="1" />
        </div>
        <div>
          <Label for="length">Length (cm)</Label>
          <Input id="length" v-model.number="form.length" type="number" required min="1" />
        </div>
        <div>
          <Label for="height">Height (cm)</Label>
          <Input id="height" v-model.number="form.height" type="number" required min="1" />
        </div>
      </div>

      <Button type="submit" :disabled="saving">
        {{ saving ? 'Saving...' : 'Save Changes' }}
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'

const router = useRouter()
const route = useRoute()
const plantId = Number(route.params.id)

const loading = ref(true)
const saving = ref(false)

const form = ref({
  name: '',
  description: '',
  width: 0,
  length: 0,
  height: 0
})

onMounted(async () => {
  try {
    const plant = await window.electron.ipcRenderer.invoke('plants:get', plantId)

    // Check if we got a successful response with plant data
    if (!plant) {
      throw new Error('Failed to load plant data')
    }

    // Populate form with plant data
    form.value = {
      name: plant.name,
      description: plant.description,
      width: plant.width,
      length: plant.length,
      height: plant.height
    }
  } catch (error: unknown) {
    console.error('Failed to load plant data:', error)
    alert('Error loading plant data')
    router.push('/plants')
  } finally {
    loading.value = false
  }
})

async function updatePlant() {
  saving.value = true
  try {
    const plantData = {
      name: form.value.name,
      description: form.value.description,
      width: Number(form.value.width),
      length: Number(form.value.length),
      height: Number(form.value.height)
    }

    // Ensure data is serializable by using JSON.stringify/parse
    const serializedData = JSON.parse(JSON.stringify(plantData))
    await window.electron.ipcRenderer.invoke('plants:update', plantId, serializedData)
    router.push('/plants')
  } catch (error: unknown) {
    console.error('Failed to update plant:', error)
    alert('Failed to update plant.')
  } finally {
    saving.value = false
  }
}
</script>
