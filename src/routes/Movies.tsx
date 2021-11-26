import { FC } from "react";
import { Container, Row, Col } from "react-grid-system";

import { Layout } from "components/Layout";
import { PosterList } from "components/PosterList/PosterList";

import useAxios from "hooks/useAxios";

const Movies: FC = () => {
	return (
		<Layout>
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
		</Layout>
	);
};

export default Movies;
