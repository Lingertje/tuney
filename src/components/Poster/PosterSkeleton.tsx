import { FC } from "react";

import { ReactComponent as Movie } from "assets/images/svg/movie.svg";
import styles from "./Poster.module.scss";

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
							<Movie />
						</li>
					);
				})
			}
		</>
	);
};

export { PosterSkeleton };
