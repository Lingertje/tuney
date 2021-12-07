import { FC } from "react";

import styles from "./Poster.module.scss";
import { Svg } from "components/Svg/Svg";

type PosterSkeletonProps = {
	amount: number
}

const PosterSkeleton: FC<PosterSkeletonProps> = ({ amount }: PosterSkeletonProps) => {
	return (
		<>
			{
				[...Array(amount)].map((el, i) => {
					return (
						<li key={i} className={styles["poster-skeleton"]}>
							<Svg icon="movie" />
						</li>
					);
				})
			}
		</>
	);
};

export { PosterSkeleton };
