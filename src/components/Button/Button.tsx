import { FC, memo } from "react";

import style from "./Button.module.scss";

export enum ButtonTypes {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	GHOST = "ghost"
}

type ButtonProps = {
	type?: ButtonTypes
	handler?: () => unknown
	children: React.ReactNode
}


const Button: FC<ButtonProps> = ({ children, type = ButtonTypes.PRIMARY, handler }: ButtonProps) => {
	const buttonClass = `button--${type}`;

	return (
		<button className={`${style["button"]} ${style[buttonClass]}`} onClick={handler ? handler : undefined} >
			{children}
		</button>
	);
};

export default memo(Button);
