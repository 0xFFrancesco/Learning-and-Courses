import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import query from './../queries/fetchLyrics';

class LyricList extends Component {
	
	render(){
		
		const {song} = this.props.data;
		if ( !song || !song.lyrics.length) {
			return <div></div>;
		}
		
		const {lyrics} = song;
		
		return (<ul className='collection'>
			{lyrics.map(item =>
				<li className='collection-item' key={item.id}>{item.content}
				<div>
					{item.likes} <i className='material-icons' onClick={e => this.onLike(item.id, song.id)}>thumb_up</i>
				</div>
				</li>
			)}
		</ul>);
		
	}
	
	onLike(id, songId){
		this.props.mutate({
			variables: {id},
			refetchQueries: [{query, variables: {id: songId}}]
		});
	}
	
}




const mutation = gql`
mutation addLike($id: ID){
  likeLyric(id: $id){
    id
    likes
    content
  }
}
`;

export default graphql(mutation)(graphql(query, {
	options : props =>{
		return {variables : {id : props.songId}};
	}
})(LyricList));