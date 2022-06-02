type VoidFn = () => void;

export class Eventing {
	private subscribers: { [key: string]: VoidFn[] } = {};

	on(eventName: string, callback: VoidFn): void {
		const handlers = this.subscribers[eventName] || [];
		handlers.push(callback);
		this.subscribers[eventName] = handlers;
	}

	trigger(eventName: string): void {
		this.subscribers[eventName]?.forEach((callback) => callback());
	}
}
