import axios from 'axios';
import { axiosConfig } from './axiosConfig';

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

export const authApi = {
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
};
