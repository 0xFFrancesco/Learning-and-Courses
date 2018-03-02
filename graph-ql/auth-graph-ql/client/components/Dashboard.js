import React from 'react';

import RequireAuth from './requireAuth';

const Dashboard = ( props ) =>{
	
	return (<div>
		Hey {props.data.user && props.data.user.email}!
	</div>);
	
};


export default RequireAuth(Dashboard);