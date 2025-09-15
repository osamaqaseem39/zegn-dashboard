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
  expiresIn?: number; // Token expiry time in seconds
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
        console.log('authApi: Extracted token:', response.data.body.token);
        console.log('authApi: Extracted user:', response.data.body.user);
        console.log('authApi: Extracted expiresIn:', response.data.body.expiresIn || response.data.body.expires_in);
        
        // Extract token, user, and expiresIn from the body
        return {
          token: response.data.body.token,
          user: response.data.body.user,
          message: response.data.status.message || 'Login successful',
          expiresIn: response.data.body.expiresIn || response.data.body.expires_in
        };
      }
      
      // If response has a data property, use it, otherwise use the response directly
      const data = response.data.data || response.data;
      console.log('authApi: Using fallback data:', data);
      console.log('authApi: Fallback token:', data.token);
      console.log('authApi: Fallback user:', data.user);
      return data;
    } catch (error: any) {
      console.error('authApi: Login error details:', error.response?.data);
      throw error;
    }
  },

  // Register user
  register: async (userData: RegisterRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/auth/register', userData);
    
    // Handle different response structures for register
    if (response.data.body) {
      return {
        token: response.data.body.token,
        user: response.data.body.user,
        message: response.data.status.message || 'Registration successful',
        expiresIn: response.data.body.expiresIn || response.data.body.expires_in
      };
    }
    
    return response.data;
  },

  // Get user profile - Note: This might need to be a different endpoint
  // Since there's no /admin/user/profile in the API docs, using the current user's profile
  getProfile: async (): Promise<UserProfile> => {
    // For now, return the user data from sessionStorage since we don't have a profile endpoint
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    throw new Error('User not found in session');
  },

  // Update user profile - Note: No update profile endpoint in admin API
  updateProfile: async (profileData: Partial<UserProfile>): Promise<UserProfile> => {
    // For now, just update the sessionStorage
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      const updatedUser = { ...user, ...profileData };
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    }
    throw new Error('User not found in session');
  },

  // Get user balance - Note: No current user balance endpoint, only by ID
  getBalance: async (): Promise<{ balance: number }> => {
    // For now, return 0 or get from user data
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      return { balance: user.balance || 0 };
    }
    return { balance: 0 };
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
    
    // Handle different response structures
    if (response.data.body) {
      return response.data.body;
    }
    
    return response.data;
  },

  // Get user by ID (admin only)
  getUserById: async (id: string): Promise<UserProfile> => {
    const response = await axiosInstance.get(`/admin/user/findOne/${id}`);
    
    // Handle different response structures
    if (response.data.body) {
      return response.data.body;
    }
    
    return response.data;
  },

  // Get user balance by ID (admin only)
  getUserBalance: async (id: string): Promise<{ balance: number }> => {
    const response = await axiosInstance.get(`/admin/user/balance/${id}`);
    
    // Handle different response structures
    if (response.data.body) {
      return response.data.body;
    }
    
    return response.data;
  },
}; 