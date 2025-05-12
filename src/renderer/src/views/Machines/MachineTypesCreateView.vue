<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Create Machine Type</h1>
      <Button @click="$router.push('/machine-types')">Back to Machine Types</Button>
    </div>

    <form class="max-w-lg space-y-4" @submit.prevent="createMachineType">
      <div>
        <Label for="name">Name</Label>
        <Input id="name" v-model="form.name" required />
      </div>

      <div>
        <Label for="description">Description</Label>
        <Input id="description" v-model="form.description" />
      </div>

      <Button type="submit" :disabled="loading">
        {{ loading ? 'Creating...' : 'Create Machine Type' }}
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'

const router = useRouter()
const loading = ref(false)
const form = ref({
  name: '',
  description: ''
})

async function createMachineType() {
  loading.value = true
  try {
    // Ensure data is serializable by using JSON.stringify/parse
    const serializedData = JSON.parse(JSON.stringify(form.value))
    await window.electron.ipcRenderer.invoke('machine-types:create', serializedData)
    router.push('/machine-types')
  } catch (error) {
    console.error('Failed to create machine type:', error)
    alert('Failed to create machine type.')
  } finally {
    loading.value = false
  }
}
</script>
