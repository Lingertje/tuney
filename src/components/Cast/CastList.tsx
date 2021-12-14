import { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useQuery } from "react-query";
import axios from "utils/AxiosInstance";

import styles from "components/Cast/Cast.module.scss";
import { Cast } from "./Cast";
import { Actor } from "types/Actor";
import { CastSkeleton } from "./CastSkeleton";

type CastListProps = {
	category: string,
	id: string | undefined
}

const CastList: FC<CastListProps> = ({category, id}: CastListProps) => {
	const { isLoading, error, data: {data} = {} } = useQuery(`${category}-${id}-cast`, () => {
		return axios.get(`/${category}/${id}/credits`);
	});

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
					isLoading ?
						<CastSkeleton amount={5} />
						:
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
