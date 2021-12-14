import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { FavoritesProvider } from "context/FavoriteContext";

const Movies = lazy(() => import("routes/Movies"));
const Series = lazy(() => import("routes/Series"));
const Homepage = lazy(() => import("routes/Homepage"));
const GenericDetail = lazy(() => import("routes/GenericDetail"));
const Favorites = lazy(() => import("routes/Favorites"));
const Search = lazy(() => import("routes/Search"));

const App: FC = () => {
	return (
		<>
			<Router>
				<FavoritesProvider>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/movie/:slug" element={<GenericDetail category="movie" />} />
							<Route path="/movies" element={<Movies />} />
							<Route path="/tv/:slug" element={<GenericDetail category="tv" />} />
							<Route path="/series" element={<Series />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/search" element={<Search />} />
							<Route path="/" element={<Homepage />} />
						</Routes>
					</Suspense>
				</FavoritesProvider>
			</Router>
			<ReactQueryDevtools />
		</>
	);
};

export default App;
