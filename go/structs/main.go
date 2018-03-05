package main

import "fmt"

type person struct {
	firstName string
	lastName  string
	contact   contactInfo
}

type contactInfo struct {
	email   string
	zipCode int
}

func main() {

	// short syntax
	// luke := person{"Luke", "Smith"}

	// zero value pre-populated based syntax
	// var luke person

	// resilient syntax in case of struct variables order change
	luke := person{firstName: "Luke", lastName: "Smith"}

	// edit a struct property
	luke.lastName = "Anderson"

	// %=v prints key and value
	fmt.Printf("%+v", luke)

}
