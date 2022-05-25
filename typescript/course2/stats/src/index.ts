import fs from "fs";

enum MatchResult {
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D",
}

const getData = () => {
	const matches = fs.readFileSync("football.csv", {
		encoding: "utf-8",
	});

	const matchesData = matches
		.split("\n")
		.map((row: string): string[] => row.split(","));

	return matchesData;
};

const analyse = (matchesData: string[][]) => {
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
	const results = analyse(getData());
	console.log(`Man. United won ${results} games.`);
})();
