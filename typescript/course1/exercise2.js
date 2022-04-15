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
var Car2 = /** @class */ (function () {
    function Car2(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car2.prototype.honk = function () {
        console.log('tot');
    };
    Car2.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car2;
}());
c = new Car2("BMW");
c.honk();
console.log(c.acceleration);
c.accelerate(10);
console.log(c.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
//SOLUTION
var Base = /** @class */ (function () {
    function Base() {
        this.width = 0;
        this.length = 0;
    }
    return Base;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Base));
console.log(new Rectangle(5, 2).calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var p = {
    _firstName: ""
};
Object.defineProperty(p, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(p.firstName);
p.firstName = "Ma";
console.log(p.firstName);
p.firstName = "Maximilian";
console.log(p.firstName);
//SOLUTION
var P = /** @class */ (function () {
    function P() {
        this._firstName = '';
    }
    Object.defineProperty(P.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            if (val.length > 3) {
                this._firstName = val;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return P;
}());
var p2 = new P();
console.log(p2.firstName);
p2.firstName = "Ma";
console.log(p2.firstName);
p2.firstName = "Maximilian";
console.log(p2.firstName);
