class Tooltip extends HTMLElement {
	constructor() {
		super();
		this._tooltipIcon;
		this._tooltipContainer;
		this._tooltipVisible = false;
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
                    padding: 3px;
                    border-radius: 5px;
                    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
                }
                
                span {
                    position: relative;
                }

                .highlight {
                    color: green;
                }

                /* Style things inside a slot (coming from normal-DOM) */
                ::slotted(.highlight) {
                    /* Using !important as the normal-DOM style takes precedence */
                    color: blue !important;
                }

                .icon {
                    background: black;
                    color: white;
                    padding: 2px 8px;
                    text-align: center;
                    border-radius: 50%;
                }

                /* :host is used to target the whole custom web component from the inside. */
                :host(.myClass:hover) {
                    border: 2px solid var(--color-primary, yellow);
                }

                /* Apply a style aware of the parent component. */
                :host-context(p) {
                    font-weight: bold;
                }
            </style>
            <slot>Default hover me.</slot>
            <span class='icon'>?</span>
        `;
	}

	connectedCallback() {
		if (this.hasAttribute("text")) {
			this._tooltipText = this.getAttribute("text");
		}
		this._tooltipIcon = this.shadowRoot.querySelector("span");
		this._tooltipIcon.addEventListener(
			"mouseenter",
			this._showTooltip.bind(this)
		);
		this._tooltipIcon.addEventListener(
			"mouseleave",
			this._hideTooltip.bind(this)
		);
	}

	static get observedAttributes() {
		return ["text"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "text" && oldValue !== newValue) {
			this._tooltipText = newValue;
		}
	}

	disconnectedCallback() {
		console.log("disconnect");
		this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip);
		this._tooltipIcon.removeEventListener("mouseleave", this._hideTooltip);
	}

	_showTooltip() {
		this._tooltipVisible = true;
		this._render();
	}

	_hideTooltip() {
		this._tooltipVisible = false;
		this._render();
	}

	_render() {
		if (this._tooltipVisible) {
			this._tooltipContainer = document.createElement("div");
			this._tooltipContainer.textContent = this._tooltipText;
			this.shadowRoot.appendChild(this._tooltipContainer);
		} else {
			if (this._tooltipContainer) {
				this.shadowRoot.removeChild(this._tooltipContainer);
			}
		}
	}
}

//At least one dash (-) must be included in the custom element's name.
customElements.define("uc-tooltip", Tooltip);
