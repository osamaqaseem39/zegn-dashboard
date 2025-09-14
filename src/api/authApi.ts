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
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
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

  // Create admin user
  createAdmin: async (adminData: CreateAdminRequest): Promise<{ message: string; admin: any }> => {
    const response = await axiosInstance.post('/user/create-admin', adminData);
    return response.data;
  },

  // Get all users (admin only)
  getUsers: async (params?: { limit?: number; offset?: number; search?: string }): Promise<{ users: UserProfile[]; total: number }> => {
    const response = await axiosInstance.get('/user', { params });
    return response.data;
  },
}; 