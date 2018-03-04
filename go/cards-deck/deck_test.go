package main

import (
	"testing"
	"os"
)

func TestNewDeck(t *testing.T) {

	d := newDeck()

	if len(d) != 52 {
		t.Errorf("Expected deck lenght of 52, but got %v.", len(d))
	}

	if d[0] != "Ace of Clubs" {
		t.Errorf("Expected first card to be Ace of Clubs, got %v.", d[0])
	}

	if d[51] != "King of Diamonds" {
		t.Errorf("Expected 52th card to be King of Diamonds, got %v.", d[0])
	}

}

func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {

	fileName := "_testDeck"
	os.Remove(fileName)

	d := newDeck()
	d.saveToFile(fileName)

	loadedDeck := newDeckFromFile(fileName)

	if len(loadedDeck) != 52 {
		t.Errorf("Expected loaded deck lenght of 52, but got %v.", len(loadedDeck))
	}

	os.Remove(fileName)

}
