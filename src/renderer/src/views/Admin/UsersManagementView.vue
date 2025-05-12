<template>
  <div class="container py-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">User Management</h1>
      <div>
        <Button @click="showCreateUserDialog = true"> Create New User </Button>
      </div>
    </div>

    <!-- Loading state -->
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
        <span class="text-gray-600">Loading users...</span>
      </div>
    </div>

    <!-- No users found -->
    <TableEmpty v-else-if="!users?.length" class="mt-4">
      No users found. Create a new user to get started.
    </TableEmpty>

    <!-- Users list -->
    <Table v-else>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in users" :key="user.id">
          <TableCell class="font-medium">{{ user.firstName }} {{ user.lastName }}</TableCell>
          <TableCell>{{ user.email }}</TableCell>
          <TableCell>
            <span
              v-if="user.isAdmin"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
            >
              Admin
            </span>
            <span
              v-else
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              User
            </span>
          </TableCell>
          <TableCell>{{ new Date(user.createdAt).toLocaleDateString() }}</TableCell>
          <TableCell>
            <Button
              v-if="user.id !== currentUserId"
              size="sm"
              variant="destructive"
              :disabled="deleteLoading === user.id"
              @click="confirmDeleteUser(user)"
            >
              <span v-if="deleteLoading === user.id" class="flex items-center">
                <svg
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Deleting...
              </span>
              <span v-else>Delete</span>
            </Button>
            <span v-else class="text-gray-500 text-sm italic">Current user</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <!-- Delete Confirmation Dialog -->
    <Dialog :open="showDeleteDialog" @update:open="showDeleteDialog = $event">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div v-if="userToDelete" class="py-4">
          <p><strong>Name:</strong> {{ userToDelete.firstName }} {{ userToDelete.lastName }}</p>
          <p><strong>Email:</strong> {{ userToDelete.email }}</p>
          <p class="mt-2 text-red-600 text-sm">
            All data associated with this user will be permanently deleted.
          </p>
        </div>

        <div v-if="deleteError" class="text-red-500 text-sm mb-4">
          {{ deleteError }}
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" @click="cancelDelete"> Cancel </Button>
          <Button type="button" variant="destructive" :disabled="deleteLoading" @click="deleteUser">
            Delete User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- Create User Dialog -->
    <Dialog :open="showCreateUserDialog" @update:open="showCreateUserDialog = $event">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription>
            Add a new user to the system. All fields are required.
          </DialogDescription>
        </DialogHeader>
        <form @submit.prevent="createUser">
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="firstName">First Name</Label>
                <Input id="firstName" v-model="newUser.firstName" required />
              </div>
              <div class="space-y-2">
                <Label for="lastName">Last Name</Label>
                <Input id="lastName" v-model="newUser.lastName" required />
              </div>
            </div>
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input id="email" v-model="newUser.email" type="email" required />
            </div>
            <div class="space-y-2">
              <Label for="password">Password</Label>
              <Input id="password" v-model="newUser.password" type="password" required />
            </div>
            <div class="flex items-center space-x-2">
              <input
                id="isAdmin"
                v-model="newUser.isAdmin"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <Label for="isAdmin" class="font-normal text-sm"
                >Grant admin privileges to this user</Label
              >
            </div>
          </div>

          <div v-if="error" class="text-red-500 text-sm mb-4">
            {{ error }}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" @click="showCreateUserDialog = false">
              Cancel
            </Button>
            <Button type="submit" :disabled="formLoading">
              <span v-if="formLoading" class="flex items-center">
                <svg
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Creating...
              </span>
              <span v-else>Create User</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@renderer/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@renderer/components/ui/dialog'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableEmpty
} from '@renderer/components/ui/table'
import { useAuthStore } from '@renderer/stores/auth'

// Define user interface
interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
  createdAt: string
}

// Define new user form interface
interface NewUser {
  firstName: string
  lastName: string
  email: string
  password: string
  isAdmin: boolean
}

const authStore = useAuthStore()
const users = ref<User[]>([])
const loading = ref(true)
const showCreateUserDialog = ref(false)
const formLoading = ref(false)
const error = ref('')
const showDeleteDialog = ref(false)
const deleteLoading = ref<string | false>(false)
const deleteError = ref('')
const userToDelete = ref<User | null>(null)
const currentUserId = authStore.user?.id?.toString()

// Form data for new user
const newUser = ref<NewUser>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isAdmin: false
})

// Reset form
const resetForm = () => {
  newUser.value = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isAdmin: false
  }
  error.value = ''
}

// Load users
async function loadUsers() {
  loading.value = true
  try {
    const response = await window.electron.ipcRenderer.invoke('admin:list-users')
    users.value = response
  } catch (err) {
    console.error('Error loading users:', err)
  } finally {
    loading.value = false
  }
}

// Create user
async function createUser() {
  error.value = ''
  formLoading.value = true

  try {
    // Create a plain object with only the necessary properties for IPC serialization
    const userData = {
      email: newUser.value.email,
      password: newUser.value.password,
      firstName: newUser.value.firstName,
      lastName: newUser.value.lastName,
      isAdmin: newUser.value.isAdmin
    }

    const response = await window.electron.ipcRenderer.invoke('admin:create-user', userData)

    if (response.success) {
      showCreateUserDialog.value = false
      resetForm()
      await loadUsers() // Refresh the user list
    } else {
      error.value = response.message || 'Failed to create user'
    }
  } catch (err) {
    console.error('Error creating user:', err)
    error.value = 'An unexpected error occurred'
  } finally {
    formLoading.value = false
  }
}

// Confirm delete user
function confirmDeleteUser(user: User) {
  userToDelete.value = user
  showDeleteDialog.value = true
}

// Cancel delete
function cancelDelete() {
  userToDelete.value = null
  showDeleteDialog.value = false
  deleteError.value = ''
}

// Delete user
async function deleteUser() {
  deleteError.value = ''
  if (userToDelete.value) {
    deleteLoading.value = userToDelete.value.id

    try {
      const response = await window.electron.ipcRenderer.invoke(
        'admin:delete-user',
        userToDelete.value.id
      )

      if (response.success) {
        showDeleteDialog.value = false
        userToDelete.value = null
        await loadUsers() // Refresh the user list
      } else {
        deleteError.value = response.message || 'Failed to delete user'
      }
    } catch (err) {
      console.error('Error deleting user:', err)
      deleteError.value = 'An unexpected error occurred'
    } finally {
      deleteLoading.value = false
    }
  }
}

// Load users on component mount
onMounted(async () => {
  await loadUsers()
})
</script>
