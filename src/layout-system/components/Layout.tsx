import React, { ReactNode } from "react";

interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  header,
  sidebar,
  main,
  footer,
}) => (
  <div>
    <header>{header}</header>
    <aside>{sidebar}</aside>
    <main>{main}</main>
    <footer>{footer}</footer>
  </div>
);
