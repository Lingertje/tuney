import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAewEIgekvwwM843uwksLqU4Zuqgutq-PQ",
	authDomain: "tuneyfi.firebaseapp.com",
	projectId: "tuneyfi",
	storageBucket: "tuneyfi.appspot.com",
	messagingSenderId: "889215848426",
	appId: "1:889215848426:web:3ce12096b6eb765fc5ac93",
	measurementId: "G-MM04X1G7T6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();

