import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			"click:.set-age": this.onSetAgeClick,
			"click:.set-name": this.onSetNameClick,
			"click:.save-model": this.onSaveModelClick,
		};
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const input = this.parent.querySelector("input");
		if (input) {
			this.model.set({ name: input.value });
		}
	};

	onSaveModelClick = (): void => {
		this.model.save();
	};

	template(): string {
		return `
            <div>
                <input placeholder="${this.model.get("name")}" />
                <button class='set-name'>Update Name</button>
                <button class='set-age'>Set Random Age</button>
                <button class='save-model'>Save User</button>
            </div>
        `;
	}
}
