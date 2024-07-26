import { FC, ReactNode } from "react";
import { useSidebarContext } from "../../context/useSidebarContext";
import clsx from "clsx";
import MenuItem from "./MenuItem";

type MenuProps = {
	category?: string;
	items: { text: string; icon: ReactNode; href: string }[];
};

const Menu: FC<MenuProps> = ({ category, items }) => {
	const { isExpanded } = useSidebarContext();

	return (
		<nav className="my-2 px-4">
			{category && (
				<div
					className={clsx(
						"my-2 text-nowrap text-xs font-bold uppercase transition-opacity",
						{
							"opacity-70": isExpanded,
							"opacity-0": !isExpanded,
						},
					)}
				>
					{category}
				</div>
			)}

			<ul>
				{items.map((item, i) => (
					<MenuItem key={i} item={item} />
				))}
			</ul>
		</nav>
	);
};

export default Menu;
