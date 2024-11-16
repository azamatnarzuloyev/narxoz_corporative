import { defineStore } from 'pinia';
import { ref } from 'vue';

// Employee interfeysini aniqlash
interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  nationality: string;
  gender: string;
  imageUrl: string;
  startDate: string; // YYYY-MM-DD format
  salary: string; // e.g., '8,000,000 UZS'
  address: string;
  birthDate: string; // YYYY-MM-DD format
  citizenship: string;
}

export const useEmployeeStore = defineStore('employees', () => {
  // Employees massivini tiplash
  const employees = ref<Employee[]>([
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
      address: 'Tashkent, Mirabad district',
      birthDate: '1990-05-15',
      citizenship: 'Uzbekistan',
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
      address: 'Tashkent, Yunusabad district',
      birthDate: '1988-08-20',
      citizenship: 'Uzbekistan',
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
      address: 'Tashkent, Chilanzar district',
      birthDate: '1995-03-10',
      citizenship: 'Uzbekistan',
    },
    {
      id: 4,
      name: 'Elena Kim',
      position: 'HR Manager',
      department: 'HR',
      email: 'elena.k@company.com',
      phone: '+998 90 123 45 70',
      nationality: 'Korean',
      gender: 'Female',
      imageUrl: 'https://i.pravatar.cc/150?img=4',
      startDate: '2019-08-01',
      salary: '12,000,000 UZS',
      address: 'Tashkent, Mirzo-Ulugbek district',
      birthDate: '1987-11-25',
      citizenship: 'Uzbekistan',
    },
    {
      id: 5,
      name: 'Alexander Petrov',
      position: 'Sales Director',
      department: 'Sales',
      email: 'alex.p@company.com',
      phone: '+998 90 123 45 71',
      nationality: 'Russian',
      gender: 'Male',
      imageUrl: 'https://i.pravatar.cc/150?img=5',
      startDate: '2018-04-01',
      salary: '15,000,000 UZS',
      address: 'Tashkent, Yakkasaray district',
      birthDate: '1985-07-15',
      citizenship: 'Russia',
    },
  ]);

  // Xodim qo'shish funksiyasi
  const addEmployee = (employee: Omit<Employee, 'id'>) => {
    employees.value.push({
      id: employees.value.length + 1,
      ...employee,
    });
  };

  // Xodim ma'lumotini yangilash funksiyasi
  const updateEmployee = (id: number, data: Partial<Employee>) => {
    const index = employees.value.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      employees.value[index] = { ...employees.value[index], ...data };
    }
  };

  // Xodimni o'chirish funksiyasi
  const deleteEmployee = (id: number) => {
    employees.value = employees.value.filter((emp) => emp.id !== id);
  };

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
});
