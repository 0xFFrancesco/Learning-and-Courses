import { Todo, ActionTypes, TodoAction } from "../actions";

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_TODOS:
			return action.payload;
		case ActionTypes.DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
};
