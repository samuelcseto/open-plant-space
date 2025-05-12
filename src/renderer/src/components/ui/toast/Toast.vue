<script setup lang="ts">
import { computed } from 'vue'

// Define and export ToastProps
export interface ToastProps {
  title: string
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
  open?: boolean
  description?: string
}

const props = defineProps<ToastProps>()

const emit = defineEmits(['close'])

const closeToast = () => {
  emit('close')
}

const variantClasses = computed(() => {
  const baseClasses = 'rounded-lg p-4 shadow-md border'
  const currentVariant = props.variant || 'default' // Ensure variant is not undefined

  const variantSpecificClasses = {
    default: 'bg-white border-gray-200 text-gray-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900'
  }

  return `${baseClasses} ${variantSpecificClasses[currentVariant]}`
})
</script>

<template>
  <div
    v-if="open"
    :class="variantClasses"
    class="toast-item flex items-center justify-between max-w-md animate-slide-in"
    role="alert"
  >
    <div class="flex-1">
      <h3 class="font-semibold text-sm">{{ title }}</h3>
      <p v-if="description" class="text-sm opacity-90 mt-1">{{ description }}</p>
    </div>
    <button
      class="ml-4 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded"
      aria-label="Close"
      @click="closeToast"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.toast-item {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
}

@keyframes slide-in {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
</style>
