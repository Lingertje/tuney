import { FC } from "react";
import { Container } from "react-grid-system";

import styles from "./Header.module.scss";
import { Navbar } from "components/Navbar";
import headerImage from "assets/images/header.jpg";

type HeaderProps = {
	title?: string
	bgImageUrl?: string
}

const Header: FC<HeaderProps> = ({ bgImageUrl, title }: HeaderProps) => {
	const bgImage = bgImageUrl ? bgImageUrl : headerImage;
	const headerTitle = title ? title : "Tuney - Create, Add & Play";

	return (
		<header className={styles.header} style={{
			backgroundImage: `linear-gradient(180deg, rgba(15,13,23,0.75) 75%, rgba(15,13,23,1) 100%),url(${bgImage})`
		}}>
			<Container className={styles["header__container"]}>
				<Navbar />
				<h1 className={styles["header__title"]}>{headerTitle}</h1>
			</Container>
		</header>
	);
};

export { Header };
