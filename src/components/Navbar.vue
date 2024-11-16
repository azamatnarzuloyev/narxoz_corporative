<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  SunIcon, 
  MoonIcon, 
  LanguageIcon, 
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const props = defineProps<{
  isDarkMode: boolean
  isSidebarOpen: boolean
}>()

const emit = defineEmits(['toggle-dark-mode', 'toggle-language', 'toggle-sidebar'])
const router = useRouter()
const userMenuOpen = ref(false)

const navigateHome = () => {
  router.push('/')
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <button 
            @click="$emit('toggle-sidebar')"
            class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Bars3Icon v-if="!props.isSidebarOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
          <img 
            @click="navigateHome" 
            src="../assets/logotype.svg"   
            alt="Logo" 
            class="h-8 w-auto cursor-pointer ml-4"
          />
        </div>

        <div class="flex items-center space-x-4">
          <button 
            @click="$emit('toggle-dark-mode')"
            class="btn btn-secondary"
          >
            <SunIcon v-if="props.isDarkMode" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>

          <button 
            @click="$emit('toggle-language')"
            class="btn btn-secondary"
          >
            <LanguageIcon class="h-5 w-5" />
          </button>

          <div class="relative">
            <button 
              @click="userMenuOpen = !userMenuOpen"
              class="btn btn-secondary"
            >
              <UserCircleIcon class="h-5 w-5" />
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

  <!-- Spacer to prevent content from being hidden under fixed navbar -->
  <div class="h-16"></div>
</template>