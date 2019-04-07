//class
////////////
class Person {
	public name: string;
	private type: string;
	protected age: number = 7; //available in child classes too

	constructor(name: string, public username: string) {
		this.name = name;
		this.setType('cool');
	}

	printAge() {
		console.log(this.age);
	}

	private setType(type: string) {
		this.type = type;
		console.log(this.type);
	}

}

const person = new Person('Francesco', 'fr007');

console.log(person.name, person.username, /*person.age*/);

person.printAge();
//person.setType('cool'); private method

//inheritance
////////////
class Max extends Person {
	name = 'Max'; //always override parent class

	constructor(username: string) { //overriding the constructor
		super('Max', username);
		this.age = 33;
		//console.log(this.type); //can't access type as is private
	}

}

//const pmax = new Max('Anna', 'max001'); //name is still 'Max'
const pmax = new Max('max001');
console.log(pmax);

//getters and setters
////////////
class Plant {
	private _species: string = 'default';

	set species(value: string) {
		if (value.length > 3) {
			this._species = value;
		} else {
			console.warn('invalid length');
		}
	}

	get species() {
		return this._species;
	}

}

const plant = new Plant();
console.log(plant.species);
plant.species = 'te';
console.log(plant.species);
plant.species = 'test';
console.log(plant.species);

//statics
////////////
class Helpers {
	static doublePI: number = 2 * Math.PI;

	static calcCircumference(rad: number): number {
		return this.doublePI * rad;
	}
}

const pi2x: number = Helpers.doublePI;
console.log(pi2x);
console.log(Helpers.calcCircumference(4));

//abstract
////////////
abstract class Project {
	projectName: string = 'default';
	budget: number = 1000;

	abstract changeName(name: string): void;

	calcBudget(): number {
		return this.budget * 2;
	}
}

class ITProject extends Project {
	changeName(name: string): void {
		this.projectName = `IT_${name}`;
	}

	calcBudget(): number {
		return this.budget * 3;
	}
}

let prj = new ITProject();
console.log(prj);
prj.changeName('test');
console.log(prj);
console.log(prj.calcBudget());

//private constructors and singletons
////////////
class onlyOne {
	private static instance: onlyOne;

	private constructor(public readonly name: string) {}

	static getInstance() {
		if (!onlyOne.instance) {
			onlyOne.instance = new onlyOne('test');
		}
		return onlyOne.instance;
	}
}

//let wrong = new onlyOne('test'); //can't be instantiated from outside due to private constructor
let right = onlyOne.getInstance();
console.log(right);