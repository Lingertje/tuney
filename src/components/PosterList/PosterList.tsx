import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";

import { Movie } from "types/Movie";
import { Poster } from "components/Poster/Poster";
import styles from "./PosterList.module.scss";
import useAxios from "hooks/useAxios";

type PosterListProps = {
	title: string
	genre: string
	category: "movie" | "tv"
}

const PosterList: FC<PosterListProps> = ({ title, genre, category }: PosterListProps) => {
	const [movies, setMovies] = useState<Movie[] | null>(null);

	const { response, loading, error } = useAxios({
		method: "GET",
		url: `/${category}/${genre}`
	});

	useEffect(() => {
		setMovies(response?.results);
	}, [response]);

	if (loading) {
		return (<h1>loading</h1>);
	}

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<section>
			<Container>
				<Row>
					<Col xs={12} component="h2">{title}</Col>
				</Row>
			</Container>
			<Row component="ul" className={`reset-list ${styles["poster-list"]}`}>
				{
					movies?.map(movie => {
						return (
							<Poster key={movie.id} movie={movie} category={category} />
						);
					})
				}
			</Row>
		</section>
	);
};

export { PosterList };
