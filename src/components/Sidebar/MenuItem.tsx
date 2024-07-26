import clsx from "clsx";
import { FC, ReactNode } from "react";
import { useSidebarContext } from "../../context/useSidebarContext";
import { NavLink } from "react-router-dom";

type MenuItemProps = {
	item: { text: string; icon: ReactNode; href: string };
};

const MenuItem: FC<MenuItemProps> = ({ item }) => {
	const { isExpanded } = useSidebarContext();

	return (
		<li key={item.text} className="my-1">
			<NavLink
				className={({ isActive }) =>
					clsx(
						"group/link relative flex items-center text-nowrap rounded-lg px-3 py-2",
						"transition-colors hover:bg-rio-grande-300",
						{
							"bg-rio-grande-300": isActive,
						},
					)
				}
				to={item.href}
			>
				<span>{item.icon}</span>
				<span
					className={clsx("ml-2", {
						"pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 rounded-lg bg-rio-grande-300 px-3 py-1 opacity-0 group-hover/link:opacity-100 group-hover/link:transition-opacity":
							!isExpanded,
					})}
				>
					{item.text}
				</span>
			</NavLink>
		</li>
	);
};

export default MenuItem;
