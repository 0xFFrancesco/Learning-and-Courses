import { CsvFileReader } from "./CsvFileReader";
import { MatchRowParser, MatchResult, MatchTuple } from "./MatchResult";

const analyseFootballCsv = (matchesData: MatchTuple[]) => {
	let manUnitedWins = 0;

	for (let match of matchesData) {
		if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
			manUnitedWins++;
		} else if (
			match[2] === "Man United" &&
			match[5] === MatchResult.AwayWin
		) {
			manUnitedWins++;
		}
	}

	return manUnitedWins;
};

(() => {
	const fileData =
		new CsvFileReader<MatchTuple>("football.csv", MatchRowParser)
			.read()
			.getData() || [];
	const results = analyseFootballCsv(fileData);
	console.log(`Man. United won ${results} games.`);
})();
