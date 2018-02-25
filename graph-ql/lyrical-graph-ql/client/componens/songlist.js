import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

class SongList extends Component {
	
	constructor( props ){
		super(props);
	}
	
	render(){
		
		const songs = this.props.data.songs;
		
		return (<div>
			<ul className='collection'>
				{songs && songs.map(this.renderSong)}
			</ul>
			<Link to='/songs/new' className='btn-floating btn-large red right'>
				<i className='material-icons'>add</i>
			</Link>
		</div>);
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