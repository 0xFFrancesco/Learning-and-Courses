"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRowParser = exports.MatchResult = void 0;
var utils_1 = require("./utils");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
var MatchRowParser = function (row) {
    return [
        (0, utils_1.dateStringToDate)(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5],
        row[6],
    ];
};
exports.MatchRowParser = MatchRowParser;
