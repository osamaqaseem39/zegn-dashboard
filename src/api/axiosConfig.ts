import axios from 'axios';
import SessionManager from '../utils/sessionManager';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/api/v1';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth token if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Use SessionManager to get token from sessionStorage
    const token = SessionManager.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Track if we're currently handling a 401 to prevent redirect loops
let isHandling401 = false;

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Prevent multiple simultaneous 401 handling
      if (isHandling401) {
        return Promise.reject(error);
      }
      
      isHandling401 = true;
      
      // Don't clear session or redirect immediately - let AuthContext handle it
      // This prevents premature redirects during initialization or temporary failures
      console.warn('Axios: Received 401 Unauthorized - letting AuthContext handle it');
      
      // Reset the flag after a short delay
      setTimeout(() => {
        isHandling401 = false;
      }, 1000);
      
      // Don't redirect here - let the component/AuthContext handle it
      // This prevents redirect loops and allows proper error handling
    }
    return Promise.reject(error);
  }
);

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default axiosInstance;
