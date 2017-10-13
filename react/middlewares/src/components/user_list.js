import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from './../actions';

class UserList extends Component {
	
	renderUser( e ){
		return (
			<div key={e.name} className='card card-block'>
				<h4 className='card-title'>{e.name}</h4>
				<p className="card-text">{e.company.name}</p>
				<a href={e.website} target='_blank' className="btn btn-primary">Website</a>
			</div>
		);
	}
	
	render(){
		return (
			<div className='user-list'>
				{this.props.users.map(e => this.renderUser(e))}
			</div>
		);
	}
	
	componentWillMount(){
		this.props.fetchUsers();
	}
	
}

export default connect(( {users} ) =>{
	return {
		users,
	};
}, {fetchUsers})(UserList);