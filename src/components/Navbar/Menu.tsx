import { FC, ReactNode } from "react";
import { useNavbarContext } from "../../providers/NavbarProvider";
import MenuItem from "./MenuItem";
import { cn } from "../../utils/cn";

type MenuItemType = {
	text: string;
	href: string;
	icon: ReactNode;
};

type MenuProps = {
	title: string;
	items: MenuItemType[];
};

const Menu: FC<MenuProps> = ({ title, items }) => {
	const { isExpand } = useNavbarContext();

	return (
		<nav className="my-2 flex flex-col justify-center px-4">
			<div
				className={cn(
					"mb-2 text-xs font-bold uppercase text-rio-grande-700 transition-opacity",
					{
						"opacity-0": !isExpand,
					},
				)}
			>
				{title}
			</div>
			<ul className="flex flex-col">
				{items.map((item, index) => (
					<MenuItem key={index} item={item} />
				))}
			</ul>
		</nav>
	);
};

export default Menu;
