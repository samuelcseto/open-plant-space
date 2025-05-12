<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Machines</h1>
      <div class="flex gap-2">
        <Button @click="$router.push('/machine-types')">Manage Machine Types</Button>
        <Button @click="$router.push('/machines/create')">Create Machine</Button>
      </div>
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
      <span>Admin view: Showing all machines in the system, including those you don't own</span>
    </div>

    <div v-if="loading" class="flex justify-center p-8">Loading...</div>
    <TableEmpty v-else-if="!machines?.length" class="mt-4">
      No machines found. Create your first machine to get started.
    </TableEmpty>
    <Table v-else>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Serial Number</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Dimensions</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Rotation</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="machine in machines" :key="machine.id">
          <TableCell class="font-medium">{{ machine.name }}</TableCell>
          <TableCell>{{ machine.serialNumber }}</TableCell>
          <TableCell>{{ machine.type.name }}</TableCell>
          <TableCell>{{ machine.width }} x {{ machine.length }} x {{ machine.height }}</TableCell>
          <TableCell>
            <span v-if="machine.plantId && machine.plant">
              {{ machine.plant.name }} ({{ machine.x }}, {{ machine.y }}, {{ machine.z }})
            </span>
            <span v-else class="text-gray-500">Not assigned</span>
          </TableCell>
          <TableCell>
            <span v-if="machine.rotation !== null && machine.rotation !== undefined">
              {{ Math.round(machine.rotation) }}°
            </span>
            <span v-else class="text-gray-500">0°</span>
          </TableCell>
          <TableCell>
            <div class="flex gap-2">
              <Button size="sm" @click="$router.push(`/machines/edit/${machine.id}`)">Edit</Button>
              <Button size="sm" variant="destructive" @click="deleteMachine(machine.id)"
                >Delete</Button
              >
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

interface MachineType {
  id: number
  name: string
}

interface Plant {
  id: number
  name: string
}

interface Machine {
  id: number
  name: string
  serialNumber: string
  type: MachineType
  width: number
  length: number
  height: number
  plantId: number | null
  plant?: Plant
  x: number | null
  y: number | null
  z: number | null
  rotation: number | null
}

const authStore = useAuthStore()
const loading = ref(true)
const machines = ref<Machine[]>([])

onMounted(async () => {
  await loadMachines()
})

async function loadMachines() {
  loading.value = true
  try {
    const response = await window.electron.ipcRenderer.invoke('machines:list')
    machines.value = response
  } catch (error: unknown) {
    console.error('Failed to load machines:', error)
  } finally {
    loading.value = false
  }
}

async function deleteMachine(id: number) {
  if (!confirm('Are you sure you want to delete this machine?')) return

  try {
    // Convert ID to a number and pass it directly (primitive values don't need JSON serialization)
    const machineId = Number(id)
    await window.electron.ipcRenderer.invoke('machines:delete', machineId)
    await loadMachines()
  } catch (error: unknown) {
    console.error('Failed to delete machine:', error)
  }
}
</script>
