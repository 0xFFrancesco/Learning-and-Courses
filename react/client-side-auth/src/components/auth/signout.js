import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions';

class Signout extends Component {
	
	render(){
		return (
			<div>Sorry to see you go..</div>
		);
	}
	
	componentWillMount(){
		this.props.signoutUser();
	}
	
}

// @foff
export default connect(null, actions)(Signout);