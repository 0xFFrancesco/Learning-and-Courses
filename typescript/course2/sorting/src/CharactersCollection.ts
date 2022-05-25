import { Sortable } from "./Sortable";

export class CharactersCollection extends Sortable {
	constructor(private data: string) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(i: number, j: number) {
		const diff = this.data[i].charCodeAt(0) - this.data[j].charCodeAt(0);

		const lowerI = this.data[i].toLocaleLowerCase();
		const lowerJ = this.data[j].toLocaleLowerCase();

		if (lowerI === lowerJ) {
			return diff < 0;
		}

		return lowerI > lowerJ;
	}

	swap(i: number, j: number) {
		const characters = this.data.split("");
		const leftHand = characters[i];
		characters[i] = characters[j];
		characters[j] = leftHand;
		this.data = characters.join("");
	}

	getData() {
		return this.data;
	}
}
