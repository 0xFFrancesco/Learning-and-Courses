import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {hashHistory} from 'react-router'

import AuthForm from './AuthForm';
import mutation from './../mutations/Signup';
import query from "./../queries/CurrentUser";

class SignupForm extends Component {
	
	constructor( props ){
		super(props);
		this.state = {errors : []};
	}
	
	render(){
		return <div>
			<h3>Signup</h3>
			<AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
		</div>;
	}
	
	onSubmit( {email, password} ){
		
		this.setState({errors : []});
		
		this.props.mutate({
			variables      : {
				email,
				password
			},
			refetchQueries : [ {query} ]
		}).catch(res =>{
			const errors = res.graphQLErrors.map(err => err.message);
			this.setState({errors});
		});
	}
	
	componentWillUpdate( nextProps ){
		
		if ( !this.props.data.user && nextProps.data.user ) {
			hashHistory.push('/dashboard');
		}
		
	}
	
}

export default graphql(mutation)(SignupForm);
