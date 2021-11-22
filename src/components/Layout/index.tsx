import { FC, ReactNode } from "react";

import { Header } from "components/Header";
import { Container } from "react-grid-system";

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
	return (
		<div className="app">
			<Header />
			<main>
				{ children }
			</main>
			<footer>
				<Container>
					<h2>This is the footer</h2>
				</Container>
			</footer>
		</div>
	);
};

export { Layout };
