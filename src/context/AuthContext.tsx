import { useState, createContext, FC } from "react";

import { User } from "types/User";

type AuthContextProps = {
	user?: User,
	setUser: (user: User) => void
}

type myObj = {
	user: User
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: FC = ({children}) => {
	const result = sessionStorage.getItem("auth");
	const res: myObj = JSON.parse(result || "{}");

	const [user, setUser] = useState<User>(res.user);

	return (
		<AuthContext.Provider value={{user, setUser}}>
			{ children }
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
