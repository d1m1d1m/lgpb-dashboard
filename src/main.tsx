import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardView from "./views/Dashboard";
import StatsView from "./views/Stats";
import TasksView from "./views/Tasks";
import TeamView from "./views/Team";
import ProductsView from "./views/Products";
import { AuthProvider } from "./context/useAuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="flex h-screen w-screen">
			<BrowserRouter>
				<AuthProvider>
					<App>
						<Routes>
							<Route path="/" element={<DashboardView />} />
							<Route path="/team" element={<TeamView />} />
							<Route path="/tasks" element={<TasksView />} />
							<Route path="/stats" element={<StatsView />} />
							<Route path="/products" element={<ProductsView />} />
						</Routes>
					</App>
				</AuthProvider>
			</BrowserRouter>
		</div>
	</React.StrictMode>,
);
