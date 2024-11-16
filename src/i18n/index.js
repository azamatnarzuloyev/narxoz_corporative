"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_i18n_1 = require("vue-i18n");
var messages = {
    en: {
        common: {
            all: 'All',
            edit: 'Edit',
            save: 'Save',
            cancel: 'Cancel'
        },
        dashboard: {
            welcome: 'Welcome to Dashboard'
        },
        employees: {
            title: 'Employees',
            searchPlaceholder: 'Search employees...',
            filters: {
                nationality: 'Nationality',
                gender: 'Gender',
                department: 'Department'
            },
            details: {
                personal: 'Personal Information',
                contact: 'Contact Information'
            }
        },
        profile: {
            title: 'Profile',
            individual: 'Individual',
            legalEntity: 'Legal Entity',
            organizationInfo: 'Organization Information',
            organizationName: 'Organization Name',
            directorInfo: 'Director Information',
            name: 'Name',
            position: 'Position',
            founders: 'Founders',
            financialInfo: 'Financial Information',
            bankName: 'Bank Name',
            accountNumber: 'Account Number',
            tin: 'TIN',
            charter: 'Charter Capital',
            birthDate: 'Date of Birth',
            birthPlace: 'Place of Birth',
            socialStatus: 'Social Status',
            maritalStatus: 'Marital Status',
            employmentStatus: 'Employment Status',
            socialCategory: 'Social Category',
            contactInfo: 'Contact Information',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            single: 'Single',
            married: 'Married',
            employed: 'Employed',
            unemployed: 'Unemployed',
            lowIncome: 'Low Income',
            middleIncome: 'Middle Income',
            highIncome: 'High Income'
        },
        reports: {
            title: 'Reports',
            generateReport: 'Generate Report',
            recentActivity: 'Recent Activity'
        },
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
        common: {
            all: 'Barchasi',
            edit: 'Tahrirlash',
            save: 'Saqlash',
            cancel: 'Bekor qilish'
        },
        dashboard: {
            welcome: 'Boshqaruv paneliga xush kelibsiz'
        },
        employees: {
            title: 'Xodimlar',
            searchPlaceholder: 'Xodimlarni qidirish...',
            filters: {
                nationality: 'Millati',
                gender: 'Jinsi',
                department: 'Bo\'lim'
            },
            details: {
                personal: 'Shaxsiy ma\'lumotlar',
                contact: 'Aloqa ma\'lumotlari'
            }
        },
        profile: {
            title: 'Profil',
            individual: 'Jismoniy shaxs',
            legalEntity: 'Yuridik shaxs',
            organizationInfo: 'Tashkilot haqida ma\'lumot',
            organizationName: 'Tashkilot nomi',
            directorInfo: 'Direktor ma\'lumotlari',
            name: 'Ism',
            position: 'Lavozim',
            founders: 'Muassislar',
            financialInfo: 'Moliyaviy ma\'lumotlar',
            bankName: 'Bank nomi',
            accountNumber: 'Hisob raqami',
            tin: 'STIR',
            charter: 'Ustav kapitali',
            birthDate: 'Tug\'ilgan sana',
            birthPlace: 'Tug\'ilgan joy',
            socialStatus: 'Ijtimoiy holat',
            maritalStatus: 'Oilaviy holat',
            employmentStatus: 'Bandlik holati',
            socialCategory: 'Ijtimoiy toifa',
            contactInfo: 'Aloqa ma\'lumotlari',
            phone: 'Telefon',
            email: 'Email',
            address: 'Manzil',
            single: 'Bo\'ydoq',
            married: 'Oilali',
            employed: 'Ishlaydigan',
            unemployed: 'Ishsiz',
            lowIncome: 'Past daromadli',
            middleIncome: 'O\'rta daromadli',
            highIncome: 'Yuqori daromadli'
        },
        reports: {
            title: 'Hisobotlar',
            generateReport: 'Hisobot yaratish',
            recentActivity: 'So\'nggi faoliyat'
        },
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
};
var i18n = (0, vue_i18n_1.createI18n)({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: messages
});
exports.default = i18n;
