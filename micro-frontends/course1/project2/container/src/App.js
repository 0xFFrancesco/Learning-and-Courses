import React, { lazy, Suspense, useState } from "react";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
	productionPrefix: "co",
});

export default () => {
	const [isSignedIn, setIsSignIn] = useState(false);

	return (
		<BrowserRouter>
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
							<Route path="/">
								<MarketingLazy
									onSignIn={() => setIsSignIn(true)}
								/>
							</Route>
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};
