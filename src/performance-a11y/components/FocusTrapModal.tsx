import React, { useEffect, useRef } from "react";

interface FocusTrapModalProps {
  onClose: () => void;
}

export const FocusTrapModal: React.FC<FocusTrapModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement;
    modalRef.current?.focus();

    return () => previouslyFocused?.focus();
  }, []);

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginTop: "1rem",
        background: "#f9f9f9",
      }}
    >
      <h2 id="modal-title">Modal Title</h2>
      <p id="modal-desc">This modal traps focus and restores it on close.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
