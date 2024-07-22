import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../context/useSidebarContext";

type MenuItemProps = {
    text: string;
    icon?: ReactNode;
    href?: string;
};

const MenuItem: FC<MenuItemProps> = ({ href, icon, text }) => {
    const { setClassNames } = useSidebarContext();

    return (
        <li className="text-nowrap my-1">
            <NavLink
                to={href ? href : "#"}
                className={({ isActive }) => setClassNames(
                    {
                        initial: `relative flex items-center rounded-lg p-3 text-rio-grande-900 ${isActive ? "bg-rio-grande-300" : ""} hover:bg-rio-grande-300`,
                        expanded: "overflow-visible",
                        collapsed: "overflow-hidden"
                    }
                )}
            >
                {icon && <span>{icon}</span>}
                <span
                    children={text}
                    className={setClassNames(
                        {
                            initial: "ml-3",
                            expanded: "",
                            collapsed: "opacity-0 group-hover:absolute group-hover:transition-opacity group-hover:opacity-100 group-hover:left-full group-hover:bg-rio-grande-300 group-hover:py-1 group-hover:px-2 group-hover:shadow-md rounded-md"
                        }
                    )}
                />
            </NavLink>
        </li>
    );
};

export default MenuItem;
