import { FC } from "react";
import { Container, Row, Col } from "react-grid-system";

import { Layout } from "components/Layout";
import { PosterList } from "components/PosterList/PosterList";
import { Helmet } from "react-helmet";

const Series: FC = () => {
	return (
		<Layout>
			<Helmet>
				<title>Tuney - Series</title>
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
			<PosterList title="Popular" category="tv" genre="popular" />
			<PosterList title="Top rated" category="tv" genre="top_rated" />
			<PosterList title="On the air" category="tv" genre="on_the_air" />
		</Layout>
	);
};

export default Series;
