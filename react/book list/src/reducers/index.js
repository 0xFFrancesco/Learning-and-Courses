import {combineReducers} from 'redux';
import BooksReducer from './reducer_books'
import BookSelected from './reducer_selected_book'

const rootReducer = combineReducers({
										books    : BooksReducer,
										selected : BookSelected
									});

export default rootReducer;
