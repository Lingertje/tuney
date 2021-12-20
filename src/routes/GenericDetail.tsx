import { FC, lazy, Suspense, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";

import axios from "utils/AxiosInstance";
import { Layout } from "components/Layout";
import { Container, Row, Col } from "react-grid-system";
import ComposeImageUrl from "utils/ComposeImageUrl";
import { CastList } from "components/Cast/CastList";
import { PosterList } from "components/PosterList/PosterList";
import { GenreList } from "components/Genre/GenreList";
import { getYear } from "utils/Date";
import { Video } from "types/Video";
import { SeasonList } from "components/SeasonList/SeasonList";
import Button, { ButtonTypes } from "components/Button/Button";
const TrailerModal = lazy(() => import("components/Modals/TrailerModal"));

type GenericDetailProps = {
	category: "movie" | "tv"
}

const GenericDetail: FC<GenericDetailProps> = ({ category }: GenericDetailProps) => {
	const { slug } = useParams<{slug?: string}>();
	const id = slug?.slice(0, slug?.indexOf("-"));
	const [showModal, setShowModal] = useState<boolean>(false);

	const { isLoading, error, data: {data} = {} } = useQuery(`${category}-${id}`, () => {
		return axios.get(`/${category}/${id}?language=en&append_to_response=videos`);
	});


	if (isLoading) {
		return (<h1>loading</h1>);
	}

	if (error) {
		return (<h1>error</h1>);
	}

	const getTrailerUrl = (videos: Video[]): string => {
		const trailers = videos?.filter((videos: Video) => {
			return videos.type === "Trailer";
		});

		if (!trailers.length) {
			return videos[0].key;
		}

		return trailers[0].key;
	};

	const modalHandler = (() => {
		setShowModal(showModal => !showModal);
	});

	console.log(data?.seasons);

	return (
		<Layout headerTitle={`${data?.title || data?.name} (${getYear(data?.release_date || data?.first_air_date)})`} bgImageUrl={ComposeImageUrl(data?.backdrop_path, "w1280")}>
			<Helmet>
				<title>{`Tuney - ${data?.title || data?.name}`}</title>
			</Helmet>
			<section>
				<Container>
					<Row>
						<Col xs={12} lg={8}>
							<GenreList genres={data?.genres} />
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={8}>
							<p style={{fontSize: "22px", lineHeight: 1.2, letterSpacing: "0.2px"}}>{data?.overview}</p>
							<Button type={ButtonTypes.PRIMARY} handler={modalHandler}>
								Watch the trailer
							</Button>
						</Col>
					</Row>
					{
						data?.seasons ?
							<SeasonList title={data?.name} seasons={data?.seasons} />
							: ""
					}
				</Container>
			</section>
			<CastList category={category} id={id} />
			<PosterList title={`Similar ${category === "movie" ? "movies" : "series"}`} category={category} genre={`${id}/similar`} />
			<Suspense fallback={<div>Loading...</div>}>
				<TrailerModal trailerUrl={getTrailerUrl(data?.videos?.results)} showModal={showModal} callback={modalHandler} />
			</Suspense>
		</Layout>
	);
};

export default GenericDetail;
