<script setup lang="ts">
import { Button } from '@renderer/components/ui/button/'
import { Separator } from '@renderer/components/ui/separator'
import { useAuthStore } from '@renderer/stores/auth'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import logoImage from '@renderer/assets/logo.png'

const authStore = useAuthStore()
const router = useRouter()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const isAdmin = computed(() => authStore.isAdmin)

function logout() {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="flex items-center justify-between p-2">
      <div class="flex items-center gap-2">
        <img :src="logoImage" alt="Open Plant Space Logo" class="ml-5" style="height: 50px" />
        <span
          v-if="isAdmin"
          class="bg-purple-600 text-white text-xs px-2 py-1 rounded font-semibold"
          >ADMIN</span
        >
      </div>
      <div class="flex items-center gap-2">
        <!-- Only show Home button when authenticated -->
        <Button
          v-if="isAuthenticated"
          :variant="$route.path === '/' ? 'default' : 'outline'"
          @click="$router.push('/')"
        >
          Home
        </Button>

        <!-- Show only Sign In button if user is NOT authenticated -->
        <template v-if="!isAuthenticated">
          <Button
            :variant="$route.path === '/login' ? 'default' : 'outline'"
            @click="$router.push('/login')"
            >Sign In</Button
          >
        </template>

        <!-- Show these buttons only if user is authenticated -->
        <template v-if="isAuthenticated">
          <Button
            :variant="$route.path === '/plants' ? 'default' : 'outline'"
            @click="$router.push('/plants')"
            >Plants</Button
          >
          <Button
            :variant="$route.path.startsWith('/machines') ? 'default' : 'outline'"
            @click="$router.push('/machines')"
            >Machines</Button
          >
          <Button
            :variant="$route.path.startsWith('/external-factors') ? 'default' : 'outline'"
            @click="$router.push('/external-factors')"
            >External Factors</Button
          >
          <Button
            :variant="$route.path === '/material-flows' ? 'default' : 'outline'"
            @click="$router.push('/material-flows')"
            >Material Flow</Button
          >
          <Button variant="destructive" @click="logout">Logout</Button>
        </template>
      </div>
    </header>
    <Separator />
    <div class="flex-1 overflow-auto">
      <div class="p-2">
        <RouterView />
      </div>
    </div>
  </div>
</template>
