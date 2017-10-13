import {combineReducers} from 'redux';
import userReducer from './users';

const rootReducer = combineReducers({
										users : userReducer
									});

export default rootReducer;
