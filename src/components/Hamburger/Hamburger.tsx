import { FC } from "react";

import { Svg } from "components/Svg/Svg";
import styles from "./Hamburger.module.scss";

type HamburgerProps = {
	clickHandler: () => void
}

const Hamburger: FC<HamburgerProps> = ({ clickHandler }: HamburgerProps) => {
	return (
		<span className={styles["hamburger"]} onClick={clickHandler}>
			<Svg icon="menu" />
		</span>
	);
};

export { Hamburger };
