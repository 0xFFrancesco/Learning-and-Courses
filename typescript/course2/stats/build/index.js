"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchData_1 = require("./MatchData");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary_1 = require("./Summary");
(function () {
    var fileData = new CsvFileReader_1.CsvFileReader("football.csv", MatchData_1.MatchRowParser)
        .read()
        .getData() || [];
    var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man City"), new ConsoleReport_1.ConsoleReport());
    summary.buildAndPrintReport(fileData);
})();
