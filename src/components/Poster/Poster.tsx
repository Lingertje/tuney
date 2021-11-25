import { FC } from "react";
import { Col } from "react-grid-system";
import { Link } from "react-router-dom";

import { Movie } from "types/Movie";
import ComposeImageUrl from "utils/ComposeImageUrl";
import styles from "./Poster.module.scss";
import { RatingCircle } from "components/RatingCircle/RatingCircle";

type PosterProps = {
	movie: Movie
}

const Poster: FC<PosterProps> = ({ movie }: PosterProps) => {
	const circlePercentage = movie.vote_average * 10;
	const title = movie.title || movie.name;
	const slug = `${movie.id}-${title.toLowerCase().split(" ").join("-")}`;

	return (
		<Col xs={12} md={6} lg={3} component="li" key={movie.id}>
			<div className={styles["poster"]}>
				<Link to={`/movie/${slug}`}>
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
					{ circlePercentage > 0 ? <RatingCircle ratingPercentage={movie.vote_average * 10} /> : "" }
				</Link>
			</div>
		</Col>
	);
};

export { Poster };