import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class ShowPost extends Component {
	
	deletePost(){
		
		this.props.deletePost(this.props.match.params.id, () =>{
			
			this.props.history.push('/');
			
		})
		
	}
	
	render(){
		
		const {post} = this.props;
		
		if ( post ) {
			
			return (
				<div>
					<h1>{post.title}
					</h1>
					<h3>{post.content}</h3>
					<Link to="/">
						<div className="btn btn-primary">Go back</div>
					</Link>
					<span onClick={this.deletePost.bind(this)} className="btn btn-primary">Delete</span>
				</div>
			);
			
		}
		
		return (
			<div>
				<h1>Post show
				</h1>
				<h3>loading...</h3>
				<Link to="/">
					<div className="btn btn-primary">Go back</div>
				</Link>
			</div>
		);
		
	}
	
	componentDidMount(){
		
		if ( !this.props.post ) {
			const {id} = this.props.match.params;
			this.props.fetchPost(id);
		}
		
	}
	
}

export default connect(( {posts}, {match : {params : {id}}} ) =>{
	return {
		post : posts[ id ]
	}
}, {
						   fetchPost,
						   deletePost
					   })(ShowPost);