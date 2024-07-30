import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavbarProvider from "./providers/NavbarProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavbarProvider>
				<App />
			</NavbarProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
