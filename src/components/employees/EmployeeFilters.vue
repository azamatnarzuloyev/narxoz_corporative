<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const filters = ref({
  nationality: '',
  gender: '',
  department: ''
})

const nationalities = ['Uzbek', 'Russian', 'Kazakh', 'Kyrgyz', 'Tajik']
const genders = ['Male', 'Female']
const departments = ['Engineering', 'Product', 'Marketing', 'Sales', 'HR']

watch(filters, (newFilters) => {
  emit('filter-change', newFilters)
}, { deep: true })

const emit = defineEmits(['filter-change'])
</script>

<template>
  <div class="flex space-x-4">
    <select
      v-model="filters.nationality"
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
    >
      <option value="">{{ t('employees.filters.nationality') }}</option>
      <option v-for="nationality in nationalities" :key="nationality" :value="nationality">
        {{ nationality }}
      </option>
    </select>

    <select
      v-model="filters.gender"
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
    >
      <option value="">{{ t('employees.filters.gender') }}</option>
      <option v-for="gender in genders" :key="gender" :value="gender">
        {{ gender }}
      </option>
    </select>

    <select
      v-model="filters.department"
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
    >
      <option value="">{{ t('employees.filters.department') }}</option>
      <option v-for="department in departments" :key="department" :value="department">
        {{ department }}
      </option>
    </select>
  </div>
</template>