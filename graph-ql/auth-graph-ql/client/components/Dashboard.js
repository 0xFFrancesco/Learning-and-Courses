import React from 'react';
import {graphql} from 'react-apollo';
import {hashHistory} from 'react-router'

import query from './../queries/CurrentUser';

const Dashboard = ( props ) =>{
	
	const {user} = props.data;
	if(!user){
		hashHistory.push('/login');
	}
	
	return (<div>
		Hey {user.email}!
	</div>);
	
};


export default graphql(query)(Dashboard);