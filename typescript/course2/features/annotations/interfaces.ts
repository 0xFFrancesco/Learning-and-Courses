interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: "civic",
	year: new Date(),
	broken: true,
	summary() {
		return `This is a ${this.name}.`;
	},
};

const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
	summary() {
		return `This is a ${this.color} drink.`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
