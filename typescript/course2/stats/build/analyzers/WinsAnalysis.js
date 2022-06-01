"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchData_1 = require("../MatchData");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.teamName &&
                match[5] === MatchData_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.teamName &&
                match[5] === MatchData_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "".concat(this.teamName, " won ").concat(wins, " games!");
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
