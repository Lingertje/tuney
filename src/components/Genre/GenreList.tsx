import { FC } from "react";

import { Genre } from "types/Movie";
import styles from "./Genre.module.scss";

type GenreListProps = {
	genres: Genre[];
}

const GenreList: FC<GenreListProps> = ({ genres }: GenreListProps) => {
	return (
		<ul className={`reset-list ${styles["genre-list"]}`}>
			{
				genres?.map((genre: Genre) => {
					return <li key={genre.id} className={styles["genre-item"]}>{genre.name}</li>;
				})
			}
		</ul>
	);
};

export { GenreList };
