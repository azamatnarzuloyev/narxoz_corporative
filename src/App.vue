<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const isDarkMode = ref(false)
const { locale } = useI18n()
const isSidebarOpen = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
}

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'uz' : 'en'
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
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
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navbar 
      @toggle-dark-mode="toggleDarkMode" 
      @toggle-language="toggleLanguage"
      @toggle-sidebar="toggleSidebar"
      :isDarkMode="isDarkMode"
      :isSidebarOpen="isSidebarOpen"
    />
    <div class="flex">
      <Sidebar 
        :isSidebarOpen="isSidebarOpen"
        class="transition-all duration-300"
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      />
      <main 
        class="flex-1 p-6 transition-all duration-300"
        :class="{ 'ml-64': isSidebarOpen }"
      >
        <div class="max-w-7xl mx-auto">
          <router-view v-slot="{ Component }">
            <transition
              name="fade"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>