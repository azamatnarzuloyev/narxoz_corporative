<script setup lang="ts">
import { ref  } from 'vue'
import { useI18n } from 'vue-i18n'





const { t } = useI18n()

const stats = ref([
  { name: 'Jami xodimlar', value: '250' },
  { name: 'Faol loyihalar', value: '15' },
  { name: "Bo'limlar", value: '8' },
  { name: 'Yangi Ishchilar', value: '12' }
])
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
      {{ t('dashboard.welcome') }}
    </h1>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="item in stats"
        :key="item.name"
        class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
      >
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
            {{ item.name }}
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
            {{ item.value }}
          </dd>
        </div>
      </div>
    </div>
  </div>
</template>