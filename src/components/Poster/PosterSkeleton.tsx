import { FC } from "react";
import styles from "./Poster.module.scss";

const PosterSkeleton: FC = () => {
	return (
		<span className={styles["poster-skeleton"]}></span>
	);
};

export { PosterSkeleton };
