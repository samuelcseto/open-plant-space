<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">External Factors Management</h1>
      <Button @click="$router.push('/external-factors/create')">Add New Factor</Button>
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
        <span class="text-gray-600">Loading external factors...</span>
      </div>
    </div>

    <div
      v-else-if="error"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
    >
      {{ error }}
    </div>

    <TableEmpty v-else-if="factors.length === 0" class="mt-4">
      No external factors found. Create your first factor to get started.
    </TableEmpty>

    <Table v-else>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="factor in factors" :key="factor.id">
          <TableCell class="font-medium">{{ factor.name }}</TableCell>
          <TableCell>{{ factor.description || 'No description' }}</TableCell>
          <TableCell>
            <div class="flex gap-2">
              <Button size="sm" @click="$router.push(`/external-factors/edit/${factor.id}`)">
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                :disabled="
                  factor._count && (factor._count.producers > 0 || factor._count.sensitives > 0)
                "
                @click="confirmDelete(factor)"
              >
                Delete
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <!-- Confirmation Dialog -->
    <Dialog :open="showDeleteDialog" @update:open="showDeleteDialog = $event">
      <DialogContent class="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete External Factor</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the external factor "{{ factorToDelete?.name }}"? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div class="flex justify-end gap-3">
          <Button variant="outline" @click="showDeleteDialog = false">Cancel</Button>
          <Button variant="destructive" @click="deleteExternalFactor">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@renderer/components/ui/dialog'
import { Button } from '@renderer/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableEmpty
} from '@renderer/components/ui/table'

interface ExternalFactor {
  id: number
  name: string
  description?: string
  createdAt: string
  updatedAt: string
  _count?: {
    producers: number
    sensitives: number
  }
}

const factors = ref<ExternalFactor[]>([])
const loading = ref(true)
const error = ref('')
const showDeleteDialog = ref(false)
const factorToDelete = ref<ExternalFactor | null>(null)

onMounted(async () => {
  await fetchFactors()
})

async function fetchFactors() {
  loading.value = true
  error.value = ''

  try {
    factors.value = await window.api.getExternalFactors()
  } catch (err: unknown) {
    console.error('Failed to load external factors', err)
    error.value = err instanceof Error ? err.message : 'Failed to load external factors'
  } finally {
    loading.value = false
  }
}

function confirmDelete(factor: ExternalFactor) {
  // Don't allow delete if the factor is being used
  if (factor._count && (factor._count.producers > 0 || factor._count.sensitives > 0)) {
    return
  }

  factorToDelete.value = factor
  showDeleteDialog.value = true
}

async function deleteExternalFactor() {
  if (!factorToDelete.value) return

  try {
    await window.api.deleteExternalFactor(factorToDelete.value.id)
    await fetchFactors()
    showDeleteDialog.value = false
    factorToDelete.value = null
  } catch (err: unknown) {
    console.error('Failed to delete factor', err)
    error.value = err instanceof Error ? err.message : 'Failed to delete external factor'
  }
}
</script>
