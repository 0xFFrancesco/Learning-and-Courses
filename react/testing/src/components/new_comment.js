import React, {Component} from 'react';

export default class NewComment extends Component {
	
	constructor( props ){
		super(props);
		this.state = {comment : ''};
	}
	
	render(){
		return (
			<div className='comment-box'>
				<textarea onChange={this.handleChange.bind(this)} value={this.state.comment}></textarea>
				<div>
					<button onClick={this.handleClick.bind(this)}>comment</button>
				</div>
			</div>
		);
	}
	
	handleChange( e ){
		this.setState({comment : e.target.value});
	}
	
	handleClick( e ){
		if(this.state.comment){
			this.props.onNew(this.state.comment);
			this.setState({comment : ''});
		}
	}
	
}
