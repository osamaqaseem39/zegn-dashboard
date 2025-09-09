import axiosInstance from './axiosConfig';

export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

export interface BuyTokenRequest {
  tokenSymbol: string;
  tokenAddress: string;
  amount: number;
  slippage?: number;
}

export interface SellTokenRequest {
  tokenSymbol: string;
  tokenAddress: string;
  amount: number;
  slippage?: number;
}

export interface SwapTokenRequest {
  fromTokenSymbol: string;
  fromTokenAddress: string;
  toTokenSymbol: string;
  toTokenAddress: string;
  amount: number;
  slippage?: number;
}

export interface GetQuoteRequest {
  fromTokenSymbol: string;
  fromTokenAddress: string;
  toTokenSymbol: string;
  toTokenAddress: string;
  amount: number;
  slippage?: number;
}

export interface TransactionHistoryRequest {
  type?: 'buy' | 'sell' | 'swap' | 'deposit' | 'withdrawal';
  tokenSymbol?: string;
  page?: number;
  limit?: number;
}

export interface Transaction {
  _id: string;
  userId: string;
  type: 'buy' | 'sell' | 'swap' | 'deposit' | 'withdrawal';
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  tokenSymbol: string;
  tokenAddress: string;
  amount: number;
  price: number;
  fee: number;
  slippage: number;
  fromTokenSymbol?: string;
  fromTokenAddress?: string;
  toTokenSymbol?: string;
  toTokenAddress?: string;
  transactionHash?: string;
  externalId?: string;
  errorMessage?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
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

export interface QuoteResponse {
  fromTokenSymbol: string;
  fromTokenAddress: string;
  toTokenSymbol: string;
  toTokenAddress: string;
  amount: number;
  price: number;
  fee: number;
  slippage: number;
  estimatedOutput: number;
}

export interface TransactionResponse {
  message: string;
  transactionId: string;
  transactionHash: string;
  amount: number;
  price: number;
  fee: number;
}

export const transactionApi = {
  // Buy token
  buyToken: async (request: BuyTokenRequest): Promise<TransactionResponse> => {
    const response = await axiosInstance.post('/transactions/buy', request);
    return response.data;
  },

  // Sell token
  sellToken: async (request: SellTokenRequest): Promise<TransactionResponse> => {
    const response = await axiosInstance.post('/transactions/sell', request);
    return response.data;
  },

  // Swap token
  swapToken: async (request: SwapTokenRequest): Promise<TransactionResponse> => {
    const response = await axiosInstance.post('/transactions/swap', request);
    return response.data;
  },

  // Get transaction history
  getTransactionHistory: async (request: TransactionHistoryRequest): Promise<TransactionHistoryResponse> => {
    const params = new URLSearchParams();
    if (request.type) params.append('type', request.type);
    if (request.tokenSymbol) params.append('tokenSymbol', request.tokenSymbol);
    if (request.page) params.append('page', request.page.toString());
    if (request.limit) params.append('limit', request.limit.toString());

    const response = await axiosInstance.get(`/transactions/history?${params.toString()}`);
    return response.data;
  },

  // Get quote for swap
  getQuote: async (request: GetQuoteRequest): Promise<QuoteResponse> => {
    const params = new URLSearchParams();
    params.append('fromTokenSymbol', request.fromTokenSymbol);
    params.append('fromTokenAddress', request.fromTokenAddress);
    params.append('toTokenSymbol', request.toTokenSymbol);
    params.append('toTokenAddress', request.toTokenAddress);
    params.append('amount', request.amount.toString());
    if (request.slippage) params.append('slippage', request.slippage.toString());

    const response = await axiosInstance.get(`/transactions/quote?${params.toString()}`);
    return response.data;
  },

  // Get balance
  getBalance: async (): Promise<{ balance: number }> => {
    const response = await axiosInstance.get('/transactions/balance');
    return response.data;
  },

  // Get transaction status
  getTransactionStatus: async (transactionId: string): Promise<Transaction> => {
    const response = await axiosInstance.get(`/transactions/status/${transactionId}`);
    return response.data;
  },
}; 