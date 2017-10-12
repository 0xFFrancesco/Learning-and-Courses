import React, {Component} from 'react';
import NewComment from './new_comment';
import Comments from './comments';
import {connect} from 'react-redux';
import {newComment} from '../actions';

class App extends Component {
	
	render(){
		return (
			<div>
				<h1>Comment app (?!)</h1>
				<NewComment onNew={this.props.newComment} />
				<Comments items={this.props.comments} />
			</div>
		);
	}
	
}

export default connect(( {comments} ) =>{
	return {
		comments,
	};
}, {newComment})(App);