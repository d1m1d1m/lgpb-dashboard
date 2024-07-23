import {
	BugIcon,
	ChevronLeft,
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
import UserPhoto from "../assets/user.png";
import { FC, ReactNode } from "react";

type MenuProps = {
	id?: string;
	items: { text: string; icon: ReactNode; href: string }[];
};

const Menu: FC<MenuProps> = ({ id, items }) => {
	return (
		<nav className="my-2 px-4">
			{id && (
				<span className="text-xs font-bold uppercase opacity-70">{id}</span>
			)}

			<ul>
				{items.map((item, i) => (
					<li key={i + item.text} className="my-1">
						<a
							className={[
								"flex rounded-lg px-3 py-2 transition-all hover:bg-rio-grande-300",
								item.text === "Accueil"
									? "bg-rio-grande-300 text-rio-grande-600"
									: "",
							].join(" ")}
							href={item.href}
						>
							<span>{item.icon}</span>
							<span className="ml-2">{item.text}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

const Sidebar: FC = () => {
	return (
		<aside className="group flex h-full w-64 flex-col bg-white text-rio-grande-900 shadow-xl">
			<header className="relative flex items-center justify-center bg-rio-grande-50 p-4">
				<BrandLogo className="size-8" />

				<button className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rio-grande-300 p-1 opacity-0 transition-opacity group-hover:opacity-100">
					<ChevronLeft />
				</button>
			</header>

			<Menu
				id="Principal"
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
				id="Gestion"
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
				id="Support"
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
				<img className="size-10" src={UserPhoto} />

				<div className="flex w-full items-center justify-between">
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
