import { FC, ReactNode } from "react";
import { useSidebarContext } from "../context/useSidebarContext";
import { NavLink } from "react-router-dom";

type MenuItemProps = {
    text: string;
    icon?: ReactNode;
    href?: string;
};

const MenuItem: FC<MenuItemProps> = ({ href, icon, text }) => {
    const { expand } = useSidebarContext();

    return (
        <li className="text-nowrap overflow-hidden my-1">
            <NavLink
                to={href ? href : "#"}
                className={({ isActive }) => {
                    return [
                        `flex items-center rounded-lg p-3 text-rio-grande-900 hover:bg-rio-grande-300 w-full`,
                        isActive ? "bg-rio-grande-300" : ""
                    ].join(" ")
                }}
            >
                {icon && <span className="">{icon}</span>}
                <span className={`
                    ml-3 overflow-hidden
                    ${expand && "w-0 transition-width hidden"}
                `}>{text}</span>
            </NavLink>
        </li>
    );
};

export default MenuItem;