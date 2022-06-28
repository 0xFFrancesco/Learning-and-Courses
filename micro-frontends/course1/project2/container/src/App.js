import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
	productionPrefix: "co",
});

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header />
					<Switch>
						<Route path="/auth" component={AuthApp} />
						<Route path="/" component={MarketingApp} />
					</Switch>
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};
