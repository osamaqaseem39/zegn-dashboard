import axiosInstance from './axiosConfig';

export interface UserSummary {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  walletAddress?: string;
  createdAt?: string;
}

export interface BalanceTokenItem {
  symbol: string;
  balance: number;
  value: number;
}

export interface UserBalanceResponse {
  totalBalance: number;
  tokens: BalanceTokenItem[];
}

export const userApi = {
  getMe: async (): Promise<UserSummary> => {
    const response = await axiosInstance.get('/user/me');
    return response.data.user ?? response.data;
  },

  getMyBalance: async (isHoldings?: boolean): Promise<UserBalanceResponse> => {
    const qs = typeof isHoldings === 'boolean' ? `?isHoldings=${isHoldings}` : '';
    const response = await axiosInstance.get(`/user/balance${qs}`);
    return response.data;
  },
};

