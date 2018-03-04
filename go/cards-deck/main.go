package main

import "fmt"

func main() {

	//var card string = "Ace of Spades"
	//card := "Ace of Spades" //alternative way of declaring a variable

	cards := newDeckFromFile("cards")
	cards.shuffle()
	hand, remainingDeck := deal(cards, 5)

	fmt.Println("\n HAND: \n")
	hand.print()
	fmt.Println("\n DECK: \n")
	remainingDeck.print()

}
