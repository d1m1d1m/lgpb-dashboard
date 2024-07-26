import { ChangeEvent, FormEvent, useState } from "react";
import { createUser } from "../firebase/auth";

const LoginPage = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const onUserEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserEmail(e.target.value);
	};
	const onUserPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserPassword(e.target.value);
	};

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		createUser(userEmail, userPassword).then((userCredential) =>
			console.log(userCredential),
		);
	};

	return (
		<form onSubmit={submitHandler} className="flex flex-col">
			<div className="flex flex-col">
				<label htmlFor="email">Adresse mail</label>
				<input
					onChange={onUserEmailChange}
					value={userEmail}
					className="border border-rio-grande-500"
					id="email"
					name="email"
					type="email"
				/>
			</div>

			<div className="flex flex-col">
				<label htmlFor="password">Mot de passe</label>
				<input
					onChange={onUserPasswordChange}
					value={userPassword}
					className="border border-rio-grande-500"
					id="password"
					name="password"
					type="password"
				/>
			</div>

			<input
				className="my-4 cursor-pointer rounded-md bg-rio-grande-500 p-3"
				type="submit"
				value="S'incrire"
			/>
		</form>
	);
};

export default LoginPage;
