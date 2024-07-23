import ReactDOM from "react-dom/client";
import "./index.css";
import { Fragment } from "react/jsx-runtime";
import Sidebar from "./components_v2/Sidebar";

{
	/* <React.StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<DashboardView/>}/>
                    <Route path="/team" element={<TeamView/>}/>
                    <Route path="/tasks" element={<TasksView/>}/>
                    <Route path="/stats" element={<StatsView/>}/>
                </Routes>
            </App>
        </BrowserRouter>
    </React.StrictMode> */
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Fragment>
		<Sidebar />
	</Fragment>,
);
