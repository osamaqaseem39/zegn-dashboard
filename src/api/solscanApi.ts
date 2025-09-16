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

// Helper function to create mock trending/top tokens data
const createMockTokens = (count: number, type: 'trending' | 'top'): SolscanTokenMetadata[] => {
  const mockTokens: SolscanTokenMetadata[] = [];
  const popularTokens = [
    { symbol: 'SOL', name: 'Solana', address: 'So11111111111111111111111111111111111111112' },
    { symbol: 'USDC', name: 'USD Coin', address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v' },
    { symbol: 'USDT', name: 'Tether USD', address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB' },
    { symbol: 'RAY', name: 'Raydium', address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R' },
    { symbol: 'JUP', name: 'Jupiter', address: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN' },
    { symbol: 'ORCA', name: 'Orca', address: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE' },
    { symbol: 'SRM', name: 'Serum', address: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt' },
    { symbol: 'MNGO', name: 'Mango', address: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac' },
    { symbol: 'BONK', name: 'Bonk', address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263' },
    { symbol: 'WIF', name: 'dogwifhat', address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm' }
  ];

  for (let i = 0; i < Math.min(count, popularTokens.length); i++) {
    const token = popularTokens[i];
    const basePrice = type === 'trending' ? Math.random() * 100 : Math.random() * 1000;
    const priceChange = (Math.random() - 0.5) * 20; // -10% to +10%
    
    mockTokens.push({
      address: token.address,
      symbol: token.symbol,
      name: token.name,
      decimals: 9,
      holder: Math.floor(Math.random() * 10000) + 1000,
      creator: '',
      create_tx: '',
      created_time: Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000,
      icon: `https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/${token.address}/logo.png`,
      metadata: {
        name: token.name,
        symbol: token.symbol,
        description: `${token.name} token on Solana`,
        image: `https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/${token.address}/logo.png`
      },
      mint_authority: null,
      freeze_authority: null,
      supply: (Math.random() * 1000000000).toString(),
      price: basePrice,
      volume_24h: Math.random() * 1000000,
      market_cap: Math.random() * 1000000000,
      market_cap_rank: i + 1,
      price_change_24h: priceChange,
      website: '',
      twitter: '',
      description: `${token.name} token on Solana`
    });
  }

  return mockTokens;
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
      // Try the trending endpoint first
      const response = await solscanApi.get(`/token/trending?limit=${limit}`);
      console.log('Solscan trending response:', response.data);
      return response.data.data || response.data || [];
    } catch (error: any) {
      console.error('Error fetching trending tokens from Solscan:', error);
      
      // Fallback to token list with search for trending
      try {
        console.log('Trying fallback: token list endpoint');
        const fallbackResponse = await solscanApi.get(`/token/list?limit=${limit}&sort=volume_24h`);
        console.log('Fallback response:', fallbackResponse.data);
        return fallbackResponse.data.data || fallbackResponse.data || [];
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        console.warn('Using mock data for trending tokens');
        return createMockTokens(limit, 'trending');
      }
    }
  },

  // Get top tokens using v2.0 API
  getTopTokens: async (limit: number = 20): Promise<SolscanTokenMetadata[]> => {
    try {
      // Try the top tokens endpoint first
      const response = await solscanApi.get(`/token/top?limit=${limit}`);
      console.log('Solscan top tokens response:', response.data);
      return response.data.data || response.data || [];
    } catch (error: any) {
      console.error('Error fetching top tokens from Solscan:', error);
      
      // Fallback to token list with market cap sorting
      try {
        console.log('Trying fallback: token list with market cap sort');
        const fallbackResponse = await solscanApi.get(`/token/list?limit=${limit}&sort=market_cap`);
        console.log('Fallback response:', fallbackResponse.data);
        return fallbackResponse.data.data || fallbackResponse.data || [];
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        console.warn('Using mock data for top tokens');
        return createMockTokens(limit, 'top');
      }
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