import { FC } from "react";
import { Svg } from "components/Svg/Svg";

import styles from "./MobileNavBar.module.scss";
import { NavLink } from "react-router-dom";

const MobileNavBar: FC = () => {
	return (
		<nav className={styles["mobile-navbar"]}>
			<ul className={`reset-list ${styles["mobile-navbar__list"]}`}>
				<li className={styles["mobile-navbar__item"]}>
					<NavLink to="/">
						<Svg icon="home" />
					</NavLink>
				</li>
				<li className={styles["mobile-navbar__item"]}>
					<NavLink to="/favorites">
						<Svg icon="heart" />
					</NavLink>
				</li>
				<li className={styles["mobile-navbar__item"]}>
					<NavLink to="/search">
						<Svg icon="search" />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export { MobileNavBar };
