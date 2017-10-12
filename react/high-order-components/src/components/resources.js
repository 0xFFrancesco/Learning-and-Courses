import React, {Component} from 'react';
import RequireAuth from './require_auth';

class Resources extends Component {
	
	render(){
		return (
			<div>protected resources here!</div>
		);
	}
}

export default RequireAuth(Resources);