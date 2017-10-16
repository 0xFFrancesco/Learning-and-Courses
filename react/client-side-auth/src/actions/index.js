import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER} from './type';
import {AUTH_ERROR} from './type';
import {UNAUTH_USER} from './type';
import {PROTECTED} from './type';

const serverUrl = 'http://react-auth-exercise-server.local';

export function signupUser( {email, password, passwordConfirmation} ){
	
	return ( dispatch ) =>{
		
		if ( !email || !passwordConfirmation || !password ) {
			return showError(dispatch, 'Fill all the inputs.');
		}
		
		if ( password !== passwordConfirmation ) {
			return showError(dispatch, 'Passwords are not the same.');
		}
		
		axios.post(`${serverUrl}/signup`, {
			email,
			password
		}).then(( v ) =>{
			dispatch({type : AUTH_USER});
			localStorage.setItem('token', v.data.token);
			browserHistory.push('/feature');
		}).catch(( error ) =>{
			return showError(dispatch, error.response.data.error);
		});
		
	};
	
}

export function signinUser( {email, password} ){
	
	return ( dispatch ) =>{
		
		axios.post(`${serverUrl}/signin`, {
			email,
			password
		}).then(( v ) =>{
			dispatch({type : AUTH_USER});
			localStorage.setItem('token', v.data.token);
			browserHistory.push('/feature');
		}).catch(() =>{
			showError(dispatch, 'Bad login credentials');
		});
		
	};
	
}

export function signoutUser(){
	
	localStorage.removeItem('token');
	return {type : UNAUTH_USER};
	
}

export function requestProtectedRes(){
	
	return ( dispatch ) =>{
		
		axios.get(serverUrl, {
			headers : {authorization : localStorage.getItem('token')}
		}).then(( v ) =>{
			dispatch({type: PROTECTED, payload: v.data.hi})
		}).catch(() =>{
			
		});
		
	};
	
}

function showError( dispatch, err ){
	dispatch({
				 type    : AUTH_ERROR,
				 payload : err
			 });
}

/*
THUNK MIDDLEWARE IMPLEMENTATION IDEA

function thunk( {dispatch} ){
	
	return next => action =>{
		
		if ( typeof action === 'function' ) {
			
			action(dispatch);
			
		} else {
			next(action);
		}
		
	};
	
}*/
