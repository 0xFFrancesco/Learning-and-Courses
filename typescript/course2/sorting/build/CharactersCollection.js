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
        var diff = this.data[i].charCodeAt(0) - this.data[j].charCodeAt(0);
        var lowerI = this.data[i].toLocaleLowerCase();
        var lowerJ = this.data[j].toLocaleLowerCase();
        if (lowerI === lowerJ) {
            return diff < 0;
        }
        return lowerI > lowerJ;
    };
    CharactersCollection.prototype.swap = function (i, j) {
        var characters = this.data.split("");
        var leftHand = characters[i];
        characters[i] = characters[j];
        characters[j] = leftHand;
        this.data = characters.join("");
    };
    CharactersCollection.prototype.getData = function () {
        return this.data;
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
