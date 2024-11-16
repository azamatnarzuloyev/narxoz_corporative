<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const isDarkMode = ref(false)
const { locale } = useI18n()

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
}

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'uz' : 'en'
}

onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDarkMode.value = prefersDark
  if (prefersDark) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <Navbar 
      @toggle-dark-mode="toggleDarkMode" 
      @toggle-language="toggleLanguage"
      :isDarkMode="isDarkMode"
    />
    <div class="flex">
      <Sidebar />
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>