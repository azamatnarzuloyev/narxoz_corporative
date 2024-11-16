<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReportsStore } from '../stores/reports'
import ActivityLogTable from '../components/reports/ActivityLogTable.vue'
import ReportTypeSelector from '../components/reports/ReportTypeSelector.vue'

const { t } = useI18n()
const reportsStore = useReportsStore()

const selectedReportType = ref('activity') // default null 
const dateRange = ref('week')

const filteredLogs = computed(() => {
  const now = Date.now()
  const ranges = {
    week: 7 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    quarter: 90 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000
  }

  return reportsStore.activityLogs.filter(log => {
    const logDate = new Date(log.timestamp).getTime()
    return now - logDate <= ranges[dateRange.value as keyof typeof ranges]
  })
})

const generateReport = () => {
  const report = reportsStore.generateReport(selectedReportType.value as 'department' | 'employee' | 'activity', dateRange.value)
  // Here you would typically trigger a download or display the report
  console.log('Generated report:', report)
}

const handleReportTypeSelect = (type: string) => {
  selectedReportType.value = type
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
        {{ t('reports.title') }}
      </h1>
      <select
        v-model="dateRange"
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
      >
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="quarter">Last Quarter</option>
        <option value="year">Last Year</option>
      </select>
    </div>

    <ReportTypeSelector @select="handleReportTypeSelect" />

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            Recent Activity Logs
          </h2>
          <button
            @click="generateReport"
            class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Generate Report
          </button>
        </div>

        <ActivityLogTable :logs="filteredLogs" />
      </div>
    </div>
  </div>
</template>