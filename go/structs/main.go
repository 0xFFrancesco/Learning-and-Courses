package main

import "fmt"

type person struct {
	firstName string
	lastName  string
	// short syntax, key name equals type name
	contactInfo
}

type contactInfo struct {
	email   string
	zipCode int
}

func (p person) print() {
	fmt.Println(p.firstName + " " + p.lastName)
}

// Go by default pass variables by value, thus we ne to use pointers
func (pointerToPerson *person) setLastName(n string) {
	(*pointerToPerson).lastName = n
}
// IMPORTANT NOTE: when you create a slice, internally Go creates an array and the slice points to it.
// This way when you pass a slice by value (by default), you are just passing the slice which contains
// the pointer to the internally created array, so it behaves like a pointer pass (editing the slice will
// reflect the change on the original slice (array))
// Along with slices, also these types are passed by pointer (reference): map, channel, pointer, function
// Instead the 'passed by value' types are: int, float, string, bool, struct

func main() {

	// short syntax
	// luke := person{"Luke", "Smith"}

	// zero value pre-populated based syntax
	// var luke person

	// resilient syntax in case of struct variables order change
	luke := person{
		firstName: "Luke",
		lastName:  "Smith",
		contactInfo: contactInfo{
			email:   "luke@gmail.com",
			zipCode: 33021,
		},
	}

	// edit a struct property
	// luke.lastName = "Anderson"

	// Go by default pass variables by value, thus we ne to use pointers
	lukePointer := &luke
	lukePointer.setLastName("Anderson")

	// use pointer without using another variable
	(&luke).setLastName("Allyson")

	// if the receiver is set to receive a pointer, Go automatically convert the variable to the pointer
	luke.setLastName("McCart")

	// %=v prints key and value
	// fmt.Printf("%+v", luke)
	luke.print()

}
