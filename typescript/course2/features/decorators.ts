@classDecorator
class Boat {
	@testDecorator
	color: string = "red";

	@testDecorator
	get formattedColor(): string {
		return `This boats color is ${this.color}`;
	}

	@logError("Sorry, boat was sunk in ocean!")
	pilot(@parameterDecorator speed: string): void {
		if (speed === "fast") {
			console.log("swiiish");
		} else {
			console.log("nothing");
		}
	}
}

//!! Decorators are run on "compile-time" and not on "execution-time".
// -> For example it's not run when a new instance is created.

function logError(message: string) {
	//Wrap a method in an outer function.
	return function (
		target: any,
		key: string,
		descriptor: PropertyDescriptor
	): void {
		const method = descriptor.value;

		descriptor.value = function () {
			try {
				method();
			} catch (err) {
				console.log(message);
			}
		};
	};
}

function classDecorator(constructor: typeof Boat) {
	//Decorators can be applied to a whole class definition as well!
	console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
	//Decorators can be applied to arguments as well!
	console.log(key, index);
}

function testDecorator(target: any, key: string) {
	console.log("Key", key);
}
