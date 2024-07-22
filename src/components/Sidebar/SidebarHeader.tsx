import { ChevronsLeftRight } from "lucide-react";
import BrandLogo from "../../assets/brand.png";
import { useSidebarContext } from "../../context/useSidebarContext";
import { FC } from "react";

const SidebarHeader: FC = () => {
    const { toggleExpand } = useSidebarContext();

    return (
        <header className="relative flex justify-center items-center bg-rio-grande-200 p-4">
            <img
                className="w-10"
                src={BrandLogo}
                alt="Logo de la franchise Le Grand Panier Bio"
            />

            <button
                className="absolute left-full top-full -translate-x-1/2 -translate-y-1/2 rounded-lg border border-rio-grande-500 bg-rio-grande-200 p-1 text-rio-grande-900 size-7"
                onClick={toggleExpand}
            >
                <ChevronsLeftRight className="w-full h-full"/>
            </button>
        </header>
    );
};

export default SidebarHeader;
