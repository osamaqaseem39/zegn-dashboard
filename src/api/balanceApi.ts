import axiosInstance from './axiosConfig';

export interface BalanceInfo {
  balance: number;
  usdValue: number;
  currency: string;
  lastUpdated: string;
}

export interface WalletInfo {
  address: string;
  balance: number;
  totalRewards: number;
  isActive: boolean;
}

export interface UserBalance {
  _id: string;
  email: string;
  walletInfo: WalletInfo;
  balance: number;
  totalRewards: number;
  createdAt: string;
  updatedAt: string;
}

export interface BalanceResponse {
  success: boolean;
  data: {
    balance: number;
    totalRewards: number;
    walletInfo: WalletInfo;
  };
  message?: string;
}

export const balanceApi = {
  // Get current user's balance
  getCurrentUserBalance: async (): Promise<BalanceResponse> => {
    try {
      const response = await axiosInstance.get('/user/balance');
      
      // Handle different response structures
      if (response.data.body) {
        return {
          success: true,
          data: response.data.body,
          message: response.data.message || 'Balance retrieved successfully'
        };
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Balance API error:', error);
      throw error;
    }
  },

  // Get user balance by ID (admin only)
  getUserBalanceById: async (userId: string): Promise<BalanceResponse> => {
    try {
      const response = await axiosInstance.get(`/admin/user/balance/${userId}`);
      
      // Handle different response structures
      if (response.data.body) {
        return {
          success: true,
          data: response.data.body,
          message: response.data.message || 'User balance retrieved successfully'
        };
      }
      
      return response.data;
    } catch (error: any) {
      console.error('User balance API error:', error);
      throw error;
    }
  },

  // Get balance history
  getBalanceHistory: async (params?: {
    limit?: number;
    offset?: number;
    startDate?: string;
    endDate?: string;
  }): Promise<{
    success: boolean;
    data: {
      history: Array<{
        date: string;
        balance: number;
        change: number;
        type: 'deposit' | 'withdrawal' | 'reward' | 'fee';
        description: string;
      }>;
      total: number;
    };
  }> => {
    try {
      const response = await axiosInstance.get('/user/balance/history', { params });
      return response.data;
    } catch (error: any) {
      console.error('Balance history API error:', error);
      throw error;
    }
  },

  // Update user balance (admin only)
  updateUserBalance: async (userId: string, balance: number): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await axiosInstance.put(`/admin/user/balance/${userId}`, { balance });
      return response.data;
    } catch (error: any) {
      console.error('Update balance API error:', error);
      throw error;
    }
  },

  // Get wallet information
  getWalletInfo: async (): Promise<{
    success: boolean;
    data: WalletInfo;
  }> => {
    try {
      const response = await axiosInstance.get('/user/wallet');
      return response.data;
    } catch (error: any) {
      console.error('Wallet info API error:', error);
      throw error;
    }
  },

  // Connect wallet
  connectWallet: async (walletData: {
    address: string;
    signature: string;
  }): Promise<{
    success: boolean;
    message: string;
    walletInfo: WalletInfo;
  }> => {
    try {
      const response = await axiosInstance.post('/user/wallet/connect', walletData);
      return response.data;
    } catch (error: any) {
      console.error('Connect wallet API error:', error);
      throw error;
    }
  },

  // Disconnect wallet
  disconnectWallet: async (): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await axiosInstance.delete('/user/wallet');
      return response.data;
    } catch (error: any) {
      console.error('Disconnect wallet API error:', error);
      throw error;
    }
  },

  // Get total balance across all users (admin only)
  getTotalBalance: async (): Promise<{
    success: boolean;
    data: {
      totalBalance: string;
      totalCashBalance: string;
      totalHoldingBalance: string;
      totalInUSDC: string;
      totalUsers: number;
      tokenHoldings: Array<{
        mintAddress: string;
        symbol: string;
        balance: string;
        valueInUSD: string;
      }>;
    };
    message?: string;
  }> => {
    try {
      const response = await axiosInstance.get('/admin/user/total-balance');
      
      // Handle different response structures
      if (response.data.body) {
        return {
          success: true,
          data: response.data.body,
          message: response.data.message || 'Total balance retrieved successfully'
        };
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Total balance API error:', error);
      throw error;
    }
  },

  // Get all users with their balances (admin only)
  getAllUsersWithBalances: async (): Promise<{
    success: boolean;
    data: {
      users: Array<{
        _id: string;
        email: string;
        userName: string;
        role: string;
        walletAddress: string;
        balance: {
          totalBalance: string;
          cashBalance: string;
          totalHoldingBalance: string;
          hasError: boolean;
        };
        createdAt: string;
        isActive: boolean;
      }>;
      total: number;
    };
    message?: string;
  }> => {
    try {
      const response = await axiosInstance.get('/admin/user/all-with-balances');
      
      // Handle different response structures
      if (response.data.body) {
        return {
          success: true,
          data: response.data.body,
          message: response.data.message || 'Users with balances retrieved successfully'
        };
      }
      
      return response.data;
    } catch (error: any) {
      console.error('All users with balances API error:', error);
      throw error;
    }
  }
};