import { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useQuery } from "react-query";
import axios from "utils/AxiosInstance";

import styles from "components/Cast/Cast.module.scss";
import { Cast } from "./Cast";
import { Actor } from "types/Actor";

type CastListProps = {
	category: string,
	id: string
}

const CastList: FC<CastListProps> = ({category, id}: CastListProps) => {
	const { isLoading, error, data: {data} = {} } = useQuery(`${category}-${id}-cast`, () => {
		return axios.get(`/${category}/${id}/credits`);
	});

	if (isLoading) {
		return (<h1>loading</h1>);
	}

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<section>
			<Container>
				<Row>
					<Col xs={12} component="h2" className={styles["cast-list__title"]}>Cast</Col>
				</Row>
			</Container>
			<ul className={`reset-list ${styles["cast-list"]}`}>
				{
					data.cast.map((actor: Actor) => {
						return (
							<Cast key={actor.id} actor={actor} />
						);
					})
				}
			</ul>
		</section>
	);
};

export {CastList};
