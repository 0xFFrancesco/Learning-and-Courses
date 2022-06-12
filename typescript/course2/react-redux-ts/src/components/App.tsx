import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { AppState } from "../reducers";

interface AppProps {
	todos: Todo[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

interface AppComponentState {
	fetching: boolean;
}

class _App extends React.Component<AppProps, AppComponentState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { fetching: false };
	}

	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ fetching: false });
		}
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.onButtonClick}>
					Fetch
				</button>
				{this.state.fetching ? <h2>Loading!</h2> : null}
				<div>{this.props.todos.map(this.renderTodo)}</div>
			</div>
		);
	}

	onButtonClick = (): void => {
		this.props.fetchTodos();
		this.setState({ fetching: true });
	};

	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderTodo = (todo: Todo): JSX.Element => {
		return (
			<div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
				<h2>{todo.title}</h2>
				Is completed: {todo.completed ? "true" : "false"}
			</div>
		);
	};
}

const mapStateToProps = (state: AppState): { todos: Todo[] } => {
	return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
