import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';

//@foff
const rootReducer = combineReducers({
	form,
	auth: authReducer
});

export default rootReducer;
