<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEmployeeStore } from '../stores/employees'
import EmployeeCard from '../components/employees/EmployeeCard.vue'
import EmployeeFilters from '../components/employees/EmployeeFilters.vue'
import EmployeeModal from '../components/employees/EmployeeModal.vue'

const { t } = useI18n()
const employeeStore = useEmployeeStore()

const searchQuery = ref('')
const selectedFilters = ref({
  nationality: '',
  gender: '',
  department: ''
})

const selectedEmployee = ref(null)
const isModalOpen = ref(false)

const filteredEmployees = computed(() => {
  return employeeStore.employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesFilters = (!selectedFilters.value.nationality || employee.nationality === selectedFilters.value.nationality) &&
                          (!selectedFilters.value.gender || employee.gender === selectedFilters.value.gender) &&
                          (!selectedFilters.value.department || employee.department === selectedFilters.value.department)
    
    return matchesSearch && matchesFilters
  })
})


const openEmployeeModal = (employee:any) => {
  selectedEmployee.value = employee
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedEmployee.value = null
}

const handleFilterChange = (filters:any) => {
  selectedFilters.value = filters
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
        {{ t('employees.title') }}
      </h1>
    </div>

    <div class="flex space-x-4">
      <div class="flex-1">
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="t('employees.searchPlaceholder')"
          class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <EmployeeFilters @filter-change="handleFilterChange" />
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <EmployeeCard
        v-for="employee in filteredEmployees"
        :key="employee.id"
        :employee="employee"
        @click="openEmployeeModal(employee)"
      />
    </div>

    <EmployeeModal
      v-if="isModalOpen"
      :employee="selectedEmployee"
      @close="closeModal"
    />
  </div>
</template>