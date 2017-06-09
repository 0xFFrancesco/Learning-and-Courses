import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
export const API_KEY     = 'fra_1234_2345_11';

const rootUrl = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts(){
	
	const request = axios.get(`${rootUrl}/posts?key=${API_KEY}`);
	
	return {
		type    : FETCH_POSTS,
		payload : request
	}
	
}