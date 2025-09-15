import axios from 'axios';

// Solana.fm API client
const solanaFmApi = axios.create({
  baseURL: 'https://api.solana.fm/v1',
  headers: {
    'Accept': 'application/json'
  }
});

// Types for Solana.fm API responses
export interface SolanaFmTokenInfo {
  mint: string;
  decimals: number;
  freezeAuthority: string | null;
  mintAuthority: string | null;
  tokenType: string;
  tokenList: {
    name: string;
    symbol: string;
    image: string;
    extensions: any;
    chainId: number;
  };
}

export interface SolanaFmTokenSupply {
  circulatingSupply: number | null;
  tokenWithheldAmount: number | null;
  userTotalWithheldAmount: number | null;
  totalWithheldAmount: number | null;
  realCirculatingSupply: number | null;
  decimals: number | null;
}

export interface SolanaFmComprehensiveData {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  image: string;
  mintAuthority: string | null;
  freezeAuthority: string | null;
  tokenType: string;
  supply: SolanaFmTokenSupply;
}

// Helper function to get basic token info from Solana.fm
export const getBasicTokenInfo = async (address: string) => {
  try {
    const response = await solanaFmApi.get(`/tokens/${address}`);
    const data: SolanaFmTokenInfo = response.data;
    
    return {
      address: data.mint || address,
      symbol: data.tokenList?.symbol || 'UNKNOWN',
      name: data.tokenList?.name || 'Unknown Token',
      decimals: data.decimals || 9,
      image: data.tokenList?.image || '',
      mintAuthority: data.mintAuthority || null,
      freezeAuthority: data.freezeAuthority || null,
      tokenType: data.tokenType || 'Legacy'
    };
  } catch (error) {
    console.error('Error fetching basic token info from Solana.fm:', error);
    throw error;
  }
};

// Helper function to get token supply data from Solana.fm
export const getTokenSupply = async (address: string) => {
  try {
    const response = await solanaFmApi.get(`/tokens/${address}/supply`);
    const data: SolanaFmTokenSupply = response.data;
    
    return {
      circulatingSupply: data.circulatingSupply || 0,
      tokenWithheldAmount: data.tokenWithheldAmount || 0,
      userTotalWithheldAmount: data.userTotalWithheldAmount || 0,
      totalWithheldAmount: data.totalWithheldAmount || 0,
      realCirculatingSupply: data.realCirculatingSupply || 0,
      decimals: data.decimals || 9
    };
  } catch (error) {
    console.error('Error fetching token supply from Solana.fm:', error);
    throw error;
  }
};

// Get comprehensive token data (basic info + supply) from Solana.fm
export const getComprehensiveTokenData = async (address: string): Promise<SolanaFmComprehensiveData> => {
  try {
    const [basicInfo, supplyData] = await Promise.all([
      getBasicTokenInfo(address),
      getTokenSupply(address)
    ]);
    
    return {
      ...basicInfo,
      supply: supplyData
    };
  } catch (error) {
    console.error('Error fetching comprehensive token data:', error);
    throw error;
  }
};

// Get token metadata in Solscan format for compatibility
export const getTokenMetadataForSolscan = async (address: string) => {
  try {
    const [tokenResponse, supplyResponse] = await Promise.allSettled([
      solanaFmApi.get(`/tokens/${address}`),
      solanaFmApi.get(`/tokens/${address}/supply`)
    ]);
    
    const tokenData: SolanaFmTokenInfo = tokenResponse.status === 'fulfilled' ? tokenResponse.value.data : {};
    const supplyData: SolanaFmTokenSupply = supplyResponse.status === 'fulfilled' ? supplyResponse.value.data : {};
    
    return {
      address: tokenData.mint || address,
      symbol: tokenData.tokenList?.symbol || 'UNKNOWN',
      name: tokenData.tokenList?.name || 'Unknown Token',
      decimals: tokenData.decimals || supplyData.decimals || 9,
      holder: 0, // Not available in this response
      creator: '', // Not available in this response
      create_tx: '', // Not available in this response
      created_time: 0, // Not available in this response
      icon: tokenData.tokenList?.image || '',
      metadata: {
        name: tokenData.tokenList?.name || 'Unknown Token',
        symbol: tokenData.tokenList?.symbol || 'UNKNOWN',
        description: 'Token metadata from Solana.fm',
        image: tokenData.tokenList?.image || ''
      },
      mint_authority: tokenData.mintAuthority || null,
      freeze_authority: tokenData.freezeAuthority || null,
      supply: supplyData.circulatingSupply?.toString() || '0',
      price: 0, // Not available in this response
      volume_24h: 0, // Not available in this response
      market_cap: 0, // Not available in this response
      market_cap_rank: 0, // Not available in this response
      price_change_24h: 0, // Not available in this response
      website: '', // Not available in this response
      twitter: '', // Not available in this response
      description: 'Token metadata from Solana.fm'
    };
  } catch (error) {
    console.error('Error fetching token metadata from Solana.fm:', error);
    throw error;
  }
};

// Get trending tokens from Solana.fm (placeholder - may need different endpoint)
export const getTrendingTokens = async (limit: number = 20) => {
  try {
    // Note: This endpoint may not exist, using placeholder
    const response = await solanaFmApi.get(`/tokens/trending?limit=${limit}`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching trending tokens from Solana.fm:', error);
    return [];
  }
};

// Get top tokens from Solana.fm (placeholder - may need different endpoint)
export const getTopTokens = async (limit: number = 20) => {
  try {
    // Note: This endpoint may not exist, using placeholder
    const response = await solanaFmApi.get(`/tokens/top?limit=${limit}`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching top tokens from Solana.fm:', error);
    return [];
  }
};

// Main Solana.fm API service
export const solanaFmApiService = {
  getBasicTokenInfo,
  getTokenSupply,
  getComprehensiveTokenData,
  getTokenMetadataForSolscan,
  getTrendingTokens,
  getTopTokens
};

export default solanaFmApiService;