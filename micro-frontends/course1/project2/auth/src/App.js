import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Switch, Router, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
	productionPrefix: "ma",
});

export default ({ history }) => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route exact path="/auth/signin" component={Signin} />
						<Route exact path="/auth/singup" component={Signup} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
