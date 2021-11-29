import { FC } from "react";

interface SvgProps {
	className?: string
	viewBox?: string
	icon: string
  }

const Svg: FC<SvgProps> = ({ className, viewBox, icon }: SvgProps) => {
	const spritePath = `${process.env.PUBLIC_URL}/img/sprite.svg#${icon}`;
	return (
		<svg className={className ?? ""} viewBox={viewBox ?? "0 0 24 24"}>
			<use xlinkHref={spritePath} href={spritePath} />
		</svg>
	);
};

export { Svg };
