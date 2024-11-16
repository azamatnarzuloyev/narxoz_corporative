"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEmployeeStore = void 0;
var pinia_1 = require("pinia");
var vue_1 = require("vue");
exports.useEmployeeStore = (0, pinia_1.defineStore)('employees', function () {
    var employees = (0, vue_1.ref)([
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
            citizenship: 'Uzbekistan'
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
            citizenship: 'Uzbekistan'
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
            citizenship: 'Uzbekistan'
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
            citizenship: 'Uzbekistan'
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
            citizenship: 'Russia'
        }
    ]);
    var addEmployee = function (employee) {
        employees.value.push(__assign({ id: employees.value.length + 1 }, employee));
    };
    var updateEmployee = function (id, data) {
        var index = employees.value.findIndex(function (emp) { return emp.id === id; });
        if (index !== -1) {
            employees.value[index] = __assign(__assign({}, employees.value[index]), data);
        }
    };
    var deleteEmployee = function (id) {
        employees.value = employees.value.filter(function (emp) { return emp.id !== id; });
    };
    return {
        employees: employees,
        addEmployee: addEmployee,
        updateEmployee: updateEmployee,
        deleteEmployee: deleteEmployee
    };
});
