import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';

class NewPost extends Component {
	
	renderTitleField( field ){
		
		return (<lable>Title
			{field.meta.touched ? <div className="label label-warning">{field.meta.error}</div> : ''}
			<input className="form-control" type="text" {...field.input} />
		</lable>);
		
	}
	
	renderDescriptionField( field ){
		
		return (<lable>Description
			{field.meta.touched ? <div className="label label-warning">{field.meta.error}</div> : ''}
			<textarea className="form-control" type="text" {...field.input}></textarea>
		</lable>);
		
	}
	
	onSubmit( {title, description} ){
		
		this.props.createPost(title, description, () => {
			
			this.props.history.push('/');
			
		});
		
	}
	
	render(){
		
		const {handleSubmit} = this.props;
		
		return (
			<div>
				<h1>New post</h1>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="title" component={this.renderTitleField} />
					<Field name="description" component={this.renderDescriptionField} />
					<Link to={'/'} className="btn btn-primary ">Back to list</Link>
					<button className="btn btn-primary ">Submit</button>
				</form>
			</div>
		);
	}
}

function validate( values ){
	
	let errors = {};
	
	if ( !values.title ) {
		
		errors.title = 'Enter a Title!';
		
	}
	
	if ( !values.description ) {
		
		errors.description = 'Enter a Description!';
		
	}
	
	return errors;
	
}

let res = reduxForm({
							 validate,
							 form : 'PostsNewForm',
						 })(NewPost);

export default connect(null, {createPost})(res);