import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA4KC0hOh-nCTEqn3K0uylJYJXn8KFHXwg",
	authDomain: "lgpb-dashboard.firebaseapp.com",
	projectId: "lgpb-dashboard",
	storageBucket: "lgpb-dashboard.appspot.com",
	messagingSenderId: "729995023459",
	appId: "1:729995023459:web:54b3881f759c72c40e1456",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
