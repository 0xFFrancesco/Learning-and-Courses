import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchTuple } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
	run(matches: MatchTuple[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	static winsAnalysisWithHtmlReport(teamName: string): Summary {
		return new Summary(new WinsAnalysis(teamName), new HtmlReport());
	}

	constructor(
		private analyzer: Analyzer,
		public outputTarger: OutputTarget
	) {}

	buildAndPrintReport(matches: MatchTuple[]) {
		this.outputTarger.print(this.analyzer.run(matches));
	}
}
