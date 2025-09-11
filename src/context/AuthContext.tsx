import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi, UserProfile, LoginRequest, RegisterRequest } from '../api/authApi';
import axiosInstance from '../api/axiosConfig';

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => void;
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
      if (token) {
        try {
          // Set the token in axios headers
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Get user profile
          const userProfile = await authApi.getProfile();
          setUser(userProfile);
        } catch (err) {
          // Token is invalid, remove it
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, [token]);

  const login = async (credentials: LoginRequest) => {
    try {
      setError(null);
      const response = await authApi.login(credentials);
      
      // Store token
      localStorage.setItem('token', response.token);
      setToken(response.token);
      
      // Set user
      setUser(response.user);
      
      // Set axios headers
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    }
  };

  const register = async (userData: RegisterRequest) => {
    try {
      setError(null);
      const response = await authApi.register(userData);
      
      // Store token
      localStorage.setItem('token', response.token);
      setToken(response.token);
      
      // Set user
      setUser(response.user);
      
      // Set axios headers
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    
    // Clear axios headers
    delete axiosInstance.defaults.headers.common['Authorization'];
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 