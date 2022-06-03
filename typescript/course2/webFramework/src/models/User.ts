import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { API_URL } from "./utils";

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	private events: Eventing = new Eventing();
	private sync: Sync<UserProps> = new Sync<UserProps>(`${API_URL}/users`);
	private attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}

	get() {
		return this.attributes.get();
	}
}
