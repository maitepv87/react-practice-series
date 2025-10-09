import React, { Suspense } from "react";

const Chart = React.lazy(() => import("./Chart"));

export const LazyChart: React.FC = () => (
  <div role="region" aria-label="Sales chart section">
    <Suspense fallback={<div>Loading chart...</div>}>
      <Chart />
    </Suspense>
  </div>
);
