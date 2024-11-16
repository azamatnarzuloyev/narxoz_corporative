"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var HomePage_vue_1 = require("../views/HomePage.vue");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage_vue_1.default
        },
        {
            path: '/employees',
            name: 'employees',
            component: function () { return Promise.resolve().then(function () { return require('../views/EmployeesPage.vue'); }); }
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: function () { return Promise.resolve().then(function () { return require('../views/StatisticsPage.vue'); }); }
        },
        {
            path: '/reports',
            name: 'reports',
            component: function () { return Promise.resolve().then(function () { return require('../views/ReportsPage.vue'); }); }
        },
        {
            path: '/profile',
            name: 'profile',
            component: function () { return Promise.resolve().then(function () { return require('../views/ProfilePage.vue'); }); }
        }
    ]
});
exports.default = router;
