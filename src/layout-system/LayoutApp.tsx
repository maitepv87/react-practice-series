import React, { useState } from "react";
import { Layout, Header, Sidebar, Main, Footer } from "./components";
import { LayoutContext } from "./context/LayoutContext";

export const LayoutApp: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      <Layout
        header={<Header />}
        sidebar={isSidebarOpen ? <Sidebar /> : null}
        main={<Main />}
        footer={<Footer />}
      />
    </LayoutContext.Provider>
  );
};
