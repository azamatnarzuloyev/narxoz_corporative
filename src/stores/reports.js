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
exports.useReportsStore = void 0;
var pinia_1 = require("pinia");
var vue_1 = require("vue");
exports.useReportsStore = (0, pinia_1.defineStore)('reports', function () {
    var activityLogs = (0, vue_1.ref)([
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
    ]);
    var reports = (0, vue_1.ref)([]);
    var addActivityLog = function (log) {
        activityLogs.value.push(__assign(__assign({ id: activityLogs.value.length + 1 }, log), { timestamp: new Date().toISOString() }));
    };
    var generateReport = function (type, dateRange) {
        var report = {
            id: "".concat(type, "-").concat(Date.now()),
            name: "".concat(type.charAt(0).toUpperCase() + type.slice(1), " Report"),
            type: type,
            dateRange: dateRange,
            data: {},
            createdAt: new Date().toISOString()
        };
        // Generate report data based on type
        switch (type) {
            case 'activity':
                report.data = activityLogs.value
                    .filter(function (log) { return new Date(log.timestamp) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); });
                break;
            case 'employee':
                // Add employee statistics
                break;
            case 'department':
                // Add department statistics
                break;
        }
        reports.value.push(report);
        return report;
    };
    return {
        activityLogs: activityLogs,
        reports: reports,
        addActivityLog: addActivityLog,
        generateReport: generateReport
    };
});
