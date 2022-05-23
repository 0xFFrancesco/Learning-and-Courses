import { Sortable } from "./Sorter";

class ListNode {
	private _next: ListNode | null = null;
	constructor(private data: number) {}

	get value() {
		return this.data;
	}

	set value(value: number) {
		this.data = value;
	}

	get next() {
		return this._next;
	}

	set next(next: ListNode | null) {
		this._next = next;
	}
}

export class LinkedList implements Sortable {
	private head: ListNode | null = null;

	constructor() {}

	add(value: number): void {
		const node = new ListNode(value);

		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}
		tail.next = node;
	}

	get length(): number {
		if (!this.head) {
			return 0;
		}

		let length = 1;
		let tail = this.head;
		while (tail.next) {
			length++;
			tail = tail.next;
		}

		return length;
	}

	at(index: number): ListNode {
		if (!this.head) {
			throw new Error("Index out of bounds");
		}

		let counter = 0;
		let tail: ListNode | null = this.head;
		while (tail) {
			if (counter === index) {
				return tail;
			}

			counter++;
			tail = tail.next;
		}

		throw new Error("Index out of bounds");
	}

	compare(i: number, j: number) {
		if (!this.head) {
			throw new Error("List is empty");
		}
		return this.at(i).value > this.at(j).value;
	}

	swap(i: number, j: number) {
		const temp = this.at(j).value;
		this.at(j).value = this.at(i).value;
		this.at(i).value = temp;
	}

	getData() {
		const data: number[] = [];
		let tail: ListNode | null = this.head;
		while (tail) {
			data.push(tail.value);
			tail = tail.next;
		}
		return data;
	}
}
