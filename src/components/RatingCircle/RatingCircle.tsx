import { FC } from "react";

import styles from "./RatingCircle.module.scss";

type RatingCircleProps = {
	ratingPercentage: number
};

const RatingCircle: FC<RatingCircleProps> = ({ ratingPercentage }: RatingCircleProps) => {
	return (
		<svg className={styles["rating-circle"]} viewBox="0 0 36 36">
			<path
				d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
				fill="none"
				stroke="#444"
				strokeWidth="1"
			/>
			<path
				className={`${styles["rating-circle__percentage"]} ${ratingPercentage >= 70 ? styles["rating-circle--green"] : ratingPercentage >= 40 ? styles["rating-circle--orange"] : styles["rating-circle--red"]}`}
				d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
				fill="none"
				strokeWidth="3"
				strokeDasharray={`${ratingPercentage}, 100`}
			/>
			<text className={styles["rating-circle__text"]} x="8" y="21.35">{`${Math.round(ratingPercentage)}%`}</text>
		</svg>
	);
};

export { RatingCircle };
