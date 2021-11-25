import { FC } from "react";
import { Container, Row, Col } from "react-grid-system";

import { Layout } from "components/Layout";
import { PosterList } from "components/PosterList/PosterList";

import useAxios from "hooks/useAxios";

const Movies: FC = () => {
	const { response, loading, error } = useAxios({
		method: "GET",
		url: "/movie/popular"
	});

	if (loading) {
		return (<h1>loading</h1>);
	}

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<Layout>
			<Container>
				<Row>
					<Col xs={12}>
						{/* <Searchbar name="search" placeholder="Search artist..." callback={fetctArtistsBySearch} /> */}
					</Col>
				</Row>
				<Row>
					<PosterList movies={response?.results} />
				</Row>
			</Container>
		</Layout>
	);
};

export default Movies;
