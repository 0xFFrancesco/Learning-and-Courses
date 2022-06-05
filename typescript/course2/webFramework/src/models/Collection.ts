import axios from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, P> {
	models: T[] = [];
	events: Eventing = new Eventing();

	constructor(private rootUrl: string, private deserialize: (data: P) => T) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios
			.get<P[]>(this.rootUrl)
			.then(
				(res) =>
					(this.models = res.data.map((item) =>
						this.deserialize(item)
					))
			)
			.then(() => this.trigger("change"))
			.catch(() => this.trigger("error"));
	}
}
