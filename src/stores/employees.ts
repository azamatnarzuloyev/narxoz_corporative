import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmployeeStore = defineStore('employees', () => {
  const employees = ref([
    {
      id: 1,
      name: 'Aziz Karimov',
      position: 'Senior Developer',
      department: 'Engineering',
      email: 'aziz.k@company.com',
      phone: '+998 90 123 45 67',
      nationality: 'Uzbek',
      gender: 'Male',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      startDate: '2020-03-15',
      salary: '8,000,000 UZS',
      address: 'Tashkent, Mirabad district'
    },
    {
      id: 2,
      name: 'Malika Azizova',
      position: 'Product Manager',
      department: 'Product',
      email: 'malika.a@company.com',
      phone: '+998 90 123 45 68',
      nationality: 'Uzbek',
      gender: 'Female',
      imageUrl: 'https://i.pravatar.cc/150?img=2',
      startDate: '2021-06-01',
      salary: '10,000,000 UZS',
      address: 'Tashkent, Yunusabad district'
    },
    {
      id: 3,
      name: 'Jamshid Toshmatov',
      position: 'Marketing Specialist',
      department: 'Marketing',
      email: 'jamshid.t@company.com',
      phone: '+998 90 123 45 69',
      nationality: 'Uzbek',
      gender: 'Male',
      imageUrl: 'https://i.pravatar.cc/150?img=3',
      startDate: '2022-01-15',
      salary: '6,000,000 UZS',
      address: 'Tashkent, Chilanzar district'
    }
  ])

  const addEmployee = (employee) => {
    employees.value.push({
      id: employees.value.length + 1,
      ...employee
    })
  }

  const updateEmployee = (id, data) => {
    const index = employees.value.findIndex(emp => emp.id === id)
    if (index !== -1) {
      employees.value[index] = { ...employees.value[index], ...data }
    }
  }

  const deleteEmployee = (id) => {
    employees.value = employees.value.filter(emp => emp.id !== id)
  }

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee
  }
})