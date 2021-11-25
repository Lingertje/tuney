import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Movies = lazy(() => import("routes/Movies"));
const Homepage = lazy(() => import("routes/Homepage"));

const App: FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/movies">
						<Movies />
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
