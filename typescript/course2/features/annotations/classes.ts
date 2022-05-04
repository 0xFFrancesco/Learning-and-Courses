class Vehicle {
	constructor(public color: string) {}
	// THIS:
	// constructor(public color: string) {}
	// IS EQUIVALENT TO:
	// color: string = "red";
	// constructor(color: string) {
	// 	this.color = color;
	// }

	protected honk(): void {
		console.log("beeep!");
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log("bruuum bruum");
	}

	startDriving(): void {
		this.drive();
		this.honk();
	}
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car(4, "yellow");
car.startDriving();
