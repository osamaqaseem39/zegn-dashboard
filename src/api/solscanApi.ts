import axios from 'axios';

const SOLSCAN_API_KEY = import.meta.env.REACT_APP_SOLSCAN_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3NTc1MDMxMDYxNTYsImVtYWlsIjoib3NhbWEucWEuMzlAZ21haWwuY29tIiwiYWN0aW9uIjoidG9rZW4tYXBpIiwiYXBpVmVyc2lvbiI6InYyIiwiaWF0IjoxNzU3NTAzMTA2fQ.wg5VlPwjbx2DpoNfJAdoV943LPR6qAiNhLRPDaL2djU';

const solscanApi = axios.create({
  baseURL: 'https://pro-api.solscan.io/v2.0',
  headers: {
    'Accept': 'application/json',
    'token': SOLSCAN_API_KEY
  }
});

// Solana.fm API as fallback
const solanaFmApi = axios.create({
  baseURL: 'https://api.solana.fm/v1',
  headers: {
    'Accept': 'application/json'
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

// Helper function to fetch token data from Solana.fm
const fetchFromSolanaFm = async (address: string): Promise<SolscanTokenMetadata> => {
  try {
    const response = await solanaFmApi.get(`/tokens/${address}`);
    const data = response.data;
    
    return {
      address: data.address || address,
      symbol: data.symbol || 'UNKNOWN',
      name: data.name || 'Unknown Token',
      decimals: data.decimals || 9,
      holder: data.holderCount || 0,
      creator: data.creator || '',
      create_tx: data.mintTx || '',
      created_time: data.createdAt ? new Date(data.createdAt).getTime() / 1000 : 0,
      icon: data.image || '',
      metadata: {
        name: data.name || 'Unknown Token',
        symbol: data.symbol || 'UNKNOWN',
        description: data.description || 'Token metadata from Solana.fm',
        image: data.image || ''
      },
      mint_authority: data.mintAuthority || null,
      freeze_authority: data.freezeAuthority || null,
      supply: data.supply || '0',
      price: data.price || 0,
      volume_24h: data.volume24h || 0,
      market_cap: data.marketCap || 0,
      market_cap_rank: data.marketCapRank || 0,
      price_change_24h: data.priceChange24h || 0,
      website: data.website || '',
      twitter: data.twitter || '',
      description: data.description || 'Token metadata from Solana.fm'
    };
  } catch (error) {
    console.error('Error fetching from Solana.fm:', error);
    throw error;
  }
};

export const solscanApiService = {
  // Get token metadata by address using v2.0 API with Solana.fm fallback
  getTokenMetadata: async (address: string): Promise<SolscanTokenMetadata> => {
    try {
      const response = await solscanApi.get(`/token/meta?address=${address}`);
      return response.data.data;
    } catch (error: any) {
      console.error('Error fetching token metadata from Solscan:', error);
      
      // Handle API key level error gracefully - try Solana.fm as fallback
      if (error.response?.data?.error_message?.includes('upgrade your api key level')) {
        console.warn('Solscan API key level insufficient. Trying Solana.fm as fallback...');
        try {
          return await fetchFromSolanaFm(address);
        } catch (fmError) {
          console.error('Solana.fm also failed, using minimal fallback data');
          // Return minimal fallback data
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
              description: 'Token metadata unavailable due to API limitations',
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
            description: 'Token metadata unavailable due to API limitations'
          };
        }
      }
      
      // For other errors, try Solana.fm as fallback
      console.warn('Solscan failed, trying Solana.fm as fallback...');
      try {
        return await fetchFromSolanaFm(address);
      } catch (fmError) {
        throw new Error('Failed to fetch token metadata from both Solscan and Solana.fm');
      }
    }
  },

  // Get token price information using v2.0 API with Solana.fm fallback
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
      
      // Try Solana.fm as fallback for price data
      console.warn('Solscan price failed, trying Solana.fm...');
      try {
        const fmData = await fetchFromSolanaFm(address);
        return {
          price: fmData.price || 0,
          priceChange24h: fmData.price_change_24h || 0,
          volume24h: fmData.volume_24h || 0,
          marketCap: fmData.market_cap || 0
        };
      } catch (fmError) {
        console.warn('Solana.fm price also failed, using fallback data');
        return {
          price: 0,
          priceChange24h: 0,
          volume24h: 0,
          marketCap: 0
        };
      }
    }
  },

  // Get trending tokens using v2.0 API with Solana.fm fallback
  getTrendingTokens: async (limit: number = 20): Promise<SolscanTokenMetadata[]> => {
    try {
      const response = await solscanApi.get(`/token/trending?limit=${limit}`);
      return response.data.data || [];
    } catch (error: any) {
      console.error('Error fetching trending tokens from Solscan:', error);
      
      // Try Solana.fm as fallback
      console.warn('Solscan trending failed, trying Solana.fm...');
      try {
        const response = await solanaFmApi.get(`/tokens/trending?limit=${limit}`);
        return response.data.data || [];
      } catch (fmError) {
        console.warn('Solana.fm trending also failed, returning empty list');
        return [];
      }
    }
  },

  // Get top tokens using v2.0 API with Solana.fm fallback
  getTopTokens: async (limit: number = 20): Promise<SolscanTokenMetadata[]> => {
    try {
      const response = await solscanApi.get(`/token/top?limit=${limit}`);
      return response.data.data || [];
    } catch (error: any) {
      console.error('Error fetching top tokens from Solscan:', error);
      
      // Try Solana.fm as fallback
      console.warn('Solscan top tokens failed, trying Solana.fm...');
      try {
        const response = await solanaFmApi.get(`/tokens/top?limit=${limit}`);
        return response.data.data || [];
      } catch (fmError) {
        console.warn('Solana.fm top tokens also failed, returning empty list');
        return [];
      }
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