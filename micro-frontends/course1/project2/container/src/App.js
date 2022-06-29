import React, { lazy, Suspense, useState, useEffect } from "react";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { Router, Redirect, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
	productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
	const [isSignedIn, setIsSignIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push("/dashboard");
		}
	}, [isSignedIn]);

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header
						isSignedIn={isSignedIn}
						onSignOut={() => setIsSignIn(false)}
					/>
					<Suspense fallback={<Progress />}>
						<Switch>
							<Route path="/auth">
								<AuthLazy onSignIn={() => setIsSignIn(true)} />
							</Route>
							<Route path="/dashboard">
								{!isSignedIn && <Redirect path="/" />}
								<DashboardLazy />
							</Route>
							<Route path="/">
								<MarketingLazy
									onSignIn={() => setIsSignIn(true)}
								/>
							</Route>
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</Router>
	);
};
