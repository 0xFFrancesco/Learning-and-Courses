package main

import (
	"net/http"
	"fmt"
	"runtime"
	"time"
)

// channels are the only way to communicate in goroutines
// channels are typed and can send only the type of data declared
// channel <- myValue (send data through channel)
// myVar <- channel (receive from channel)

func main() {

	// enable Go parallelism (1 process by default)
	runtime.GOMAXPROCS(16)

	urls := []string{
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://golang.org",
		"http://amazon.com",
	}

	c := make(chan string)

	for _, url := range urls {
		go checkUrlState(url, c)
	}

	//for { // infinite loop
	//	go checkUrlState(<-c, c)
	//}

	for url := range c { // infinite loop waiting for channel's messages
		go checkUrlState(url, c)

		//go func(u string) { alternative way of sleeping with a function literal
		//	time.Sleep(time.Second * 5)
		//	checkUrlState(u, c)
		//}(url) we need to pass the value by value to avoid using the same address of the outer scope (it would cause problems in case the main routing changes it while the sub-routine should use the 'old' value)

	}

}

func checkUrlState(url string, c chan string) {

	logWaitAndRepeat := func(msg string) {
		fmt.Println(url + msg)
		time.Sleep(time.Second * 5)
		c <- url
	}

	_, err := http.Get(url)

	if err != nil {
		logWaitAndRepeat(" might be down!")
		return
	}

	logWaitAndRepeat(" is ok and responding!")

}
