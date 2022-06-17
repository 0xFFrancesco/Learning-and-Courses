class Modal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
            <style>
                #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0,0,0,0.75);
                    z-index: 10;
                    opacity: 0;
                    pointer-events: none;
                    transition: all .3s;
                }

                #modal {
                    position: fixed;
                    top: 10vh;
                    left: 25%;
                    width: 50%;
                    background: white;
                    border-radius: 3px;
                    z-index: 100;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    opacity: 0;
                    pointer-events: none;
                    transition: all .3s;
                }

                :host([opened]) #backdrop, 
                :host([opened]) #modal {
                    opacity: 1;
                    pointer-events: all;
                }

                :host([opened]) #modal {
                    top: 15vh;
                }

                header {
                    padding: 1rem;
                    border-bottom: 1px solid #ccc;
                }

                ::slotted(h2) {
                    font-size: 1.25rem;
                    margin: 0;
                }

                #main {
                    padding: 1rem;
                }

                #actions {
                    border-top: 1px solid #ccc;
                    padding: 1rem;
                    display: flex;
                    justify-content: flex-end;
                }

                #actions button {
                    margin: 0 0.25rem;
                }
            </style>

            <div id='backdrop'></div>
            <div id='modal'>
                <header>
                    <slot name="title">Default slot title</slot>
                </header>
                <section id="main">
                    <slot>Default slot content</slot>
                </section>
                <section id="actions">
                    <button id="cancel">Cancel</button>
                    <button id="confirm">Okay</button>
                </section>
            </div>
        `;

		const slots = this.shadowRoot.querySelectorAll("slot");
		slots[1].addEventListener("slotchange", (ev) => {
			console.dir(slots[1].assignedNodes());
		});

		const backdrop = this.shadowRoot.getElementById("backdrop");
		backdrop.addEventListener("click", this._cancel.bind(this));

		const cancelButton = this.shadowRoot.getElementById("cancel");
		cancelButton.addEventListener("click", this._cancel.bind(this));

		const confirmButton = this.shadowRoot.getElementById("confirm");
		confirmButton.addEventListener("click", this._confirm.bind(this));
	}

	open() {
		this.setAttribute("opened", "");
	}

	get isOpen() {
		return this.hasAttribute("opened");
	}

	hide() {
		this.removeAttribute("opened");
	}

	_cancel(ev) {
		this.hide();
		//Carry events to the outside of the shadow-DOM using "composed: true".
		const cancelEvent = new Event("cancel", {
			composed: true,
		});
		ev.target.dispatchEvent(cancelEvent);
	}

	_confirm(ev) {
		this.hide();
		const confirmEvent = new Event("confirm");
		//Carry events to the outside of the shadow-DOM dispatching the event directly from "this". It doesn't bubble up though.
		this.dispatchEvent(confirmEvent);
	}
}

customElements.define("uc-modal", Modal);
