import React from "react";
import RouteList from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";
import "./scss/commonScss.scss";

const App: React.FC = (): JSX.Element => {
	return (
		<Router>
			<RouteList />
		</Router>
	);
};

export default App;
