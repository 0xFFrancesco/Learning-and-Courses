import {AUTH_USER} from './../actions/type';
import {UNAUTH_USER} from './../actions/type';
import {AUTH_ERROR} from './../actions/type';
import {PROTECTED} from './../actions/type';

export default function( state = {}, action ){
	switch ( action.type ) {
		case AUTH_USER:
			return {
				...state,
				error         : '',
				authenticated : true
			};
		case UNAUTH_USER:
			return {
				...state,
				error         : '',
				authenticated : false
			};
		case AUTH_ERROR:
			return {
				...state,
				error : action.payload
			};
		case PROTECTED:
			return {
				...state,
				need_auth : action.payload
			};
	}
	return state;
}
