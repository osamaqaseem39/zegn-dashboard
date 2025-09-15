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
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      // Check if we have a valid token
      if (SessionManager.hasValidToken()) {
        const storedToken = SessionManager.getToken();
        const storedUser = SessionManager.getUser();
        
        if (storedToken) {
          try {
            // Set the token in axios headers
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
            
            // Validate token by getting user profile
            const userProfile = await authApi.getProfile();
            setUser(userProfile);
            setToken(storedToken);
            
            // Update stored user data
            SessionManager.setUser(userProfile);
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
        SessionManager.clearSession();
        setToken(null);
        setUser(null);
      }
      
      setLoading(false);
    };

    initializeAuth();
  }, []); // Remove token dependency to prevent infinite loops

  const login = async (credentials: LoginRequest) => {
    try {
      setError(null);
      console.log('AuthContext: Starting login process');
      const response = await authApi.login(credentials);
      console.log('AuthContext: Login response received:', response);
      
      // Store token and user data using SessionManager
      SessionManager.setToken(response.token, response.expiresIn);
      SessionManager.setUser(response.user);
      
      setToken(response.token);
      setUser(response.user);
      console.log('AuthContext: Token and user stored and set');
      
      // Set axios headers
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
      console.log('AuthContext: Axios headers set');
    } catch (err) {
      console.error('AuthContext: Login error:', err);
      setError(err instanceof Error ? err.message : 'Login failed');
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