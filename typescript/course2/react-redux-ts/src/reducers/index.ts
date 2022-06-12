import { combineReducers } from "redux";
import { Todo } from "../actions";
import { todosReducer } from "./todos";

export interface AppState {
	todos: Todo[];
}

export const reducers = combineReducers<AppState>({
	todos: todosReducer,
});
