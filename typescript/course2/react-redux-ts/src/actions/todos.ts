import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodosAction {
	type: ActionTypes.FETCH_TODOS;
	payload: Todo[];
}

export interface DeleteTodoAction {
	type: ActionTypes.DELETE_TODO;
	payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
	return async (dispatch: Dispatch<FetchTodosAction>) => {
		const res = await axios.get<Todo[]>(url);

		dispatch({
			type: ActionTypes.FETCH_TODOS,
			payload: res.data,
		});
	};
};

export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.DELETE_TODO,
		payload: id,
	};
};
