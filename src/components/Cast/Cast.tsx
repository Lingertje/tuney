import { FC } from "react";

import ComposeImageUrl from "utils/ComposeImageUrl";
import styles from "components/Cast/Cast.module.scss";
import { Actor } from "types/Actor";

type CastProps = {
	actor: Actor
}

const Cast: FC<CastProps> = ({ actor }: CastProps) => {
	return (
		<li className={styles["cast-card"]} tabIndex={1}>
			{actor.profile_path && <img src={ComposeImageUrl(actor.profile_path, "w200")} alt={`Photo of ${actor.name}`} />}
			<div className={styles["cast-card__body"]}>
				<span className={styles["cast-card__name"]}>{actor.name}</span>
				<span className={styles["cast-card__role"]}>{actor.character}</span>
			</div>
		</li>
	);
};

export { Cast };
