<script setup lang="ts">
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  DocumentTextIcon 
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, route: '/' },
  { name: 'Employees', icon: UserGroupIcon, route: '/employees' },
  { name: 'Statistics', icon: ChartBarIcon, route: '/statistics' },
  { name: 'Reports', icon: DocumentTextIcon, route: '/reports' }
]
</script>

<template>
  <aside class="w-64 bg-white dark:bg-gray-800 shadow-lg">
    <div class="h-full px-3 py-4">
      <nav class="space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.route"
          class="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === item.route }"
        >
          <component :is="item.icon" class="h-6 w-6 mr-3" />
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </aside>
</template>