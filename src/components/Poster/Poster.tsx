import { FC } from "react";
import { Link } from "react-router-dom";

import { Movie } from "types/Movie";
import ComposeImageUrl from "utils/ComposeImageUrl";
import { RatingCircle } from "components/RatingCircle/RatingCircle";
import styles from "./Poster.module.scss";
import { Svg } from "components/Svg/Svg";
import { saveToLocalStorage } from "utils/LocalStorageAPI";

type PosterProps = {
	movie: Movie,
	category?: "movie" | "tv"
}

const Poster: FC<PosterProps> = ({ movie, category }: PosterProps) => {
	const circlePercentage = movie.vote_average * 10;
	const title = movie.title || movie.name;
	const slug = `${movie.id}-${title.toLowerCase().split(" ").join("-")}`;

	const addToFavorites = () => {
		saveToLocalStorage(movie);
	};

	return (
		<li key={movie.id}>
			<div className={styles["poster"]}>
				<Link to={`/${category}/${slug}`}>
					<img src={ComposeImageUrl(movie.poster_path, "w300")} className={styles["poster__image"]} alt={`${title} movie poster`} />
					{ circlePercentage > 0 ? <RatingCircle ratingPercentage={movie.vote_average * 10} /> : "" }
				</Link>
				<span className={styles["poster__favorite"]} onClick={addToFavorites} title={`Add ${title} to favorites`}>
					<Svg icon="heart" />
				</span>
			</div>
		</li>
	);
};

export { Poster };
