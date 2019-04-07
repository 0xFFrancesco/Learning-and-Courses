//namespaces
////////////
/// <reference path="namespaces-rectangle.ts" />
// remember to load the file before, or to bundle everything in a single file
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function circumference(radius) {
        return radius * 2 * PI;
    }
    MyMath.circumference = circumference;
})(MyMath || (MyMath = {}));
console.log(MyMath.circumference(10));
console.log(MyMathRectangle.area(10, 10));
