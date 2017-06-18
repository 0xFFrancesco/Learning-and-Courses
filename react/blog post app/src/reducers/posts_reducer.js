import {FETCH_POSTS, FETCH_POST} from '../actions/index'
import _ from 'lodash';

export default function( state = {}, action ){
	
	switch ( action.type ) {
		
		case FETCH_POSTS:
			const postList = action.payload.data;
			return _.mapKeys(postList, 'id');
		
		case FETCH_POST:
			const post = action.payload.data;
			return {
				...state,
				[post.id] : post
			};
		
	}
	
	return state;
	
}