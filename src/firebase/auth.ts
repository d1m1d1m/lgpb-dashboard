import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export const createUser = async (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password);
};
