import { FC } from "react";

import styles from "./Searchbar.module.scss";

type SearchbarProps = {
  name: string
  placeholder?: string
  value: string | undefined
  callback: (query: string) => void
}

const Searchbar: FC<SearchbarProps> = ({ name, placeholder, value, callback }: SearchbarProps) => {
	return (
		<input className={styles["searchbar"]} type="text" name={name} placeholder={placeholder} value={value} onChange={(e) => callback(e.target.value)} autoComplete="off" />
	);
};

export { Searchbar };
