class Tooltip extends HTMLElement {
	constructor() {
		super();
		this._tooltipContainer;
		this._tooltipText = "Default tooltip content.";
		this.attachShadow({ mode: "open" });

		//Everything is scoped: all the CSS in the normal-DOM doesn't influence the shadow-DOM, and all the CSS inside the shadow-DOM doesn't interfere with the normal-DOM.
		this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 10;
                }
                
                span {
                    position: relative;
                }
            </style>
            <slot>Default hover me.</slot>
            <span> (?)</span>
        `;
	}

	connectedCallback() {
		if (this.hasAttribute("text")) {
			this._tooltipText = this.getAttribute("text");
		}

		const tooltipIcon = this.shadowRoot.querySelector("span");
		tooltipIcon.addEventListener(
			"mouseenter",
			this._showTooltip.bind(this)
		);
		tooltipIcon.addEventListener(
			"mouseleave",
			this._hideTooltip.bind(this)
		);
	}

	_showTooltip() {
		this._tooltipContainer = document.createElement("div");
		this._tooltipContainer.textContent = this._tooltipText;
		this.shadowRoot.appendChild(this._tooltipContainer);
	}

	_hideTooltip() {
		this.shadowRoot.removeChild(this._tooltipContainer);
	}
}

//At least one dash (-) must be included in the custom element's name.
customElements.define("uc-tooltip", Tooltip);
