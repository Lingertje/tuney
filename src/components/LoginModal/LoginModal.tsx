import { FC, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, browserSessionPersistence } from "firebase/auth";

import styles from "components/LoginModal/LoginModal.module.scss";
import Button, { ButtonTypes } from "components/Button/Button";
import { auth } from "firebase.config";
import { AuthContext } from "context/AuthContext";
import { User } from "types/User";

const LoginModal: FC = () => {
	const location: { state: any } = useLocation();
	const redirectPath = location.state.from.pathname;
	const navigate = useNavigate();
	const { setUser } = useContext(AuthContext)!;
	console.log(auth.currentUser?.displayName);

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();

		auth.setPersistence(browserSessionPersistence);
		signInWithPopup(auth, provider)
			.then((result) => {
				const user: User = result.user;
				setUser(user);
				sessionStorage.setItem("auth", JSON.stringify({user: user}));

				navigate(redirectPath);
			}).catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className={styles["login-modal"]}>
			<h1 className={styles["login-title"]}>Sign in</h1>
			<Button type={ButtonTypes.PRIMARY} handler={signInWithGoogle}>
				Sign in with Google
			</Button>
		</div>
	);
};

const LoginBackdrop: FC = () => {
	return (
		<div className={styles["login-backdrop"]}></div>
	);
};

export { LoginModal, LoginBackdrop };
