import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardView from "./views/Dashboard.tsx";
import TeamView from "./views/Team.tsx";
import TasksView from "./views/Tasks.tsx";
import StatsView from "./views/Stats.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<div>
                        Test bar
                    </div>}/>
                    <Route path="/team" element={<TeamView/>}/>
                    <Route path="/tasks" element={<TasksView/>}/>
                    <Route path="/stats" element={<StatsView/>}/>
                </Routes>
            </App>
        </BrowserRouter>
    </React.StrictMode>,
);
