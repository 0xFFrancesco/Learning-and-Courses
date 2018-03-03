package main

import "fmt"

func main() {

	//var card string = "Ace of Spades"
	//card := "Ace of Spades" //alternative way of declaring a variable

	cards := newDeckFromFile("cards")
	hand, remainingDeck := deal(cards, 5)

	fmt.Println("HAND:")
	hand.print()
	fmt.Println("DECK:")
	remainingDeck.print()

}
