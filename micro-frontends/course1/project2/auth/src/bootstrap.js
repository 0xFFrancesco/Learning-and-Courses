import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, opts) => {
	const { onNavigate, onSignIn, defaultHistory, initialPath } = opts;
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath],
		});

	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

	return {
		onParentNavigate(location) {
			const nextPath = location.pathname;
			if (history.location.pathname !== nextPath) {
				history.push(nextPath);
			}
		},
	};
};

if (process.env.NODE_ENV === "development") {
	const devRoot = document.getElementById("_auth-dev-root");
	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
}

export { mount };
