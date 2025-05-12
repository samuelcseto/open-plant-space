<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Edit Machine</h1>
      <Button @click="$router.push('/machines')">Back to Machines</Button>
    </div>

    <div v-if="loading" class="flex justify-center p-8">Loading...</div>
    <div v-else>
      <form class="max-w-xl space-y-4" @submit.prevent="updateMachine">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label for="name">Name</Label>
            <Input id="name" v-model="form.name" required />
          </div>
          <div>
            <Label for="serialNumber">Serial Number</Label>
            <Input id="serialNumber" v-model="form.serialNumber" required />
          </div>
        </div>

        <div>
          <Label for="typeId">Machine Type</Label>
          <select
            id="typeId"
            v-model="form.typeId"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            required
          >
            <option value="" disabled>Select a machine type</option>
            <option v-for="type in machineTypes" :key="type.id" :value="type.id">
              {{ type.name }}
            </option>
          </select>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label for="length">Length (cm)</Label>
            <Input id="length" v-model.number="form.length" type="number" required min="1" />
          </div>
          <div>
            <Label for="width">Width (cm)</Label>
            <Input id="width" v-model.number="form.width" type="number" required min="1" />
          </div>
          <div>
            <Label for="height">Height (cm)</Label>
            <Input id="height" v-model.number="form.height" type="number" required min="1" />
          </div>
        </div>

        <div>
          <Label for="plantId">Assign to Plant (Optional)</Label>
          <select
            id="plantId"
            v-model="form.plantId"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option :value="null">Not assigned</option>
            <option v-for="plant in plants" :key="plant.id" :value="plant.id">
              {{ plant.name }}
            </option>
          </select>
        </div>

        <div v-if="form.plantId" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label for="x">X Coordinate</Label>
            <Input id="x" v-model.number="form.x" type="number" readonly disabled />
            <p class="text-xs text-gray-500 mt-1">Use Floor Plan to adjust location</p>
          </div>
          <div>
            <Label for="y">Y Coordinate</Label>
            <Input id="y" v-model.number="form.y" type="number" readonly disabled />
          </div>
          <div>
            <Label for="z">Z Coordinate</Label>
            <Input id="z" v-model.number="form.z" type="number" readonly disabled />
          </div>
        </div>

        <div v-if="form.plantId" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label for="rotation">Rotation (degrees)</Label>
            <Input
              id="rotation"
              v-model.number="form.rotation"
              type="number"
              min="0"
              max="360"
              step="1"
              readonly
              disabled
            />
            <p class="text-xs text-gray-500 mt-1">Use Floor Plan to adjust rotation</p>
          </div>
          <div class="flex items-end">
            <div class="relative w-12 h-12 border border-gray-300 rounded-md overflow-hidden">
              <div
                class="absolute w-full h-1 bg-blue-500 top-1/2 left-0 origin-center"
                :style="{ transform: `translateY(-50%) rotate(${form.rotation || 0}deg)` }"
              ></div>
            </div>
          </div>
        </div>

        <div>
          <Label for="color">Display Color</Label>
          <div class="flex items-center gap-3">
            <input
              id="color"
              v-model="form.color"
              type="color"
              class="h-10 min-w-[100px] cursor-pointer rounded-md border border-input"
            />
            <Input v-model="form.color" class="flex-1" placeholder="#6D28D9" />
          </div>
          <p class="text-sm text-gray-500 mt-1">
            Choose a color for displaying this machine on the floor plan
          </p>
        </div>

        <Button type="submit" :disabled="saving">
          {{ saving ? 'Saving...' : 'Save Changes' }}
        </Button>
      </form>

      <!-- External Factors Section -->
      <div class="mt-8 border-t pt-6">
        <MachineExternalFactors :machine-id="machineId" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import MachineExternalFactors from '@renderer/components/MachineExternalFactors.vue'

interface MachineType {
  id: number
  name: string
}

interface Plant {
  id: number
  name: string
}

const router = useRouter()
const route = useRoute()
const machineId = Number(route.params.id)

const loading = ref(true)
const saving = ref(false)
const machineTypes = ref<MachineType[]>([])
const plants = ref<Plant[]>([])

const form = ref({
  name: '',
  serialNumber: '',
  typeId: '',
  length: 0,
  width: 0,
  height: 0,
  plantId: null,
  x: 0,
  y: 0,
  z: 0,
  rotation: 0,
  color: '#6D28D9'
})

onMounted(async () => {
  try {
    const [machine, typesResponse, plantsResponse] = await Promise.all([
      window.electron.ipcRenderer.invoke('machines:get', machineId),
      window.electron.ipcRenderer.invoke('machine-types:list'),
      window.electron.ipcRenderer.invoke('plants:list')
    ])

    // Populate form with machine data
    form.value = {
      name: machine.name,
      serialNumber: machine.serialNumber,
      typeId: machine.typeId,
      length: machine.length,
      width: machine.width,
      height: machine.height,
      plantId: machine.plantId,
      x: machine.x || 0,
      y: machine.y || 0,
      z: machine.z || 0,
      rotation: machine.rotation || 0,
      color: machine.color || '#6D28D9'
    }

    machineTypes.value = typesResponse
    plants.value = plantsResponse
  } catch (error: unknown) {
    console.error('Failed to load machine data:', error)
    alert('Error loading machine data')
    router.push('/machines')
  } finally {
    loading.value = false
  }
})

async function updateMachine() {
  saving.value = true
  try {
    // Convert typeId to number
    const formData = {
      ...form.value,
      typeId: Number(form.value.typeId),
      // Only include coordinates if plantId is set
      ...(form.value.plantId
        ? {
            plantId: Number(form.value.plantId),
            x: Number(form.value.x),
            y: Number(form.value.y),
            z: Number(form.value.z),
            rotation: Number(form.value.rotation)
          }
        : { plantId: null, x: null, y: null, z: null, rotation: null })
    }

    // Ensure data is serializable by using JSON.stringify/parse
    const serializedData = JSON.parse(JSON.stringify(formData))
    await window.electron.ipcRenderer.invoke('machines:update', machineId, serializedData)
    router.push('/machines')
  } catch (error: unknown) {
    console.error('Failed to update machine:', error)
    alert('Failed to update machine.')
  } finally {
    saving.value = false
  }
}
</script>
