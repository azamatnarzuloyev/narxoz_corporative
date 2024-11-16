<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  data: {
    personalInfo: {
      firstName: string
      lastName: string
      birthDate: string
      birthPlace: string
      photo: string
    }
    socialStatus: {
      maritalStatus: string
      employmentStatus: string
      socialCategory: string
    }
    contacts: {
      phone: string
      email: string
      address: string
    }
  }
}>()

const isEditing = ref(false)
const editedData = ref({ ...props.data })

const saveChanges = () => {
  // Here you would typically make an API call to save the changes
  isEditing.value = false
}
</script>

<template>
  <div class="space-y-8">
    <!-- Personal Info -->
    <div class="border-b border-gray-200 dark:border-gray-700 pb-6">
      <div class="flex items-center space-x-6 mb-6">
        <img 
          :src="data.personalInfo.photo" 
          :alt="data.personalInfo.firstName"
          class="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ data.personalInfo.firstName }} {{ data.personalInfo.lastName }}
          </h2>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.birthDate') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.personalInfo.birthDate }}
          </p>
          <input
            v-else
            v-model="editedData.personalInfo.birthDate"
            type="date"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.birthPlace') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.personalInfo.birthPlace }}
          </p>
          <input
            v-else
            v-model="editedData.personalInfo.birthPlace"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
    </div>

    <!-- Social Status -->
    <div class="border-b border-gray-200 dark:border-gray-700 pb-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {{ $t('profile.socialStatus') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.maritalStatus') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.socialStatus.maritalStatus }}
          </p>
          <select
            v-else
            v-model="editedData.socialStatus.maritalStatus"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="Single">{{ $t('profile.single') }}</option>
            <option value="Married">{{ $t('profile.married') }}</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.employmentStatus') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.socialStatus.employmentStatus }}
          </p>
          <select
            v-else
            v-model="editedData.socialStatus.employmentStatus"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="Employed">{{ $t('profile.employed') }}</option>
            <option value="Unemployed">{{ $t('profile.unemployed') }}</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.socialCategory') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.socialStatus.socialCategory }}
          </p>
          <select
            v-else
            v-model="editedData.socialStatus.socialCategory"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="Low Income">{{ $t('profile.lowIncome') }}</option>
            <option value="Middle Income">{{ $t('profile.middleIncome') }}</option>
            <option value="High Income">{{ $t('profile.highIncome') }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {{ $t('profile.contactInfo') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.phone') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.contacts.phone }}
          </p>
          <input
            v-else
            v-model="editedData.contacts.phone"
            type="tel"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.email') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.contacts.email }}
          </p>
          <input
            v-else
            v-model="editedData.contacts.email"
            type="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.address') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.contacts.address }}
          </p>
          <input
            v-else
            v-model="editedData.contacts.address"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-end space-x-4 mt-6">
      <button
        v-if="!isEditing"
        @click="isEditing = true"
        class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {{ $t('common.edit') }}
      </button>
      <template v-else>
        <button
          @click="isEditing = false"
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          {{ $t('common.cancel') }}
        </button>
        <button
          @click="saveChanges"
          class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {{ $t('common.save') }}
        </button>
      </template>
    </div>
  </div>
</template>