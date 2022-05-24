export abstract class Sortable {
	protected abstract length: number;
	protected abstract compare(i: number, j: number): boolean;
	protected abstract swap(i: number, j: number): void;
	protected abstract getData(): any;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}

	getResult() {
		return this.getData();
	}
}
