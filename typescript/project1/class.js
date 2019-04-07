var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class
////////////
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 7; //available in child classes too
        this.name = name;
        this.setType('cool');
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Francesco', 'fr007');
console.log(person.name, person.username);
person.printAge();
//person.setType('cool'); private method
//inheritance
////////////
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(username) {
        var _this = _super.call(this, 'Max', username) || this;
        _this.name = 'Max'; //always override parent class
        _this.age = 33;
        return _this;
        //console.log(this.type); //can't access type as is private
    }
    return Max;
}(Person));
//const pmax = new Max('Anna', 'max001'); //name is still 'Max'
var pmax = new Max('max001');
console.log(pmax);
//getters and setters
////////////
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                console.warn('invalid length');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'te';
console.log(plant.species);
plant.species = 'test';
console.log(plant.species);
//statics
////////////
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (rad) {
        return this.doublePI * rad;
    };
    Helpers.doublePI = 2 * Math.PI;
    return Helpers;
}());
var pi2x = Helpers.doublePI;
console.log(pi2x);
console.log(Helpers.calcCircumference(4));
//abstract
////////////
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = "IT_" + name;
    };
    ITProject.prototype.calcBudget = function () {
        return this.budget * 3;
    };
    return ITProject;
}(Project));
var prj = new ITProject();
console.log(prj);
prj.changeName('test');
console.log(prj);
console.log(prj.calcBudget());
//private constructors and singletons
////////////
var onlyOne = /** @class */ (function () {
    function onlyOne(name) {
        this.name = name;
    }
    onlyOne.getInstance = function () {
        if (!onlyOne.instance) {
            onlyOne.instance = new onlyOne('test');
        }
        return onlyOne.instance;
    };
    return onlyOne;
}());
//let wrong = new onlyOne('test'); //can't be instantiated from outside due to private constructor
var right = onlyOne.getInstance();
console.log(right);
