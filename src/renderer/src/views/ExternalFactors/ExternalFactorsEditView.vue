<template>
  <div class="container mx-auto p-4">
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Edit External Factor</h1>
      <p>Update the details of an existing external factor.</p>
    </div>

    <div v-if="loading" class="text-center py-8">
      <div class="text-lg">Loading...</div>
    </div>

    <div
      v-else-if="error"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
    >
      {{ error }}
    </div>

    <div v-else class="bg-white p-6 rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <Label for="name" class="block mb-2">Name</Label>
          <Input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full"
            placeholder="e.g. Vibration, Sound, Heat, etc."
          />
        </div>

        <div class="mb-6">
          <Label for="description" class="block mb-2">Description</Label>
          <textarea
            id="description"
            v-model="formData.description"
            class="w-full border rounded-md p-2"
            rows="4"
            placeholder="Detailed description of this external factor"
          ></textarea>
        </div>

        <div class="flex gap-4">
          <Button type="submit" :disabled="saving">
            {{ saving ? 'Saving...' : 'Save Changes' }}
          </Button>
          <Button type="button" variant="outline" @click="goBack">Cancel</Button>
        </div>
      </form>
    </div>
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
const factorId = Number(route.params.id)

const loading = ref(true)
const saving = ref(false)
const error = ref('')

const formData = ref({
  name: '',
  description: ''
})

onMounted(async () => {
  await fetchFactor()
})

async function fetchFactor() {
  loading.value = true
  error.value = ''

  try {
    const factors = await window.api.getExternalFactors()
    const factor = factors.find((f) => f.id === factorId)

    if (!factor) {
      throw new Error('External factor not found')
    }

    formData.value = {
      name: factor.name,
      description: factor.description || ''
    }
  } catch (err: unknown) {
    console.error('Failed to load external factor:', err)
    error.value = err instanceof Error ? err.message : 'Failed to load external factor'
  } finally {
    loading.value = false
  }
}

async function handleSubmit() {
  saving.value = true
  error.value = ''

  try {
    if (!formData.value.name.trim()) {
      throw new Error('Factor name is required')
    }

    await window.api.updateExternalFactor(factorId, {
      name: formData.value.name.trim(),
      description: formData.value.description.trim() || undefined
    })

    router.push('/external-factors')
  } catch (err: unknown) {
    console.error('Failed to update external factor:', err)
    error.value = err instanceof Error ? err.message : 'Failed to update external factor'
  } finally {
    saving.value = false
  }
}

function goBack() {
  router.push('/external-factors')
}
</script>
