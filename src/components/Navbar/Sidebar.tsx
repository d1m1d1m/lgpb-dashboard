import { FC, PropsWithChildren } from "react";

type SidebarProps = PropsWithChildren<{
	collapsed?: boolean;
	collapsedWidth?: string | number;
}>;

const Sidebar: FC<SidebarProps> = ({ children }) => {
	return <aside>{children}</aside>;
};

export default Sidebar;
