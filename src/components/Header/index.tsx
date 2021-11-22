import { FC } from "react";
import { Container } from "react-grid-system";

import styles from "./Header.module.scss";
import { Navbar } from "components/Navbar";

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Container className={styles["header__container"]}>
				<Navbar />
				<h1 className={styles["header__title"]}>Tuney - Create, Add & Play</h1>
			</Container>
		</header>
	);
};

export { Header };
