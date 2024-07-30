import { FC, ReactNode } from "react";
import { useNavbarContext } from "../../providers/NavbarProvider";
import { cn } from "../../utils/cn";

type MenuItemProps = {
	item: {
		text: string;
		icon: ReactNode;
		href: string;
	};
};

const MenuItem: FC<MenuItemProps> = ({ item }) => {
	const { isExpand } = useNavbarContext();

	const styles = {
		menuItem: "my-1",
		menuLink: cn(
			"relative flex items-center text-nowrap rounded-lg px-3 py-2 text-rio-grande-900 transition-colors",
			"hover:bg-rio-grande-300",
			"group/navlink",
			{
				"bg-rio-grande-300": window.location.pathname === item.href, // To remove
			},
		),
		menuLinkText: cn("relative ml-3 w-fit py-1 overflow-hidden", {
			"group-hover/navlink:left-full group-hover/navlink:rounded-lg group-hover/navlink:px-3 group-hover/navlink:overflow-visible group-hover/navlink:bg-rio-grande-300":
				!isExpand,
		}),
	};

	return (
		<li className={styles.menuItem}>
			<a className={styles.menuLink} href={item.href}>
				<span>{item.icon}</span>
				<span className={styles.menuLinkText}>{item.text}</span>
			</a>
		</li>
	);
};

export default MenuItem;
