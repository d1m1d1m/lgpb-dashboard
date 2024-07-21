import { createContext, useContext, useState, ReactNode } from "react";

// Définition du type pour le contexte
interface SidebarContextType {
    expand: boolean;
    toggleExpand: () => void;
}

// Création du contexte avec des valeurs par défaut
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Fournisseur du contexte
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [expand, setIsExpanded] = useState<boolean>(true);

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <SidebarContext.Provider value={{ expand, toggleExpand }}>
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
