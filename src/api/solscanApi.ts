import axios from 'axios';

const SOLSCAN_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3NTc1MDMxMDYxNTYsImVtYWlsIjoib3NhbWEucWEuMzlAZ21haWwuY29tIiwiYWN0aW9uIjoidG9rZW4tYXBpIiwiYXBpVmVyc2lvbiI6InYyIiwiaWF0IjoxNzU3NTAzMTA2fQ.wg5VlPwjbx2DpoNfJAdoV943LPR6qAiNhLRPDaL2djU';

const solscanApi = axios.create({
  baseURL: 'https://pro-api.solscan.io/v2.0',
  headers: {
    'Accept': 'application/json',
    'token': SOLSCAN_API_KEY
  }
});

export interface SolscanTokenMetadata {
  address: string;
  symbol: string;
  name?: string;
  decimals: number;
  holder: number;
  creator?: string;
  create_tx?: string;
  created_time?: number;
  icon?: string; // Add icon property
  metadata?: {
    name?: string;
    symbol: string;
    description?: string;
    image?: string;
  };
  mint_authority: string | null;
  freeze_authority: string | null;
  supply?: string;
  price?: number;
  volume_24h?: number;
  market_cap?: number;
  market_cap_rank?: number;
  price_change_24h?: number;
  website?: string;
  twitter?: string;
  description?: string;
}

export interface SolscanTokenPrice {
  price: number;
  priceChange24h: number;
  volume24h: number;
  marketCap: number;
}

export const solscanApiService = {
  // Get token metadata by address using v2.0 API
  getTokenMetadata: async (address: string): Promise<SolscanTokenMetadata> => {
    try {
      const response = await solscanApi.get(`/token/meta?address=${address}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching token metadata from Solscan:', error);
      throw new Error('Failed to fetch token metadata from Solscan');
    }
  },

  // Get token price information using v2.0 API
  getTokenPrice: async (address: string, timeRange?: { start: string; end: string }): Promise<SolscanTokenPrice> => {
    try {
      let url = `/token/price?address=${address}`;
      if (timeRange) {
        url += `&time[]=${timeRange.start}&time[]=${timeRange.end}`;
      }
      const response = await solscanApi.get(url);
      const data = response.data.data;
      return {
        price: data.price || 0,
        priceChange24h: data.price_change_24h || 0,
        volume24h: data.volume_24h || 0,
        marketCap: data.market_cap || 0
      };
    } catch (error) {
      console.error('Error fetching token price from Solscan:', error);
      throw new Error('Failed to fetch token price from Solscan');
    }
  },

  // Get trending tokens using v2.0 API
  getTrendingTokens: async (limit: number = 20): Promise<SolscanTokenMetadata[]> => {
    try {
      const response = await solscanApi.get(`/token/trending?limit=${limit}`);
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching trending tokens from Solscan:', error);
      throw new Error('Failed to fetch trending tokens from Solscan');
    }
  },

  // Get top tokens using v2.0 API
  getTopTokens: async (limit: number = 20): Promise<SolscanTokenMetadata[]> => {
    try {
      const response = await solscanApi.get(`/token/top?limit=${limit}`);
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching top tokens from Solscan:', error);
      throw new Error('Failed to fetch top tokens from Solscan');
    }
  },

  // Get token DeFi activities using v2.0 API
  getTokenDefiActivities: async (
    address: string, 
    activityTypes: string[] = ['ACTIVITY_TOKEN_SWAP', 'ACTIVITY_AGG_TOKEN_SWAP'],
    page: number = 1,
    pageSize: number = 10,
    sortBy: string = 'block_time',
    sortOrder: string = 'desc'
  ): Promise<any[]> => {
    try {
      const activityTypesParam = activityTypes.map(type => `activity_type[]=${type}`).join('&');
      const url = `/token/defi/activities?address=${address}&${activityTypesParam}&page=${page}&page_size=${pageSize}&sort_by=${sortBy}&sort_order=${sortOrder}`;
      const response = await solscanApi.get(url);
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching token DeFi activities from Solscan:', error);
      throw new Error('Failed to fetch token DeFi activities from Solscan');
    }
  },

  // Search tokens by symbol or name (fallback to v1.0 if needed)
  searchTokens: async (query: string): Promise<SolscanTokenMetadata[]> => {
    try {
      const response = await solscanApi.get(`/token/list?query=${encodeURIComponent(query)}`);
      return response.data.data || [];
    } catch (error) {
      console.error('Error searching tokens on Solscan:', error);
      throw new Error('Failed to search tokens on Solscan');
    }
  },

  // Get token holders (fallback to v1.0 if needed)
  getTokenHolders: async (address: string, limit: number = 10): Promise<any[]> => {
    try {
      const response = await solscanApi.get(`/token/holders?token=${address}&limit=${limit}`);
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching token holders from Solscan:', error);
      throw new Error('Failed to fetch token holders from Solscan');
    }
  },

  // Get token info with comprehensive data using v2.0 API
  getTokenInfo: async (address: string): Promise<any> => {
    try {
      const response = await solscanApi.get(`/token/meta?address=${address}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching token info from Solscan:', error);
      throw new Error('Failed to fetch token info from Solscan');
    }
  }
};

export default solscanApi; 