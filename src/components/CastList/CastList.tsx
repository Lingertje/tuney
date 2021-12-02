import { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useQuery } from "react-query";
import axios from "utils/AxiosInstance";

import styles from "components/CastList/CastList.module.scss";
import ComposeImageUrl from "utils/ComposeImageUrl";

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

	console.log(data.cast);

	return (
		<section>
			<Container>
				<Row>
					<Col xs={12} component="h2" className={styles["cast-list__title"]}>Cast</Col>
				</Row>
			</Container>
			<Row>
				<ul className={`reset-list ${styles["cast-list"]}`}>
					{
						data.cast.map((actor: any) => {
							return (
								<li key={actor.id}>
									{actor.profile_path && <img src={ComposeImageUrl(actor.profile_path, "w200")} alt={`Photo of ${actor.name}`} />}
									<div className={styles["cast-list__body"]}>
										<p>{actor.name}</p>
										<p>{actor.character}</p>
									</div>
								</li>
							);
						})
					}
				</ul>
			</Row>
		</section>
	);
};

export {CastList};
