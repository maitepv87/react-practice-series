import React from "react";

interface AccessibleButtonProps {
  label: string;
  onClick: () => void;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  label,
  onClick,
}) => (
  <button onClick={onClick} aria-label={label} className="accessible-button">
    {label}
  </button>
);
