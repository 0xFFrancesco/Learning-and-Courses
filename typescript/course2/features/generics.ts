class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

const arr = new ArrayOfAnything<string>(["a", "b", "cd", "efg"]);

//Type inference on generics!
const arr2 = new ArrayOfAnything(["a", "b", "cd", "efg"]);

//Example of generics with functions
////////////////////////////////////

function printStrings(arr: string[]): void {
	arr.forEach(console.log);
}

function printNumbers(arr: number[]): void {
	arr.forEach(console.log);
}

function printAnything<T>(arr: T[]): void {
	arr.forEach(console.log);
}

printAnything<string>(["a", "bc", "def"]);

//Generics Constraints
//////////////////////

class Car {
	print() {
		console.log("I am a Car");
	}
}

class House {
	print() {
		console.log("I am an House");
	}
}

interface Printable {
	print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
	arr.forEach((item) => item.print());
}

printHousesOrCars<House | Car>([new House(), new Car(), new Car()]);
