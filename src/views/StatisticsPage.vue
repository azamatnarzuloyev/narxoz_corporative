<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEmployeeStore } from '../stores/employees'
import StatisticsFilters from '../components/statistics/StatisticsFilters.vue'
import DepartmentChart from '../components/statistics/DepartmentChart.vue'
import GenderChart from '../components/statistics/GenderChart.vue'
import NationalityChart from '../components/statistics/NationalityChart.vue'
import AgeDistributionChart from '../components/statistics/AgeDistributionChart.vue'
import ExperienceChart from '../components/statistics/ExperienceChart.vue'

const { t } = useI18n()
const employeeStore = useEmployeeStore()

const timeRange = ref('month')
const filters = ref({
  nationality: '',
  gender: '',
  citizenship: '',
  residence: '',
  ageRange: '',
  experienceRange: ''
})

const filteredEmployees = computed(() => {
  return employeeStore.employees.filter(employee => {
    const matchesNationality = !filters.value.nationality || employee.nationality === filters.value.nationality
    const matchesGender = !filters.value.gender || employee.gender === filters.value.gender
    // Add more filter conditions as needed
    return matchesNationality && matchesGender
  })
})

const departmentData = computed(() => {
  const data = {}
  filteredEmployees.value.forEach(employee => {
    data[employee.department] = (data[employee.department] || 0) + 1
  })
  return data
})

const genderData = computed(() => {
  const data = {}
  filteredEmployees.value.forEach(employee => {
    data[employee.gender] = (data[employee.gender] || 0) + 1
  })
  return data
})

const nationalityData = computed(() => {
  const data = {}
  filteredEmployees.value.forEach(employee => {
    data[employee.nationality] = (data[employee.nationality] || 0) + 1
  })
  return data
})

const experienceData = computed(() => {
  const data = {
    '0-2': 0,
    '3-5': 0,
    '6-10': 0,
    '10+': 0
  }
  filteredEmployees.value.forEach(employee => {
    const years = new Date().getFullYear() - new Date(employee.startDate).getFullYear()
    if (years <= 2) data['0-2']++
    else if (years <= 5) data['3-5']++
    else if (years <= 10) data['6-10']++
    else data['10+']++
  })
  return data
})

const handleFilterChange = (newFilters) => {
  filters.value = newFilters
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
        {{ t('statistics.title') }}
      </h1>
      <select
        v-model="timeRange"
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
      >
        <option value="week">{{ t('statistics.timeRange.week') }}</option>
        <option value="month">{{ t('statistics.timeRange.month') }}</option>
        <option value="quarter">{{ t('statistics.timeRange.quarter') }}</option>
        <option value="year">{{ t('statistics.timeRange.year') }}</option>
      </select>
    </div>

    <StatisticsFilters @filter-change="handleFilterChange" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {{ t('statistics.charts.departmentDistribution') }}
        </h2>
        <DepartmentChart :data="departmentData" />
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {{ t('statistics.charts.genderDistribution') }}
        </h2>
        <GenderChart :data="genderData" />
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {{ t('statistics.charts.nationalityDistribution') }}
        </h2>
        <NationalityChart :data="nationalityData" />
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {{ t('statistics.charts.experienceDistribution') }}
        </h2>
        <ExperienceChart :data="experienceData" />
      </div>
    </div>
  </div>
</template>