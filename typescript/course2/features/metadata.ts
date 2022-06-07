import "reflect-metadata";

const plane = {
	color: "red",
};

Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", 10, plane);

const note = Reflect.getMetadata("note", plane);
const height = Reflect.getMetadata("height", plane);

console.log(note, height);

Reflect.defineMetadata("note", "hi there color", plane, "color");
const note2 = Reflect.getMetadata("note", plane, "color");

console.log(note2);

/////////////////////////////

@printMetadata
class Plane {
	color: string = "red";

	@markFunction("secret-info")
	fly(): void {
		console.log("vrrrrrrr");
	}

	@markFunction("secret-info-2")
	land(): void {
		console.log("Landing!");
	}
}

function markFunction(message: string) {
	return function (target: Plane, key: string) {
		Reflect.defineMetadata("secret", message, target, key);
	};
}

function printMetadata(target: typeof Plane) {
	for (let key in target.prototype) {
		const secret = Reflect.getMetadata("secret", target.prototype, key);
		console.log(secret);
	}
}
