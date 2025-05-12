<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Machine Types</h1>
      <div class="flex gap-2">
        <Button @click="$router.push('/machines')">Back to Machines</Button>
        <Button @click="$router.push('/machine-types/create')">Create Machine Type</Button>
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
      <span
        >Admin view: You can manage all machine types, including those created by other users</span
      >
    </div>

    <div v-if="loading" class="flex justify-center p-8">Loading...</div>
    <TableEmpty v-else-if="!machineTypes?.length" class="mt-4">
      No machine types found. Create your first machine type to get started.
    </TableEmpty>
    <Table v-else>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="type in machineTypes" :key="type.id">
          <TableCell class="font-medium">{{ type.name }}</TableCell>
          <TableCell>{{ type.description || '-' }}</TableCell>
          <TableCell>{{ new Date(type.createdAt).toLocaleDateString() }}</TableCell>
          <TableCell>
            <div class="flex gap-2">
              <Button
                size="sm"
                variant="destructive"
                :disabled="type._count?.machines && type._count.machines > 0"
                @click="deleteMachineType(type.id)"
              >
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

interface MachineType {
  id: number
  name: string
  description: string | null
  createdAt: string
  _count?: {
    machines: number
  }
}

const authStore = useAuthStore()
const loading = ref(true)
const machineTypes = ref<MachineType[]>([])

onMounted(async () => {
  await loadMachineTypes()
})

async function loadMachineTypes() {
  loading.value = true
  try {
    const response = await window.electron.ipcRenderer.invoke('machine-types:list')
    machineTypes.value = response
  } catch (error: unknown) {
    console.error('Failed to load machine types:', error)
  } finally {
    loading.value = false
  }
}

async function deleteMachineType(id: number) {
  if (!confirm('Are you sure you want to delete this machine type?')) return

  try {
    // Convert ID to a number
    const typeId = Number(id)
    await window.electron.ipcRenderer.invoke('machine-types:delete', typeId)
    await loadMachineTypes()
  } catch (error: unknown) {
    console.error('Failed to delete machine type:', error)
  }
}
</script>
