import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate, Link, useSearchParams } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";
import { tokenApi } from "../../api/tokenApi";
import { solscanApiService, SolscanTokenMetadata } from "../../api/solscanApi";
import { PageMeta } from '../../components/common/PageMeta';

interface SocialUrls {
  web?: string;
  instagram?: string;
  x?: string;
  reddit?: string;
  telegram?: string;
  github?: string;
}

interface GraphDataInfo {
  isCronUpdate?: boolean;
  isMaxGraphDataAdded?: boolean;
  isOneDayGraphDataAdded?: boolean;
  isFourHourGraphDataAdded?: boolean;
}

interface TokenFormData {
  _id?: string;
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
  graphType?: string;
  isSpotlight?: boolean;
  isHome?: boolean;
  isActive?: boolean;
  isLive?: boolean;
  socialUrls?: SocialUrls;
  grapDataInfo?: GraphDataInfo;
}

interface Category {
  _id: string;
  name: string;
}

// Use SolscanTokenMetadata from the API
type TokenMetadata = SolscanTokenMetadata;

export default function TokenForm() {
  const { tokenAddress } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(tokenAddress);

  const [formData, setFormData] = useState<TokenFormData>({
    tokenAddress: "",
    symbol: "",
    name: "",
    description: "",
    decimals: undefined,
    icon: "",
    marketCap: "",
    tokenCreatedAt: "",
    holder: "",
    supply: "",
    price: "",
    volume: undefined,
    priceChange24h: "",
    cmcId: "",
    cgId: "",
    category: "",
    graphType: "cmc",
    isSpotlight: false,
    isHome: false,
    isActive: true,
    isLive: true,
    socialUrls: {
      web: "",
      instagram: "",
      x: "",
      reddit: "",
      telegram: "",
      github: "",
    },
    grapDataInfo: {
      isCronUpdate: false,
      isMaxGraphDataAdded: false,
      isOneDayGraphDataAdded: false,
      isFourHourGraphDataAdded: false,
    },
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tokenMetadata, setTokenMetadata] = useState<TokenMetadata | null>(null);
  const [metadataLoading, setMetadataLoading] = useState(false);
  const [metadataError, setMetadataError] = useState("");

  const [enhancedMetadata, setEnhancedMetadata] = useState<any>(null);
  const [validationLoading, setValidationLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  const [showSolscanSection, setShowSolscanSection] = useState(false);

  const fetchTokenDetails = useCallback(async (address: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/admin/token/${address}`);
      const token = response.data.body.token;
      
      setFormData({
        _id: token._id,
        tokenAddress: token.tokenAddress,
        symbol: token.symbol,
        name: token.name,
        description: token.description,
        decimals: token.decimals,
        icon: token.icon,
        marketCap: token.marketCap,
        tokenCreatedAt: token.tokenCreatedAt,
        holder: token.holder,
        supply: token.supply,
        price: token.price,
        volume: token.volume,
        priceChange24h: token.priceChange24h,
        cmcId: token.cmcId,
        cgId: token.cgId,
        category: token.category,
        graphType: token.graphType,
        isSpotlight: token.isSpotlight,
        isHome: token.isHome,
        isActive: token.isActive,
        isLive: token.isLive,
        socialUrls: token.socialUrls || {
          web: "",
          instagram: "",
          x: "",
          reddit: "",
          telegram: "",
          github: "",
        },
        grapDataInfo: token.grapDataInfo || {
          isCronUpdate: false,
          isMaxGraphDataAdded: false,
          isOneDayGraphDataAdded: false,
          isFourHourGraphDataAdded: false,
        },
      });
    } catch (err: any) {
      console.error("Error fetching token details:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchTokenMetadata = useCallback(async (address: string) => {
    setMetadataLoading(true);
    setMetadataError("");
    
    // Basic validation for Solana token address
    if (!address || address.length < 32 || address.length > 44) {
      setMetadataError("Please enter a valid Solana token address (32-44 characters)");
      setMetadataLoading(false);
      return;
    }
    
    try {
      // Use Solscan API to fetch token metadata with fallback
      let metadata;
      try {
        metadata = await solscanApiService.getTokenMetadata(address);
      } catch (primaryError) {
        console.log('Primary endpoint failed, trying alternative...');
        metadata = await solscanApiService.getTokenInfo(address);
      }
      
      setTokenMetadata(metadata);
      
      // Auto-fill form with Solscan data
      setFormData(prev => ({
        ...prev,
        tokenAddress: address,
        name: isEditMode ? prev.name : (metadata.metadata?.name || metadata.name || prev.name),
        symbol: isEditMode ? prev.symbol : (metadata.symbol || prev.symbol),
        description: isEditMode ? prev.description : (metadata.metadata?.description || prev.description),
        decimals: isEditMode ? prev.decimals : (metadata.decimals || prev.decimals),
        icon: isEditMode ? prev.icon : (metadata.icon || metadata.metadata?.image || prev.icon),
        marketCap: isEditMode ? prev.marketCap : (metadata.market_cap ? metadata.market_cap.toString() : prev.marketCap),
        holder: isEditMode ? prev.holder : (metadata.holder ? metadata.holder.toString() : prev.holder),
        supply: isEditMode ? prev.supply : (metadata.supply || prev.supply),
        price: isEditMode ? prev.price : (metadata.price ? metadata.price.toString() : prev.price),
        volume: isEditMode ? prev.volume : (metadata.volume_24h || prev.volume),
        priceChange24h: isEditMode ? prev.priceChange24h : (metadata.price_change_24h ? metadata.price_change_24h.toString() : prev.priceChange24h),
        tokenCreatedAt: isEditMode ? prev.tokenCreatedAt : (metadata.created_time ? new Date(metadata.created_time * 1000).toISOString() : prev.tokenCreatedAt),
        socialUrls: {
          ...prev.socialUrls,
          web: isEditMode ? prev.socialUrls?.web : (metadata.metadata?.website || prev.socialUrls?.web || ""),
          x: isEditMode ? prev.socialUrls?.x : (metadata.metadata?.twitter ? `https://twitter.com/${metadata.metadata.twitter}` : prev.socialUrls?.x || ""),
          telegram: prev.socialUrls?.telegram || "",
          reddit: prev.socialUrls?.reddit || "",
          github: prev.socialUrls?.github || ""
        },
      }));
    } catch (err: any) {
      setMetadataError(err.message || "Failed to fetch token metadata from Solscan. Please check if the token address is valid and exists on Solana.");
    } finally {
      setMetadataLoading(false);
    }
  }, [isEditMode]);

  useEffect(() => {
    fetchCategories();
    const address = tokenAddress || searchParams.get('address');
    if (address) {
      fetchTokenMetadata(address);
      if (isEditMode) {
        fetchTokenDetails(address);
      }
    }
  }, [tokenAddress, searchParams, fetchTokenDetails, isEditMode, fetchTokenMetadata]);

  useEffect(() => {
    if (formData.tokenAddress) {
      setShowSolscanSection(true);
      fetchTokenMetadata(formData.tokenAddress);
    } else {
      setShowSolscanSection(false);
    }
  }, [formData.tokenAddress, fetchTokenMetadata]);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/admin/category");
      setCategories(response.data.body.categories);
    } catch (err: any) {
      console.error("Error fetching categories:", err);
    }
  };

  const validateTokenAddress = useCallback(async (address: string) => {
    if (!address) return;
    
    try {
      setValidationLoading(true);
      setValidationError("");
      const metadata = await tokenApi.getEnhancedTokenMetadata(address);
      setEnhancedMetadata(metadata);
      
      // Auto-fill form data if available
      if (metadata) {
        setFormData(prev => ({
          ...prev,
          name: metadata.name || prev.name,
          symbol: metadata.symbol || prev.symbol,
          decimals: metadata.decimals || prev.decimals,
          icon: metadata.image || prev.icon,
        }));
      }
    } catch (err: any) {
      setValidationError(err.response?.data?.message || "Failed to validate token address");
      console.error("Error validating token address:", err);
    } finally {
      setValidationLoading(false);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "tokenAddress" && value) {
      // When address is manually entered, fetch from Solscan
      fetchTokenMetadata(value);
    }
    
    if (name.startsWith("social.")) {
      const socialField = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        socialUrls: {
          ...prev.socialUrls,
          [socialField]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isEditMode) {
        // Send all fields for update
        const updateData = {
          name: formData.name,
          description: formData.description,
          decimals: formData.decimals,
          icon: formData.icon,
          marketCap: formData.marketCap,
          tokenCreatedAt: formData.tokenCreatedAt,
          holder: formData.holder,
          supply: formData.supply,
          price: formData.price,
          volume: formData.volume,
          priceChange24h: formData.priceChange24h,
          cmcId: formData.cmcId,
          cgId: formData.cgId,
          category: formData.category,
          graphType: formData.graphType,
          isSpotlight: formData.isSpotlight,
          isHome: formData.isHome,
          isActive: formData.isActive,
          isLive: formData.isLive,
          socialUrls: formData.socialUrls,
          grapDataInfo: formData.grapDataInfo,
        };
        await axiosInstance.put(`/admin/token/update/${formData._id}`, updateData);
      } else {
        // For create, send all available fields
        const createData = {
          tokenAddress: formData.tokenAddress,
          symbol: formData.symbol,
          name: formData.name,
          description: formData.description,
          decimals: formData.decimals,
          icon: formData.icon,
          marketCap: formData.marketCap,
          tokenCreatedAt: formData.tokenCreatedAt,
          holder: formData.holder,
          supply: formData.supply,
          price: formData.price,
          volume: formData.volume,
          priceChange24h: formData.priceChange24h,
          cmcId: formData.cmcId,
          cgId: formData.cgId,
          category: formData.category,
          graphType: formData.graphType,
          isSpotlight: formData.isSpotlight,
          isHome: formData.isHome,
          isActive: formData.isActive,
          isLive: formData.isLive,
          socialUrls: formData.socialUrls,
          grapDataInfo: formData.grapDataInfo,
        };
        await axiosInstance.post("/admin/token/create", createData);
      }
      
      navigate("/tokens");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save token");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <PageMeta title={isEditMode ? "Edit Token" : "Add Token"} />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? "Edit Token" : "Add New Token"}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isEditMode 
                ? "Update token information and social media links" 
                : "Create a new token by entering its details"}
            </p>
          </div>
          <Link
            to="/tokens"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tokens
          </Link>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Token Metadata Section */}
        {showSolscanSection && tokenMetadata && (
          <div className="mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Token Metadata from Solscan</h2>
              </div>
              <div className="p-6">
                {metadataLoading ? (
                  <div className="flex justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  </div>
                ) : metadataError ? (
                  <div className="text-red-600">{metadataError}</div>
                ) : tokenMetadata ? (
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-500">Token Address</label>
                        <p className="mt-1 text-sm text-gray-900 break-all">{tokenMetadata.address}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-500">Symbol</label>
                        <p className="mt-1 text-sm text-gray-900">{tokenMetadata.symbol}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">Decimals</label>
                        <p className="mt-1 text-sm text-gray-900">{tokenMetadata.decimals}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">Holders</label>
                        <p className="mt-1 text-sm text-gray-900">{tokenMetadata.holder?.toLocaleString()}</p>
                      </div>
                      {tokenMetadata.supply && (
                        <div>
                          <label className="block text-sm font-medium text-gray-500">Total Supply</label>
                          <p className="mt-1 text-sm text-gray-900">{Number(tokenMetadata.supply).toLocaleString()}</p>
                        </div>
                      )}
                    </div>

                    {/* Market Data */}
                    {(tokenMetadata.price || tokenMetadata.market_cap || tokenMetadata.volume_24h) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tokenMetadata.price && (
                          <div>
                            <label className="block text-sm font-medium text-gray-500">Price</label>
                            <p className="mt-1 text-sm text-gray-900">${tokenMetadata.price.toFixed(6)}</p>
                          </div>
                        )}
                        {tokenMetadata.market_cap && (
                          <div>
                            <label className="block text-sm font-medium text-gray-500">Market Cap</label>
                            <p className="mt-1 text-sm text-gray-900">${tokenMetadata.market_cap.toLocaleString()}</p>
                          </div>
                        )}
                        {tokenMetadata.volume_24h && (
                          <div>
                            <label className="block text-sm font-medium text-gray-500">24h Volume</label>
                            <p className="mt-1 text-sm text-gray-900">${tokenMetadata.volume_24h.toLocaleString()}</p>
                          </div>
                        )}
                        {tokenMetadata.market_cap_rank && (
                          <div>
                            <label className="block text-sm font-medium text-gray-500">Market Cap Rank</label>
                            <p className="mt-1 text-sm text-gray-900">#{tokenMetadata.market_cap_rank}</p>
                          </div>
                        )}
                        {tokenMetadata.price_change_24h && (
                          <div>
                            <label className="block text-sm font-medium text-gray-500">24h Price Change</label>
                            <p className={`mt-1 text-sm ${tokenMetadata.price_change_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {tokenMetadata.price_change_24h >= 0 ? '+' : ''}{tokenMetadata.price_change_24h.toFixed(2)}%
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Creation Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tokenMetadata.creator && (
                        <div>
                          <label className="block text-sm font-medium text-gray-500">Creator</label>
                          <p className="mt-1 text-sm text-gray-900 break-all">{tokenMetadata.creator}</p>
                        </div>
                      )}
                      {tokenMetadata.created_time && (
                        <div>
                          <label className="block text-sm font-medium text-gray-500">Created</label>
                          <p className="mt-1 text-sm text-gray-900">
                            {new Date(tokenMetadata.created_time * 1000).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tokenMetadata.website && (
                        <div>
                          <label className="block text-sm font-medium text-gray-500">Website</label>
                          <a 
                            href={tokenMetadata.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-sm text-blue-600 hover:text-blue-800 break-all"
                          >
                            {tokenMetadata.website}
                          </a>
                        </div>
                      )}
                      {tokenMetadata.twitter && (
                        <div>
                          <label className="block text-sm font-medium text-gray-500">X (formerly Twitter)</label>
                            <a 
                            href={`https://twitter.com/${tokenMetadata.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-sm text-blue-600 hover:text-blue-800"
                          >
                            @{tokenMetadata.twitter}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Token Icon */}
                    {(tokenMetadata.icon || tokenMetadata.metadata?.image) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">Token Icon</label>
                        <img 
                          src={tokenMetadata.icon || tokenMetadata.metadata?.image} 
                          alt={`${tokenMetadata.symbol} icon`}
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    )}

                    {/* Description */}
                    {tokenMetadata.description && (
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">Description</label>
                        <p className="text-sm text-gray-900 whitespace-pre-wrap">{tokenMetadata.description}</p>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {!isEditMode && (
                <>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Token Address *
                      <span className="ml-1 text-xs text-gray-500">(Auto-fills other fields from Solscan)</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="tokenAddress"
                        value={formData.tokenAddress}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        placeholder="Enter Solana token address"
                      />
                      <button
                        type="button"
                        onClick={() => formData.tokenAddress && fetchTokenMetadata(formData.tokenAddress)}
                        disabled={!formData.tokenAddress || metadataLoading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {metadataLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Loading...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Fetch Data
                          </>
                        )}
                      </button>
                    </div>
                    {metadataError && (
                      <p className="mt-1 text-sm text-red-600">{metadataError}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter token name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Symbol *
                    </label>
                    <input
                      type="text"
                      name="symbol"
                      value={formData.symbol}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="e.g., BTC"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CMC ID
                    </label>
                    <input
                      type="text"
                      name="cmcId"
                      value={formData.cmcId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="CoinMarketCap ID"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CG ID
                    </label>
                    <input
                      type="text"
                      name="cgId"
                      value={formData.cgId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="CoinGecko ID"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Decimals
                    </label>
                    <input
                      type="number"
                      name="decimals"
                      value={formData.decimals || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 9"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Icon URL
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="url"
                        name="icon"
                        value={formData.icon || ""}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com/icon.png"
                      />
                      {formData.icon && (
                        <img 
                          src={formData.icon} 
                          alt="Token Icon" 
                          className="w-12 h-12 rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/default-token-icon.png';
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Market Cap (USD)
                    </label>
                    <input
                      type="text"
                      name="marketCap"
                      value={formData.marketCap || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 1000000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Holders
                    </label>
                    <input
                      type="text"
                      name="holder"
                      value={formData.holder || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 1000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Total Supply
                    </label>
                    <input
                      type="text"
                      name="supply"
                      value={formData.supply || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 1000000000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price (USD)
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 0.001234"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      24h Volume
                    </label>
                    <input
                      type="number"
                      name="volume"
                      value={formData.volume || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 1000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      24h Price Change (%)
                    </label>
                    <input
                      type="text"
                      name="priceChange24h"
                      value={formData.priceChange24h || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 5.67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Token Created At
                    </label>
                    <input
                      type="datetime-local"
                      name="tokenCreatedAt"
                      value={formData.tokenCreatedAt ? new Date(formData.tokenCreatedAt).toISOString().slice(0, 16) : ""}
                      onChange={(e) => setFormData(prev => ({ ...prev, tokenCreatedAt: e.target.value ? new Date(e.target.value).toISOString() : "" }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter token description"
                />
              </div>

              {isEditMode && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Graph Type
                </label>
                <select
                  name="graphType"
                  value={formData.graphType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="cmc">CoinMarketCap</option>
                  <option value="cg">CoinGecko</option>
                </select>
              </div>

            </div>
          </div>

          {/* Status and Settings Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Status and Settings</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive || false}
                  onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                  Active
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isLive"
                  name="isLive"
                  checked={formData.isLive || false}
                  onChange={(e) => setFormData(prev => ({ ...prev, isLive: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isLive" className="ml-2 block text-sm text-gray-900">
                  Live
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isSpotlight"
                  name="isSpotlight"
                  checked={formData.isSpotlight || false}
                  onChange={(e) => setFormData(prev => ({ ...prev, isSpotlight: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isSpotlight" className="ml-2 block text-sm text-gray-900">
                  Spotlight
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isHome"
                  name="isHome"
                  checked={formData.isHome || false}
                  onChange={(e) => setFormData(prev => ({ ...prev, isHome: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isHome" className="ml-2 block text-sm text-gray-900">
                  Show on Home
                </label>
              </div>
            </div>
          </div>

          {/* Graph Data Information Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Graph Data Information</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isCronUpdate"
                  name="isCronUpdate"
                  checked={formData.grapDataInfo?.isCronUpdate || false}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    grapDataInfo: { 
                      ...prev.grapDataInfo, 
                      isCronUpdate: e.target.checked 
                    } 
                  }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isCronUpdate" className="ml-2 block text-sm text-gray-900">
                  Cron Update
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isMaxGraphDataAdded"
                  name="isMaxGraphDataAdded"
                  checked={formData.grapDataInfo?.isMaxGraphDataAdded || false}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    grapDataInfo: { 
                      ...prev.grapDataInfo, 
                      isMaxGraphDataAdded: e.target.checked 
                    } 
                  }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isMaxGraphDataAdded" className="ml-2 block text-sm text-gray-900">
                  Max Graph Data
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isOneDayGraphDataAdded"
                  name="isOneDayGraphDataAdded"
                  checked={formData.grapDataInfo?.isOneDayGraphDataAdded || false}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    grapDataInfo: { 
                      ...prev.grapDataInfo, 
                      isOneDayGraphDataAdded: e.target.checked 
                    } 
                  }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isOneDayGraphDataAdded" className="ml-2 block text-sm text-gray-900">
                  One Day Graph Data
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFourHourGraphDataAdded"
                  name="isFourHourGraphDataAdded"
                  checked={formData.grapDataInfo?.isFourHourGraphDataAdded || false}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    grapDataInfo: { 
                      ...prev.grapDataInfo, 
                      isFourHourGraphDataAdded: e.target.checked 
                    } 
                  }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isFourHourGraphDataAdded" className="ml-2 block text-sm text-gray-900">
                  Four Hour Graph Data
                </label>
              </div>
            </div>
          </div>

          {/* Icon Field - Only show in edit mode */}
          {isEditMode && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Icon URL
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  name="icon"
                  value={formData.icon}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter icon URL"
                />
                {formData.icon && (
                  <img 
                    src={formData.icon} 
                    alt="Token Icon" 
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/default-token-icon.png'; // Add a default icon path
                    }}
                  />
                )}
              </div>
            </div>
          )}

          {/* Social Links Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Social Media Links</h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Website
                    </span>
                  </label>
                  <input
                    type="url"
                    name="social.web"
                    value={formData.socialUrls?.web || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com"
                  />
                </div>

                {/* X (Twitter) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      X (Twitter)
                    </span>
                  </label>
                  <input
                    type="url"
                    name="social.x"
                    value={formData.socialUrls?.x || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://twitter.com/username"
                  />
                </div>

                {/* Instagram */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </span>
                  </label>
                  <input
                    type="url"
                    name="social.instagram"
                    value={formData.socialUrls?.instagram || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://instagram.com/username"
                  />
                </div>

                {/* Telegram */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      Telegram
                    </span>
                  </label>
                  <input
                    type="url"
                    name="social.telegram"
                    value={formData.socialUrls?.telegram || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://t.me/username"
                  />
                </div>

                {/* Reddit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Reddit
                    </span>
                  </label>
                  <input
                    type="url"
                    name="social.reddit"
                    value={formData.socialUrls?.reddit || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://reddit.com/r/subreddit"
                  />
                </div>

                {/* GitHub */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </span>
                  </label>
                  <input
                    type="url"
                    name="social.github"
                    value={formData.socialUrls?.github || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://github.com/username"
                  />
                </div>
              </div>
            </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/tokens")}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Saving...
                </>
              ) : (
                'Save Token'
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
} 