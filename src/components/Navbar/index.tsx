import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={`${styles["navbar__list"]} reset-list`}>
        <li className={styles["navbar__item"]}>
          <Link to="/">Homepage</Link>
        </li>
        <li className={styles["navbar__item"]}>
          <Link to="/artists">Artists</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
