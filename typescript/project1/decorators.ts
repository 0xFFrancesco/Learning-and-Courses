//decorators
////////////

function logged(constructor: Function) {
	console.log(constructor);
}

@logged
class PersonD {
	constructor() {
		console.log('hi');
	}

}

//factory
function logging(value: boolean): Function | null {
	return value ? logged : null;
}

@logging(true)
class CarD {

}

//advanced
function printable(constructor: Function) {
	constructor.prototype.print = function () {
		console.log(this);
	};
}

@printable
class PlantD {
	name = 'green plant';
}

const plantd = new PlantD();
(<any>plantd).print(); //TS bug (?) that doesn't recognize the print method