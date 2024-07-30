import { FC } from "react";
import BrandIcon from "./BrandIcon";

const NavbarHeader: FC = () => {
	return (
		<header className="flex items-center justify-center bg-rio-grande-100 p-6">
			<BrandIcon className="max-h-8 min-h-4 min-w-4 max-w-8" />
		</header>
	);
};

export default NavbarHeader;
