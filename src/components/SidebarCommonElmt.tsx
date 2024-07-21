import { FC, PropsWithChildren } from "react";

type SidebarCommonElementProps = {
    className?: string,
    collapsedClassName?: string,
    expandedClassName?: string
}

const SidebarCommonElement: FC<PropsWithChildren<SidebarCommonElementProps>> = ({ children }) => {
    return children;
};