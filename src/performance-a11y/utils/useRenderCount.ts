import { useRef, useEffect } from "react";

/**
 * Hook para contar cuántas veces se ha renderizado un componente.
 * Útil para profiling visual y debugging editorial.
 */
export const useRenderCount = (label: string = "Render") => {
  const countRef = useRef(1);

  useEffect(() => {
    countRef.current += 1;
    console.log(`${label}: ${countRef.current}`);
  });

  return countRef.current;
};
