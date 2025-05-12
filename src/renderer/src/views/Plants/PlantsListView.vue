<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Plants</h1>
      <Button @click="$router.push('/plants/create')">Create Plant</Button>
    </div>

    <!-- Admin notice banner -->
    <div
      v-if="authStore.isAdmin"
      class="mb-4 p-2 bg-purple-50 border border-purple-200 text-purple-700 text-sm rounded-md flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Admin view: Showing all plants in the system, including those you don't own</span>
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
        <span class="text-gray-600">Loading plants...</span>
      </div>
    </div>

    <TableEmpty v-else-if="!plants?.length" class="mt-4">
      No plants found. Create your first plant to get started.
    </TableEmpty>

    <Table v-else>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[150px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Dimensions</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="plant in plants" :key="plant.id">
          <TableCell class="font-medium">{{ plant.name }}</TableCell>
          <TableCell>{{ plant.description }}</TableCell>
          <TableCell>{{ plant.width }} x {{ plant.length }} x {{ plant.height }} cm</TableCell>
          <TableCell>
            <div class="flex gap-2">
              <Button size="sm" @click="$router.push(`/plants/floor-plan/${plant.id}`)">
                Floor Plan
              </Button>
              <Button size="sm" variant="outline" @click="$router.push(`/plants/edit/${plant.id}`)">
                Edit
              </Button>
              <Button size="sm" variant="destructive" @click="deletePlant(plant.id)">
                Delete
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableEmpty
} from '@renderer/components/ui/table'
import { Button } from '@renderer/components/ui/button'
import { useAuthStore } from '@renderer/stores/auth'

interface Plant {
  id: number
  name: string
  description: string | null
  width: number
  length: number
  height: number
}

const authStore = useAuthStore()
const loading = ref(true)
const plants = ref<Plant[]>([])

onMounted(async () => {
  await loadPlants()
})

async function loadPlants() {
  loading.value = true
  try {
    const response = await window.electron.ipcRenderer.invoke('plants:list')
    plants.value = response
  } catch (error: unknown) {
    console.error('Failed to load plants:', error)
  } finally {
    loading.value = false
  }
}

async function deletePlant(id: number) {
  if (!confirm('Are you sure you want to delete this plant?')) return

  try {
    const plantId = Number(id)
    await window.electron.ipcRenderer.invoke('plants:delete', plantId)
    await loadPlants()
  } catch (error: unknown) {
    console.error('Failed to delete plant:', error)
  }
}
</script>
