"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
        this.length = data.length;
    }
    NumbersCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    NumbersCollection.prototype.swap = function (i, j) {
        var leftHand = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = leftHand;
    };
    NumbersCollection.prototype.getData = function () {
        return this.data;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
