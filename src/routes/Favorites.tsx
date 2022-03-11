import { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-grid-system";

import { Layout } from "components/Layout";
import { fetchFromFirebase } from "utils/FavoritesStore";
import { Movie } from "types/Movie";
import { Poster } from "components/Poster/Poster";
import { auth } from "firebase.config";

const Favorites: FC = () => {
	const [favorites, setFavorites] = useState<Movie[]>([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			const favorites = await fetchFromFirebase(String(auth.currentUser?.email));
			setFavorites(favorites);
		};

		fetchFavorites();
	}, []);

	return (
		<Layout>
			<Helmet>
				<title>Tuney - Favorites</title>
			</Helmet>
			<section>
				<Container>
					<Row>
						<Col xs={12} component="h1">Favorites</Col>
					</Row>
					<Row>
						<Col xs={12} component="ul" className="reset-list" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
							{
								favorites.map(movie => (
									<Poster key={movie.id} movie={movie} category={movie?.release_date ? "movie" : "tv"} />
								))
							}
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default Favorites;
