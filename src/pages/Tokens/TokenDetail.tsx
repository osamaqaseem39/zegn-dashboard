import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";
import { tokenApi } from "../../api/tokenApi";
import TokenMetadataCard from "../../components/tokens/TokenMetadataCard";
import TokenChart from "../../components/tokens/TokenChart";
import TokenPrice from "../../components/tokens/TokenPrice";
import GraphManagement from "../../components/tokens/GraphManagement";

interface TokenDetail {
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

interface TokenMetadata {
  address: string;
  symbol: string;
  icon?: string;
  decimals: number;
  holder: number;
  creator?: string;
  create_tx?: string;
  created_time?: number;
  metadata?: {
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

interface TokenResponse {
  body: {
    token: TokenDetail;
  };
}
// eslint-disable-next-line 
export default function TokenDetail() {
  
  const { tokenAddress } = useParams();
  const [token, setToken] = useState<TokenDetail | null>(null);
  const [tokenMetadata, setTokenMetadata] = useState<TokenMetadata | null>(null);
  const [enhancedMetadata, setEnhancedMetadata] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTokenDetails = useCallback(async () => {
    try {
      const response = await axiosInstance.get<TokenResponse>(`/admin/token/${tokenAddress}`);
      setToken(response.data.body.token);
      setError("");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch token details");
      console.error("Error fetching token details:", err);
    } finally {
      setLoading(false);
    }
  }, [tokenAddress]);

  const fetchSolscanMetadata = useCallback(async (address: string) => {
    try {
      const response = await tokenApi.getTokenMetadata(address);
      setTokenMetadata(response.data);
    } catch (err: any) {
      console.error("Error fetching token metadata:", err);
    }
  }, []);

  const fetchEnhancedMetadata = useCallback(async (address: string) => {
    try {
      const metadata = await tokenApi.getEnhancedTokenMetadata(address);
      setEnhancedMetadata(metadata);
    } catch (err: any) {
      console.error("Error fetching enhanced metadata:", err);
    }
  }, []);

  const formatNumber = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '0';
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  useEffect(() => {
    if (tokenAddress) {
      fetchTokenDetails();
      fetchSolscanMetadata(tokenAddress);
      fetchEnhancedMetadata(tokenAddress);
    }
  }, [tokenAddress, fetchTokenDetails, fetchSolscanMetadata, fetchEnhancedMetadata]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-4">
          {error}
        </div>
      </div>
    );
  }

  if (!token) {
    return <div className="flex justify-center items-center min-h-screen">Token not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <Link to="/tokens" className="text-blue-600 hover:text-blue-800">
          ← Back to Tokens
        </Link>
        <Link 
          to={`/tokens/edit/${token._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Edit Token
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <img 
              src={tokenMetadata?.icon || token?.icon} 
              alt={token?.symbol} 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{token?.name} ({token?.symbol})</h1>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-2 py-1 rounded text-sm ${
                  token.isActive 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {token.isActive ? "Active" : "Inactive"}
                </span>
                {token.isSpotlight && (
                  <span className="px-2 py-1 rounded text-sm bg-purple-100 text-purple-800">
                    Spotlight
                  </span>
                )}
                {token.isHome && (
                  <span className="px-2 py-1 rounded text-sm bg-blue-100 text-blue-800">
                    Home
                  </span>
                )}
                {tokenMetadata?.market_cap_rank && (
                  <span className="px-2 py-1 rounded text-sm bg-yellow-100 text-yellow-800">
                    Rank #{tokenMetadata.market_cap_rank}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Market Data Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border-b border-gray-200">
          {tokenMetadata?.price && (
            <div>
              <h2 className="text-sm text-gray-500 uppercase">Price</h2>
              <p className="text-xl font-semibold">${tokenMetadata.price.toFixed(6)}</p>
            </div>
          )}
          {tokenMetadata?.price_change_24h && (
            <div>
              <h2 className="text-sm text-gray-500 uppercase">24h Change</h2>
              <p className={`text-xl font-semibold ${
                tokenMetadata.price_change_24h >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {tokenMetadata.price_change_24h >= 0 ? '+' : ''}
                {tokenMetadata.price_change_24h.toFixed(2)}%
              </p>
            </div>
          )}
          {tokenMetadata?.market_cap && (
            <div>
              <h2 className="text-sm text-gray-500 uppercase">Market Cap</h2>
              <p className="text-xl font-semibold">${formatNumber(tokenMetadata.market_cap)}</p>
            </div>
          )}
          {tokenMetadata?.volume_24h && (
            <div>
              <h2 className="text-sm text-gray-500 uppercase">Volume</h2>
              <p className="text-xl font-semibold">${formatNumber(tokenMetadata.volume_24h)}</p>
            </div>
          )}
          {tokenMetadata?.holder && (
            <div>
              <h2 className="text-sm text-gray-500 uppercase">Holders</h2>
              <p className="text-xl font-semibold">{formatNumber(tokenMetadata.holder)}</p>
            </div>
          )}
          {tokenMetadata?.supply && (
            <div>
              <h2 className="text-sm text-gray-500 uppercase">Supply</h2>
              <p className="text-xl font-semibold">{formatNumber(tokenMetadata.supply)}</p>
            </div>
          )}
          {tokenMetadata?.creator && (
            <div>
              <h2 className="text-sm text-gray-500 uppercase">Creator</h2>
              <p className="text-sm font-mono break-all">{tokenMetadata.creator}</p>
            </div>
          )}
        </div>

        {/* Price and Chart Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Price Card */}
            <div className="lg:col-span-1">
              <TokenPrice tokenId={token._id} />
            </div>
            
            {/* Chart Card */}
            <div className="lg:col-span-2">
              <TokenChart 
                tokenId={token._id} 
                tokenSymbol={token.symbol}
              />
            </div>
          </div>
        </div>

        {/* Token Details Section */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{token.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Token Information</h2>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-500">Token Address:</span>
                  <p className="font-mono text-sm break-all">{token.tokenAddress}</p>
                </div>
                <div>
                  <span className="text-gray-500">Decimals:</span>
                  <p>{token.decimals}</p>
                </div>
                <div>
                  <span className="text-gray-500">Slippage:</span>
                  <p>{token.slippage}%</p>
                </div>
                <div>
                  <span className="text-gray-500">CMC ID:</span>
                  <p>{token.cmcId}</p>
                </div>
                {tokenMetadata?.mint_authority && (
                  <div>
                    <span className="text-gray-500">Mint Authority:</span>
                    <p className="font-mono text-sm break-all">{tokenMetadata.mint_authority}</p>
                  </div>
                )}
                {tokenMetadata?.freeze_authority && (
                  <div>
                    <span className="text-gray-500">Freeze Authority:</span>
                    <p className="font-mono text-sm break-all">{tokenMetadata.freeze_authority}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Graph Data Status</h2>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-500">Graph Type:</span>
                  <p>{token.graphType}</p>
                </div>
                <div>
                  <span className="text-gray-500">Max Graph Data:</span>
                  <p>{token.grapDataInfo.isMaxGraphDataAdded ? "Added" : "Not Added"}</p>
                </div>
                <div>
                  <span className="text-gray-500">24h Graph Data:</span>
                  <p>{token.grapDataInfo.isOneDayGraphDataAdded ? "Added" : "Not Added"}</p>
                </div>
                <div>
                  <span className="text-gray-500">4h Graph Data:</span>
                  <p>{token.grapDataInfo.isFourHourGraphDataAdded ? "Added" : "Not Added"}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Solscan Data</h2>
              <div className="space-y-2">
                {tokenMetadata?.create_tx && (
                  <div>
                    <span className="text-gray-500">Creation Transaction:</span>
                    <p className="font-mono text-sm break-all">{tokenMetadata.create_tx}</p>
                  </div>
                )}
                {tokenMetadata?.created_time && (
                  <div>
                    <span className="text-gray-500">Creation Time:</span>
                    <p>{formatDate(new Date(tokenMetadata.created_time * 1000).toISOString())}</p>
                  </div>
                )}
                {tokenMetadata?.website && (
                  <div>
                    <span className="text-gray-500">Website:</span>
                    <a 
                      href={tokenMetadata.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {tokenMetadata.website}
                    </a>
                  </div>
                )}
                {tokenMetadata?.twitter && (
                  <div>
                    <span className="text-gray-500">Twitter:</span>
                    <a 
                      href={`https://twitter.com/${tokenMetadata.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      @{tokenMetadata.twitter}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Timestamps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-gray-500">Created At:</span>
                <p>{formatDate(token.createdAt)}</p>
              </div>
              <div>
                <span className="text-gray-500">Updated At:</span>
                <p>{formatDate(token.updatedAt)}</p>
              </div>
              <div>
                <span className="text-gray-500">Token Created At:</span>
                <p>{token.tokenCreatedAt ? formatDate(token.tokenCreatedAt) : "N/A"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Management */}
        <div className="mt-8">
          <GraphManagement 
            tokenId={token._id}
            tokenSymbol={token.symbol}
            onUpdate={fetchTokenDetails}
          />
        </div>

        {/* Enhanced Metadata Card */}
        {enhancedMetadata && (
          <div className="mt-8">
            <TokenMetadataCard 
              metadata={enhancedMetadata.metadata} 
              tokenAddress={tokenAddress || ''} 
            />
          </div>
        )}
      </div>
    </div>
  );
} 