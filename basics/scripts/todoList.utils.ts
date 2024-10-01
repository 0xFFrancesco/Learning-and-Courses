export interface TodoItem {
	text: string;
	timestamp: Date;
	isCompleted: boolean;
	isEditing: boolean;
}

export enum TodoAction {
	Add = "todo-add",
	Edit = "todo-edit",
	Save = "todo-save",
	Delete = "todo-delete",
}

export const getElements = (() => {
	const inputEl: HTMLInputElement =
		document.querySelector(".todo-list-input")!;
	const formEl: HTMLFormElement = document.querySelector(".todo-list-form")!;
	const listEl: HTMLUListElement =
		document.querySelector(".todo-list-items")!;

	return () => ({ inputEl, formEl, listEl });
})();

export const getState = (() => {
	const state: { items: TodoItem[] } = { items: [] };
	return () => state;
})();

export const refreshView = () => {
	const { listEl } = getElements();
	const state = getState();

	listEl.textContent = "";
	const createInnerTodo = (todo: TodoItem, index: number) => `
        ${
			todo.isEditing
				? `
                    <input class='todo-checkbox' type='checkbox' ${
						todo.isCompleted ? "checked" : ""
					} />
                    <input type='text' class='todo-edit-input' name='editTodo-${index}' value='${
						todo.text
				  }'></input>
                `
				: `
                    <label tabindex='0' class='todo-checkbox-label'>
                        <input class='todo-checkbox' type='checkbox' ${
							todo.isCompleted ? "checked" : ""
						} />
                        ${todo.text}
                    </label>
                `
		}

        ${
			todo.isEditing
				? `
                    <button tabindex='0' class='todo-action ${TodoAction.Save}' type='button'>
                        Save
                    </button>
                `
				: `
                     <button tabindex='0' class='todo-action ${TodoAction.Edit}' type='button'>
                        Edit
                    </button>
                `
		}

        <button tabindex='0' class='todo-action ${
			TodoAction.Delete
		}' type='button'>
            Delete
        </button>
    `;

	state.items.map((todo, i) => {
		const el = document.createElement("li");
		el.className = `todo-list-item ${
			todo.isCompleted ? "isCompleted" : ""
		}`;
		el.innerHTML = createInnerTodo(todo, i);
		el.dataset.todoIndex = String(i);
		listEl.appendChild(el);
	});
};

export const getMetadataFromTodoEvent = (e: Event) => {
	const classes = (e.target as HTMLElement).classList;

	let el = e.target as HTMLElement;
	let index = -1;
	while (el.parentElement) {
		el = el.parentElement;
		const i = Number(el.dataset.todoIndex ?? -1);
		if (i !== -1) {
			index = i;
			break;
		}
	}

	return {
		index,
		classes,
	};
};

export const saveTodoEdit = (index: number, text: string) => {
	const state = getState();

	state.items[index].isEditing = false;
	state.items[index].text = text;
	refreshView();
};
