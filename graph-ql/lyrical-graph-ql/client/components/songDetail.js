import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import LyricCreate from './lyricCreate';
import LyricList from './lyricList';
import query from './../queries/fetchSong';

class songDetail extends Component {
	
	constructor( props ){
		super(props);
	}
	
	render(){
		
		const {song} = this.props.data;
		
		if ( !song ) {
			return <p>loading...</p>;
		}
		
		return (<div>
			<Link to='/'>Back</Link>
			<h3>{song.title}</h3>
			<LyricList songId={song.id} />
			<LyricCreate songId={song.id} />
		</div>);
	}
	
}

export default graphql(query, {
	options : props =>{
		return {variables : {id : props.params.id}};
	}
})(songDetail);