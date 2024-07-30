import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
	UserCredential,
} from "firebase/auth";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { auth } from "../firebase";

type AuthContextValue = {
	registerUser?: (email: string, password: string) => Promise<UserCredential>;
	user?: User | null;
	signInUser?: (email: string, password: string) => Promise<UserCredential>;
	signOutUser?: () => Promise<void>;
	loading?: boolean;
};

export const AuthContext = createContext<AuthContextValue>({});
export const useAuthContext = () => useContext(AuthContext);

type AuthProviderProps = {
	children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const registerUser = (email: string, password: string) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInUser = (email: string, password: string) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signOutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const authValue = {
		registerUser,
		user,
		signInUser,
		signOutUser,
		loading,
	};

	return (
		<AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
