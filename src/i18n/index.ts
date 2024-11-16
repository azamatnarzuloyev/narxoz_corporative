import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    statistics: {
      title: 'Statistics',
      filters: {
        title: 'Filters',
        nationality: 'Nationality',
        gender: 'Gender',
        citizenship: 'Citizenship',
        residence: 'Residence',
        age: 'Age',
        experience: 'Work Experience'
      },
      charts: {
        departmentDistribution: 'Department Distribution',
        genderDistribution: 'Gender Distribution',
        nationalityDistribution: 'Nationality Distribution',
        ageDistribution: 'Age Distribution',
        experienceDistribution: 'Experience Distribution'
      },
      timeRange: {
        week: 'Last Week',
        month: 'Last Month',
        quarter: 'Last Quarter',
        year: 'Last Year'
      }
    }
  },
  uz: {
    statistics: {
      title: 'Statistika',
      filters: {
        title: 'Filterlar',
        nationality: 'Millati',
        gender: 'Jinsi',
        citizenship: 'Fuqaroligi',
        residence: 'Yashash joyi',
        age: 'Yoshi',
        experience: 'Ish tajribasi'
      },
      charts: {
        departmentDistribution: 'Bo\'limlar bo\'yicha taqsimot',
        genderDistribution: 'Jins bo\'yicha taqsimot',
        nationalityDistribution: 'Millat bo\'yicha taqsimot',
        ageDistribution: 'Yosh bo\'yicha taqsimot',
        experienceDistribution: 'Tajriba bo\'yicha taqsimot'
      },
      timeRange: {
        week: 'O\'tgan hafta',
        month: 'O\'tgan oy',
        quarter: 'O\'tgan chorak',
        year: 'O\'tgan yil'
      }
    }
  }
}