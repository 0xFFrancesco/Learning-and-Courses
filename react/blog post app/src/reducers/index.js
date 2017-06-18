import {combineReducers} from 'redux';
import posts from './posts_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
										posts : posts,
										form  : formReducer
									});

export default rootReducer;
