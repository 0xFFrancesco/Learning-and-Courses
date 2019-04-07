//infer types
////////////

//string
////////////
let myName = 'Francesco';
//myName = 1;

//number
////////////
let myFavNumber = 7;
//myFavNumber = '7'

//boolean
////////////
let hasHobbies = true;
//hasHobbies = 3;


//assign types
////////////
let myNumber; //inferred type 'any'
myNumber = 27;
myNumber = '27';

let myNumber2: number; //explicit type assignment
myNumber2 = 27;

//array
////////////
//let hobbies = ['Sport', 'Reading']; //inferred type array of strings
//hobbies = [100];
let hobbies: string[] = ['Sport', 'Reading']; //explicit type array of strings

//tuples
////////////
let address: [string, number] = ['Street', 100];

//enums
////////////
enum Color {
	Gray,   // 0
	Green,  // 1
	Blue    // 2
}

let myColor: Color = Color.Green;
console.log(myColor);

enum ColorOverridden {
	Gray,         // 0
	Green = 100,  // 100
	Blue,         // 101
	Violet = 3,   // 3
	Purple        // 4
}

let myColor2: ColorOverridden = ColorOverridden.Blue;
console.log(myColor2);

//any
////////////
let car: any = 'BMW';
car = {brand: 'BMW', series: 3};

//functions
////////////
function getName(): string {
	return myName;
}

console.log(getName());

//void
////////////
function sayHello(): void { //void - nothing to be returned
	console.log('Hello');
	//return 1;
}

sayHello();

//arguments types
////////////
function multiply(val1: number, val2: number): number {
	return val1 * val2;
}

console.log(multiply(3, 4));

//function types
let myMultiply: (v: number, v1: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(3, 4));

//objects
////////////
let userData: { name: string, number: number } = {
	name: 'Francesco',
	number: 7
};
//userData = {};
//userData.a = 11;
userData = {
	name: 'Luke',
	number: 2
};

//complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
	data: [1, 2, 3, 4],
	output: function (all: boolean): number[] {
		return this.data;
	}
};

//type alias
////////////
type ComplexObj = { data: number[], output: (all: boolean) => number[] };
let complex2: ComplexObj;
//complex2 = {};

//union types
////////////
//let StringOrNumber: any = 7;
//StringOrNumber = 'Lal';

let StringOrNumber: number | string = 7;
StringOrNumber = 'Lal';
//StringOrNumber = true;

//check types
////////////
let final = 3;
if (typeof final === 'number') {
	console.log('final is a number');
}

//never type (it never returns)
////////////
function neverReturn(): never {
	throw new Error('error');
}

//neverReturn();


//nullable types (for option "strictNullChecks" : true)
////////////
let canBeNull: number | null = 12;
canBeNull = null;
let canThisBeAny = null; //inferred of type null
//canThisBeAny = 9; error

//
////////////

//
////////////

//
////////////

//import module
////////////
console.log('imports');
import {circumference, PI} from "./math/circle";
import {area} from './math/rectangle';

console.log(PI);
console.log(circumference(20));
console.log(area(10, 20));