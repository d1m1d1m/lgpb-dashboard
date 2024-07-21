import { FC, PropsWithChildren } from "react";
import { useSidebarContext } from "../context/useSidebarContext";

type SidebarWrapperProps = {
    className?: string,
    collapsedClassName?: string,
    expandedClassName?: string
};

const SidebarWrapper: FC<PropsWithChildren<SidebarWrapperProps>> = ({ children, className, expandedClassName, collapsedClassName }) => {
    const { expand } = useSidebarContext();

    const classNameStringBuilder : string = [
        className,
        expand ? expandedClassName : collapsedClassName
    ].join(' ');

    return(
        <aside className={classNameStringBuilder}>
            { children }
        </aside>
    );
};

export default SidebarWrapper;