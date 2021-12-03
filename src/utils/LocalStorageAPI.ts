import { Movie } from "types/Movie";

const saveToLocalStorage = (data: Movie): void => {
	let localStorageArray: Movie[] = [];

	localStorageArray = JSON.parse(String(localStorage.getItem("favorites"))) || [];
	const duplicate = localStorageArray.filter((movie: Movie) => {
		return movie.id === data.id;
	});

	if (duplicate.length) {
		localStorageArray = localStorageArray.filter((movie: Movie) => {
			return movie.id !== data.id;
		});
	} else {
		localStorageArray.push(data);
	}

	localStorage.setItem("favorites", JSON.stringify(localStorageArray));
};

const fetchFromLocalStorage = (key: string): Movie[] => {
	return JSON.parse(String(localStorage.getItem(key))) || [];
};

export { saveToLocalStorage, fetchFromLocalStorage };
