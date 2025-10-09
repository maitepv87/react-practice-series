import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <div>
      <h2>Navigation</h2>

      <ul>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li>
          <a href="#">Patterns</a>
        </li>
      </ul>
    </div>
  );
};
