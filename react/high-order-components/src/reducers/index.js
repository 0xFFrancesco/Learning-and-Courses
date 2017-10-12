import {combineReducers} from 'redux';
import auth from '../reducers/auth';

const rootReducer = combineReducers({
										isAuth : auth
									});

export default rootReducer;
