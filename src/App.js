import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { HomePage, ListenPage } from "./Pages";

function App() {
	return (
		<Switch>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Route exact path="/listen">
				<ListenPage />
			</Route>

			<Redirect to="/" />
		</Switch>
	);
}

export default App;
