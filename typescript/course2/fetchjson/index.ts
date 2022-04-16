import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1;";

interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get<ITodo>(url).then((res) => {
	logTodo(res.data);
});

const logTodo = (todo: ITodo) => {
	console.log(`
        The todo with ID: ${todo.id}
        Has a title of: ${todo.title}
        Is it finished? ${todo.completed ? "yes" : "no"}    
    `);
};
