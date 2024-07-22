import { createContext, useContext, useState, ReactNode } from "react";

type SetClassNamesParam = {
    initial?: string,
    expanded?: string,
    collapsed?: string,
}

// Définition du type pour le contexte
interface SidebarContextType {
    expanded: boolean;
    toggleExpand: () => void;
    setClassNames: (opt: SetClassNamesParam) => string;
}

// Création du contexte avec des valeurs par défaut
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Fournisseur du contexte
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [expanded, setIsExpanded] = useState<boolean>(true);

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    const setClassNames = (opt: SetClassNamesParam) => {
        return [opt.initial, expanded ? opt.expanded : opt.collapsed].filter(Boolean).join(' ');
    };

    return (
        <SidebarContext.Provider value={{ expanded, toggleExpand, setClassNames }}>
            {children}
        </SidebarContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebarContext must be used within a SidebarProvider");
    }
    return context;
};
