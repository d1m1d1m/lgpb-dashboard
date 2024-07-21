import { FC, ReactNode } from "react";
import MenuItem from "./MenuItem";
import { useSidebarContext } from "../context/useSidebarContext";

type MenuProps = {
    title?: string;
    items: {
        text: string;
        href?: string;
        icon?: ReactNode;
    }[];
};

const Menu: FC<MenuProps> = ({ title, items }) => {
    const { expand } = useSidebarContext();

    return (
        <nav className="flex flex-col px-4 py-3 w-full">
            {title && (
                <span className={`
                    mb-2 px-2 text-xs font-bold uppercase text-rose-900 
                    ${expand ? "opacity-0  transition-opacity" : "opacity-100"}
                `}>
                    {title}
                </span>
            )}
            <ul className="w-full">
                {items.map((item, i) => <MenuItem key={i + item.text} {...item} />)}
            </ul>
        </nav>
    );
};

export default Menu;
