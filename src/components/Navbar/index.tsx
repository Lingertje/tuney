import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import { Svg } from "components/Svg/Svg";
import { Hamburger } from "components/Hamburger/Hamburger";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
	const [isMenu, setIsMenu] = useState<boolean>(false);
	const handleClick = () => {
		setIsMenu(isMenu => !isMenu);
	};

	return (
		<>
			<Hamburger clickHandler={handleClick} />
			<nav className={`${styles["navbar"]} ${isMenu ? styles["show"] : ""}`}>
				<span className={styles["navbar__close-btn"]} onClick={handleClick} title="Close">
					<Svg icon="plus" viewBox="0 0 20 20" />
				</span>
				<ul className={`${styles["navbar__list"]} reset-list`}>
					<li className={styles["navbar__item"]}>
						<NavLink to="/">Home</NavLink>
					</li>
					<li className={styles["navbar__item"]}>
						<NavLink to="/movies">Movies</NavLink>
					</li>
					<li className={styles["navbar__item"]}>
						<NavLink to="/series">Series</NavLink>
					</li>
					<li className={styles["navbar__item"]}>
						<NavLink to="/favorites">Favorites</NavLink>
					</li>
					<li className={styles["navbar__item"]}>
						<NavLink to="/search"><Svg icon="search" /></NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export { Navbar };
