import axiosInstance from './axiosConfig';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface CreateAdminRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface UserProfile {
  _id: string;
  id?: string;
  email: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  profileUrl?: string;
  balance?: number;
  isEmailVerified?: boolean;
  referralCode?: string;
  role?: string;
  isActive?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: UserProfile;
}

export const authApi = {
  // Login user
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    console.log('authApi: Making login request to /admin/user/sign-in with:', credentials);
    try {
      const response = await axiosInstance.post('/admin/user/sign-in', credentials);
      console.log('authApi: Login response:', response.data);
      
      // Handle different response structures
      if (response.data.status && response.data.status.code !== 200 && response.data.status.code !== 201) {
        throw new Error(response.data.status.message || 'Login failed');
      }
      
      // If response has a body property (successful response), use it
      if (response.data.body) {
        console.log('authApi: Using response.body:', response.data.body);
        // Extract token and user from the body
        return {
          token: response.data.body.token,
          user: response.data.body.user,
          message: response.data.status.message || 'Login successful'
        };
      }
      
      // If response has a data property, use it, otherwise use the response directly
      const data = response.data.data || response.data;
      return data;
    } catch (error: any) {
      console.error('authApi: Login error details:', error.response?.data);
      throw error;
    }
  },

  // Register user
  register: async (userData: RegisterRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  },

  // Get user profile
  getProfile: async (): Promise<UserProfile> => {
    const response = await axiosInstance.get('/auth/profile');
    return response.data;
  },

  // Update user profile
  updateProfile: async (profileData: Partial<UserProfile>): Promise<UserProfile> => {
    const response = await axiosInstance.put('/auth/profile', profileData);
    return response.data;
  },

  // Get user balance
  getBalance: async (): Promise<{ balance: number }> => {
    const response = await axiosInstance.get('/auth/balance');
    return response.data;
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<{ message: string }> => {
    const response = await axiosInstance.post('/auth/forgot-password', { email });
    return response.data;
  },

  // Reset password
  resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
    const response = await axiosInstance.post('/auth/reset-password', { token, newPassword });
    return response.data;
  },

  // Verify email
  verifyEmail: async (token: string): Promise<{ message: string }> => {
    const response = await axiosInstance.post('/auth/verify-email', { token });
    return response.data;
  },

  // Create test admin user for development
  createTestAdmin: async (adminData: CreateAdminRequest): Promise<{ message: string; admin: any }> => {
    const response = await axiosInstance.post('/admin/user/create-test-admin', adminData);
    return response.data;
  },

  // Get all users (admin only)
  getUsers: async (params?: { limit?: number; offset?: number; search?: string }): Promise<{ users: UserProfile[]; total: number }> => {
    const response = await axiosInstance.get('/admin/user/list', { params });
    return response.data;
  },

  // Get user by ID (admin only)
  getUserById: async (id: string): Promise<UserProfile> => {
    const response = await axiosInstance.get(`/admin/user/findOne/${id}`);
    return response.data;
  },

  // Get user balance by ID (admin only)
  getUserBalance: async (id: string): Promise<{ balance: number }> => {
    const response = await axiosInstance.get(`/admin/user/balance/${id}`);
    return response.data;
  },
}; 