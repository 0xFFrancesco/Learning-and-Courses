import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { API_URL } from "./models/utils";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

const user = User.buildUser({ name: "Anna-Maria", age: 27 });
const rootForm = document.getElementById("root-form");

if (rootForm) {
	const userEdit = new UserEdit(rootForm, user);
	userEdit.render();
} else {
	throw new Error("Root element not found.");
}

/////////////////////////////////////////////////

const users = new Collection(`${API_URL}/users`, (json: UserProps) =>
	User.buildUser(json)
);

users.on("change", () => {
	const rootList = document.getElementById("root-list");
	if (rootList) {
		const userList = new UserList(rootList, users);
		userList.render();
	} else {
		throw new Error("Root element not found.");
	}
});

users.fetch();
