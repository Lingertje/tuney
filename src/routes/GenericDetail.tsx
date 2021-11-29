import { FC } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

import { Layout } from "components/Layout";
import { Container } from "react-grid-system";
import useAxios from "hooks/useAxios";
import ComposeImageUrl from "utils/ComposeImageUrl";

type GenericDetailProps = {
	category: "movie" | "tv"
}

const GenericDetail: FC<GenericDetailProps> = ({ category }: GenericDetailProps) => {
	const { slug } : { slug: string} = useParams();
	const id = slug.slice(0, slug.indexOf("-"));

	const { response, loading, error } = useAxios({
		method: "GET",
		url: `/${category}/${id}`
	});

	if (loading) {
		return (<h1>loading</h1>);
	}

	if (error) {
		return (<h1>error</h1>);
	}

	return (
		<Layout headerTitle={response?.title || response?.name} bgImageUrl={ComposeImageUrl(response?.backdrop_path)}>
			<Helmet>
				<title>Tuney - {response?.title || response?.name}</title>
			</Helmet>
			<section>
				<Container>
					<h2>Detail page</h2>
				</Container>
			</section>
		</Layout>
	);
};

export default GenericDetail;
