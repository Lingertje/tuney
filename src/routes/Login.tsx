import { FC } from "react";

import { LoginModal, LoginBackdrop } from "components/LoginModal/LoginModal";

const Login: FC = () => {
	return (
		<>
			<LoginBackdrop />
			<LoginModal />
		</>
	);
};

export default Login;
