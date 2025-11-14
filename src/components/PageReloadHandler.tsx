import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface PageReloadHandlerProps {
  children: React.ReactNode;
}

export default function PageReloadHandler({ children }: PageReloadHandlerProps) {
  const { loading, user } = useAuth();
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    // Check if this is a page reload
    const isReload = performance.navigation?.type === 1 || 
                     (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload';
    
    if (isReload) {
      setIsReloading(true);
      console.log('PageReloadHandler: Detected page reload');
    }
  }, []);

  useEffect(() => {
    // Reset reloading state when auth loading is complete
    if (!loading && isReloading) {
      const timer = setTimeout(() => {
        setIsReloading(false);
        console.log('PageReloadHandler: Reload recovery complete');
      }, 1000); // Give a small delay to ensure everything is loaded

      return () => clearTimeout(timer);
    }
  }, [loading, isReloading]);

  // Show a brief loading state during reload recovery
  if (isReloading && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Recovering session...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}