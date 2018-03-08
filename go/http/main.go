package main

import (
	"net/http"
	"fmt"
	"os"
	"io"
)

type logWriter struct {
}

func main() {

	resp, err := http.Get("http://google.com")

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	//data := make([]byte, 99999) <- guessing a size, the Read fn will read the data until the byteSlice is full
	//resp.Body.Read(data)
	//resp.Body.Close()
	//
	//fmt.Println(string(data))

	io.Copy(logWriter{}, resp.Body) // need to receive two params implementing the Writer and Reader interfaces

}

// making logWriter eligible to be in the Writer interface
func (l logWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs))
	fmt.Printf("%v bytes written.", len(bs))
	return len(bs), nil
}
