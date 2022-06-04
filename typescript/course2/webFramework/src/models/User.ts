import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { API_URL } from "./utils";

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps) {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(`${API_URL}/users`)
		);
	}

	isAdminUser(): boolean {
		return this.get("id") === 1;
	}
}
