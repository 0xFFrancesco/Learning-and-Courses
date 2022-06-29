import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Switch, Router, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
	productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route exact path="/auth/signin">
							<Signin onSignIn={onSignIn} />
						</Route>
						<Route exact path="/auth/signup">
							<Signup onSignIn={onSignIn} />
						</Route>
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
