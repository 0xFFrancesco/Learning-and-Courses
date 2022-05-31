import { MatchResult, MatchTuple } from "../MatchData";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
	constructor(private teamName: string) {}

	run(matches: MatchTuple[]): string {
		let wins = 0;

		for (let match of matches) {
			if (
				match[1] === this.teamName &&
				match[5] === MatchResult.HomeWin
			) {
				wins++;
			} else if (
				match[2] === this.teamName &&
				match[5] === MatchResult.AwayWin
			) {
				wins++;
			}
		}

		return `${this.teamName} won ${wins} games!`;
	}
}
