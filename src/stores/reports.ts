import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ActivityLog {
  id: number
  user: string
  action: string
  target: string
  timestamp: string
}

export interface Report {
  id: string
  name: string
  type: 'activity' | 'employee' | 'department'
  dateRange: string
  data: any
  createdAt: string
}

export const useReportsStore = defineStore('reports', () => {
  const activityLogs = ref<ActivityLog[]>([
    {
      id: 1,
      user: 'John Smith',
      action: 'Updated employee profile',
      target: 'Sarah Johnson',
      timestamp: '2024-02-20T10:30:00'
    },
    {
      id: 2,
      user: 'Admin',
      action: 'Generated monthly report',
      target: 'Department Statistics',
      timestamp: '2024-02-20T09:15:00'
    },
    {
      id: 3,
      user: 'Sarah Johnson',
      action: 'Changed department',
      target: 'Marketing to Sales',
      timestamp: '2024-02-19T16:45:00'
    }
  ])

  const reports = ref<Report[]>([])

  const addActivityLog = (log: Omit<ActivityLog, 'id'>) => {
    activityLogs.value.push({
      id: activityLogs.value.length + 1,
      ...log,
      timestamp: new Date().toISOString()
    })
  }

  const generateReport = (type: Report['type'], dateRange: string) => {
    const report: Report = {
      id: `${type}-${Date.now()}`,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Report`,
      type,
      dateRange,
      data: {},
      createdAt: new Date().toISOString()
    }

    // Generate report data based on type
    switch (type) {
      case 'activity':
        report.data = activityLogs.value
          .filter(log => new Date(log.timestamp) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
        break
      case 'employee':
        // Add employee statistics
        break
      case 'department':
        // Add department statistics
        break
    }

    reports.value.push(report)
    return report
  }

  return {
    activityLogs,
    reports,
    addActivityLog,
    generateReport
  }
})