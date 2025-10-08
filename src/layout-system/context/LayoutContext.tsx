import { createContext, useContext } from "react";

interface LayoutContextType {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
