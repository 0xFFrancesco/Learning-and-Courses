// Exercise 1 - How was your TypeScript Class?
function Car(name) {
	this.name = name;
	this.acceleration = 0;

	this.honk = function () {
		console.log("Toooooooooot!");
	};

	this.accelerate = function (speed) {
		this.acceleration = this.acceleration + speed;
	};
}

var c = new Car("BMW");
c.honk();
console.log(c.acceleration);
c.accelerate(10);
console.log(c.acceleration);

//SOLUTION
class Car2 {
	constructor(public name: string, public acceleration: number = 0) {}

	honk(): void {
		console.log("tot");
	}

	accelerate(speed: number): void {
		this.acceleration += speed;
	}
}

c = new Car2("BMW");
c.honk();
console.log(c.acceleration);
c.accelerate(10);
console.log(c.acceleration);

// Exercise 2 - Two objects, based on each other ...
var baseObject = {
	width: 0,
	length: 0,
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
	return this.width * this.length;
};
console.log(rectangle.calcSize());

//SOLUTION
class Base {
	width: number = 0;
	length: number = 0;
}

class Rectangle extends Base {
	constructor(width: number, length: number) {
		super();
		this.width = width;
		this.length = length;
	}

	calcSize(): number {
		return this.width * this.length;
	}
}

console.log(new Rectangle(5, 2).calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var p = {
	_firstName: "",
};
Object.defineProperty(p, "firstName", {
	get: function (): any {
		return this._firstName;
	},
	set: function (value: any): any {
		if (value.length > 3) {
			this._firstName = value;
		} else {
			this._firstName = "";
		}
	},
	enumerable: true,
	configurable: true,
});
console.log(p.firstName);
p.firstName = "Ma";
console.log(p.firstName);
p.firstName = "Maximilian";
console.log(p.firstName);

//SOLUTION
class P {
	private _firstName: string = "";
	get firstName(): string {
		return this._firstName;
	}
	set firstName(val: string) {
		if (val.length > 3) {
			this._firstName = val;
		} else {
			this._firstName = "";
		}
	}
}

let p2 = new P();
console.log(p2.firstName);
p2.firstName = "Ma";
console.log(p2.firstName);
p2.firstName = "Maximilian";
console.log(p2.firstName);
