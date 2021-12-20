import { FC } from "react";

import style from "./TrailerModal.module.scss";
import { Svg } from "components/Svg/Svg";

type TrailerModalProps = {
	trailerUrl: string
	showModal: boolean
	callback: () => void
}

const TrailerModal: FC<TrailerModalProps> = ({trailerUrl, showModal, callback}: TrailerModalProps) => {
	return (
		<div className={`${style["trailer-modal"]} ${showModal ? style["trailer-modal--show"] : ""}`}>
			<span className={style["trailer-modal__close-btn"]} onClick={callback} title="Close">
				<Svg icon="plus" />
			</span>
			<iframe className={style["trailer-modal__iframe"]} src={`https://www.youtube.com/embed/${trailerUrl}`}></iframe>
		</div>
	);
};

export default TrailerModal;
