import { Home, Users, CheckSquare, PieChart, ReceiptEuro, Package, Bug, Settings } from "lucide-react";
import Menu from "./components/Menu";
import SidebarFooter from "./components/SidebarFooter";
import SidebarHeader from "./components/SidebarHeader";
import SidebarWrapper from "./components/SidebarWrapper";
import { SidebarProvider } from "./context/useSidebarContext";
import { FC, PropsWithChildren } from "react";
import Sidebar from "./components/Sidebar";

const App: FC<PropsWithChildren> = ({children}) => {
  return (
    <SidebarProvider>
        <Sidebar/>
        {children}
    </SidebarProvider>
  );
};

export default App;
