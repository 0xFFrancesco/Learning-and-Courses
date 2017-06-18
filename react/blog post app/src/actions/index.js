import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST  = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const API_KEY     = 'fra_1234_2345_11';

const rootUrl = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts(){
	
	const request = axios.get(`${rootUrl}/posts?key=${API_KEY}`);
	
	return {
		type    : FETCH_POSTS,
		payload : request
	}
	
}
export function fetchPost( id ){
	
	const request = axios.get(`${rootUrl}/posts/${id}?key=${API_KEY}`);
	
	return {
		type    : FETCH_POST,
		payload : request
	}
	
}

export function createPost( title, content, callback ){
	
	const request = axios.post(`${rootUrl}/posts?key=${API_KEY}`, {
		
		title,
		content
		
	}).then(callback);
	
	return {
		type    : CREATE_POST,
		payload : request
	}
	
}

export function deletePost( id, callback ){
	
	const request = axios.delete(`${rootUrl}/posts/${id}?key=${API_KEY}`, {}).then(callback);
	
	return {
		type    : DELETE_POST,
		payload : request
	}
	
}