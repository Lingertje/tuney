import { FC } from "react";
import { Col } from "react-grid-system";
import { Link } from "react-router-dom";

import { Movie } from "types/Movie";
import ComposeImageUrl from "utils/ComposeImageUrl";
import styles from "./Poster.module.scss";

type PosterProps = {
	movie: Movie
}

const Poster: FC<PosterProps> = ({ movie }: PosterProps) => {
	return (
		<Col xs={12} md={6} lg={3} component="li" key={movie.id}>
			<div className={styles["poster"]}>
				<Link to={`/movie/${movie.title}`}>
					<img src={ComposeImageUrl(movie.poster_path, "w500")} className={styles["poster__image"]} />
					{/* <div className={styles["poster__content"]}>
						<h2>{movie.title}</h2>
						<span>{new Date(movie.release_date).toLocaleDateString(
							"nl-NL",
							{
								year: "numeric",
								month: "long",
								day: "numeric"
							}
						)}</span>
					</div> */}
					<span className={styles["poster__rating"]}>{movie.vote_average * 10}</span>
				</Link>
			</div>
		</Col>
	);
};

export { Poster };
