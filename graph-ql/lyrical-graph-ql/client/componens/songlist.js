import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import gql from 'graphql-tag';
import query from './../queries/fetchSongs';

class SongList extends Component {
	
	constructor( props ){
		super(props);
	}
	
	render(){
		
		const songs = this.props.data.songs;
		
		return (<div>
			<ul className='collection'>
				{songs && songs.map(this.renderSong.bind(this))}
			</ul>
			<Link to='/songs/new' className='btn-floating btn-large red right'>
				<i className='material-icons'>add</i>
			</Link>
		</div>);
	}
	
	renderSong( item ){
		return (<li className='collection-item' key={item.id}>{item.title}
			<i className='material-icons' onClick={() => this.onSongDelete(item.id)}>
				delete
			</i>
		</li>);
	}
	
	onSongDelete( id ){
		
		this.props.mutate({
			variables : {id},
		// .refetch as alternative method to refetchQueries
		}).then(() => this.props.data.refetch()).catch(e => alert(e));
		
	}
	
}


const mutation = gql`
mutation DeleteSong($id: ID){
  deleteSong(id: $id){
    id
  }
}
`;

export default graphql(mutation)(graphql(query)(SongList));