import { FC } from "react";
import {
    Bug,
    CheckSquare,
    Home,
    Package,
    PieChart,
    ReceiptEuro,
    Settings,
    Users,
} from "lucide-react";
import Menu from "../Menu";
import SidebarHeader from "../Sidebar/SidebarHeader";
import SidebarFooter from "../Sidebar/SidebarFooter";
import { useSidebarContext } from "../../context/useSidebarContext";

const Sidebar: FC = () => {
    const { setClassNames } = useSidebarContext();

    return (
        <aside className={setClassNames({
            initial: "flex flex-col h-full shadow-xl transition-width",
            expanded: "w-64",
            collapsed: "w-20"
        })}>
            <SidebarHeader/>

            <Menu
                title="Principal"
                items={[
                    { text: "Dashboard", href: "/", icon: <Home /> },
                    { text: "Team", href: "/team", icon: <Users /> },
                    { text: "Tâches", href: "/tasks", icon: <CheckSquare /> },
                    { text: "Statistiques", href: "/stats", icon: <PieChart /> },
                ]}
            />

            <Menu
                title="Compta"
                items={[
                    { text: "Facture", href: "/invoices", icon: <ReceiptEuro /> },
                    { text: "Commandes", href: "/commands", icon: <Package /> },
                ]}
            />

            <Menu
                title="Support"
                items={[
                    { text: "Signaler un bug", href: "/bugs", icon: <Bug /> },
                    { text: "Paramètres", href: "/settings", icon: <Settings /> },
                ]}
            />

            <SidebarFooter />
        </aside>
    );
};

export default Sidebar;
