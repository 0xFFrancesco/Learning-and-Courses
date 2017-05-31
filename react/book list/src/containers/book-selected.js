import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookSelected extends Component {
	
	render(){
		
		return (
			<div>{this.props.bookSelected.title}</div>
		)
		
	}
	
}


function mapStateToProps( state ){
	return {
		bookSelected : state.selected
	};
}

export default connect(mapStateToProps)(BookSelected);