import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi, UserProfile, LoginRequest, RegisterRequest } from '../api/authApi';
import axiosInstance from '../api/axiosConfig';
import SessionManager from '../utils/sessionManager';

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<boolean>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('AuthContext: Initializing auth...');
        console.log('AuthContext: hasValidToken:', SessionManager.hasValidToken());
        console.log('AuthContext: storedToken:', SessionManager.getToken());
        console.log('AuthContext: storedUser:', SessionManager.getUser());
        
        // Check debug info from previous login
        const debugLoginResponse = sessionStorage.getItem('debug_login_response');
        const debugAuthState = sessionStorage.getItem('debug_auth_state');
        console.log('AuthContext: Debug login response:', debugLoginResponse ? JSON.parse(debugLoginResponse) : 'None');
        console.log('AuthContext: Debug auth state:', debugAuthState ? JSON.parse(debugAuthState) : 'None');
        
        // Check if we have a valid token
        if (SessionManager.hasValidToken()) {
          const storedToken = SessionManager.getToken();
          const storedUser = SessionManager.getUser();
          
          if (storedToken && storedUser) {
            // If we have both token and user data, use them directly
            console.log('AuthContext: Using stored token and user data');
            setToken(storedToken);
            setUser(storedUser);
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          } else if (storedToken) {
            // Only validate token if we don't have user data
            console.log('AuthContext: Validating token with API call');
            try {
              // Set the token in axios headers
              axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
              
              // Validate token by getting user profile
              const userProfile = await authApi.getProfile();
              setUser(userProfile);
              setToken(storedToken);
              
              // Update stored user data
              SessionManager.setUser(userProfile);
              console.log('AuthContext: Token validation successful');
            } catch (err) {
              console.error('Token validation failed:', err);
              // Token is invalid, clear session
              SessionManager.clearSession();
              setToken(null);
              setUser(null);
              delete axiosInstance.defaults.headers.common['Authorization'];
            }
          }
        } else {
          // Clear any invalid session data
          console.log('AuthContext: No valid token, clearing session');
          SessionManager.clearSession();
          setToken(null);
          setUser(null);
        }
      } catch (error) {
        console.error('AuthContext: Error during initialization:', error);
        // On any error during initialization, clear session and continue
        SessionManager.clearSession();
        setToken(null);
        setUser(null);
        delete axiosInstance.defaults.headers.common['Authorization'];
      } finally {
        console.log('AuthContext: Initialization complete, setting loading to false');
        setLoading(false);
      }
    };

    initializeAuth();
  }, []); // Remove token dependency to prevent infinite loops

  const login = async (credentials: LoginRequest) => {
    try {
      setError(null);
      setLoading(true); // Set loading to true during login
      console.log('AuthContext: Starting login process');
      const response = await authApi.login(credentials);
      console.log('AuthContext: Login response received:', response);
      
      // Store token and user data using SessionManager
      console.log('AuthContext: About to store token:', response.token);
      console.log('AuthContext: About to store expiresIn:', response.expiresIn);
      
      // Store debug info in sessionStorage for debugging
      sessionStorage.setItem('debug_login_response', JSON.stringify(response));
      
      SessionManager.setToken(response.token, response.expiresIn);
      SessionManager.setUser(response.user);
      console.log('AuthContext: Token stored in SessionManager');
      console.log('AuthContext: Token retrieved from storage:', SessionManager.getToken());
      console.log('AuthContext: hasValidToken after storage:', SessionManager.hasValidToken());
      
      // Store final debug info
      sessionStorage.setItem('debug_auth_state', JSON.stringify({
        token: SessionManager.getToken(),
        user: SessionManager.getUser(),
        hasValidToken: SessionManager.hasValidToken(),
        timestamp: new Date().toISOString()
      }));
      
      setToken(response.token);
      setUser(response.user);
      console.log('AuthContext: Token and user set in state');
      
      // Set axios headers
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
      console.log('AuthContext: Axios headers set');
      
      setLoading(false); // Set loading to false after successful login
    } catch (err) {
      console.error('AuthContext: Login error:', err);
      setError(err instanceof Error ? err.message : 'Login failed');
      setLoading(false); // Set loading to false on error
      throw err;
    }
  };

  const register = async (userData: RegisterRequest) => {
    try {
      setError(null);
      const response = await authApi.register(userData);
      
      // Store token and user data using SessionManager
      SessionManager.setToken(response.token, response.expiresIn);
      SessionManager.setUser(response.user);
      
      setToken(response.token);
      setUser(response.user);
      
      // Set axios headers
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    }
  };

  const refreshToken = async (): Promise<boolean> => {
    if (!SessionManager.hasValidToken()) return false;
    
    const storedToken = SessionManager.getToken();
    if (!storedToken) return false;
    
    try {
      // Set the token in axios headers
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      
      // Validate token by getting user profile
      const userProfile = await authApi.getProfile();
      setUser(userProfile);
      setToken(storedToken);
      
      // Update stored user data
      SessionManager.setUser(userProfile);
      return true;
    } catch (err) {
      console.error('Token refresh failed:', err);
      // Token is invalid, clear session
      SessionManager.clearSession();
      setToken(null);
      setUser(null);
      delete axiosInstance.defaults.headers.common['Authorization'];
      return false;
    }
  };

  const logout = () => {
    // Clear all session data
    SessionManager.clearSession();
    setToken(null);
    setUser(null);
    setError(null);
    
    // Clear axios headers
    delete axiosInstance.defaults.headers.common['Authorization'];
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    refreshToken,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 