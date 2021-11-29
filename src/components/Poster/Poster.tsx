import { FC } from "react";
import { Col } from "react-grid-system";
import { Link } from "react-router-dom";

import { Movie } from "types/Movie";
import ComposeImageUrl from "utils/ComposeImageUrl";
import styles from "./Poster.module.scss";
import { RatingCircle } from "components/RatingCircle/RatingCircle";

type PosterProps = {
	movie: Movie,
	category?: "movie" | "tv"
}

const Poster: FC<PosterProps> = ({ movie, category }: PosterProps) => {
	const circlePercentage = movie.vote_average * 10;
	const title = movie.title || movie.name;
	const slug = `${movie.id}-${title.toLowerCase().split(" ").join("-")}`;

	return (
		<Col xs={10} sm={4} xl={3} component="li" key={movie.id}>
			<div className={styles["poster"]}>
				<Link to={`/${category}/${slug}`}>
					<img src={ComposeImageUrl(movie.poster_path, "w500")} className={styles["poster__image"]} />
					{ circlePercentage > 0 ? <RatingCircle ratingPercentage={movie.vote_average * 10} /> : "" }
				</Link>
			</div>
		</Col>
	);
};

export { Poster };
