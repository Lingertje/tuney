import { FC } from "react";
import { Row, Col } from "react-grid-system";

import { Season } from "types/Serie";
import styles from "./SeasonList.module.scss";

type SeasonListProps = {
	title: string,
	seasons: Season[]
}

const SeasonList: FC<SeasonListProps> = ({ title, seasons }: SeasonListProps) => {
	return (
		<>
			<Row>
				<Col xs={12} lg={8} component="h2">Seasons</Col>
			</Row>
			<Row component="ul" className={`reset-list ${styles["season-list"]}`}>
				{
					seasons?.map((season: Season) => (
						<Col xs={12} lg={8} component="li" key={season.id}>
							<div className={styles["season-list__item"]}>
								{`${title} - ${season?.name}`}
							</div>
						</Col>
					))
				}
			</Row>
		</>
	);
};

export { SeasonList };
