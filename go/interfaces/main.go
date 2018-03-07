package main

import "fmt"

type bot interface {
	getGreeting() string
}
// it is like saying: if any other type has a function getGreeting which returns a string, then it is also automatically considered as type bot

type englishBot struct {
}

type spanishBot struct {
}

func main() {

	eb, sb := englishBot{}, spanishBot{}

	printGreetings(eb)
	printGreetings(sb)

}

// we can omit the receiver value if we don't use it
func ( /*eb*/ englishBot) getGreeting() string {
	// VERY custom logic between english and spanish bots
	return "Hi there!"
}

func (spanishBot) getGreeting() string {
	return "Hola!"
}

func printGreetings(b bot) {
	fmt.Println(b.getGreeting())
}
