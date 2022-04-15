//generics
////////////

//simple
function echo(data: any): any { //any in, any out: if receives a string, it may return another type
	return data;
}

console.log(echo('lal'));
console.log(echo(34));
console.log(echo({age: 34}));

//better
function betterEcho<T>(data: T): T { //T matches the type of the input, if receives a string, it will return a string
	return data;
}

console.log(betterEcho('lal'));
console.log(betterEcho<number>(34)); //explicit the generic as a number
console.log(betterEcho({age: 34}));

//built-in generics
const res: Array<number> = [1.2, 1.45]; //array is a generic type
res.push(-2.33);

//arrays
function printAll<T>(args: T[]): void {
	args.forEach(e => console.log(e));
}

printAll<string>(['ffd', 'dff']);

//generic types
const echo2: <T>(data: T) => T = betterEcho;
echo2<string>('test');

//generic classes
class SimpleMath<T extends number | string> { //constraints
	baseValue: T;
	multiply: T;

	calc(): number {
		return +this.baseValue * +this.multiply;
	}
}

//multiple generics at once
class SimpleMath2<T extends number, U extends string> {
	baseValue: T;
	multiply: U;

	calc(): number {
		return this.baseValue * +this.multiply;
	}
}

let s2 = new SimpleMath2();
s2.baseValue = 33;
s2.multiply = '33';
console.log(s2.calc());



//exercise



//Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
//
// Let's keep it simple and only add the following methods to the Map:

//setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap()

//The map should be usable like shown below:

//const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
//
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();

class MyMap<T> {
	private items: { [propName: string]: T } = {};

	setItem(key: string, val: T) {
		this.items[key] = val;
	}

	getItem(key: string) {
		return this.items[key];
	}

	clear() {
		this.items = {};
	}

	printMap() {
		Object.keys(this.items).forEach(k => {
			console.log(this.items[k]);
		});
	}
}

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();