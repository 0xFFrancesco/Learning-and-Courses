import axios from "axios";
import { Eventing } from "./Eventing";

const API_URL = "http://localhost:3000";

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	public events: Eventing = new Eventing();

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	fetch(): void {
		axios.get(`${API_URL}/users/${this.get("id")}`).then((res): void => {
			this.set(res.data);
		});
	}

	save(): void {
		const id = this.get("id");
		if (id) {
			axios.put(`${API_URL}/users/${id}`, this.data);
		} else {
			axios.post(`${API_URL}/users`, this.data);
		}
	}
}
