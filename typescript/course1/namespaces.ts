//namespaces
////////////

/// <reference path="namespaces-rectangle.ts" />
// remember to load the file before, or to bundle everything in a single file

namespace MyMath {
	const PI = 3.14;

	export function circumference(radius: number): number {
		return radius * 2 * PI;
	}
}

console.log(MyMath.circumference(10));
console.log(MyMathRectangle.area(10, 10));