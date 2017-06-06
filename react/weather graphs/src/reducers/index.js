import { combineReducers } from 'redux';
import weather_data from './weather_reducer'

const rootReducer = combineReducers({
  weather: weather_data
});

export default rootReducer;
