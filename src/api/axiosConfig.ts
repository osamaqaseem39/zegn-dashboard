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

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Use SessionManager to clear session
      SessionManager.clearSession();
      // Only redirect if not already on signin page
      if (window.location.pathname !== '/signin' && window.location.pathname !== '/login') {
        window.location.href = '/signin';
      }
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
