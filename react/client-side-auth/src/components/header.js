import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
	render(){
		
		const isAuth = this.props.auth.authenticated;
		
		return (
			<nav className='navbar navbar-light'>
				<Link to='/' className='navbar-brand'>Home</Link>
				<ul className="nav navbar-nav">
					{!isAuth && <li className='nav-item'>
						<Link to='/signin' className='nav-link'>Sign in</Link>
					</li>}
					{!isAuth && <li className='nav-item'>
						<Link to='/signup' className='nav-link'>Sign up</Link>
					</li>}
					{isAuth && <li className='nav-item'>
						<Link to='/signout' className='nav-link'>Sign out</Link>
					</li>}
				</ul>
			</nav>
		);
	}
}

export default connect(( {auth} ) =>{
	return ({auth});
}, null)(Header);