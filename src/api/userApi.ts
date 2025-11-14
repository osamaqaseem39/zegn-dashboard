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
    try {
      const qs = typeof isHoldings === 'boolean' ? `?isHoldings=${isHoldings}` : '';
      const response = await axiosInstance.get(`/user/balance${qs}`);
      
      // Handle new response format (nested in body.data.balance)
      if (response.data.body?.data?.balance) {
        const balanceData = response.data.body.data.balance;
        return {
          totalBalance: parseFloat(balanceData.totalBalance || '0'),
          tokens: balanceData.tokenAccounts?.map((token: any) => ({
            symbol: token.symbol || 'Unknown',
            balance: parseFloat(token.balance || '0'),
            value: parseFloat(token.valueInUSD || '0')
          })) || []
        };
      }
      
      // Handle data directly in response.data.data
      if (response.data.data?.balance) {
        const balanceData = response.data.data.balance;
        return {
          totalBalance: parseFloat(balanceData.totalBalance || '0'),
          tokens: balanceData.tokenAccounts?.map((token: any) => ({
            symbol: token.symbol || 'Unknown',
            balance: parseFloat(token.balance || '0'),
            value: parseFloat(token.valueInUSD || '0')
          })) || []
        };
      }
      
      // Handle data directly in response.data.data (fallback)
      if (response.data.data) {
        const balanceData = response.data.data;
        return {
          totalBalance: parseFloat(balanceData.totalBalance || '0'),
          tokens: balanceData.tokenAccounts?.map((token: any) => ({
            symbol: token.symbol || 'Unknown',
            balance: parseFloat(token.balance || '0'),
            value: parseFloat(token.valueInUSD || '0')
          })) || []
        };
      }
      
      // Fallback to old format
      return response.data;
    } catch (error) {
      console.error('Error fetching user balance:', error);
      return {
        totalBalance: 0,
        tokens: []
      };
    }
  },
};

