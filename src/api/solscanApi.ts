import axios from 'axios';

const SOLSCAN_API_KEY = import.meta.env.REACT_APP_SOLSCAN_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3NTgwMjUyMTc4MDMsImVtYWlsIjoiYXBwLmRlZ25AZ21haWwuY29tIiwiYWN0aW9uIjoidG9rZW4tYXBpIiwiYXBpVmVyc2lvbiI6InYyIiwiaWF0IjoxNzU4MDI1MjE3fQ.OhneHKQeelKe0nJm7ioPJhl9EvdpBtCiei6Vqk_8dC4';

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

// Helper function to create fallback token metadata
const createFallbackTokenMetadata = (address: string): SolscanTokenMetadata => {
  return {
    address,
    symbol: 'UNKNOWN',
    name: 'Unknown Token',
    decimals: 9,
    holder: 0,
    creator: '',
    create_tx: '',
    created_time: 0,
    icon: '',
    metadata: {
      name: 'Unknown Token',
      symbol: 'UNKNOWN',
      description: 'Token metadata unavailable',
      image: ''
    },
    mint_authority: null,
    freeze_authority: null,
    supply: '0',
    price: 0,
    volume_24h: 0,
    market_cap: 0,
    market_cap_rank: 0,
    price_change_24h: 0,
    website: '',
    twitter: '',
    description: 'Token metadata unavailable'
  };
};

export const solscanApiService = {
  // Get token metadata by address using v2.0 API
  getTokenMetadata: async (address: string): Promise<SolscanTokenMetadata> => {
    try {
      const response = await solscanApi.get(`/token/meta?address=${address}`);
      return response.data.data;
    } catch (error: any) {
      console.error('Error fetching token metadata from Solscan:', error);
      
      // Handle API key level error gracefully
      if (error.response?.data?.error_message?.includes('upgrade your api key level')) {
        console.warn('Solscan API key level insufficient. Using fallback data.');
        return createFallbackTokenMetadata(address);
      }
      
      // For other errors, return fallback data
      console.warn('Solscan failed, using fallback data');
      return createFallbackTokenMetadata(address);
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
    } catch (error: any) {
      console.error('Error fetching token price from Solscan:', error);
      console.warn('Using fallback price data');
      return {
        price: 0,
        priceChange24h: 0,
        volume24h: 0,
        marketCap: 0
      };
    }
  },

  // Get trending tokens using v2.0 API
  getTrendingTokens: async (limit: number = 20): Promise<SolscanTokenMetadata[]> => {
    try {
      const response = await solscanApi.get(`/token/trending?limit=${limit}`);
      return response.data.data || [];
    } catch (error: any) {
      console.error('Error fetching trending tokens from Solscan:', error);
      console.warn('Returning empty list for trending tokens');
      return [];
    }
  },

  // Get top tokens using v2.0 API
  getTopTokens: async (limit: number = 20): Promise<SolscanTokenMetadata[]> => {
    try {
      const response = await solscanApi.get(`/token/top?limit=${limit}`);
      return response.data.data || [];
    } catch (error: any) {
      console.error('Error fetching top tokens from Solscan:', error);
      console.warn('Returning empty list for top tokens');
      return [];
    }
  },

  // Get basic token info using Solscan API
  getBasicTokenInfo: async (address: string) => {
    try {
      const metadata = await solscanApiService.getTokenMetadata(address);
      return {
        address: metadata.address,
        symbol: metadata.symbol,
        name: metadata.name || metadata.symbol,
        decimals: metadata.decimals,
        image: metadata.icon || metadata.metadata?.image || '',
        mintAuthority: metadata.mint_authority,
        freezeAuthority: metadata.freeze_authority,
        tokenType: 'Legacy'
      };
    } catch (error) {
      console.error('Error fetching basic token info:', error);
      return {
        address,
        symbol: 'UNKNOWN',
        name: 'Unknown Token',
        decimals: 9,
        image: '',
        mintAuthority: null,
        freezeAuthority: null,
        tokenType: 'Legacy'
      };
    }
  },

  // Get token supply data using Solscan API
  getTokenSupply: async (address: string) => {
    try {
      const metadata = await solscanApiService.getTokenMetadata(address);
      const supply = metadata.supply ? parseFloat(metadata.supply) : 0;
      return {
        circulatingSupply: supply,
        tokenWithheldAmount: 0,
        userTotalWithheldAmount: 0,
        totalWithheldAmount: 0,
        realCirculatingSupply: supply,
        decimals: metadata.decimals
      };
    } catch (error) {
      console.error('Error fetching token supply:', error);
      return {
        circulatingSupply: 0,
        tokenWithheldAmount: 0,
        userTotalWithheldAmount: 0,
        totalWithheldAmount: 0,
        realCirculatingSupply: 0,
        decimals: 9
      };
    }
  },

  // Get comprehensive token data using Solscan API
  getComprehensiveTokenData: async (address: string) => {
    try {
      const metadata = await solscanApiService.getTokenMetadata(address);
      const supply = metadata.supply ? parseFloat(metadata.supply) : 0;
      return {
        address: metadata.address,
        symbol: metadata.symbol,
        name: metadata.name || metadata.symbol,
        decimals: metadata.decimals,
        image: metadata.icon || metadata.metadata?.image || '',
        mintAuthority: metadata.mint_authority,
        freezeAuthority: metadata.freeze_authority,
        tokenType: 'Legacy',
        supply: {
          circulatingSupply: supply,
          tokenWithheldAmount: 0,
          userTotalWithheldAmount: 0,
          totalWithheldAmount: 0,
          realCirculatingSupply: supply,
          decimals: metadata.decimals
        }
      };
    } catch (error) {
      console.error('Error fetching comprehensive token data:', error);
      return {
        address,
        symbol: 'UNKNOWN',
        name: 'Unknown Token',
        decimals: 9,
        image: '',
        mintAuthority: null,
        freezeAuthority: null,
        tokenType: 'Legacy',
        supply: {
          circulatingSupply: 0,
          tokenWithheldAmount: 0,
          userTotalWithheldAmount: 0,
          totalWithheldAmount: 0,
          realCirculatingSupply: 0,
          decimals: 9
        }
      };
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