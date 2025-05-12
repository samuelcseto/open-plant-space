<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Create Plant</h1>
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
        <span class="text-gray-600">Creating plant...</span>
      </div>
    </div>

    <form class="max-w-xl space-y-4" @submit.prevent="createPlant">
      <div>
        <Label for="name">Name</Label>
        <Input id="name" v-model="name" required />
      </div>
      <div>
        <Label for="description">
          Description <span class="text-gray-400 text-sm font-normal">(optional)</span>
        </Label>
        <Input id="description" v-model="description" placeholder="Enter plant description" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label for="width">Width (cm)</Label>
          <Input id="width" v-model.number="width" type="number" required min="1" />
        </div>
        <div>
          <Label for="length">Length (cm)</Label>
          <Input id="length" v-model.number="length" type="number" required min="1" />
        </div>
        <div>
          <Label for="height">Height (cm)</Label>
          <Input id="height" v-model.number="height" type="number" required min="1" />
        </div>
      </div>

      <Button type="submit" :disabled="loading">
        {{ loading ? 'Creating...' : 'Create Plant' }}
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const router = useRouter()

const name = ref('')
const description = ref('')
const width = ref(100)
const length = ref(100)
const height = ref(100)

const createPlant = async () => {
  loading.value = true

  try {
    const plantData = {
      name: name.value,
      description: description.value,
      width: Number(width.value),
      length: Number(length.value),
      height: Number(height.value)
    }

    // Ensure data is serializable by using JSON.stringify/parse
    const serializedData = JSON.parse(JSON.stringify(plantData))
    await window.electron.ipcRenderer.invoke('plants:create', serializedData)
    router.push('/plants')
  } catch (error: unknown) {
    console.error('Failed to create plant:', error)
    alert('Failed to create plant.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
