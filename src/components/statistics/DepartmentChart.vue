<script setup lang="ts">
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps<{
  data: Record<string, number>
}>()

const chartData = computed(() => ({
  labels: Object.keys(props.data),
  datasets: [
    {
      data: Object.values(props.data),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF'
      ],
      borderWidth: 1
    }
  ]
}))

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        padding: 20,
        usePointStyle: true
      }
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const total = Object.values(props.data).reduce((a, b) => a + b, 0)
          const percentage = ((context.raw as number) / total * 100).toFixed(1)
          return `${context.label}: ${context.raw} (${percentage}%)`
        }
      }
    }
  }
}
</script>

<template>
  <div class="h-64">
    <Pie :data="chartData" :options="options" />
  </div>
</template>