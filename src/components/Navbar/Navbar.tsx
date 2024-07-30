import {
	BugIcon,
	HelpCircleIcon,
	HomeIcon,
	PieChartIcon,
	SettingsIcon,
	UsersIcon,
} from "lucide-react";
import Menu from "./Menu";
import NavbarFooter from "./NavFooter";
import NavbarHeader from "./NavbarHeader";
import NavbarController from "./NavbarController";
import { useNavbarContext } from "../../providers/NavbarProvider";

import { cn } from "../../utils/cn";

const Navbar = () => {
	const { isExpand } = useNavbarContext();

	const styles = cn(
		"relative flex h-full w-64 flex-col justify-center shadow-lg transition-width",
		{
			"w-64": isExpand,
			"w-20": !isExpand,
		},
	);

	return (
		<aside className={styles}>
			<NavbarHeader />

			<NavbarController />

			<Menu
				title="Principal"
				items={[
					{ text: "Accueil", href: "/", icon: <HomeIcon /> },
					{ text: "Équipe", href: "/team", icon: <UsersIcon /> },
					{ text: "Stats", href: "/stats", icon: <PieChartIcon /> },
					{ text: "Paramètres", href: "/settings", icon: <SettingsIcon /> },
				]}
			/>

			<Menu
				title="Support"
				items={[
					{ text: "Signaler un bug", href: "/bug", icon: <BugIcon /> },
					{ text: "Centre d'aide", href: "/help", icon: <HelpCircleIcon /> },
				]}
			/>

			<NavbarFooter />
		</aside>
	);
};

export default Navbar;
