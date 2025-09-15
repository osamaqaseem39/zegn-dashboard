import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://degn.vercel.app/api/v1';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: false,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add CORS headers
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Accept';
    
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
    
    // Only handle 401 if we have a token (we're supposed to be authenticated)
    const token = localStorage.getItem('token');
    if (error.response?.status === 401 && token && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Try to refresh the token
      try {
        // Set the token in axios headers
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Make a request to validate the token
        const response = await axiosInstance.get('/auth/profile');
        
        if (response.data) {
          // Token is still valid, retry the original request
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // Token is invalid, redirect to login
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem('token');
        delete axiosInstance.defaults.headers.common['Authorization'];
        window.location.href = '/signin';
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance; 