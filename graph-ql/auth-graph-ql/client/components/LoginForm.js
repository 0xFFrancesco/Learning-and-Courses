import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from './../mutations/Login';
import query from "./../queries/CurrentUser";

class LoginForm extends Component {
	
	render(){
		return <div>
			<h3>Login</h3>
			<AuthForm onSubmit={this.onSubmit.bind(this)} />
		</div>;
	}
	
	onSubmit( {email, password} ){
		this.props.mutate({
			variables      : {
				email,
				password
			},
			refetchQueries : [ {query} ]
		});
	}
	
}

export default graphql(mutation)(LoginForm);
