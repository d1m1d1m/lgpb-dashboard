import { LogOut } from "lucide-react";
import { useSidebarContext } from "../context/useSidebarContext";

const SidebarFooter = () => {
    const { expand } = useSidebarContext();

    return(
        <footer className="mt-auto flex items-center border-t border-t-rio-grande-300 p-4">
            <img className="w-10" src="https://avatar.iran.liara.run/public"/>

            <div className={`
                flex items-center w-full transition-width
                ${expand ? "" : "w-0 overflow-hidden transition-width"}
            `}>
                <div className="flex flex-col ml-4 text-sm leading-tight">
                    <span className="font-bold text-nowrap">DELETANG Dimitri</span>
                    <span>Employé</span>
                </div>

                <a className="ml-auto text-rose-600" href="#">
                    <LogOut />
                </a>
            </div>
        </footer>
    );
};

export default SidebarFooter;