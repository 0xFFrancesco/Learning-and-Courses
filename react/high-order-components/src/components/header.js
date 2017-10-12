import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from './../actions';

class Header extends Component {
	
	authButton(){
		return <button onClick={this.props.auth.bind(this, !this.props.isAuth)}>Sign {this.props.isAuth ? 'Out' : 'In'}</button>;
	}
	
	render(){
		return (
			<nav className='navbar navbar-light'>
				<ul className='nav navbar-nav'>
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/resources">Protected</Link>
					</li>
					<li className="nav-item">
						{this.authButton()}
					</li>
				</ul>
			</nav>
		);
	}
}

export default connect(( {isAuth} ) =>{
	return {
		isAuth
	}
}, actions)(Header);