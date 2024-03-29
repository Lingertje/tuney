import { FC, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import qs from "qs";
import axios from "utils/AxiosInstance";

import { Layout } from "components/Layout";
import { Searchbar } from "components/Searchbar";
import { Poster } from "components/Poster/Poster";
import { Movie } from "types/Movie";

const Search: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [query, setQuery] = useState<string | null>();
	const { isLoading, error, data: {results} = {} } = useQuery([`search-${query}`, query], async () => {
		const response = await axios.get(`/search/multi?query=${query}&sort_by=popularity.desc`);
		return response.data;
	}, {
		enabled: query !== null
	});

	useEffect(() => {
		const { query: queryParam } : { query?: string } = qs.parse(location.search, { ignoreQueryPrefix: true });

		setQuery(queryParam || null);
	}, []);

	const handleSubmit = (searchQuery: string | null) => {
		searchQuery = searchQuery === "" ? null : searchQuery;

		navigate(`/search?query=${searchQuery}`, { replace: true });
		setQuery(searchQuery);
	};

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<Layout>
			<Helmet>
				<title>Tuney - Search</title>
			</Helmet>
			<section>
				<Container>
					<Row>
						<Col xs={12} lg={8}>
							<Searchbar name="title" placeholder="Search..." value={query || undefined} callback={handleSubmit} />
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						{ isLoading ?
							<h1>isLoading</h1>
							:
							<Col xs={12} component="ul" className="reset-list" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
								{
									results?.map((movie: Movie) => (
										<Poster key={movie.id} movie={movie} category={movie?.release_date ? "movie" : "tv"} />
									))
								}
							</Col>
						}
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default Search;
