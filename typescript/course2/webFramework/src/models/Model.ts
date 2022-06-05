import { VoidFn } from "./Eventing";
import { AxiosPromise } from "axios";

interface ModelAttributes<T> {
	get<K extends keyof T>(key: K): T[K];
	set(value: T): void;
	getAll(): T;
}

interface Sync<T> {
	fetch(id: number): AxiosPromise<T>;
	save(data: T): AxiosPromise<T>;
}

export interface Events {
	on(eventName: string, callback: VoidFn): void;
	trigger(eventName: string): void;
}

interface Syncable {
	id?: number;
}

export class Model<T extends Syncable> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}

	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger("change");
	}

	fetch(): void {
		const id = this.attributes.get("id");

		if (typeof id !== "number") {
			throw new Error("Cannot fetch without an ID.");
		}

		this.sync.fetch(id).then((res): void => {
			this.set(res.data);
		});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((): void => {
				this.trigger("save");
			})
			.catch((): void => {
				this.trigger("error");
			});
	}
}
