import { solscanApiService } from './solscanApi';

export interface SolanaFmCompleteTokenData {
  address: string;
  symbol: string;
  name?: string;
  description?: string;
  decimals?: number;
  icon?: string;
  // Add any additional fields you may later map from Solana.fm
}

// Minimal implementation to satisfy getEnhancedTokenMetadata usage.
// If Solana.fm integration is added later, replace the internals here.
export async function getCompleteTokenData(address: string): Promise<SolanaFmCompleteTokenData> {
  const meta = await solscanApiService.getTokenMetadata(address);
  return {
    address: meta.address,
    symbol: meta.symbol,
    name: meta.name || meta.symbol,
    description: meta.metadata?.description,
    decimals: meta.decimals,
    icon: meta.icon || meta.metadata?.image || '',
  };
}