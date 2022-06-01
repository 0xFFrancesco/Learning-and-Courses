interface UserProps {
	name?: string;
	age?: number;
}

type VoidFn = () => void;

export class User {
	private subscribers: { [key: string]: VoidFn[] } = {};

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callback: VoidFn): void {
		const handlers = this.subscribers[eventName] || [];
		handlers.push(callback);
		this.subscribers[eventName] = handlers;
	}

	trigger(eventName: string): void {
		this.subscribers[eventName]?.forEach((callback) => callback());
	}
}
