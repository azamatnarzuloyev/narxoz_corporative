<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SunIcon, MoonIcon, LanguageIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

defineProps<{
  isDarkMode: boolean
}>()

const emit = defineEmits(['toggle-dark-mode', 'toggle-language'])
const router = useRouter()
const userMenuOpen = ref(false)

const navigateHome = () => {
  router.push('/')
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <img 
            @click="navigateHome" 
            src="/logo.svg" 
            alt="Logo" 
            class="h-8 w-auto cursor-pointer"
          />
        </div>

        <div class="flex items-center space-x-4">
          <button 
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <SunIcon v-if="isDarkMode" class="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <MoonIcon v-else class="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>

          <button 
            @click="$emit('toggle-language')"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <LanguageIcon class="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>

          <div class="relative">
            <button 
              @click="userMenuOpen = !userMenuOpen"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <UserCircleIcon class="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>

            <div 
              v-if="userMenuOpen"
              class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5"
            >
              <div class="py-1">
                <router-link 
                  to="/profile" 
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Profile
                </router-link>
                <a 
                  href="#" 
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>