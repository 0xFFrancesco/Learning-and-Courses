import { Collection } from "../models/Collection";

export abstract class CollectionView<T, P> {
	constructor(
		private parent: Element,
		private collection: Collection<T, P>
	) {}

	abstract renderItem(model: T, itemParent: Element): void;

	render(): void {
		this.parent.innerHTML = "";
		const template = document.createElement("template");

		for (let model of this.collection.models) {
			const itemParent = document.createElement("div");
			this.renderItem(model, itemParent);
			template.content.append(itemParent);
		}

		this.parent.append(template.content);
	}
}
