import { FC } from "react";
import { Col } from "react-grid-system";

import { Movie } from "types/Movie";
import { Poster } from "components/Poster/Poster";
import styles from "./PosterList.module.scss";

type PosterListProps = {
  movies: Movie[]
}

const PosterList: FC<PosterListProps> = ({ movies }: PosterListProps) => {

	return (
		<>
			<Col xs={12} component="h2">Populair</Col>
			<ul className={`reset-list ${styles["poster-list"]}`}>
				{
					movies.map(movie => {
						return (
							<Poster key={movie.id} movie={movie} />
						);
					})
				}
			</ul>
		</>
	);
};

export { PosterList };
