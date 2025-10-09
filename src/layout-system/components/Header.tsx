import React from "react";
import { useLayout } from "../context/LayoutContext";

export const Header: React.FC = () => {
  const { toggleSidebar } = useLayout();

  return (
    <div>
      <h1>Layout System</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Contact</a>
      </nav>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};
