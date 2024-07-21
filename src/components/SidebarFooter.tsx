import { LogOut } from "lucide-react";
import { useSidebarContext } from "../context/useSidebarContext";

const SidebarFooter = () => {
    const { expand } = useSidebarContext();

    return(
        <footer className={`
            mt-auto flex items-center border-t border-t-rio-grande-300 px-4 py-4 min-h-20
            ${expand && "justify-center"}
        `}>
            <img
                className="w-10"
                src="https://avatar.iran.liara.run/public"
                alt=""
            />
            <div className={`
                flex items-center w-full
                ${expand && "hidden"}
            `}>
                <div className="ml-4 flex flex-col leading-tight text-sm">
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