import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1;";

axios.get(url).then((res) => {
	const todo = res.data;
	const { ID, Title, finished } = todo;

	console.log(`
        The todo with ID: ${ID}
        Has a title of: ${Title}
        Is it finished? ${finished}    
    `);
});
