import { FC } from "react";
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

type GenericDetailProps = {
	category: "movie" | "tv"
}

const GenericDetail: FC<GenericDetailProps> = ({ category }: GenericDetailProps) => {
	const { slug } : { slug: string} = useParams();
	const id = slug.slice(0, slug.indexOf("-"));

	const { isLoading, error, data: {data} = {} } = useQuery(`${category}-${id}`, () => {
		return axios.get(`/${category}/${id}`);
	});


	if (isLoading) {
		return (<h1>loading</h1>);
	}

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<Layout headerTitle={`${data?.title || data?.name} (${getYear(data?.release_date || data?.first_air_date)})`} bgImageUrl={ComposeImageUrl(data?.backdrop_path)}>
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
						</Col>
					</Row>
				</Container>
			</section>
			<CastList category={category} id={id} />
			<PosterList title={`Similar ${category === "movie" ? "movies" : "series"}`} category={category} genre={`${id}/similar`} />
		</Layout>
	);
};

export default GenericDetail;
