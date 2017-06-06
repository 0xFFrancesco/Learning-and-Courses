import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";
import _ from 'lodash';
import Map from '../components/map'

class dataList extends Component {
	
	renderGraph( city, dim, unit ){
		
		let total = [];
		
		city.list.forEach(e =>{
			
			let val = dim === 'temp' ? e.main[ dim ] - 273.15 : e.main[ dim ];
			total.push(val);
			
		});
		
		return (
			<div>
				<Sparklines height={120} width={180} data={total}>
					<SparklinesLine color='blue' />
					<SparklinesReferenceLine type='avg' />
				</Sparklines>
				<div className="text-xs-center">{_.round(_.sum(total) / total.length)} {unit}</div>
			</div>
		);
	}
	
	render(){
		
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.data.map(e => <tr key={e.city.id}>
						<td>
							<Map lat={e.city.coord.lat} lng={e.city.coord.lon}/>
						</td>
						<td>{this.renderGraph(e, 'temp', 'C')}</td>
						<td>{this.renderGraph(e, 'pressure', 'hPa')}</td>
						<td>{this.renderGraph(e, 'humidity', '%')}</td>
					</tr>)}
				</tbody>
			</table>
		)
		
	}
	
}

function mapStateToProps( {weather} ){
	return {data : weather};
}


export default connect(mapStateToProps, null)(dataList)