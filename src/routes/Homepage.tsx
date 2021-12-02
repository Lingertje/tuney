import { FC } from "react";
import { Helmet } from "react-helmet";

import { Layout } from "components/Layout";
import { PosterList } from "components/PosterList/PosterList";

const Homepage: FC = () => {
	return (
		<Layout>
			<Helmet>
				<title>Tuney - Create, Add, Play</title>
			</Helmet>
			<PosterList title="Popular movies" category="movie" genre="popular" />
			<PosterList title="Top rated movies" category="movie" genre="top_rated" />
			<PosterList title="Popular series" category="tv" genre="popular" />
			<PosterList title="Top rated series" category="tv" genre="top_rated" />
		</Layout>
	);
};

export default Homepage;
