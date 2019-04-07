"use strict";
//infer types
////////////
Object.defineProperty(exports, "__esModule", { value: true });
//string
////////////
var myName = 'Francesco';
//myName = 1;
//number
////////////
var myFavNumber = 7;
//myFavNumber = '7'
//boolean
////////////
var hasHobbies = true;
//hasHobbies = 3;
//assign types
////////////
var myNumber; //inferred type 'any'
myNumber = 27;
myNumber = '27';
var myNumber2; //explicit type assignment
myNumber2 = 27;
//array
////////////
//let hobbies = ['Sport', 'Reading']; //inferred type array of strings
//hobbies = [100];
var hobbies = ['Sport', 'Reading']; //explicit type array of strings
//tuples
////////////
var address = ['Street', 100];
//enums
////////////
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
var ColorOverridden;
(function (ColorOverridden) {
    ColorOverridden[ColorOverridden["Gray"] = 0] = "Gray";
    ColorOverridden[ColorOverridden["Green"] = 100] = "Green";
    ColorOverridden[ColorOverridden["Blue"] = 101] = "Blue";
    ColorOverridden[ColorOverridden["Violet"] = 3] = "Violet";
    ColorOverridden[ColorOverridden["Purple"] = 4] = "Purple"; // 4
})(ColorOverridden || (ColorOverridden = {}));
var myColor2 = ColorOverridden.Blue;
console.log(myColor2);
//any
////////////
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
//functions
////////////
function getName() {
    return myName;
}
console.log(getName());
//void
////////////
function sayHello() {
    console.log('Hello');
    //return 1;
}
sayHello();
//arguments types
////////////
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(3, 4));
//function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(3, 4));
//objects
////////////
var userData = {
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
var complex = {
    data: [1, 2, 3, 4],
    output: function (all) {
        return this.data;
    }
};
var complex2;
//complex2 = {};
//union types
////////////
//let StringOrNumber: any = 7;
//StringOrNumber = 'Lal';
var StringOrNumber = 7;
StringOrNumber = 'Lal';
//StringOrNumber = true;
//check types
////////////
var final = 3;
if (typeof final === 'number') {
    console.log('final is a number');
}
//never type (it never returns)
////////////
function neverReturn() {
    throw new Error('error');
}
//neverReturn();
//nullable types (for option "strictNullChecks" : true)
////////////
var canBeNull = 12;
canBeNull = null;
var canThisBeAny = null; //inferred of type null
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
var circle_1 = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
console.log(circle_1.PI);
console.log(circle_1.circumference(20));
console.log(rectangle_1.area(10, 20));
