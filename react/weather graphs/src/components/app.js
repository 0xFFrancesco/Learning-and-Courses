import React, {Component} from 'react';
import SearchBar from '../containers/searchBar'
import DataList from '../containers/dataList'

export default class App extends Component {
	render(){
		return (
			<div>
				<SearchBar />
				<DataList/>
			</div>
		);
	}
}
