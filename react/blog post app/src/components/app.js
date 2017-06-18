import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostList from '../containers/posts_list';
import NewPost from './posts_new';
import ShowPost from './posts_show';


export default class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/posts/new' component={NewPost}/>
					<Route path='/posts/:id' component={ShowPost}/>
					<Route path='/' component={PostList}/>
				</Switch>
			</div>
		</BrowserRouter>
    );
  }
}
