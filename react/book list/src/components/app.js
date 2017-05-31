import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookSelected from '../containers/book-selected'

export default class App extends Component {
  render() {
    return (
      <div>
		  <BookList/>
		  <BookSelected/>
	  </div>
    );
  }
}
