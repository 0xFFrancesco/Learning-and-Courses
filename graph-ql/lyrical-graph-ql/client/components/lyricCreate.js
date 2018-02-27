import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import lyricsQuery from './../queries/fetchLyrics';

class LyricCreate extends Component {
	
	constructor( props ){
		
		super(props);
		this.state = {content : ''};
		
		this.onSubmit = e =>{
			
			e.preventDefault();
			this.props.mutate({
				variables      : {
					content : this.state.content,
					songId  : this.props.songId,
				},
				refetchQueries : [ {
					query     : lyricsQuery,
					variables : {id : this.props.songId}
				} ]
			}).then(e => this.setState({content : ''}));
			
		};
		
	}
	
	render(){
		
		return (<div>
			<form onSubmit={this.onSubmit}>
				<label>Add a Lyric:</label>
				<input
					onChange={e => this.setState({content : e.target.value})}
					value={this.state.content}
					name='content'
				/>
			</form>
		</div>);
		
	}
	
}


const mutation = gql`
mutation AddLyricToSong($content: String, $songId: ID!){
  addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics{
      content
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);