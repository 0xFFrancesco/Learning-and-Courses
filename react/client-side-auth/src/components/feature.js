import React, {Component} from 'react';
import requireAuth from './auth/requireAuth';
import {connect} from 'react-redux';
import * as actions from './../actions';

class Feature extends Component {
	render(){
		console.log(this.props.need_auth);
		return (
			
			<div>
				Secreeeeettt!1!!!!1!1!!!1111
				<p>protected data:{this.props.need_auth}</p>
			</div>
		);
	}
	
	componentWillMount(){
		this.props.requestProtectedRes();
	}
}

export default connect(( {auth} ) =>{
	return {need_auth: auth.need_auth};
}, actions)(requireAuth(Feature));