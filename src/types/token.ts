export interface SocialUrls {
  web?: string;
  instagram?: string;
  x?: string;
  reddit?: string;
  telegram?: string;
  github?: string;
}

export interface GraphDataInfo {
  isCronUpdate?: boolean;
  isMaxGraphDataAdded?: boolean;
  isOneDayGraphDataAdded?: boolean;
  isFourHourGraphDataAdded?: boolean;
}

export interface TokenDetail {
  _id: string;
  tokenAddress: string;
  symbol: string;
  name?: string;
  description?: string;
  decimals?: number;
  icon?: string;
  marketCap?: string;
  tokenCreatedAt?: string;
  holder?: string;
  supply?: string;
  price?: string;
  volume?: number;
  priceChange24h?: string;
  cmcId?: string;
  cgId?: string;
  category?: string;
  slippage?: string;
  graphType?: string;
  isSpotlight?: boolean;
  isHome?: boolean;
  isActive?: boolean;
  isLive?: boolean;
  socialUrls?: SocialUrls;
  grapDataInfo?: GraphDataInfo;
  createdAt: string;
  updatedAt: string;
} 