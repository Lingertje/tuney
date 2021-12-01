import { FC } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";

import axios from "utils/AxiosInstance";
import { Layout } from "components/Layout";
import { Container, Row, Col } from "react-grid-system";
import ComposeImageUrl from "utils/ComposeImageUrl";

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

	console.log(data);


	return (
		<Layout headerTitle={data?.title || data?.name} bgImageUrl={ComposeImageUrl(data?.backdrop_path)}>
			<Helmet>
				<title>Tuney - {data?.title || data?.name}</title>
			</Helmet>
			<section>
				<Container>
					<Row>
						<Col xs={12} component="h2">Detail page</Col>
						<p>{data?.overview}</p>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default GenericDetail;
