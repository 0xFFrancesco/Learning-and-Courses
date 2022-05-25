"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var analyseFootballCsv = function (matchesData) {
    var manUnitedWins = 0;
    for (var _i = 0, matchesData_1 = matchesData; _i < matchesData_1.length; _i++) {
        var match = matchesData_1[_i];
        if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
            manUnitedWins++;
        }
        else if (match[2] === "Man United" &&
            match[5] === MatchResult_1.MatchResult.AwayWin) {
            manUnitedWins++;
        }
    }
    return manUnitedWins;
};
(function () {
    var fileData = new CsvFileReader_1.CsvFileReader("football.csv", MatchResult_1.MatchRowParser)
        .read()
        .getData() || [];
    var results = analyseFootballCsv(fileData);
    console.log("Man. United won ".concat(results, " games."));
})();
