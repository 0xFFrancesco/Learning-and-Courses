import React, {Component} from 'react';

class AuthForm extends Component {
	
	constructor( props ){
		super(props);
		this.state = {
			email    : '',
			password : ''
		};
	}
	
	render(){
		return <div className="row">
			<form className='col s4' onSubmit={this.onSubmit.bind(this)}>
				<div className="input-field">
					<input value={this.state.email} type='email' onChange={e => this.setState({email : e.target.value})} placeholder='Email' />
				</div>
				<div className="input-field">
					<input value={this.state.password} type='password' onChange={e => this.setState({password : e.target.value})} placeholder='Password' />
				</div>
				<div className="errors">
					{this.props.errors.map(err => <div key={err}>{err}</div>)}
				</div>
				<button className='btn'>Submit</button>
			</form>
		</div>;
	}
	
	onSubmit( e ){
		e.preventDefault();
		this.props.onSubmit(this.state);
	}
	
}

export default AuthForm;