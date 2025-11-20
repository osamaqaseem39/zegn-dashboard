import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SessionManager from '../../utils/sessionManager';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  console.log('ProtectedRoute: user:', user, 'loading:', loading);

  // Show loading spinner while checking authentication
  if (loading) {
    // Check session storage as fallback while loading
    const storedUser = SessionManager.getUser();
    const hasValidToken = SessionManager.hasValidToken();
    
    if (storedUser && hasValidToken) {
      console.log('ProtectedRoute: Found valid session in storage, allowing access');
      // Don't block if we have valid session data
      return <>{children}</>;
    }
    
    console.log('ProtectedRoute: Showing loading spinner');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Check both state and session storage
  const storedUser = SessionManager.getUser();
  const hasValidToken = SessionManager.hasValidToken();
  const isAuthenticated = user || (storedUser && hasValidToken);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    console.log('ProtectedRoute: No user, redirecting to signin');
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Render protected content if authenticated
  console.log('ProtectedRoute: User authenticated, rendering protected content');
  return <>{children}</>;
};

export default ProtectedRoute;