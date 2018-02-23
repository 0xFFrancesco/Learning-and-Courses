const API_KEY = 'API_KEY'; /* 53f8ac942b1a6b0129d7b5a9b4be775f not valid */
const API_URL = `http://api.openweathermap.org/data/2.5/forecast`;

import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function onSearch( term ){
	
	let url     = API_URL + '?appid=' + API_KEY + '&q=' + term + ',it';
	let request = axios.get(url);
	
	return {
		type    : FETCH_WEATHER,
		payload : request
	};
	
}