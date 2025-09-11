import React, { Suspense, lazy } from "react";

// Lazy load the entire CountryMap component to reduce initial bundle size
const CountryMapLazy = lazy(() => import("./CountryMapInternal").then(module => ({ default: module.default })));

// Define the component props
interface CountryMapProps {
  mapColor?: string;
}

// Loading component for the map
const MapLoading = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const CountryMap: React.FC<CountryMapProps> = ({ mapColor }) => {
  return (
    <Suspense fallback={<MapLoading />}>
      <CountryMapLazy mapColor={mapColor} />
    </Suspense>
  );
};

export default CountryMap;
