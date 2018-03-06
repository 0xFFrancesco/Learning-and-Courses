package main

import (
	"fmt"
	"strings"
)

func main() {

	// in maps every key and every value must share the same type
	colors := map[string /*key type*/ ]string /*value type*/ {
		"red":   "#FF0000",
		"green": "#00FF00",
		"blue":  "#0000FF",
	}

	fmt.Println(colors)

	changeMapRedColorToBlack(colors)
	fmt.Println(colors)

	// delete a key
	delete(colors, "blue")
	fmt.Println(colors)

	printMap(colors)

	// other way to declare a map
	colors2 := make(map[string]string)
	colors2["test"] = "test"

	fmt.Println(colors2)

}

// maps are passed by reference! (no need of pointers)
func changeMapRedColorToBlack(m map[string]string) {
	m["red"] = "#000000"
}

// how to iterate a map
func printMap(m map[string]string) {
	for key, val := range m {
		fmt.Printf("Hex code for color %v is: %v.\n", strings.Title(key), strings.ToUpper(val))
	}
}
