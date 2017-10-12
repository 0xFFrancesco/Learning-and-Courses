import React, {Component} from 'react';

export default class Comments extends Component {
	render(){
		return (
			<ul className={'comment-list'}>
				{this.props.items.map(( i, k ) => <li key={k}>{i}</li>)}
			</ul>
		);
	}
}
