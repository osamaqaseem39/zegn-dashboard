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

// Small retry helper for transient backend failures
async function withRetry<T>(fn: () => Promise<T>, retries = 2, baseDelayMs = 300): Promise<T> {
  try {
    return await fn();
  } catch (err: any) {
    if (retries <= 0) throw err;
    const status = err?.response?.status;
    const isTransient = !err?.response || status >= 500 || err?.code === 'NETWORK_ERROR' || err?.code === 'ECONNABORTED';
    if (!isTransient) throw err;
    const attempt = 3 - retries; // 0,1
    const delay = baseDelayMs * Math.pow(2, attempt); // 300, 600
    await new Promise(res => setTimeout(res, delay));
    return withRetry(fn, retries - 1, baseDelayMs);
  }
}

export const authApi = {
  // Login user
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    console.log('authApi: Making login request to /admin/user/sign-in with:', credentials);
    try {
      // axiosInstance returns unwrapped payload now
      const data: any = await axiosInstance.post('/admin/user/sign-in', credentials);
      console.log('authApi: Login response:', data);

      if (!data) throw new Error('Empty login response');

      // Normalize fields
      const token = data.token;
      const user = data.user;
      const message = data.message || 'Login successful';
      const expiresIn = data.expiresIn || data.expires_in;

      if (!token || !user) throw new Error('Invalid login response shape');

      return { token, user, message, expiresIn };
    } catch (error: any) {
      console.error('authApi: Login error details:', error?.response?.data || error?.message);
      throw error;
    }
  },

  // Register user
  register: async (userData: RegisterRequest): Promise<LoginResponse> => {
    const data: any = await axiosInstance.post('/auth/register', userData);
    return {
      token: data.token,
      user: data.user,
      message: data.message || 'Registration successful',
      expiresIn: data.expiresIn || data.expires_in,
    };
  },

  // Get user profile - Note: This might need to be a different endpoint
  // Since there's no /admin/user/profile in the API docs, using the current user's profile
  getProfile: async (): Promise<UserProfile> => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    throw new Error('User not found in session');
  },

  // Update user profile - Note: No update profile endpoint in admin API
  updateProfile: async (profileData: Partial<UserProfile>): Promise<UserProfile> => {
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
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      return { balance: user.balance || 0 };
    }
    return { balance: 0 };
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<{ message: string }> => {
    const data: any = await axiosInstance.post('/auth/forgot-password', { email });
    return data;
  },

  // Reset password
  resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
    const data: any = await axiosInstance.post('/auth/reset-password', { token, newPassword });
    return data;
  },

  // Verify email
  verifyEmail: async (token: string): Promise<{ message: string }> => {
    const data: any = await axiosInstance.post('/auth/verify-email', { token });
    return data;
  },

  // Create test admin user for development
  createTestAdmin: async (adminData: CreateAdminRequest): Promise<{ message: string; admin: any }> => {
    const data: any = await axiosInstance.post('/admin/user/create-test-admin', adminData);
    return data;
  },

  // Get all users (admin only)
  getUsers: async (params?: { limit?: number; offset?: number; search?: string }): Promise<{ users: UserProfile[]; total: number }> => {
    const data: any = await axiosInstance.get('/admin/user/list', { params });
    return data;
  },

  // Get user by ID (admin only)
  getUserById: async (id: string): Promise<UserProfile> => {
    const data: any = await axiosInstance.get(`/admin/user/findOne/${id}`);
    return data;
  },

  // Get user balance by ID (admin only)
  getUserBalance: async (id: string): Promise<any> => {
    return withRetry(async () => {
      const data: any = await axiosInstance.get(`/admin/user/balance/${id}`);
      return data;
    });
  },
}; 