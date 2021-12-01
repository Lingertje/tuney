import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

const Movies = lazy(() => import("routes/Movies"));
const Series = lazy(() => import("routes/Series"));
const Homepage = lazy(() => import("routes/Homepage"));
const GenericDetail = lazy(() => import("routes/GenericDetail"));

const App: FC = () => {
	return (
		<>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route path="/movie/:slug">
							<GenericDetail category="movie" />
						</Route>
						<Route path="/movies">
							<Movies />
						</Route>
						<Route path="/tv/:slug">
							<GenericDetail category="tv" />
						</Route>
						<Route path="/series">
							<Series />
						</Route>
						<Route path="/">
							<Homepage />
						</Route>
					</Switch>
				</Suspense>
			</Router>
			<ReactQueryDevtools />
		</>
	);
};

export default App;
