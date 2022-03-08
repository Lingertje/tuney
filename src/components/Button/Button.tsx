import { FC, memo } from "react";

import style from "./Button.module.scss";

export enum ButtonTypes {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	GHOST = "ghost"
}

type ButtonProps = {
	type?: ButtonTypes
	handler?: () => unknown,
	disabled?: boolean
	children: React.ReactNode
}


const Button: FC<ButtonProps> = ({ children, type = ButtonTypes.PRIMARY, handler, disabled }: ButtonProps) => {
	const buttonClass = `button--${type}`;

	return (
		<button className={`${style["button"]} ${style[buttonClass]}`} onClick={handler ? handler : undefined} disabled={disabled} >
			{children}
		</button>
	);
};

export default memo(Button);
