import { FC } from "react";
import { NavLink } from "react-router-dom";

import { Svg } from "components/Svg/Svg";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
	return (
		<nav className={styles["navbar"]}>
			<ul className={`${styles["navbar__list"]} reset-list`}>
				<li className={styles["navbar__item"]}>
					<NavLink to="/" exact>Home</NavLink>
				</li>
				<li className={styles["navbar__item"]}>
					<NavLink to="/movies" exact>Movies</NavLink>
				</li>
				<li className={styles["navbar__item"]}>
					<NavLink to="/series" exact>Series</NavLink>
				</li>
				<li className={styles["navbar__item"]}>
					<NavLink to="/favorites" exact>Favorites</NavLink>
				</li>
				<li className={styles["navbar__item"]}>
					<NavLink to="/search" exact><Svg icon="search" /></NavLink>
				</li>
			</ul>
		</nav>
	);
};

export { Navbar };
