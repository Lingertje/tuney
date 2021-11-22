import { FC, useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";

import { ArtistList } from "components/Artist/ArtistList";
import { Layout } from "components/Layout";
import { Searchbar } from "components/Searchbar";
import axios from "utils/AxiosInstance";

import { Artist } from "types/Artist";
import useAxios from "hooks/useAxios";

const Artists: FC = () => {
	const [pageCount, setPageCount] = useState<number>(1);
	const [artists, setArtists] = useState<Artist[]>([]);

	const { response, loading, error } = useAxios({
		method: "GET",
		url: "/movie/500"
	});

	if (loading) {
		console.log(loading);
	}

	if (error) {
		console.log(error);
	}

	console.log(response);

	return (
		<Layout>
			<Container>
				<Row>
					<Col xs={12}>
						{/* <Searchbar name="search" placeholder="Search artist..." callback={fetctArtistsBySearch} /> */}
					</Col>
				</Row>
				<Row>
					<ArtistList artists={artists} />
				</Row>
				<button onClick={() => setPageCount(pageCount + 1)}>Load more artists</button>
			</Container>
		</Layout>
	);
};

export default Artists;
