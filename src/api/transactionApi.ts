import axiosInstance from './axiosConfig';

export interface Transaction {
  _id: string;
  to: string;
  transactionHash: string;
  amount: string;
  amountInUSD: string;
  currentTokenPrice: string;
  amountOutInfo: {
    amount: string;
    unitPriceInUSD: string;
  };
  profit: string;
  tokenAddress: string;
  status: 'success' | 'failed' | 'pending';
  platformFee: string;
  type: 'buy' | 'sell' | 'send' | 'referral';
  user: string;
  transaction: string;
  token: {
    _id: string;
    symbol: string;
    name: string;
    tokenAddress: string;
    decimals: number;
    price: number;
  };
  isActive: boolean;
  error: string;
  createdAt: string;
  updatedAt: string;
}

export interface BuyTransactionRequest {
  currentTokenPrice: string;
  amount: string;
  amountInUSD: string;
  slippage?: string;
  token: string;
}

export interface SellTransactionRequest {
  currentTokenPrice: string;
  amount: string;
  amountInUSD: string;
  slippage?: string;
  token: string;
}

export interface SendTransactionRequest {
  to: string;
  amount: string;
  token: string;
}

export interface TransactionResponse {
  signature: string;
  status: 'success' | 'failed' | 'pending';
  error: string | null;
  transaction: Transaction | null;
}

export interface TransactionHistoryRequest {
  search?: string;
  type?: string;
  status?: string;
  tokenSymbol?: string;
  dateFrom?: string;
  dateTo?: string;
  minAmount?: string;
  maxAmount?: string;
  includePending?: boolean;
  includeFailed?: boolean;
  limit?: number;
  offset?: number;
}

export interface TransactionHistoryResponse {
  transactions: Transaction[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export const transactionApi = {
  // Buy token
  buyToken: async (transactionData: BuyTransactionRequest): Promise<TransactionResponse> => {
    try {
      const response = await axiosInstance.post('/transaction/buy', transactionData);
      return response.data;
    } catch (error: any) {
      console.error('Buy token API error:', error);
      throw error;
    }
  },

  // Sell token
  sellToken: async (transactionData: SellTransactionRequest): Promise<TransactionResponse> => {
    try {
      const response = await axiosInstance.post('/transaction/sell', transactionData);
      return response.data;
    } catch (error: any) {
      console.error('Sell token API error:', error);
      throw error;
    }
  },

  // Send token
  sendToken: async (transactionData: SendTransactionRequest): Promise<TransactionResponse> => {
    try {
      const response = await axiosInstance.post('/transaction/send', transactionData);
      return response.data;
    } catch (error: any) {
      console.error('Send token API error:', error);
      throw error;
    }
  },

  // Get transaction history
  getTransactionHistory: async (params?: TransactionHistoryRequest): Promise<TransactionHistoryResponse> => {
    try {
      const response = await axiosInstance.get('/transaction/', { params });
      
      // Handle different response structures
      if (response.data.body) {
        return response.data.body;
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Transaction history API error:', error);
      throw error;
    }
  },

  // Get transaction by ID
  getTransactionById: async (transactionId: string): Promise<Transaction> => {
    try {
      const response = await axiosInstance.get(`/transaction/${transactionId}`);
      
      // Handle different response structures
      if (response.data.body) {
        return response.data.body;
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Get transaction API error:', error);
      throw error;
    }
  },

  // Get transaction analytics
  getTransactionAnalytics: async (params: {
    tokenId: string;
    lastDateTime: string;
    currentDateTime: string;
    offset?: number;
    limit?: number;
  }): Promise<Transaction[]> => {
    try {
      const response = await axiosInstance.get('/transaction/analytics', { params });
      
      // Handle different response structures
      if (response.data.body) {
        return response.data.body;
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Transaction analytics API error:', error);
      throw error;
    }
  },

  // Get transaction network details
  getTransactionNetworkDetails: async (transactionHash: string): Promise<{
    networkFee: number;
    networkFeeInUSD: number;
    platformFee: number;
  }> => {
    try {
      const response = await axiosInstance.get(`/transaction/network/${transactionHash}`);
      return response.data;
    } catch (error: any) {
      console.error('Transaction network details API error:', error);
      throw error;
    }
  }
};