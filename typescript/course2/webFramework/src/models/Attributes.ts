export class Attributes<T> {
	constructor(private data: T) {}

	get<K extends keyof T>(propName: K): T[K] {
		return this.data[propName];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}
}
