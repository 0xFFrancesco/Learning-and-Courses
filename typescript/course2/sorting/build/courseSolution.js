"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCourseSolution = void 0;
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
var runCourseSolution = function () {
    sortAndLog(new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]));
    sortAndLog(new CharactersCollection_1.CharactersCollection("abCXsakwVDAlmssvA"));
};
exports.runCourseSolution = runCourseSolution;
var sortAndLog = function (input) {
    var sorter = new Sorter_1.Sorter(input);
    console.log("------------\nInput: ".concat(input.getData()));
    sorter.sort();
    console.log("Output: ".concat(sorter.getResult(), "\n------------"));
};
