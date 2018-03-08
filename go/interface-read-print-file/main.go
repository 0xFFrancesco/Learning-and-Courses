package main

import (
	"os"
	"io"
)

func main() {

	fileName := os.Args[1]
	file, err := os.Open(fileName)

	if err != nil {
		println("Error:", err)
		os.Exit(1)
	}

	io.Copy(os.Stdout, file)

}
