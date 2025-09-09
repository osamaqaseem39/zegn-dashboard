import axiosInstance from './axiosConfig';

export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

export interface TokenPrice {
  price: number;
  change24h: number;
}

export interface TokenPricesResponse {
  [symbol: string]: TokenPrice;
}

export const tokenApi = {
  // Get all tokens
  getTokens: async (): Promise<Token[]> => {
    const response = await axiosInstance.get('/tokens');
    // Backend returns { tokens: Token[] }
    return response.data.tokens ?? response.data;
  },

  // Get token prices
  getTokenPrices: async (symbols?: string[]): Promise<TokenPricesResponse> => {
    const params = symbols && symbols.length > 0 ? `?symbols=${symbols.join(',')}` : '';
    const response = await axiosInstance.get(`/tokens/prices${params}`);
    return response.data;
  },

  // Get trending tokens
  getTrendingTokens: async () => {
    const response = await axiosInstance.get('/tokens/trending');
    return response.data;
  },

  // Get top tokens
  getTopTokens: async () => {
    const response = await axiosInstance.get('/tokens/top');
    return response.data;
  },

  // Get token metadata
  getTokenMetadata: async (address: string) => {
    const response = await axiosInstance.get(`/tokens/metadata/${address}`);
    return response.data;
  },
}; 