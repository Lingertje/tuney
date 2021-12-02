import { FC } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-grid-system";

import { Layout } from "components/Layout";
import { PosterList } from "components/PosterList/PosterList";


const Movies: FC = () => {
	return (
		<Layout>
			<Helmet>
				<title>Tuney - Movies</title>
			</Helmet>
			<section>
				<Container>
					<Row>
						<Col xs={12}>
							{/* <Searchbar name="search" placeholder="Search artist..." callback={fetctArtistsBySearch} /> */}
						</Col>
					</Row>
				</Container>
			</section>
			<PosterList title="Popular" category="movie" genre="popular" />
			<PosterList title="Top rated" category="movie" genre="top_rated" />
			<PosterList title="Now playing" category="movie" genre="now_playing" />
		</Layout>
	);
};

export default Movies;
