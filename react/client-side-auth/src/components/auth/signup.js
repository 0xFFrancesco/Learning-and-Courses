import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import * as actions from './../../actions';

class Signup extends Component {
	
	render(){
		
		const {handleSubmit} = this.props;
		
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className='form-group'>
					<label>Email:</label>
					{this.renderField('email')}
				</fieldset>
				<fieldset className='form-group'>
					<label>Password:</label>
					{this.renderField('password')}
				</fieldset>
				<fieldset className='form-group'>
					<label>Password confirmation:</label>
					{this.renderField('passwordConfirmation')}
				</fieldset>
				{this.showError()}
				<button action='submit' className="btn btn-primary">Register</button>
			</form>
		);
	}
	
	showError(){
		const err = this.props.auth.error;
		if ( err ) {
			return <div className='alert alert-danger'>
				{err}
			</div>;
		}
		return <div></div>;
	}
	
	renderField( name ){
		
		return <Field component="input" name={name} type="text" className='form-control' />;
		
	}
	
	handleFormSubmit( {email, password, passwordConfirmation} ){
		//@foff
		this.props.signupUser({email, password, passwordConfirmation});
	}
	
}

// @foff
export default connect(({auth}) => {return ({auth})}, actions)(reduxForm({
	form: 'signup',
})(Signup));