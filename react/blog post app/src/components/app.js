import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import PostList from './posts_list'

function NotFound(){
	return <div>Not Found!</div>;
}

export default class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<div>
				<Route path='/' component={PostList}/>
				<Route path='*' component={NotFound} />
			</div>
		</BrowserRouter>
    );
  }
}
