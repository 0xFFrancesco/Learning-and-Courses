"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var getData = function () {
    var matches = fs_1.default.readFileSync("football.csv", {
        encoding: "utf-8",
    });
    var matchesData = matches
        .split("\n")
        .map(function (row) { return row.split(","); });
    return matchesData;
};
var analyse = function (matchesData) {
    var manUnitedWins = 0;
    for (var _i = 0, matchesData_1 = matchesData; _i < matchesData_1.length; _i++) {
        var match = matchesData_1[_i];
        if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
            manUnitedWins++;
        }
        else if (match[2] === "Man United" &&
            match[5] === MatchResult.AwayWin) {
            manUnitedWins++;
        }
    }
    return manUnitedWins;
};
(function () {
    var results = analyse(getData());
    console.log("Man. United won ".concat(results, " games."));
})();
