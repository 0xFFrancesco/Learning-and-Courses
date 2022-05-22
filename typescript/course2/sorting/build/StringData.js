"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringData = void 0;
var StringData = /** @class */ (function () {
    function StringData(data) {
        this.data = data;
    }
    Object.defineProperty(StringData.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    StringData.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    StringData.prototype.swap = function (i, j) {
        var leftHand = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = leftHand;
    };
    StringData.prototype.getData = function () {
        return this.data;
    };
    return StringData;
}());
exports.StringData = StringData;
