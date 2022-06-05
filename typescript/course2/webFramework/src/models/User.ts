import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { API_URL } from "./utils";

export interface UserProps {
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

	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>(
			`${API_URL}/users`,
			User.buildUser
		);
	}

	setRandomAge(): void {
		this.set({ age: Math.round(Math.random() * 100) });
	}
}
