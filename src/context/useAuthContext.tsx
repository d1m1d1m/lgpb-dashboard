import { onAuthStateChanged } from "firebase/auth";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import LoginPage from "../views/Login";

const AuthContext = React.createContext({
	currentUser: null,
	userLoggedIn: false,
	loading: true,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	async function initializeUser(user: any) {
		if (user) {
			setCurrentUser({ ...user });
			setUserLoggedIn(true);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
		}
		setLoading(false);
	}

	const values = {
		currentUser,
		userLoggedIn,
		loading,
	};

	return (
		<AuthContext.Provider value={values}>
			{currentUser ? children : <LoginPage />}
		</AuthContext.Provider>
	);
};

export { useAuth, AuthProvider };
