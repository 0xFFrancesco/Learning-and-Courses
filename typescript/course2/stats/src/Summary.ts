import { MatchTuple } from "./MatchData";

export interface Analyzer {
	run(matches: MatchTuple[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	constructor(
		private analyzer: Analyzer,
		public outputTarger: OutputTarget
	) {}

	buildAndPrintReport() {
		this.outputTarger.print(this.analyzer.run());
	}
}
