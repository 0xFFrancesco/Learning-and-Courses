import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link, hashHistory} from 'react-router';

class songCreate extends Component {
	
	constructor( props ){
		
		super(props);
		this.state = {title : ''};
		
		this.onSubmit = e =>{
			
			e.preventDefault();
			this.props.mutate({
				variables : {
					title : this.state.title
				}
			}).then(v =>{
				hashHistory.push('/');
			}).catch(e =>{
				alert(e);
			});
			
		};
		
	}
	
	render(){
		
		return (<div>
			<Link to='/'>Back</Link>
			<h3>Create a new Song</h3>
			<form onSubmit={this.onSubmit}>
				<label>Song Title:</label>
				<input
					onChange={e => this.setState({title : e.target.value})}
					value={this.state.title}
					name='title'
				/>
			</form>
		</div>);
		
	}
	
}


const mutation = gql`
mutation AddSong($title: String){
  addSong(title: $title){
    id
    title
  }
}
`;

export default graphql(mutation)(songCreate);