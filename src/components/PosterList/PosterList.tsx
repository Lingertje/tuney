import { FC, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useQuery } from "react-query";

import axios from "utils/AxiosInstance";
import { Movie } from "types/Movie";
import { Poster } from "components/Poster/Poster";
import { PosterSkeleton } from "components/Poster/PosterSkeleton";
import styles from "./PosterList.module.scss";

type PosterListProps = {
	title: string
	genre: string
	category: "movie" | "tv"
}

const PosterList: FC<PosterListProps> = ({ title, genre, category }: PosterListProps) => {
	const [movies, setMovies] = useState<Movie[] | null>(null);
	const posterRow = useRef<HTMLUListElement>(null);

	const { isLoading, error, data: {data} = {} } = useQuery(`${category}-${genre}`, () => {
		return axios.get(`/${category}/${genre}`);
	});

	useEffect(() => {
		setMovies(data?.results);
	}, [data]);

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<section className={styles["poster-list__wrapper"]}>
			<Container>
				<Row>
					<Col xs={12} component="h2" className={styles["poster-list__title"]}>{title}</Col>
				</Row>
			</Container>
			<ul className={`reset-list ${styles["poster-list"]}`} ref={posterRow}>
				{isLoading ?
					<PosterSkeleton amount={10} />
					:
					movies?.map(movie => {
						return (
							<Poster key={movie.id} movie={movie} category={category} />
						);
					})
				}
			</ul>
		</section>
	);
};

export { PosterList };
