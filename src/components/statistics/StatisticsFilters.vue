<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const filters = ref({
  nationality: '',
  gender: '',
  citizenship: '',
  residence: '',
  ageRange: '',
  experienceRange: ''
})

const nationalities = ['Uzbek', 'Russian', 'Kazakh', 'Kyrgyz', 'Tajik']
const genders = ['Male', 'Female']
const citizenships = ['Uzbekistan', 'Russia', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan']
const residences = ['Tashkent', 'Samarkand', 'Bukhara', 'Andijan', 'Fergana']
const ageRanges = ['18-25', '26-35', '36-45', '46-55', '55+']
const experienceRanges = ['0-2', '3-5', '6-10', '10+']

const emit = defineEmits(['filter-change'])

watch(filters, (newFilters) => {
  emit('filter-change', newFilters)
}, { deep: true })
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
      {{ t('statistics.filters.title') }}
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ t('statistics.filters.nationality') }}
        </label>
        <select
          v-model="filters.nationality"
          class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
        >
          <option value="">{{ t('common.all') }}</option>
          <option v-for="nationality in nationalities" :key="nationality" :value="nationality">
            {{ nationality }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ t('statistics.filters.gender') }}
        </label>
        <select
          v-model="filters.gender"
          class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
        >
          <option value="">{{ t('common.all') }}</option>
          <option v-for="gender in genders" :key="gender" :value="gender">
            {{ gender }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ t('statistics.filters.citizenship') }}
        </label>
        <select
          v-model="filters.citizenship"
          class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
        >
          <option value="">{{ t('common.all') }}</option>
          <option v-for="citizenship in citizenships" :key="citizenship" :value="citizenship">
            {{ citizenship }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ t('statistics.filters.residence') }}
        </label>
        <select
          v-model="filters.residence"
          class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
        >
          <option value="">{{ t('common.all') }}</option>
          <option v-for="residence in residences" :key="residence" :value="residence">
            {{ residence }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ t('statistics.filters.age') }}
        </label>
        <select
          v-model="filters.ageRange"
          class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
        >
          <option value="">{{ t('common.all') }}</option>
          <option v-for="range in ageRanges" :key="range" :value="range">
            {{ range }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ t('statistics.filters.experience') }}
        </label>
        <select
          v-model="filters.experienceRange"
          class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
        >
          <option value="">{{ t('common.all') }}</option>
          <option v-for="range in experienceRanges" :key="range" :value="range">
            {{ range }} years
          </option>
        </select>
      </div>
    </div>
  </div>
</template>