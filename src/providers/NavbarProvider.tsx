import { createContext, ReactNode, useContext, useState } from "react";

type NavbarContextValue = {
	isExpand?: boolean;
	toggleExpandState?: () => void;
};

export const NavbarContext = createContext<NavbarContextValue>({});
export const useNavbarContext = () => useContext(NavbarContext);

type NavbarProviderProps = {
	children: ReactNode;
};

const NavbarProvider = ({ children }: NavbarProviderProps) => {
	const [isExpand, setIsExpand] = useState(true);

	const toggleExpandState = () => {
		setIsExpand(!isExpand);
	};

	const navbarValues = {
		isExpand,
		toggleExpandState,
	};

	return (
		<NavbarContext.Provider value={navbarValues}>
			{children}
		</NavbarContext.Provider>
	);
};

export default NavbarProvider;
