import axios from 'axios';
import SessionManager from '../utils/sessionManager';

// Get API base URL from environment, remove trailing slash if present, fallback to production
const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl) {
    // Remove trailing slash and ensure proper format
    const url = envUrl.replace(/\/+$/, '');
    console.log('API Base URL from environment:', url);
    return url;
  }
  console.warn('VITE_API_BASE_URL not set, using default production URL');
  return 'https://degn.vercel.app/api/v1';
};

const API_BASE_URL = getApiBaseUrl();
console.log('Final API Base URL:', API_BASE_URL);

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
    // Always get fresh token from sessionStorage on every request
    // This ensures we're using the latest token, not a stale one from axios defaults
    const token = SessionManager.getToken();
    if (token) {
      // Ensure token is trimmed and properly formatted
      const cleanToken = token.trim();
      // Set Authorization header (HTTP headers are case-insensitive, but use standard casing)
      config.headers.Authorization = `Bearer ${cleanToken}`;
      
      // Debug: Log the authorization header being sent (truncated for security)
      // Only log in development to avoid console spam
      if (import.meta.env.DEV) {
        console.log('Axios Request: Setting Authorization header', {
          url: config.url,
          method: config.method,
          hasToken: !!token,
          tokenLength: cleanToken?.length,
          tokenPreview: cleanToken ? `${cleanToken.substring(0, 20)}...` : null,
          headerSet: !!config.headers.Authorization
        });
      }
    } else {
      // Remove Authorization header if no token is available
      delete config.headers.Authorization;
      if (import.meta.env.DEV) {
        console.warn('Axios Request: No token available for request', {
          url: config.url,
          method: config.method
        });
      }
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
      
      // Log detailed 401 error information for debugging
      const errorDetails = {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        statusText: error.response?.statusText,
        errorMessage: error.response?.data?.status?.message || error.message,
        errorDetails: error.response?.data?.status?.details,
        hadToken: !!error.config?.headers?.Authorization || !!error.config?.headers?.authorization,
        tokenPreview: error.config?.headers?.Authorization 
          ? error.config.headers.Authorization.substring(0, 30) + '...' 
          : 'No token in request'
      };
      
      console.error('Axios: Received 401 Unauthorized', errorDetails);
      
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
