import { SidebarProvider } from "./context/useSidebarContext";
import { FC, PropsWithChildren } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

const App: FC<PropsWithChildren> = ({ children }) => {
    return (
        <SidebarProvider>
            <Sidebar />

            {children}
        </SidebarProvider>
    );
};

export default App;