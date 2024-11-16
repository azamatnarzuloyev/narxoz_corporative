<script setup lang="ts">
import { ref } from 'vue'
import { DocumentArrowDownIcon, DocumentChartBarIcon, ClockIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['select'])

const reports = [
  {
    id: 'activity',
    name: 'Activity Logs',
    icon: ClockIcon,
    description: 'View all user activities and system logs'
  },
  {
    id: 'employee',
    name: 'Employee Reports',
    icon: DocumentChartBarIcon,
    description: 'Generate employee statistics and analytics'
  },
  {
    id: 'department',
    name: 'Department Reports',
    icon: DocumentArrowDownIcon,
    description: 'View department-wise reports and metrics'
  }
]

const selectedReport = ref('activity')

const selectReport = (reportId: string) => {
  selectedReport.value = reportId
  emit('select', reportId)
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      v-for="report in reports"
      :key="report.id"
      @click="selectReport(report.id)"
      class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
      :class="{ 'ring-2 ring-indigo-500': selectedReport === report.id }"
    >
      <div class="flex items-center space-x-4">
        <component 
          :is="report.icon" 
          class="h-8 w-8 text-indigo-500"
        />
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            {{ report.name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ report.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>