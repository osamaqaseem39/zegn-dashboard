import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://degn.vercel.app/api/v1';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: false,
  timeout: 30000, // 30 seconds timeout
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Handle network errors
    if (!error.response) {
      console.error('Axios: Network error:', error.message);
      error.code = 'NETWORK_ERROR';
      return Promise.reject(error);
    }
    
    // Only handle 401 if we have a token and this is not already a retry
    const token = sessionStorage.getItem('token');
    if (error.response?.status === 401 && token && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Don't redirect automatically - let the auth context handle it
      console.log('Axios: 401 error received, letting auth context handle it');
      
      // Just reject the error, don't redirect
      return Promise.reject(error);
    }
    
    // Log other errors for debugging
    console.error('Axios: API error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url
    });
    
    return Promise.reject(error);
  }
);

export default axiosInstance; 