import { FC } from "react";
import { Link } from "react-router-dom";

import { Movie } from "types/Movie";
import ComposeImageUrl from "utils/ComposeImageUrl";
import { RatingCircle } from "components/RatingCircle/RatingCircle";
import styles from "./Poster.module.scss";

type PosterProps = {
	movie: Movie,
	category?: "movie" | "tv"
}

const Poster: FC<PosterProps> = ({ movie, category }: PosterProps) => {
	const circlePercentage = movie.vote_average * 10;
	const title = movie.title || movie.name;
	const slug = `${movie.id}-${title.toLowerCase().split(" ").join("-")}`;

	return (
		<li key={movie.id}>
			<div className={styles["poster"]}>
				<Link to={`/${category}/${slug}`}>
					<img src={ComposeImageUrl(movie.poster_path, "w300")} className={styles["poster__image"]} alt={`${title} movie poster`} />
					{ circlePercentage > 0 ? <RatingCircle ratingPercentage={movie.vote_average * 10} /> : "" }
				</Link>
			</div>
		</li>
	);
};

export { Poster };
