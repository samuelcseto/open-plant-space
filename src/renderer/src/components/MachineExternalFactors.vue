<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-bold">External Factors</h2>
      <Button v-if="!showAddFactorForm" variant="outline" size="sm" @click="toggleAddFactorForm">
        Add Factor
      </Button>
    </div>

    <!-- Add Factor Form -->
    <div v-if="showAddFactorForm" class="bg-gray-50 p-4 rounded-md border">
      <h3 class="text-md font-medium mb-3">Associate a new external factor</h3>

      <div class="mb-4">
        <Label for="factorId">Select Factor</Label>
        <select
          id="factorId"
          v-model="factorForm.factorId"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          required
        >
          <option value="" disabled>Select a factor</option>
          <option v-for="factor in availableFactors" :key="factor.id" :value="factor.id">
            {{ factor.name }}
          </option>
        </select>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="flex items-center space-x-2">
          <input
            id="isProducer"
            v-model="factorForm.isProducer"
            type="checkbox"
            class="h-4 w-4 rounded"
          />
          <Label for="isProducer">Machine produces this factor</Label>
        </div>
        <div class="flex items-center space-x-2">
          <input
            id="isSensitive"
            v-model="factorForm.isSensitive"
            type="checkbox"
            class="h-4 w-4 rounded"
          />
          <Label for="isSensitive">Machine is sensitive to this factor</Label>
        </div>
      </div>

      <div class="mb-4">
        <Label for="intensity">Intensity (1-10)</Label>
        <Input
          id="intensity"
          v-model.number="factorForm.intensity"
          type="number"
          min="1"
          max="10"
          step="1"
        />
      </div>

      <div class="mb-4">
        <Label for="notes">Notes</Label>
        <textarea
          id="notes"
          v-model="factorForm.notes"
          class="w-full border rounded-md p-2"
          rows="2"
          placeholder="Additional details about this factor relation"
        ></textarea>
      </div>

      <div class="flex space-x-3">
        <Button
          type="button"
          :disabled="isFactorFormInvalid || saving"
          @click="saveFactorAssociation"
        >
          {{ saving ? 'Saving...' : 'Save' }}
        </Button>
        <Button type="button" variant="outline" @click="toggleAddFactorForm">Cancel</Button>
      </div>
    </div>

    <!-- Factors List -->
    <div v-if="loading" class="text-center py-4">Loading factors...</div>

    <div
      v-else-if="machineFactors.length === 0 && !showAddFactorForm"
      class="text-center py-4 bg-gray-50 rounded-md"
    >
      <p class="text-gray-500">No external factors associated with this machine.</p>
      <Button variant="outline" size="sm" class="mt-2" @click="toggleAddFactorForm">
        Add a factor
      </Button>
    </div>

    <div v-else-if="machineFactors.length > 0" class="bg-white border rounded-md">
      <table class="min-w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="py-2 px-4 text-left">Factor</th>
            <th class="py-2 px-4 text-center">Type</th>
            <th class="py-2 px-4 text-center">Intensity</th>
            <th class="py-2 px-4 text-center">Notes</th>
            <th class="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="factor in machineFactors" :key="factor.factorId" class="hover:bg-gray-50">
            <td class="py-2 px-4 text-left">
              {{ getFactorName(factor.factorId) }}
            </td>
            <td class="py-2 px-4 text-center">
              <div class="flex flex-col text-xs">
                <span v-if="factor.isProducer" class="text-orange-600">Producer</span>
                <span v-if="factor.isSensitive" class="text-blue-600">Sensitive</span>
              </div>
            </td>
            <td class="py-2 px-4 text-center">
              {{ factor.intensity || 'N/A' }}
            </td>
            <td class="py-2 px-4 text-center">
              {{ factor.notes || 'N/A' }}
            </td>
            <td class="py-2 px-4 text-center">
              <button
                class="text-red-500 hover:text-red-700"
                :disabled="deleting"
                @click="removeFactorAssociation(factor.factorId)"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'

// Define props with defineProps macro - no import needed in Vue 3
const props = defineProps<{
  machineId: number
}>()

interface ExternalFactor {
  id: number
  name: string
  description?: string
}

interface MachineExternalFactor {
  machineId: number
  factorId: number
  isProducer: boolean
  isSensitive: boolean
  intensity?: number
  notes?: string
}

const loading = ref(true)
const saving = ref(false)
const deleting = ref(false)
const error = ref('')
const showAddFactorForm = ref(false)
const allFactors = ref<ExternalFactor[]>([])
const machineFactors = ref<MachineExternalFactor[]>([])

const factorForm = ref({
  factorId: '',
  isProducer: false,
  isSensitive: false,
  intensity: 5,
  notes: ''
})

const availableFactors = computed(() => {
  // Filter out factors that are already associated with this machine
  return allFactors.value.filter(
    (factor) => !machineFactors.value.some((mf) => mf.factorId === factor.id)
  )
})

const isFactorFormInvalid = computed(() => {
  return (
    !factorForm.value.factorId || (!factorForm.value.isProducer && !factorForm.value.isSensitive)
  )
})

onMounted(async () => {
  await Promise.all([fetchAllFactors(), fetchMachineFactors()])
})

watch(
  () => props.machineId,
  async () => {
    if (props.machineId) {
      await fetchMachineFactors()
    }
  }
)

async function fetchAllFactors() {
  try {
    allFactors.value = await window.api.getExternalFactors()
  } catch (err) {
    console.error('Failed to load external factors:', err)
    error.value = 'Failed to load external factors'
  }
}

async function fetchMachineFactors() {
  loading.value = true
  try {
    machineFactors.value = await window.api.getMachineFactors(props.machineId)
  } catch (err) {
    console.error('Failed to load machine factors:', err)
    error.value = 'Failed to load machine factors'
  } finally {
    loading.value = false
  }
}

function toggleAddFactorForm() {
  showAddFactorForm.value = !showAddFactorForm.value
  if (!showAddFactorForm.value) {
    // Reset form when closing
    factorForm.value = {
      factorId: '',
      isProducer: false,
      isSensitive: false,
      intensity: 5,
      notes: ''
    }
  }
}

async function saveFactorAssociation() {
  if (isFactorFormInvalid.value) return

  saving.value = true
  try {
    await window.api.associateMachineFactor({
      machineId: props.machineId,
      factorId: Number(factorForm.value.factorId),
      isProducer: factorForm.value.isProducer,
      isSensitive: factorForm.value.isSensitive,
      intensity: factorForm.value.intensity,
      notes: factorForm.value.notes
    })

    await fetchMachineFactors()
    toggleAddFactorForm()
  } catch (err) {
    console.error('Failed to associate factor with machine:', err)
    error.value = 'Failed to associate factor with machine'
  } finally {
    saving.value = false
  }
}

async function removeFactorAssociation(factorId: number) {
  if (!confirm('Are you sure you want to remove this factor association?')) return

  deleting.value = true
  try {
    await window.api.removeMachineFactor(props.machineId, factorId)
    await fetchMachineFactors()
  } catch (err) {
    console.error('Failed to remove factor from machine:', err)
    error.value = 'Failed to remove factor from machine'
  } finally {
    deleting.value = false
  }
}

function getFactorName(factorId: number): string {
  const factor = allFactors.value.find((f) => f.id === factorId)
  return factor ? factor.name : 'Unknown Factor'
}
</script>
