package main

func main() {

	//var card string = "Ace of Spades"
	//card := "Ace of Spades" //alternative way of declaring a variable

	cards := deck{"Ace of Spades", newCard()}
	cards = append(cards, "Six of Spades") //append returns a new Slice instead of modifying the existing one

	cards.print()

}

func newCard() string {
	return "Five of Diamonds"
}
