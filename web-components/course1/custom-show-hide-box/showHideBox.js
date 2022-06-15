class ShowHideBox extends HTMLElement {
	constructor() {
		super();
		this.isOpen = true;
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
            <div>
                <button>hide</button>
                <div id="hide"><slot></slot></div>
            </div>
        `;
	}

	connectedCallback() {
		const btn = this.shadowRoot.querySelector("button");
		btn.addEventListener("click", () => {
			this.isOpen = !this.isOpen;
			btn.innerText = this.isOpen ? "hide" : "show";
			this.shadowRoot.getElementById("hide").style.display = this.isOpen
				? "block"
				: "none";
		});
	}
}

customElements.define("uc-show-hide-box", ShowHideBox);
