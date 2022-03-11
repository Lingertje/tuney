import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

const Movies = lazy(() => import("routes/Movies"));
const Series = lazy(() => import("routes/Series"));
const Homepage = lazy(() => import("routes/Homepage"));
const GenericDetail = lazy(() => import("routes/GenericDetail"));
const Favorites = lazy(() => import("routes/Favorites"));
const Search = lazy(() => import("routes/Search"));
const Login = lazy(() => import("routes/Login"));
import { AuthProvider } from "context/AuthContext";
import { auth } from "firebase.config";

const App: FC = () => {
	return (
		<AuthProvider>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<ProtectedRoute />}>
							<Route path="/movie/:slug" element={<GenericDetail category="movie" />} />
							<Route path="/movies" element={<Movies />} />
							<Route path="/tv/:slug" element={<GenericDetail category="tv" />} />
							<Route path="/series" element={<Series />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/search" element={<Search />} />
							<Route path="/" element={<Homepage />} />
						</Route>
						<Route path="/login" element={<Login />} />

					</Routes>
				</Suspense>
			</Router>
			<ReactQueryDevtools />
		</AuthProvider>
	);
};

const ProtectedRoute: FC = () => {
	const location = useLocation();

	return auth.currentUser ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
};

export default App;
