<template>
  <div class="container py-4">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>

    <!-- Admin badge - displays only for admin users -->
    <div
      v-if="authStore.isAdmin"
      class="mb-4 p-3 bg-purple-100 border border-purple-300 text-purple-800 rounded-md flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Admin Mode - You have full access to all plants, machines, and features</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Plant Stats Card -->
      <div class="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h2 class="text-lg font-semibold mb-2 text-blue-700"><span class="mr-2">🏭</span>Plants</h2>
        <div v-if="isLoading" class="h-10 flex items-center">
          <div class="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div v-else class="text-3xl font-bold mb-2">{{ stats.plants }}</div>
        <p class="text-gray-600 text-sm">Total manufacturing plants</p>
        <div class="mt-4">
          <Button variant="outline" size="sm" :disabled="isLoading" @click="navigateTo('/plants')">
            <span v-if="isLoading" class="flex items-center">
              <svg
                class="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400"
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
              Loading
            </span>
            <span v-else>View Plants</span>
          </Button>
        </div>
      </div>

      <!-- Machines Stats Card -->
      <div class="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h2 class="text-lg font-semibold mb-2 text-green-700">
          <span class="mr-2">⚙️</span>Machines
        </h2>
        <div v-if="isLoading" class="h-10 flex items-center">
          <div class="w-16 h-8 bg-gray-200 rounded animate-pulse delay-150"></div>
        </div>
        <div v-else class="text-3xl font-bold mb-2">{{ stats.machines }}</div>
        <p class="text-gray-600 text-sm">Total machines</p>
        <div class="mt-4">
          <Button
            variant="outline"
            size="sm"
            :disabled="isLoading"
            @click="navigateTo('/machines')"
          >
            <span v-if="isLoading" class="flex items-center">
              <svg
                class="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400"
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
              Loading
            </span>
            <span v-else>View Machines</span>
          </Button>
        </div>
      </div>

      <!-- Machine Types Stats Card -->
      <div class="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h2 class="text-lg font-semibold mb-2 text-purple-700">
          <span class="mr-2">🔧</span>Machine Types
        </h2>
        <div v-if="isLoading" class="h-10 flex items-center">
          <div class="w-16 h-8 bg-gray-200 rounded animate-pulse delay-300"></div>
        </div>
        <div v-else class="text-3xl font-bold mb-2">{{ stats.machineTypes }}</div>
        <p class="text-gray-600 text-sm">Available machine types</p>
        <div class="mt-4">
          <Button
            variant="outline"
            size="sm"
            :disabled="isLoading"
            @click="navigateTo('/machine-types')"
          >
            <span v-if="isLoading" class="flex items-center">
              <svg
                class="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400"
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
              Loading
            </span>
            <span v-else>View Types</span>
          </Button>
        </div>
      </div>
    </div>

    <Separator class="my-6" />

    <div>
      <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
      <div class="flex flex-wrap gap-3">
        <Button :disabled="isLoading" @click="navigateTo('/plants/create')">Add New Plant</Button>
        <Button :disabled="isLoading" @click="navigateTo('/machines/create')"
          >Add New Machine</Button
        >
        <Button :disabled="isLoading" @click="navigateTo('/machine-types/create')"
          >Add Machine Type</Button
        >
        <Button variant="outline" :disabled="isLoading" @click="navigateTo('/plants/floor-plan')"
          >View Floor Plan</Button
        >
      </div>

      <!-- Admin-only quick actions -->
      <div v-if="authStore.isAdmin" class="mt-4">
        <h3 class="text-md font-semibold mb-2 text-purple-700">Admin Actions</h3>
        <div class="flex flex-wrap gap-3">
          <Button
            variant="outline"
            class="border-purple-500 text-purple-700 hover:bg-purple-50"
            :disabled="isLoading"
            @click="navigateTo('/admin/users')"
          >
            Manage Users
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@renderer/components/ui/button'
import { Separator } from '@renderer/components/ui/separator'
import { useAuthStore } from '@renderer/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Stats for dashboard
const stats = ref({
  plants: 0,
  machines: 0,
  machineTypes: 0
})

// Loading state
const isLoading = ref(true)

// Navigation helper
const navigateTo = (path: string) => {
  router.push(path)
}

// Fetch data on component mount
onMounted(async () => {
  try {
    // Set loading state to true initially
    isLoading.value = true

    // Fetch the real dashboard stats from the backend
    const response = await window.api.getDashboardStats()

    // Check if the response indicates an error
    if (response.success === false) {
      console.error('Failed to load dashboard data:', response.message)
      stats.value = {
        plants: 0,
        machines: 0,
        machineTypes: 0
      }
    } else {
      // Update the stats with the real data from the backend
      stats.value = {
        plants: response.plants || 0,
        machines: response.machines || 0,
        machineTypes: response.machineTypes || 0
      }
    }
  } catch (error) {
    console.error('Failed to load dashboard data:', error)
    stats.value = {
      plants: 0,
      machines: 0,
      machineTypes: 0
    }
  } finally {
    // Reset loading state when done, regardless of success or failure
    isLoading.value = false
  }
})
</script>

<style scoped>
/* Additional styling for animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

/* Add delay classes if needed */
.delay-100 {
  animation-delay: 100ms;
}
.delay-150 {
  animation-delay: 150ms;
}
.delay-200 {
  animation-delay: 200ms;
}
.delay-300 {
  animation-delay: 300ms;
}
</style>
