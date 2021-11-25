import { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
	return (
		<nav className={styles["navbar"]}>
			<ul className={`${styles["navbar__list"]} reset-list`}>
				<li className={styles["navbar__item"]}>
					<NavLink to="/" exact>Homepage</NavLink>
				</li>
				<li className={styles["navbar__item"]}>
					<NavLink to="/movies" exact>Movies</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export { Navbar };
