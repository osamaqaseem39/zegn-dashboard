import axiosInstance from './axiosConfig';

export interface Token {
  _id: string;
  name: string;
  symbol: string;
  description: string;
  decimals: number;
  icon: string;
  tokenAddress: string;
  marketCap: string;
  holder: string;
  supply: string;
  price: string;
  volume: number;
  priceChange24h: string;
  isActive: boolean;
  isSpotlight: boolean;
  isHome: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
  isLive: boolean;
  // Enhanced metadata from Solana FM
  metadata?: {
    mintAuthority: string | null;
    freezeAuthority: string | null;
    isInitialized: boolean;
    tokenType: string;
    transferFeeConfig?: {
      newerTransferFee: {
        epoch: number;
        maximumFee: string;
        transferFeeBasisPoints: number;
      };
      olderTransferFee: {
        epoch: number;
        maximumFee: string;
        transferFeeBasisPoints: number;
      };
      transferFeeConfigAuthority: string | null;
      withdrawWithheldAuthority: string | null;
      withheldAmount: string;
    };
    extensions?: Array<{
      extension: string;
      state: any;
    }>;
  };
}

export interface TokenPrice {
  price: number;
  change24h: number;
}

export interface TokenPricesResponse {
  [symbol: string]: TokenPrice;
}

export interface CreateTokenRequest {
  name: string;
  symbol: string;
  description: string;
  decimals: number;
  icon: string;
  tokenAddress: string;
  category: string;
  isActive?: boolean;
  isSpotlight?: boolean;
  isHome?: boolean;
  isLive?: boolean;
}

export interface UpdateTokenRequest extends Partial<CreateTokenRequest> {}

export interface TokenFilters {
  category?: string;
  isActive?: boolean;
  isSpotlight?: boolean;
  isHome?: boolean;
  isLive?: boolean;
  search?: string;
  limit?: number;
  offset?: number;
}

export const tokenApi = {
  // Get all tokens (admin endpoint)
  getTokens: async (): Promise<Token[]> => {
    console.log('TokenApi: Fetching tokens from /admin/token');
    const response = await axiosInstance.get('/admin/token');
    console.log('TokenApi: Response received:', response.data);
    // Backend returns { status: {...}, body: { tokens: { tokens: Token[] } } }
    return response.data.body?.tokens?.tokens ?? response.data.tokens ?? response.data;
  },

  // Get token prices
  getTokenPrices: async (symbols?: string[]): Promise<TokenPricesResponse> => {
    const params = symbols && symbols.length > 0 ? `?symbols=${symbols.join(',')}` : '';
    const response = await axiosInstance.get(`/tokens/prices${params}`);
    return response.data;
  },

  // Get trending tokens from Solscan
  getTrendingTokens: async (limit: number = 20) => {
    try {
      const { solscanApiService } = await import('./solscanApi');
      const tokens = await solscanApiService.getTrendingTokens(limit);
      return {
        data: tokens,
        success: true,
        message: 'Trending tokens fetched successfully'
      };
    } catch (error) {
      console.error('Error in getTrendingTokens:', error);
      return {
        data: [],
        success: false,
        message: 'Failed to fetch trending tokens'
      };
    }
  },

  // Get top tokens from Solscan
  getTopTokens: async (limit: number = 20) => {
    try {
      const { solscanApiService } = await import('./solscanApi');
      const tokens = await solscanApiService.getTopTokens(limit);
      return {
        data: {
          items: tokens,
          total: tokens.length
        },
        success: true,
        message: 'Top tokens fetched successfully'
      };
    } catch (error) {
      console.error('Error in getTopTokens:', error);
      return {
        data: {
          items: [],
          total: 0
        },
        success: false,
        message: 'Failed to fetch top tokens'
      };
    }
  },

  // Get token metadata
  getTokenMetadata: async (address: string) => {
    const response = await axiosInstance.get(`/tokens/metadata/${address}`);
    return response.data;
  },

  // Get enhanced token metadata from Solscan
  getEnhancedTokenMetadata: async (address: string) => {
    const { solscanApiService } = await import('./solscanApi');
    return await solscanApiService.getComprehensiveTokenData(address);
  },

  // Admin endpoints
  // Create a new token
  create: async (tokenData: CreateTokenRequest): Promise<Token> => {
    const response = await axiosInstance.post('/admin/token/create', tokenData);
    return response.data;
  },

  // Update token by ID
  update: async (id: string, tokenData: UpdateTokenRequest): Promise<Token> => {
    const response = await axiosInstance.put(`/admin/token/update/${id}`, tokenData);
    return response.data;
  },

  // Get all tokens with filters (admin)
  list: async (filters?: TokenFilters): Promise<{ tokens: Token[]; total: number }> => {
    const response = await axiosInstance.get('/admin/token', { params: filters });
    return response.data;
  },

  // Get token by address (admin)
  getByAddress: async (address: string): Promise<Token> => {
    const response = await axiosInstance.get(`/admin/token/${address}`);
    return response.data;
  },

  // Toggle token active status by address
  toggleActive: async (address: string): Promise<Token> => {
    const response = await axiosInstance.put(`/admin/token/active/${address}`);
    return response.data;
  },

  // Toggle token spotlight status by address
  toggleSpotlight: async (address: string): Promise<Token> => {
    const response = await axiosInstance.put(`/admin/token/spotlight/${address}`);
    return response.data;
  },

  // Toggle token live status by address
  toggleLive: async (address: string): Promise<Token> => {
    const response = await axiosInstance.put(`/admin/token/live/${address}`);
    return response.data;
  },

  // Toggle token home status by address
  toggleHome: async (address: string): Promise<Token> => {
    const response = await axiosInstance.put(`/admin/token/home/${address}`);
    return response.data;
  },

  // Activate token graph cron data by ID
  activateGraphCron: async (id: string): Promise<{ message: string }> => {
    const response = await axiosInstance.put(`/admin/token/graph/cron/active/${id}`);
    return response.data;
  },

  // Fetch latest graph data for token by ID
  fetchLatestGraphData: async (id: string): Promise<{ message: string }> => {
    const response = await axiosInstance.put(`/admin/token/graph/allow/latest/${id}`);
    return response.data;
  },

  // Delete token graph data by ID
  deleteGraphData: async (id: string): Promise<{ message: string }> => {
    const response = await axiosInstance.delete(`/admin/token/graph/${id}`);
    return response.data;
  },

  // Backward compatibility aliases
  getAdminTokens: async (filters?: TokenFilters): Promise<{ tokens: Token[]; total: number }> => {
    return tokenApi.list(filters);
  },

  getTokenByAddress: async (address: string): Promise<Token> => {
    return tokenApi.getByAddress(address);
  },

  toggleTokenActive: async (address: string): Promise<Token> => {
    return tokenApi.toggleActive(address);
  },

  toggleTokenSpotlight: async (address: string): Promise<Token> => {
    return tokenApi.toggleSpotlight(address);
  },

  toggleTokenLive: async (address: string): Promise<Token> => {
    return tokenApi.toggleLive(address);
  },

  toggleTokenHome: async (address: string): Promise<Token> => {
    return tokenApi.toggleHome(address);
  },

  activateTokenGraphCron: async (id: string): Promise<{ message: string }> => {
    return tokenApi.activateGraphCron(id);
  },

  deleteTokenGraphData: async (id: string): Promise<{ message: string }> => {
    return tokenApi.deleteGraphData(id);
  },
}; 