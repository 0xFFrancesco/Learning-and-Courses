package main

import (
	"math"
	"fmt"
	"strconv"
)

type square struct {
	sideLength float64
}

type triangle struct {
	height float64
	base   float64
}

type shape interface {
	getArea() float64
}

func main() {

	s := square{sideLength: 3.5}
	t := triangle{base: 4, height: 2}

	printArea(s, "Square")
	printArea(t, "Triangle")

}

func (s square) getArea() float64 {
	return math.Pow(s.sideLength, 2)
}

func (t triangle) getArea() float64 {
	return (t.base * t.height) / 2
}

func printArea(s shape, name string) {
	fmt.Println(name + " area of: " + strconv.FormatFloat(s.getArea(), 'f', 1, 64) + ".")
}
