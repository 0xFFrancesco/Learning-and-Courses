import {combineReducers} from 'redux';

export function commentsReducer( state = [], action = {type : ''} ){
	
	switch ( action.type ) {
		
		case 'NEW_COMMENT':
			
			let arr = [ ...state ];
			arr.push(action.payload);
			return arr;
		
	}
	
	return state;
	
};

const rootReducer = combineReducers({
										comments : commentsReducer
									});

export default rootReducer;
