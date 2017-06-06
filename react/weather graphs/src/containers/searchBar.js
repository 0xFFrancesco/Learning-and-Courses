import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {onSearch} from '../actions/index'

class SearchBar extends Component {
	
	constructor( props ){
		
		super(props);
		
		this.state = {term : ''};
		
	}
	
	onSearch(){
		this.props.onSearch(this.state.term);
		this.setState({term : ''});
	}
	
	render(){
		
		return (
			<form
				onSubmit={e => e.preventDefault()}
				className="input-group">
				<input
					type="text"
					onChange={( e ) => this.setState({term : e.target.value})}
					value={this.state.term}
					className="form-control"
				/>
				<div className="input-group-btn">
					<div className="btn btn-secondary" onClick={this.onSearch.bind(this)}>Search</div>
				</div>
			</form>
		)
		
	}
	
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({onSearch}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar)