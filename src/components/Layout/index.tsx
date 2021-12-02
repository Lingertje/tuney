import { FC, ReactNode } from "react";

import { Header } from "components/Header";

interface LayoutProps {
  children: ReactNode,
  headerTitle?: string,
  bgImageUrl?: string
}

const Layout: FC<LayoutProps> = ({ children, bgImageUrl, headerTitle }: LayoutProps) => {
	return (
		<div className="app">
			<Header bgImageUrl={bgImageUrl} title={headerTitle} />
			<main>
				{ children }
			</main>
		</div>
	);
};

export { Layout };
