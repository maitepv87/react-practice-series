import React, { useMemo } from "react";
import { useRenderCount } from "../utils/useRenderCount";

interface MemoizedListProps {
  items: string[];
}

// ListItem is memoized to avoid re-rendering unless its props change
const ListItem: React.FC<{ value: string }> = React.memo(({ value }) => (
  <li>{value}</li>
));

export const MemoizedList: React.FC<MemoizedListProps> = ({ items }) => {
  const renderCount = useRenderCount("MemoizedList");

  const renderedItems = useMemo(
    () => items.map((item) => <ListItem key={item} value={item} />),
    [items]
  );

  return (
    <div>
      <p>Render count: {renderCount}</p>
      <ul>{renderedItems}</ul>
    </div>
  );
};
