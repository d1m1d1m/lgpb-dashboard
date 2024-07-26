import {
	BugIcon,
	ChevronLeft,
	ChevronRight,
	HomeIcon,
	LandmarkIcon,
	LogOutIcon,
	PackageIcon,
	PieChartIcon,
	ReceiptEuroIcon,
	SettingsIcon,
	UsersIcon,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import UserPhoto from "../../assets/user.png";
import { FC } from "react";
import Menu from "./Menu";
import { useSidebarContext } from "../../context/useSidebarContext";
import clsx from "clsx";

const Sidebar: FC = () => {
	const { isExpanded, toggleExpand } = useSidebarContext();

	return (
		<aside
			className={clsx(
				"group flex h-full flex-col bg-white text-rio-grande-900 shadow-xl transition-width",
				{
					"w-64": isExpanded,
					"w-20": !isExpanded,
				},
			)}
		>
			<header className="relative flex items-center justify-center bg-rio-grande-50 p-4">
				<BrandLogo className="size-8" />

				<button
					onClick={toggleExpand}
					className="absolute left-full top-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rio-grande-300 p-1 opacity-0 transition-opacity group-hover:opacity-100"
				>
					{isExpanded ? <ChevronLeft /> : <ChevronRight />}
				</button>
			</header>

			<Menu
				category="Principal"
				items={[
					{ text: "Accueil", icon: <HomeIcon />, href: "/" },
					{
						text: "Statistiques",
						icon: <PieChartIcon />,
						href: "/stats",
					},
					{
						text: "Stocks",
						icon: <PackageIcon />,
						href: "/products",
					},
					{ text: "Équipe", icon: <UsersIcon />, href: "/team" },
				]}
			/>

			<Menu
				category="Gestion"
				items={[
					{
						text: "Factures",
						icon: <ReceiptEuroIcon />,
						href: "/receipts",
					},
					{
						text: "Comptes",
						icon: <LandmarkIcon />,
						href: "/comptes",
					},
				]}
			/>

			<Menu
				category="Support"
				items={[
					{
						text: "Signaler un bug",
						icon: <BugIcon />,
						href: "/bug",
					},
					{
						text: "Paramètres",
						icon: <SettingsIcon />,
						href: "/settings",
					},
				]}
			/>

			<footer className="mt-auto flex bg-gray-100 p-4">
				<img className="block w-full min-w-11 max-w-11" src={UserPhoto} />

				<div
					className={clsx(
						"flex w-full items-center justify-between overflow-hidden text-nowrap",
						{
							hidden: !isExpanded,
						},
					)}
				>
					<div className="mx-3 flex flex-col text-xs uppercase">
						<span className="font-bold">DELETANG Dimitri</span>
						<span>Employé</span>
					</div>

					<a href="#">
						<LogOutIcon />
					</a>
				</div>
			</footer>
		</aside>
	);
};

export default Sidebar;
