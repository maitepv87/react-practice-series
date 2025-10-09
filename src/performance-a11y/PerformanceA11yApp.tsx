import React from "react";
import {
  AccessibleButton,
  LazyChart,
  MemoizedList,
  FocusTrapModal,
} from "./components";

export const PerformanceA11yApp: React.FC = () => (
  <>
    <AccessibleButton label="Click me" onClick={() => alert("Clicked")} />
    <LazyChart />
    <MemoizedList items={["One", "Two", "Three"]} />
    <FocusTrapModal onClose={() => console.log("Closed")} />
  </>
);
