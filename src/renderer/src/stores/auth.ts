import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  id: number
  email: string
  name?: string
  firstName?: string
  lastName?: string
  isAdmin?: boolean
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Get stored auth data from localStorage on initialization
  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user') || 'null')
    token.value = localStorage.getItem('token')
  }

  // Computed
  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => !!user.value?.isAdmin)

  // Actions
  async function login(email: string, password: string) {
    loading.value = true
    error.value = null

    try {
      const response = await window.electron.ipcRenderer.invoke('auth:login', { email, password })

      if (response.user && response.token) {
        user.value = response.user
        token.value = response.token

        // Store auth data in localStorage
        localStorage.setItem('user', JSON.stringify(user.value))
        if (token.value) {
          // Add null check for token.value
          localStorage.setItem('token', token.value)
        }

        return true
      } else {
        throw new Error(response.message || 'Login failed')
      }
    } catch (err: unknown) {
      // Changed from any to unknown
      error.value = (err as Error).message || 'An unexpected error occurred'
      return false
    } finally {
      loading.value = false
    }
  }

  function logout() {
    // Clear auth state
    user.value = null
    token.value = null

    // Remove from localStorage
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    // Notify backend (optional)
    window.electron.ipcRenderer.invoke('auth:logout')
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    isAdmin,
    login,
    logout
  }
})
