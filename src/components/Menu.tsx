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
    const { setClassNames } = useSidebarContext();

    return (
        <nav className="flex flex-col px-4 py-3 w-full">
            {title && (
                <span className={setClassNames({
                    initial: "mb-2 px-2 text-xs font-bold uppercase text-rose-900 transition-opacity",
                    expanded: "opacity-100",
                    collapsed: "opacity-0"
                })}>
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
