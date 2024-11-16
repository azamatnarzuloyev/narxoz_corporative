<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useEmployeeStore } from '../stores/employees';
import StatisticsFilters from '../components/statistics/StatisticsFilters.vue';
import DepartmentChart from '../components/statistics/DepartmentChart.vue';
import GenderChart from '../components/statistics/GenderChart.vue';
import NationalityChart from '../components/statistics/NationalityChart.vue';
import AgeDistributionChart from '../components/statistics/AgeDistributionChart.vue';
import ExperienceChart from '../components/statistics/ExperienceChart.vue';
import SalaryDistributionChart from '../components/statistics/SalaryDistributionChart.vue';

// 1. I18n sozlash
const { t } = useI18n();

// 2. Xodimlar uchun tip yaratish
interface Employee {
  id: number;
  name: string;
  nationality: string;
  gender: string;
  citizenship: string;
  address: string;
  birthDate: string;
  startDate: string;
  department: string;
  salary: string;
}

// 3. Filtrlar uchun tip yaratish
interface Filters {
  nationality: string;
  gender: string;
  citizenship: string;
  residence: string;
  ageRange: string;
  experienceRange: string;
}

// 4. Store va ref'larni aniqlash
const employeeStore = useEmployeeStore();
const timeRange = ref<'week' | 'month' | 'quarter' | 'year'>('month');
const filters = ref<Filters>({
  nationality: '',
  gender: '',
  citizenship: '',
  residence: '',
  ageRange: '',
  experienceRange: ''
});

// 5. Filtrlashni tiplash
const filteredEmployees = computed<Employee[]>(() => {
  return employeeStore.employees.filter((employee) => {
    const matchesNationality =
      !filters.value.nationality || employee.nationality === filters.value.nationality;
    const matchesGender =
      !filters.value.gender || employee.gender === filters.value.gender;
    const matchesCitizenship =
      !filters.value.citizenship || employee.citizenship === filters.value.citizenship;
    const matchesResidence =
      !filters.value.residence || employee.address.includes(filters.value.residence);

    // Age filtering
    if (filters.value.ageRange) {
      const age = new Date().getFullYear() - new Date(employee.birthDate).getFullYear();
      const [min, max] = filters.value.ageRange.split('-').map(Number);
      if (!(age >= min && age <= (max || 100))) return false;
    }

    // Experience filtering
    if (filters.value.experienceRange) {
      const experience = new Date().getFullYear() - new Date(employee.startDate).getFullYear();
      const [min, max] = filters.value.experienceRange.split('-').map(Number);
      if (!(experience >= min && experience <= (max || 100))) return false;
    }

    return matchesNationality && matchesGender && matchesCitizenship && matchesResidence;
  });
});

// 6. Diagramlar uchun ma'lumotlarni tiplash
const departmentData = computed<Record<string, number>>(() => {
  const data: Record<string, number> = {};
  filteredEmployees.value.forEach((employee) => {
    data[employee.department] = (data[employee.department] || 0) + 1;
  });
  return data;
});

const genderData = computed<Record<string, number>>(() => {
  const data: Record<string, number> = {};
  filteredEmployees.value.forEach((employee) => {
    data[employee.gender] = (data[employee.gender] || 0) + 1;
  });
  return data;
});

const nationalityData = computed<Record<string, number>>(() => {
  const data: Record<string, number> = {};
  filteredEmployees.value.forEach((employee) => {
    data[employee.nationality] = (data[employee.nationality] || 0) + 1;
  });
  return data;
});

const ageData = computed<Record<string, number>>(() => {
  const data: Record<string, number> = {
    '18-25': 0,
    '26-35': 0,
    '36-45': 0,
    '46-55': 0,
    '55+': 0
  };
  filteredEmployees.value.forEach((employee) => {
    const age = new Date().getFullYear() - new Date(employee.birthDate).getFullYear();
    if (age <= 25) data['18-25']++;
    else if (age <= 35) data['26-35']++;
    else if (age <= 45) data['36-45']++;
    else if (age <= 55) data['46-55']++;
    else data['55+']++;
  });
  return data;
});

const experienceData = computed<Record<string, number>>(() => {
  const data: Record<string, number> = {
    '0-2': 0,
    '3-5': 0,
    '6-10': 0,
    '10+': 0
  };
  filteredEmployees.value.forEach((employee) => {
    const years = new Date().getFullYear() - new Date(employee.startDate).getFullYear();
    if (years <= 2) data['0-2']++;
    else if (years <= 5) data['3-5']++;
    else if (years <= 10) data['6-10']++;
    else data['10+']++;
  });
  return data;
});

const salaryData = computed<Record<string, number>>(() => {
  const data: Record<string, number> = {
    '0-5M': 0,
    '5M-10M': 0,
    '10M-15M': 0,
    '15M+': 0
  };

  filteredEmployees.value.forEach((employee) => {
    const salary = parseInt(employee.salary.replace(/[^0-9]/g, ''));
    if (salary <= 5000000) data['0-5M']++;
    else if (salary <= 10000000) data['5M-10M']++;
    else if (salary <= 15000000) data['10M-15M']++;
    else data['15M+']++;
  });

  return data;
});

// 7. Filtrlarni yangilash funksiyasi
const handleFilterChange = (newFilters: Filters) => {
  filters.value = newFilters;
};
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
          {{ t('statistics.charts.ageDistribution') }}
        </h2>
        <AgeDistributionChart :data="ageData" />
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {{ t('statistics.charts.experienceDistribution') }}
        </h2>
        <ExperienceChart :data="experienceData" />
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Salary Distribution
        </h2>
        <SalaryDistributionChart :data="salaryData" />
      </div>
    </div>
  </div>
</template>