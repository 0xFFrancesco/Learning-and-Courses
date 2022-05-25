import { RowParser } from "./CsvFileReader";
import { dateStringToDate } from "./utils";

export enum MatchResult {
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D",
}

export type MatchTuple = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];

export const MatchRowParser: RowParser<MatchTuple> = (row) => {
	return [
		dateStringToDate(row[0]),
		row[1],
		row[2],
		parseInt(row[3]),
		parseInt(row[4]),
		row[5] as MatchResult,
		row[6],
	];
};
