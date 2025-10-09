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
    <div ref={modalRef} tabIndex={-1} role="dialog" aria-modal="true">
      <h2>Modal Title</h2>
      <p>This modal traps focus and restores it on close.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
