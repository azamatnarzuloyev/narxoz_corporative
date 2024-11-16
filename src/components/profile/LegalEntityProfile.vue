<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  data: {
    organizationName: string
    director: {
      name: string
      position: string
      phone: string
    }
    founders: Array<{
      name: string
      share: string
    }>
    financialInfo: {
      bankName: string
      accountNumber: string
      tin: string
      charter: string
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
    <!-- Organization Info -->
    <div class="border-b border-gray-200 dark:border-gray-700 pb-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {{ $t('profile.organizationInfo') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.organizationName') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.organizationName }}
          </p>
          <input
            v-else
            v-model="editedData.organizationName"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
    </div>

    <!-- Director Info -->
    <div class="border-b border-gray-200 dark:border-gray-700 pb-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {{ $t('profile.directorInfo') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.name') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.director.name }}
          </p>
          <input
            v-else
            v-model="editedData.director.name"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.position') }}
          </label>
          <p v-if="!isEditing" class="mt-1 text-gray-900 dark:text-white">
            {{ data.director.position }}
          </p>
          <input
            v-else
            v-model="editedData.director.position"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
    </div>

    <!-- Founders -->
    <div class="border-b border-gray-200 dark:border-gray-700 pb-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {{ $t('profile.founders') }}
      </h2>
      <div class="space-y-4">
        <div v-for="(founder, index) in data.founders" :key="index" class="flex justify-between items-center">
          <span class="text-gray-900 dark:text-white">{{ founder.name }}</span>
          <span class="text-gray-500 dark:text-gray-400">{{ founder.share }}</span>
        </div>
      </div>
    </div>

    <!-- Financial Info -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {{ $t('profile.financialInfo') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.bankName') }}
          </label>
          <p class="mt-1 text-gray-900 dark:text-white">{{ data.financialInfo.bankName }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.accountNumber') }}
          </label>
          <p class="mt-1 text-gray-900 dark:text-white">{{ data.financialInfo.accountNumber }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.tin') }}
          </label>
          <p class="mt-1 text-gray-900 dark:text-white">{{ data.financialInfo.tin }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('profile.charter') }}
          </label>
          <p class="mt-1 text-gray-900 dark:text-white">{{ data.financialInfo.charter }}</p>
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