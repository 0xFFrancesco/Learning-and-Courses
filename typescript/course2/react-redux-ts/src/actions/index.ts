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
