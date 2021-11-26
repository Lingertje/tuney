import { FC } from "react";
import { Col, Container, Row } from "react-grid-system";

import { Movie } from "types/Movie";
import { Poster } from "components/Poster/Poster";
import styles from "./PosterList.module.scss";

type PosterListProps = {
  movies: Movie[]
}

const PosterList: FC<PosterListProps> = ({ movies }: PosterListProps) => {

	return (
		<section>
			<Container>
				<Row>
					<Col xs={12} component="h2">Populair</Col>
				</Row>
			</Container>
			<Row component="ul" className={`reset-list ${styles["poster-list"]}`}>
				{
					movies.map(movie => {
						return (
							<Poster key={movie.id} movie={movie} />
						);
					})
				}
			</Row>
		</section>
	);
};

export { PosterList };
