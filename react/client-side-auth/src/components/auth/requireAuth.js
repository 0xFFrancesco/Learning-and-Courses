import React, {Component} from 'react';
import {connect} from 'react-redux';

function wrap( CustomComponent ){
	
	class WrappedComponent extends Component {
		
		static contextTypes = {
			router : React.PropTypes.object
		};
		
		componentWillMount(){
			if ( !this.props.isAuth ) {
				this.context.router.push('/');
			}
		}
		
		componentWillUpdate( nextProps ){
			if ( !nextProps.isAuth ) {
				this.context.router.push('/');
			}
		}
		
		render(){
			
			return <CustomComponent {...this.props} />;
			
		}
	}
	
	return WrappedComponent;
	
}

export default function( CustomComponent ){
	
	return connect(( {auth} ) =>{
		return {isAuth : auth.authenticated};
	})(wrap(CustomComponent));
	
}