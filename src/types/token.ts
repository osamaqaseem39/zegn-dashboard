export interface TokenDetail {
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
  tokenCreatedAt: string;
  graphType: string;
  slippage: string;
  cmcId: string;
  isLive: boolean;
  grapDataInfo: {
    isCronUpdate: boolean;
    isMaxGraphDataAdded: boolean;
    isOneDayGraphDataAdded: boolean;
    isFourHourGraphDataAdded: boolean;
  };
} 