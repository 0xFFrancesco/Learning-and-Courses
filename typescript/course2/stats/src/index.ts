import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchRowParser, MatchTuple } from "./MatchData";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

(() => {
	const fileData =
		new CsvFileReader<MatchTuple>("football.csv", MatchRowParser)
			.read()
			.getData() || [];
	const summary = new Summary(
		new WinsAnalysis("Man City"),
		new ConsoleReport()
	);

	summary.buildAndPrintReport(fileData);
})();
