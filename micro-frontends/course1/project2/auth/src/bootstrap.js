import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, opts) => {
	const { onNavigate, defaultHistory } = opts;
	const history = defaultHistory || createMemoryHistory();

	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} />, el);

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
