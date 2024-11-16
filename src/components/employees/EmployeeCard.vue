<script setup lang="ts">
defineProps<{
  employee: {
    id: number
    name: string
    position: string
    department: string
    imageUrl: string
  }
}>()
</script>

<template>
  <div 
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
    @click="$emit('click')"
  >
    <div class="p-6">
      <div class="flex items-center space-x-4">
        <img 
          :src="employee.imageUrl" 
          :alt="employee.name"
          class="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            {{ employee.name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ employee.position }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ employee.department }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>