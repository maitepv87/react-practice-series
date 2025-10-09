import React, { useState } from "react";
import {
  AccessibleButton,
  LazyChart,
  MemoizedList,
  FocusTrapModal,
} from "./components";

export const PerformanceA11yApp: React.FC = () => {
  const [showChart, setShowChart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AccessibleButton label="Click me" onClick={() => alert("Clicked")} />
      <AccessibleButton
        label="Toggle Chart"
        onClick={() => setShowChart((prev) => !prev)}
      />
      {showChart && <LazyChart />}

      <MemoizedList items={["One", "Two", "Three"]} />

      <AccessibleButton label="Open Modal" onClick={() => setShowModal(true)} />
      {showModal && <FocusTrapModal onClose={() => setShowModal(false)} />}
    </>
  );
};
