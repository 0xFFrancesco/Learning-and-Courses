import React from 'react';
import {Link} from 'react-router';
import {graphql} from 'react-apollo';

import query from './../queries/CurrentUser';
import mutation from './../mutations/Logout';

const Header = ( props ) =>{
	
	return (<nav>
		<div className="nav-wrapper">
			<Link to='/' className='brand-logo left'>
				Home
			</Link>
			<ul className="right">
				{renderButtons()}
			</ul>
		</div>
	</nav>);
	
	function renderButtons(){
		
		const {loading, user} = props.data;
		
		if ( loading ) {
			return <div></div>;
		} else if ( user ) {
			return <li><a onClick={onLogoutClick}>Logout</a></li>;
		} else {
			return <div>
				<li>
					<Link to='/signup'>Signup</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</div>;
		}
	}
	
	function onLogoutClick(){
		props.mutate({
			refetchQueries : [ {query} ]
		});
	}
	
};


export default graphql(mutation)(graphql(query)(Header));