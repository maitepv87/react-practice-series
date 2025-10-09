import React, { Suspense } from "react";

const Chart = React.lazy(() => import("./Chart"));

export const LazyChart: React.FC = () => (
  <Suspense fallback={<div>Loading chart...</div>}>
    <Chart />
  </Suspense>
);
