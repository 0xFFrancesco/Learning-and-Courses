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
function logging(value: boolean): any {
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

//multiple decorators
@logging(true)
@printable
class PlantD2 {
	name = 'green plant';
}

//method decorator and property decorator

class ProjectD {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	calcBudget() {
		console.log(1000);
	}

}

const project = new ProjectD('Super project');
project.calcBudget();
project.calcBudget = function () {
	console.log(3000);
};
project.calcBudget();

function editable(val: boolean) { //method decorator
	return function (target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = val;
	};
}

function editableProperty(val: boolean) { //property decorator
	return function (target: any, propName: string): any {
		const newDescriptor: PropertyDescriptor = {
			writable: false
		};
		return newDescriptor;
	};
}

class ProjectD2 {

	@editableProperty(false)
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	@editable(false)
	calcBudget() {
		console.log(1000);
	}

}

const project2 = new ProjectD2('Super project');
project2.name = 'test'; //DOESN'T OVERRIDE
project2.calcBudget();
project2.calcBudget = function () { //DOESN'T OVERRIDE
	console.log(3000);
};
project2.calcBudget();

//parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
	console.log(target);
	console.log(methodName);
	console.log(paramIndex);
}

class Course {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	printStudentNumbers(mode: string, @printInfo printAll: boolean) {
		if (printAll) {
			console.log(1000);
		} else {
			console.log(200);
		}
	}
}

const course = new Course('test');
course.printStudentNumbers('any', true);
course.printStudentNumbers('any', false);