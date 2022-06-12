import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { AppState } from "../reducers";

interface AppProps {
	todos: Todo[];
	fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
	render() {
		return (
			<div>
				<button type="button" onClick={this.onButtonClick}>
					Fetch
				</button>
				<div>{this.props.todos.map(this.renderTodo)}</div>
			</div>
		);
	}

	onButtonClick = (): void => {
		this.props.fetchTodos();
	};

	renderTodo(todo: Todo): JSX.Element {
		return (
			<div key={todo.id}>
				{todo.title}
				Is completed: {todo.completed}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState): { todos: Todo[] } => {
	return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
