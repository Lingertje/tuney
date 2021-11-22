import { Layout } from "components/Layout";
import { FC } from "react";
import { Container } from "react-grid-system";

const Homepage: FC = () => {
	return (
		<Layout>
			<Container>
				<h1>This is the homepage</h1>
			</Container>
		</Layout>
	);
};

export default Homepage;
