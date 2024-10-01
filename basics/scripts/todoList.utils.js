export var TodoAction;
(function (TodoAction) {
    TodoAction["Add"] = "todo-add";
    TodoAction["Edit"] = "todo-edit";
    TodoAction["Save"] = "todo-save";
    TodoAction["Delete"] = "todo-delete";
})(TodoAction || (TodoAction = {}));
export const getElements = (() => {
    const inputEl = document.querySelector(".todo-list-input");
    const formEl = document.querySelector(".todo-list-form");
    const listEl = document.querySelector(".todo-list-items");
    return () => ({ inputEl, formEl, listEl });
})();
export const getState = (() => {
    const state = { items: [] };
    return () => state;
})();
export const refreshView = () => {
    const { listEl } = getElements();
    const state = getState();
    listEl.textContent = "";
    const createInnerTodo = (todo, index) => `
        ${todo.isEditing
        ? `
                    <input class='todo-checkbox' type='checkbox' ${todo.isCompleted ? "checked" : ""} />
                    <input type='text' class='todo-edit-input' name='editTodo-${index}' value='${todo.text}'></input>
                `
        : `
                    <label tabindex='0' class='todo-checkbox-label'>
                        <input class='todo-checkbox' type='checkbox' ${todo.isCompleted ? "checked" : ""} />
                        ${todo.text}
                    </label>
                `}

        ${todo.isEditing
        ? `
                    <button tabindex='0' class='todo-action ${TodoAction.Save}' type='button'>
                        Save
                    </button>
                `
        : `
                     <button tabindex='0' class='todo-action ${TodoAction.Edit}' type='button'>
                        Edit
                    </button>
                `}

        <button tabindex='0' class='todo-action ${TodoAction.Delete}' type='button'>
            Delete
        </button>
    `;
    state.items.map((todo, i) => {
        const el = document.createElement("li");
        el.className = `todo-list-item ${todo.isCompleted ? "isCompleted" : ""}`;
        el.innerHTML = createInnerTodo(todo, i);
        el.dataset.todoIndex = String(i);
        listEl.appendChild(el);
    });
};
export const getMetadataFromTodoEvent = (e) => {
    const classes = e.target.classList;
    let el = e.target;
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
export const saveTodoEdit = (index, text) => {
    const state = getState();
    state.items[index].isEditing = false;
    state.items[index].text = text;
    refreshView();
};
