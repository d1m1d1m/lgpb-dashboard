import { SidebarProvider } from "./context/useSidebarContext";
import { FC, Fragment, PropsWithChildren } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

const App: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SidebarProvider>
			<Fragment>
				<Sidebar />

				{children}
			</Fragment>
		</SidebarProvider>
	);
};

export default App;
