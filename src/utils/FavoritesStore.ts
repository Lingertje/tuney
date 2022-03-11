import { doc, getDoc, setDoc } from "firebase/firestore";

import { Movie } from "types/Movie";
import { auth, db } from "firebase.config";

const saveToFirebase = async (data: Movie): Promise<void> => {
	const currentUser = String(auth.currentUser?.email);
	let FavoritesArray: Movie[] = [];

	FavoritesArray = await fetchFromFirebase(currentUser);

	console.log(FavoritesArray);


	const duplicate = FavoritesArray.filter((movie: Movie) => {
		return movie.id === data.id;
	});

	if (duplicate.length) {
		FavoritesArray = FavoritesArray.filter((movie: Movie) => {
			return movie.id !== data.id;
		});
	} else {
		FavoritesArray.push(data);
	}

	await setDoc(doc(db, "favorites", currentUser), {
		favorites: JSON.stringify(FavoritesArray)
	});
};

const fetchFromFirebase = async (key: string): Promise<Movie[]> => {
	const docSnap = await getDoc(doc(db, "favorites", key));

	if(docSnap.exists()) {
		const { favorites } = docSnap.data();
		return JSON.parse(String(favorites));
	} else {
		const favorites: Movie[] = [];
		return favorites;
	}


};

export { saveToFirebase, fetchFromFirebase };
