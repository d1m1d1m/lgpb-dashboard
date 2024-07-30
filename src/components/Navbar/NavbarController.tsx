import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavbarContext } from "../../providers/NavbarProvider";

const NavbarController = () => {
	const { isExpand, toggleExpandState } = useNavbarContext();

	return (
		<button
			className="absolute left-full top-12 rounded-md bg-rio-grande-300"
			onClick={toggleExpandState}
		>
			{isExpand ? <ChevronLeft /> : <ChevronRight />}
		</button>
	);
};

export default NavbarController;
