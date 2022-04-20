const apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null;
let nothing: undefined;

// Built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [3, 7, 8];
let truths: boolean[] = [true, true, false];

// Class
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 30,
};

// Function
const logNumber: (i: number) => void = (i) => {
	console.log(i);
};

// When to use annotations
// 1) Funtion that returns the 'any type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
