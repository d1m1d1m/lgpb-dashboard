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
import Menu from "./Menu";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarWrapper from "./SidebarWrapper";

const Sidebar: FC = () => {
    return (
        <SidebarWrapper
            className="flex flex-col h-full bg-rio-grande-50 shadow-xl transition-width"
            expandedClassName="w-64"
            collapsedClassName="w-20"
        >
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

            {/* FOOTER */}
            <SidebarFooter />
        </SidebarWrapper>
    );
};

export default Sidebar;
