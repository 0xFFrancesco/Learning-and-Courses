"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var _a = dateString.split("/").map(parseInt), day = _a[0], month = _a[1], year = _a[2];
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
