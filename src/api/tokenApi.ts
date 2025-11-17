import axiosInstance from './axiosConfig';
import { getCompleteTokenData } from './solanaFmApi.ts';

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

export interface GraphDataPoint {
  price: string;
  priceChange24h: string;
  timestamp: string;
}

export interface GraphDataResponse {
  data: GraphDataPoint[];
}

// Small retry helper for transient backend failures (e.g., upstream RPC undici fetch failed)
async function withRetry<T>(fn: () => Promise<T>, retries = 2, baseDelayMs = 300): Promise<T> {
  try {
    return await fn();
  } catch (err: any) {
    if (retries <= 0) throw err;
    const status = err?.response?.status;
    const isTransient = !err?.response || status >= 500 || err?.code === 'NETWORK_ERROR' || err?.code === 'ECONNABORTED';
    if (!isTransient) throw err;
    const attempt = 3 - retries;
    const delay = baseDelayMs * Math.pow(2, attempt); // 300, 600
    await new Promise(res => setTimeout(res, delay));
    return withRetry(fn, retries - 1, baseDelayMs);
  }
}

export const tokenApi = {
  // Get all tokens (admin endpoint)
  getTokens: async (): Promise<Token[]> => {
    const res = await axiosInstance.get('/admin/token');
    // Axios is configured to unwrap the response; res can be one of:
    // { tokens: Token[] } | { tokens: { tokens: Token[] } } | Token[]
    if (Array.isArray(res)) return res as Token[];
    const maybeTokens = (res as any)?.tokens;
    if (Array.isArray(maybeTokens)) return maybeTokens as Token[];
    if (maybeTokens && Array.isArray(maybeTokens.tokens)) return maybeTokens.tokens as Token[];
    return [];
  },

  // Get token prices
  getTokenPrices: async (symbols?: string[]): Promise<TokenPricesResponse> => {
    const params = symbols && symbols.length > 0 ? `?symbols=${symbols.join(',')}` : '';
    const res = await axiosInstance.get(`/tokens/prices${params}`);
    const data = (res as any)?.data ?? res;
    return data as unknown as TokenPricesResponse;
  },

  // Get trending tokens
  getTrendingTokens: async () => {
    const res = await axiosInstance.get('/tokens/trending');
    return res;
  },

  // Get top tokens
  getTopTokens: async () => {
    const res = await axiosInstance.get('/tokens/top');
    return res;
  },

  // Get token metadata
  getTokenMetadata: async (address: string) => {
    const res = await axiosInstance.get(`/tokens/metadata/${address}`);
    return res;
  },

  // Get enhanced token metadata from Solana FM
  getEnhancedTokenMetadata: async (address: string) => {
    return await getCompleteTokenData(address);
  },

  // Admin endpoints
  // Create a new token
  create: async (tokenData: CreateTokenRequest): Promise<Token> => {
    const res = await axiosInstance.post('/admin/token/create', tokenData);
    const data = (res as any)?.data?.token ?? (res as any)?.data;
    return data as unknown as Token;
  },

  // Update token by ID
  update: async (id: string, tokenData: UpdateTokenRequest): Promise<Token> => {
    const res = await axiosInstance.put(`/admin/token/update/${id}`, tokenData);
    const data = (res as any)?.data?.token ?? (res as any)?.data;
    return data as unknown as Token;
  },

  // Get all tokens with filters (admin)
  list: async (filters?: TokenFilters): Promise<{ tokens: Token[]; total: number }> => {
    const res = await axiosInstance.get('/admin/token', { params: filters });
    return res as any;
  },

  // Get token by address (admin)
  getByAddress: async (address: string): Promise<Token> => {
    const res = await axiosInstance.get(`/admin/token/${address}`);
    return (res as any)?.token ?? (res as any);
  },

  // Toggle token active status by address
  toggleActive: async (address: string): Promise<Token> => {
    const res = await axiosInstance.put(`/admin/token/active/${address}`);
    const data = (res as any)?.data?.token ?? (res as any)?.data;
    return data as unknown as Token;
  },

  // Toggle token spotlight status by address
  toggleSpotlight: async (address: string): Promise<Token> => {
    const res = await axiosInstance.put(`/admin/token/spotlight/${address}`);
    const data = (res as any)?.data?.token ?? (res as any)?.data;
    return data as unknown as Token;
  },

  // Toggle token live status by address
  toggleLive: async (address: string): Promise<Token> => {
    const res = await axiosInstance.put(`/admin/token/live/${address}`);
    const data = (res as any)?.data?.token ?? (res as any)?.data;
    return data as unknown as Token;
  },

  // Toggle token home status by address
  toggleHome: async (address: string): Promise<Token> => {
    const res = await axiosInstance.put(`/admin/token/home/${address}`);
    const data = (res as any)?.data?.token ?? (res as any)?.data;
    return data as unknown as Token;
  },

  // Activate token graph cron data by ID
  activateGraphCron: async (id: string): Promise<{ message: string }> => {
    return withRetry(async () => {
      const res = await axiosInstance.put(`/admin/token/graph/cron/active/${id}`);
      return res as any;
    });
  },

  // Fetch latest graph data for token by ID
  fetchLatestGraphData: async (id: string): Promise<{ message: string }> => {
    return withRetry(async () => {
      const res = await axiosInstance.put(`/admin/token/graph/allow/latest/${id}`);
      return res as any;
    });
  },

  // Delete token graph data by ID
  deleteGraphData: async (id: string): Promise<{ message: string }> => {
    return withRetry(async () => {
      const res = await axiosInstance.delete(`/admin/token/graph/${id}`);
      return res as any;
    });
  },

  // Get token graph data
  getTokenGraphData: async (tokenId: string, type: 'max' | '1d' | '4h' = 'max'): Promise<GraphDataResponse> => {
    return withRetry(async () => {
      const res = await axiosInstance.get(`/token/graph/${tokenId}?type=${type}`);
      return res as GraphDataResponse;
    });
  },

  // Populate historical graph data
  populateGraphData: async (tokenId: string, days: number = 7): Promise<{ message: string }> => {
    return withRetry(async () => {
      const res = await axiosInstance.post(`/admin/graph/populate/${tokenId}?days=${days}`);
      return res as any;
    });
  },

  // Get graph data statistics
  getGraphStats: async (): Promise<{
    totalTokens: number;
    tokensWithGraphData: number;
    lastUpdated: string;
    cronEnabledTokens: number;
  }> => {
    return withRetry(async () => {
      const res = await axiosInstance.get('/admin/graph/stats');
      // Axios unwraps to stats object now
      return res as any;
    });
  },

  // Enable automatic graph updates (cron)
  enableGraphCron: async (tokenId: string): Promise<{ message: string }> => {
    return withRetry(async () => {
      const res = await axiosInstance.post(`/admin/graph/enable-cron/${tokenId}`);
      return res as any;
    });
  },

  // Get token by ID (for public API)
  getTokenById: async (id: string): Promise<Token> => {
    const res = await axiosInstance.get(`/token/${id}`);
    const data = (res as any)?.data?.token ?? (res as any)?.data;
    return data as unknown as Token;
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