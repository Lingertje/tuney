import { FC, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-grid-system";

import { Movie } from "types/Movie";
import { Poster } from "components/Poster/Poster";
import { PosterSkeleton } from "components/Poster/PosterSkeleton";
import styles from "./PosterList.module.scss";
import useAxios from "hooks/useAxios";

type PosterListProps = {
	title: string
	genre: string
	category: "movie" | "tv"
}

const PosterList: FC<PosterListProps> = ({ title, genre, category }: PosterListProps) => {
	const [movies, setMovies] = useState<Movie[] | null>(null);
	const posterRow = useRef<HTMLUListElement>(null);

	const { response, loading, error } = useAxios({
		method: "GET",
		url: `/${category}/${genre}`
	});

	useEffect(() => {
		setMovies(response?.results);
	}, [response]);

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
			<Row>
				<ul className={`reset-list ${styles["poster-list"]}`} ref={posterRow}>
					{loading ?
						<PosterSkeleton amount={10} />
						:
						movies?.map(movie => {
							return (
								<Poster key={movie.id} movie={movie} category={category} />
							);
						})
					}
				</ul>
			</Row>
		</section>
	);
};

export { PosterList };
