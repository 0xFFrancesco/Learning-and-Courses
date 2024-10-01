import {
	getElements,
	getMetadataFromTodoEvent,
	getState,
	refreshView,
	saveTodoEdit,
	TodoAction,
} from "./todoList.utils.js";

(() => {
	const { inputEl, formEl, listEl } = getElements();
	const state = getState();

	// Events
	formEl.addEventListener("submit", (e) => {
		e.preventDefault();

		const text = new FormData(formEl).get("addTodo") as string;
		if (text) {
			state.items.push({
				timestamp: new Date(),
				isCompleted: false,
				isEditing: false,
				text,
			});
			inputEl.value = "";
			refreshView();
		}
	});

	listEl.addEventListener("change", (e) => {
		const { index, classes } = getMetadataFromTodoEvent(e);

		if (index !== -1 && !classes.contains("todo-edit-input")) {
			state.items[index].isCompleted = !state.items[index].isCompleted;
			refreshView();
		}
	});

	listEl.addEventListener("keyup", (e) => {
		const { index, classes } = getMetadataFromTodoEvent(e);

		if (
			index !== -1 &&
			classes.contains("todo-edit-input") &&
			e.key === "Enter"
		) {
			const text = (e.target as HTMLInputElement).value;
			saveTodoEdit(index, text);
		}
	});

	listEl.addEventListener("click", (e) => {
		const { index, classes } = getMetadataFromTodoEvent(e);

		if (index !== -1) {
			if (classes.contains(TodoAction.Edit)) {
				state.items[index].isEditing = true;
				refreshView();
			}

			if (classes.contains(TodoAction.Save)) {
				const text = (
					document.querySelector(
						`[name='editTodo-${index}']`
					) as HTMLInputElement
				).value;
				saveTodoEdit(index, text);
			}

			if (classes.contains(TodoAction.Delete)) {
				state.items = state.items.filter((_, i) => i !== index);
				refreshView();
			}
		}
	});

	// Telemetry
	console.log("Setup Finished. ToDo List Ready.");
})();
