import axios from 'axios';
import { axiosConfig } from './axiosConfig';
import axiosInstance from './axiosConfig';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/v1';

export interface RegisterRequest {
  email: string;
  referralCode?: string;
}

export interface VerifyRequest {
  email: string;
  otp: string;
}

export interface RegisterResponse {
  message: string;
}

export interface VerifyResponse {
  token: string;
}

export interface CreateAdminRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface CreateAdminResponse {
  message: string;
  admin: {
    email: string;
  };
  token?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserProfile {
  email: string;
  role: string;
  id?: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginResponse {
  token: string;
  user: UserProfile;
  expiresIn?: number;
}

export interface ApiResponse<T> {
  status: {
    code: number;
    message: string;
  };
  body: T;
}

export const authApi = {
  // Admin login
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
      console.log('authApi: Making login request to /admin/user/sign-in with:', credentials);
      const response = await axios.post(
        `${API_BASE_URL}/admin/user/sign-in`,
        credentials,
        axiosConfig
      );
      console.log('authApi: Login response:', response);
      
      // Handle nested response structure
      const responseData = response.data;
      
      // Check if response has the nested structure (status + body)
      if (responseData.status && responseData.body) {
        const apiResponse = responseData as ApiResponse<{
          success: boolean;
          token: string;
          user: UserProfile;
        }>;
        
        // Check if the status code indicates success
        if (apiResponse.status.code >= 200 && apiResponse.status.code < 300) {
          const { token, user } = apiResponse.body;
          
          // Calculate expiresIn from JWT token (default to 24 hours if can't decode)
          let expiresIn = 86400; // 24 hours in seconds
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.exp) {
              const currentTime = Math.floor(Date.now() / 1000);
              expiresIn = payload.exp - currentTime;
            }
          } catch (e) {
            console.warn('Could not decode JWT token for expiry, using default 24 hours');
          }
          
          return {
            token,
            user,
            expiresIn,
          };
        } else {
          throw new Error(apiResponse.status.message || 'Login failed');
        }
      } 
      // Handle flat response structure (direct token and user)
      else if (responseData.token && responseData.user) {
        let expiresIn = 86400;
        try {
          const payload = JSON.parse(atob(responseData.token.split('.')[1]));
          if (payload.exp) {
            const currentTime = Math.floor(Date.now() / 1000);
            expiresIn = payload.exp - currentTime;
          }
        } catch (e) {
          console.warn('Could not decode JWT token for expiry, using default 24 hours');
        }
        
        return {
          token: responseData.token,
          user: responseData.user,
          expiresIn,
        };
      } else {
        throw new Error('Invalid response format from login endpoint');
      }
    } catch (error: any) {
      console.error('authApi: Login error details:', error);
      if (error.response) {
        // Server responded with error status
        const errorData = error.response.data;
        const errorMessage = errorData?.status?.message || errorData?.message || error.message || 'Login failed';
        throw new Error(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('No response from server. Please check your connection.');
      } else {
        // Something else happened
        throw new Error(error.message || 'Login failed');
      }
    }
  },

  // Get user profile
  getProfile: async (): Promise<UserProfile> => {
    const response = await axiosInstance.get('/admin/user/profile');
    
    // Handle nested response structure
    if (response.data.status && response.data.body) {
      return response.data.body.user || response.data.body;
    }
    return response.data.user || response.data;
  },

  // Register user
  register: async (userData: RegisterRequest): Promise<LoginResponse> => {
    const response = await axios.post(
      `${API_BASE_URL}/account/connect`,
      userData,
      axiosConfig
    );
    
    // Handle nested response structure
    if (response.data.status && response.data.body) {
      const apiResponse = response.data as ApiResponse<{
        token: string;
        user: UserProfile;
      }>;
      return {
        token: apiResponse.body.token,
        user: apiResponse.body.user,
        expiresIn: 86400,
      };
    }
    
    return {
      token: response.data.token,
      user: response.data.user,
      expiresIn: 86400,
    };
  },
  // Connect account (send OTP)
  connectAccount: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await axios.post(
      `${API_BASE_URL}/account/connect`,
      data,
      axiosConfig
    );
    return response.data;
  },

  // Verify account (verify OTP and get token)
  verifyAccount: async (data: VerifyRequest): Promise<VerifyResponse> => {
    const response = await axios.post(
      `${API_BASE_URL}/account/verify`,
      data,
      axiosConfig
    );
    return response.data;
  },

  // Resend OTP
  resendOtp: async (email: string): Promise<RegisterResponse> => {
    const response = await axios.put(
      `${API_BASE_URL}/account/resend/otp`,
      { email },
      axiosConfig
    );
    return response.data;
  },

  // Create admin user
  createAdmin: async (data: CreateAdminRequest): Promise<CreateAdminResponse> => {
    const response = await axios.post(
      `${API_BASE_URL}/admin/user/create`,
      data,
      axiosConfig
    );
    return response.data;
  },
};
