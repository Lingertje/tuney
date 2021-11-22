import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Artists = lazy(() => import("routes/Artists"));
const Homepage = lazy(() => import("routes/Homepage"));

const App: FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/movies">
						<Artists />
					</Route>
					<Route path="/">
						<Homepage />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
