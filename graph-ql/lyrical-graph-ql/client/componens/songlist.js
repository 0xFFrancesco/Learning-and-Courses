import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongList extends Component {
	
	constructor( props ){
		super(props);
	}
	
	render(){
		
		const songs = this.props.data.songs;
		
		return (<ul className='collection'>
			{songs && songs.map(this.renderSong)}
		</ul>);
	}
	
	renderSong( item ){
		return <li className='collection-item' key={item.id}>{item.title}</li>;
	}
	
}


const query = gql`
{
  songs{
  	id
    title
  }
}
`;

export default graphql(query)(SongList);