<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LegalEntityProfile from '../components/profile/LegalEntityProfile.vue'
import IndividualProfile from '../components/profile/IndividualProfile.vue'

const { t } = useI18n()

const userType = ref('individual') // 'individual' or 'legal'

const legalEntityData = ref({
  organizationName: 'Tech Solutions LLC',
  director: {
    name: 'John Smith',
    position: 'General Director',
    phone: '+998 90 123 45 67'
  },
  founders: [
    { name: 'John Smith', share: '60%' },
    { name: 'Jane Doe', share: '40%' }
  ],
  financialInfo: {
    bankName: 'National Bank',
    accountNumber: '1234 5678 9012 3456',
    tin: '123456789',
    charter: '1,000,000 UZS'
  }
})

const individualData = ref({
  personalInfo: {
    firstName: 'Aziz',
    lastName: 'Karimov',
    birthDate: '1990-05-15',
    birthPlace: 'Tashkent, Uzbekistan',
    photo: 'https://i.pravatar.cc/150?img=3'
  },
  socialStatus: {
    maritalStatus: 'Married',
    employmentStatus: 'Employed',
    socialCategory: 'Middle Income'
  },
  contacts: {
    phone: '+998 90 123 45 67',
    email: 'aziz.karimov@example.com',
    address: 'Tashkent, Mirabad district'
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ t('profile.title') }}
        </h1>
        <div class="flex space-x-4">
          <button
            @click="userType = 'individual'"
            class="px-4 py-2 rounded-lg"
            :class="userType === 'individual' ? 
              'bg-indigo-600 text-white' : 
              'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
          >
            {{ t('profile.individual') }}
          </button>
          <button
            @click="userType = 'legal'"
            class="px-4 py-2 rounded-lg"
            :class="userType === 'legal' ? 
              'bg-indigo-600 text-white' : 
              'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
          >
            {{ t('profile.legalEntity') }}
          </button>
        </div>
      </div>

      <LegalEntityProfile
        v-if="userType === 'legal'"
        :data="legalEntityData"
      />
      <IndividualProfile
        v-else
        :data="individualData"
      />
    </div>
  </div>
</template>