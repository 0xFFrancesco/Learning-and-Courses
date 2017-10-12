import {CHANGE_AUTH} from './type';

export function auth( isLogged ){
	
	return {
		type    : CHANGE_AUTH,
		payload : isLogged
	};
	
}