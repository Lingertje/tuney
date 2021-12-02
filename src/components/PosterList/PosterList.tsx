import { FC, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useInfiniteQuery } from "react-query";

import axios from "utils/AxiosInstance";
import { Movie } from "types/Movie";
import { Poster } from "components/Poster/Poster";
import { PosterSkeleton } from "components/Poster/PosterSkeleton";
import styles from "./PosterList.module.scss";

type PosterListProps = {
	title: string
	genre: string
	category: "movie" | "tv"
}

const PosterList: FC<PosterListProps> = ({ title, genre, category }: PosterListProps) => {
	const [queryPages, setQueryPages] = useState<any>(null);
	// const [movies, setMovies] = useState<Movie[] | null>(null);
	const posterRow = useRef<HTMLUListElement>(null);

	const {
		isLoading,
		error,
		data: { pages } = {},
		fetchNextPage
	} = useInfiniteQuery(`${category}-${genre}`, async ({pageParam = 1}) => {
		const { data } = await axios.get(`/${category}/${genre}?page=${pageParam}`);
		return data;
	}, {
		getNextPageParam: (lastPage) => lastPage.page += 1
	});

	useEffect(() => {
		setQueryPages(pages);
	}, [pages]);

	useEffect(() => {
		posterRow.current?.addEventListener("scroll", () => {
			const currentRow = posterRow.current;

			if (currentRow) {
				const scrollRight = currentRow?.scrollWidth - currentRow?.scrollLeft;
				const scrollTillEnd = scrollRight - window.innerWidth;

				if (scrollTillEnd === 0) {
					fetchNextPage();
				}
			}
		});
	}, [posterRow]);

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<section className={styles["poster-list__wrapper"]}>
			<Container>
				<Row>
					<Col xs={12} component="h2" className={styles["poster-list__title"]}>{title}</Col>
				</Row>
			</Container>
			<ul className={`reset-list ${styles["poster-list"]}`} ref={posterRow}>
				{isLoading ?
					<PosterSkeleton amount={10} />
					:
					queryPages?.map((page: any) => (
						<>
							{
								page.results.map((movie: Movie) => (
									<Poster key={movie.id} movie={movie} category={category} />
								))
							}
						</>
					))
				}
			</ul>
		</section>
	);
};

export { PosterList };
