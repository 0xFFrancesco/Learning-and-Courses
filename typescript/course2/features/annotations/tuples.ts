const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

// Enforce the order of types in the array/tuple.
type Drink = [string, boolean, number];

const drinkTuple: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 30];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
	horsePower: 400,
	weight: 3354,
};
