import React, {Component} from 'react';

export default class Map extends Component {
	
	componentDidMount(){
		
		new google.maps.Map(this.refs.map, {
			
			zoom   : 12,
			center : {
				lat : this.props.lat,
				lng : this.props.lng
			}
			
		});
		
	}
	
	render(){
		
		return (<div ref="map" />);
		
	}
	
}