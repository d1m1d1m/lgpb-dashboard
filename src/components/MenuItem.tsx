import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../context/useSidebarContext";

type MenuItemProps = {
    text: string;
    icon?: ReactNode;
    href?: string;
};

const MenuItem: FC<MenuItemProps> = ({ href, icon, text }) => {
    const {expand} = useSidebarContext();

    return (
        <li className="text-nowrap my-1">
            <NavLink
                to={href ? href : "#"}
                className={({ isActive }) => {
                    return [
                        `relative flex items-center rounded-lg p-3 text-rio-grande-900 hover:bg-rio-grande-300`,
                        `group`,
                        isActive ? "bg-rio-grande-300" : ""
                    ].join(" ")
                }}
            >
                {icon && <span className="">{icon}</span>}
                <span className={`
                    ml-3
                    ${expand ? "" : "opacity-0 group-hover:absolute group-hover:transition-opacity group-hover:opacity-100 group-hover:block group-hover:left-full group-hover:bg-rio-grande-300 group-hover:py-1 group-hover:px-2 group-hover:shadow-md rounded-md"}
                `}>
                    {text}
                </span>
            </NavLink>
        </li>
    );
};

export default MenuItem;
