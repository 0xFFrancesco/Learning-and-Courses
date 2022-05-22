import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
	constructor(private data: string) {}

	get length(): number {
		return this.data.length;
	}

	compare(i: number, j: number) {
		return this.data[i] > this.data[j];
	}

	swap(i: number, j: number) {
		const leftHand = this.data[i];
		//this.data[i] = this.data[j];
		//this.data[j] = leftHand;
	}

	getData() {
		return this.data;
	}
}
