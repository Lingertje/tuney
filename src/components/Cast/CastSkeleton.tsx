import { FC } from "react";

import { ReactComponent as Movie } from "assets/images/svg/movie.svg";
import styles from "components/Cast/Cast.module.scss";

type CastSkeletonProps = {
	amount?: number
}

const CastSkeleton: FC<CastSkeletonProps> = ({ amount = 10 }: CastSkeletonProps) => {
	return (
		<>
			{
				[...Array(amount)].map((el, i) => {
					return (
						<li key={i} className={styles["cast-skeleton"]}>
							<Movie />
						</li>
					);
				})
			}
		</>
	);
};

export { CastSkeleton };
