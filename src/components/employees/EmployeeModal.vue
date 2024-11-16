<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  employee: {
    name: string
    position: string
    department: string
    email: string
    phone: string
    nationality: string
    gender: string
    imageUrl: string
    startDate: string
    salary: string
    address: string
  }| any
}>()

defineEmits(['close'])
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full">
      <div class="p-6">
        <div class="flex justify-between items-start">
          <div class="flex items-center space-x-4">
            <img 
              :src="employee.imageUrl" 
              :alt="employee.name"
              class="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ employee.name }}
              </h2>
              <p class="text-gray-500 dark:text-gray-400">
                {{ employee.position }}
              </p>
            </div>
          </div>
          <button 
            @click="$emit('close')"
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <XMarkIcon class="h-6 w-6" />
          </button>
        </div>

        <div class="mt-6 space-y-6">
          <!-- Personal Information -->
          <div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {{ t('employees.details.personal') }}
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Department</p>
                <p class="text-gray-900 dark:text-white">{{ employee.department }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Start Date</p>
                <p class="text-gray-900 dark:text-white">{{ employee.startDate }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Nationality</p>
                <p class="text-gray-900 dark:text-white">{{ employee.nationality }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Gender</p>
                <p class="text-gray-900 dark:text-white">{{ employee.gender }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Salary</p>
                <p class="text-gray-900 dark:text-white">{{ employee.salary }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {{ t('employees.details.contact') }}
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p class="text-gray-900 dark:text-white">{{ employee.email }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p class="text-gray-900 dark:text-white">{{ employee.phone }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-sm text-gray-500 dark:text-gray-400">Address</p>
                <p class="text-gray-900 dark:text-white">{{ employee.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>