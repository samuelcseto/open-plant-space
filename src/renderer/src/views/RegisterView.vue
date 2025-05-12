<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Create your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleRegister">
        <div v-if="error" class="rounded-md bg-red-50 p-4 mb-4">
          <div class="text-sm text-red-700">
            {{ error }}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="firstName" class="block text-sm font-medium leading-6">First Name</label>
            <div class="mt-2">
              <Input
                id="firstName"
                v-model="firstName"
                type="text"
                required
                placeholder="First name"
              />
            </div>
          </div>

          <div>
            <label for="lastName" class="block text-sm font-medium leading-6">Last Name</label>
            <div class="mt-2">
              <Input
                id="lastName"
                v-model="lastName"
                type="text"
                required
                placeholder="Last name"
              />
            </div>
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6">Email address</label>
          <div class="mt-2">
            <Input
              id="email"
              v-model="email"
              type="email"
              autocomplete="email"
              required
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6">Password</label>
          <div class="mt-2">
            <Input
              id="password"
              v-model="password"
              type="password"
              autocomplete="new-password"
              required
              placeholder="Create a password"
            />
          </div>
        </div>

        <div>
          <Button type="submit" class="w-full" :disabled="loading">
            {{ loading ? 'Creating account...' : 'Create account' }}
          </Button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <router-link to="/login" class="font-semibold leading-6 text-primary">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { useAuthStore } from '@renderer/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

async function handleRegister() {
  loading.value = true
  error.value = null

  try {
    const response = await window.electron.ipcRenderer.invoke('auth:register', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    })

    if (response.success) {
      // Set user in auth store
      authStore.user = response.user
      localStorage.setItem('user', JSON.stringify(response.user))
      localStorage.setItem('token', response.token)

      // Redirect to home page
      router.push('/')
    } else {
      error.value = response.message || 'Registration failed'
    }
  } catch (err: any) {
    error.value = err.message || 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
