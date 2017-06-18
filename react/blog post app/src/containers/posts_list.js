import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom'
import _ from 'lodash';

class PostList extends Component {
	
	renderList(){
		
		const posts = this.props.posts;
		
		if ( Object.keys(posts).length ) {
			
			return <ul className="list-group">
				{_.map(posts, post => <li className="list-group-item" key={post.id}>
					<Link to={'/posts/' + post.id}>{post.title}</Link></li>)}
			</ul>
			
		} else {
			
			return <h3>No post found :/</h3>
			
		}
		
	}
	
	render(){
		return (
			<div>
				<h1>Post list</h1>
				{this.renderList()}
				<Link className="btn btn-primary" to="/posts/new">Add a new post</Link>
			</div>
		);
	}
	
	componentDidMount(){
		
		this.props.fetchPosts();
		
	}
	
}

function mapStateToProps( {posts} ){
	return {posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostList)