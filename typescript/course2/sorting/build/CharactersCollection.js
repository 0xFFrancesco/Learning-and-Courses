"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    CharactersCollection.prototype.swap = function (i, j) {
        var leftHand = this.data[i];
        //this.data[i] = this.data[j];
        //this.data[j] = leftHand;
    };
    CharactersCollection.prototype.getData = function () {
        return this.data;
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
