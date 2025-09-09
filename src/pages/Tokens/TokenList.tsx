import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";
import Input from "../../components/form/input/InputField";
import { PageMeta } from '../../components/common/PageMeta';

interface Token {
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
  isLive: boolean;
}

interface PaginatedResponse {
  body: {
    tokens: {
      tokens: Token[];
    };
  };
}

interface SortConfig {
  key: keyof Token | "";
  direction: "asc" | "desc";
}

interface ToggleConfirmation {
  show: boolean;
  tokenAddress: string;
  tokenName: string;
  property: 'active' | 'spotlight' | 'live' | 'home';
  currentState: boolean;
}

export default function TokenList() {
  // Dummy token data
  const dummyTokens: Token[] = [
        { _id: '1', name: 'Zegn Token', symbol: 'ZEGN', description: 'Main platform token', decimals: 18, icon: '/images/product/product-01.jpg', tokenAddress: '0x1', marketCap: '1000000', holder: '1000', supply: '10000000', price: '0.12', volume: 50000, priceChange24h: '2.5', isActive: true, isSpotlight: true, isHome: false, category: 'Platform', createdAt: '2023-01-01', updatedAt: '2023-01-02', isLive: true },
    { _id: '2', name: 'Solana Coin', symbol: 'SOL', description: 'Solana blockchain token', decimals: 9, icon: '/images/product/product-02.jpg', tokenAddress: '0x2', marketCap: '50000000', holder: '5000', supply: '500000000', price: '145.30', volume: 200000, priceChange24h: '-1.2', isActive: true, isSpotlight: false, isHome: true, category: 'Blockchain', createdAt: '2023-01-03', updatedAt: '2023-01-04', isLive: true },
    { _id: '3', name: 'Ethereum', symbol: 'ETH', description: 'Ethereum mainnet token', decimals: 18, icon: '/images/product/product-03.jpg', tokenAddress: '0x3', marketCap: '200000000', holder: '8000', supply: '120000000', price: '3200.00', volume: 1000000, priceChange24h: '0.8', isActive: true, isSpotlight: true, isHome: false, category: 'Blockchain', createdAt: '2023-01-05', updatedAt: '2023-01-06', isLive: true },
    { _id: '4', name: 'Bitcoin', symbol: 'BTC', description: 'Bitcoin mainnet token', decimals: 8, icon: '/images/product/product-04.jpg', tokenAddress: '0x4', marketCap: '800000000', holder: '10000', supply: '21000000', price: '60000.00', volume: 3000000, priceChange24h: '1.5', isActive: true, isSpotlight: false, isHome: true, category: 'Blockchain', createdAt: '2023-01-07', updatedAt: '2023-01-08', isLive: true },
    { _id: '5', name: 'Cardano', symbol: 'ADA', description: 'Cardano blockchain token', decimals: 6, icon: '/images/product/product-05.jpg', tokenAddress: '0x5', marketCap: '30000000', holder: '3000', supply: '45000000000', price: '1.20', volume: 150000, priceChange24h: '-0.5', isActive: false, isSpotlight: false, isHome: false, category: 'Blockchain', createdAt: '2023-01-09', updatedAt: '2023-01-10', isLive: false },
    { _id: '6', name: 'Polkadot', symbol: 'DOT', description: 'Polkadot blockchain token', decimals: 10, icon: '/images/product/product-01.jpg', tokenAddress: '0x6', marketCap: '12000000', holder: '2000', supply: '1000000000', price: '35.00', volume: 80000, priceChange24h: '3.2', isActive: true, isSpotlight: false, isHome: false, category: 'Blockchain', createdAt: '2023-01-11', updatedAt: '2023-01-12', isLive: true },
    { _id: '7', name: 'Avalanche', symbol: 'AVAX', description: 'Avalanche blockchain token', decimals: 9, icon: '/images/product/product-02.jpg', tokenAddress: '0x7', marketCap: '9000000', holder: '1500', supply: '72000000', price: '60.00', volume: 60000, priceChange24h: '-2.1', isActive: false, isSpotlight: true, isHome: false, category: 'Blockchain', createdAt: '2023-01-13', updatedAt: '2023-01-14', isLive: false },
    { _id: '8', name: 'Chainlink', symbol: 'LINK', description: 'Chainlink oracle token', decimals: 18, icon: '/images/product/product-03.jpg', tokenAddress: '0x8', marketCap: '7000000', holder: '1200', supply: '1000000000', price: '25.00', volume: 40000, priceChange24h: '0.0', isActive: true, isSpotlight: false, isHome: false, category: 'Oracle', createdAt: '2023-01-15', updatedAt: '2023-01-16', isLive: true },
    { _id: '9', name: 'Uniswap', symbol: 'UNI', description: 'Uniswap DEX token', decimals: 18, icon: '/images/product/product-04.jpg', tokenAddress: '0x9', marketCap: '6000000', holder: '1100', supply: '1000000000', price: '20.00', volume: 35000, priceChange24h: '1.1', isActive: true, isSpotlight: false, isHome: false, category: 'DEX', createdAt: '2023-01-17', updatedAt: '2023-01-18', isLive: true },
    { _id: '10', name: 'Aave', symbol: 'AAVE', description: 'Aave lending token', decimals: 18, icon: '/images/product/product-05.jpg', tokenAddress: '0x10', marketCap: '5000000', holder: '1000', supply: '16000000', price: '400.00', volume: 30000, priceChange24h: '-1.0', isActive: false, isSpotlight: false, isHome: false, category: 'Lending', createdAt: '2023-01-19', updatedAt: '2023-01-20', isLive: false },
    { _id: '11', name: 'Sushi', symbol: 'SUSHI', description: 'SushiSwap DEX token', decimals: 18, icon: '/images/product/product-01.jpg', tokenAddress: '0x11', marketCap: '4000000', holder: '900', supply: '250000000', price: '10.00', volume: 25000, priceChange24h: '0.5', isActive: true, isSpotlight: false, isHome: false, category: 'DEX', createdAt: '2023-01-21', updatedAt: '2023-01-22', isLive: true },
    { _id: '12', name: 'PancakeSwap', symbol: 'CAKE', description: 'PancakeSwap DEX token', decimals: 18, icon: '/images/product/product-02.jpg', tokenAddress: '0x12', marketCap: '3000000', holder: '800', supply: '200000000', price: '8.00', volume: 20000, priceChange24h: '-0.8', isActive: false, isSpotlight: true, isHome: false, category: 'DEX', createdAt: '2023-01-23', updatedAt: '2023-01-24', isLive: false },
    { _id: '13', name: 'Maker', symbol: 'MKR', description: 'MakerDAO governance token', decimals: 18, icon: '/images/product/product-03.jpg', tokenAddress: '0x13', marketCap: '2000000', holder: '700', supply: '1000000', price: '2500.00', volume: 15000, priceChange24h: '2.0', isActive: true, isSpotlight: false, isHome: false, category: 'Governance', createdAt: '2023-01-25', updatedAt: '2023-01-26', isLive: true },
    { _id: '14', name: 'Curve', symbol: 'CRV', description: 'Curve DEX token', decimals: 18, icon: '/images/product/product-04.jpg', tokenAddress: '0x14', marketCap: '1000000', holder: '600', supply: '3000000000', price: '2.00', volume: 10000, priceChange24h: '-0.3', isActive: false, isSpotlight: false, isHome: false, category: 'DEX', createdAt: '2023-01-27', updatedAt: '2023-01-28', isLive: false },
    { _id: '15', name: 'Synthetix', symbol: 'SNX', description: 'Synthetix protocol token', decimals: 18, icon: '/images/product/product-05.jpg', tokenAddress: '0x15', marketCap: '900000', holder: '500', supply: '200000000', price: '15.00', volume: 9000, priceChange24h: '1.7', isActive: true, isSpotlight: false, isHome: false, category: 'Derivatives', createdAt: '2023-01-29', updatedAt: '2023-01-30', isLive: true },
    { _id: '16', name: 'Balancer', symbol: 'BAL', description: 'Balancer DEX token', decimals: 18, icon: '/images/product/product-01.jpg', tokenAddress: '0x16', marketCap: '800000', holder: '400', supply: '100000000', price: '20.00', volume: 8000, priceChange24h: '-0.9', isActive: false, isSpotlight: true, isHome: false, category: 'DEX', createdAt: '2023-01-31', updatedAt: '2023-02-01', isLive: false },
    { _id: '17', name: 'Yearn Finance', symbol: 'YFI', description: 'Yearn vault token', decimals: 18, icon: '/images/product/product-02.jpg', tokenAddress: '0x17', marketCap: '700000', holder: '300', supply: '36000', price: '30000.00', volume: 7000, priceChange24h: '0.4', isActive: true, isSpotlight: false, isHome: false, category: 'Vault', createdAt: '2023-02-02', updatedAt: '2023-02-03', isLive: true },
    { _id: '18', name: '1inch', symbol: '1INCH', description: '1inch DEX aggregator token', decimals: 18, icon: '/images/product/product-03.jpg', tokenAddress: '0x18', marketCap: '600000', holder: '200', supply: '1500000000', price: '3.00', volume: 6000, priceChange24h: '-0.2', isActive: false, isSpotlight: false, isHome: false, category: 'DEX', createdAt: '2023-02-04', updatedAt: '2023-02-05', isLive: false },
    { _id: '19', name: 'Compound', symbol: 'COMP', description: 'Compound lending token', decimals: 18, icon: '/images/product/product-04.jpg', tokenAddress: '0x19', marketCap: '500000', holder: '100', supply: '10000000', price: '400.00', volume: 5000, priceChange24h: '1.3', isActive: true, isSpotlight: false, isHome: false, category: 'Lending', createdAt: '2023-02-06', updatedAt: '2023-02-07', isLive: true },
    { _id: '20', name: 'Enjin Coin', symbol: 'ENJ', description: 'Enjin gaming token', decimals: 18, icon: '/images/product/product-05.jpg', tokenAddress: '0x20', marketCap: '400000', holder: '50', supply: '1000000000', price: '2.50', volume: 4000, priceChange24h: '-0.7', isActive: false, isSpotlight: true, isHome: false, category: 'Gaming', createdAt: '2023-02-08', updatedAt: '2023-02-09', isLive: false },
  ];

  // Remove axios/fetch logic and use dummy data
  const [tokens, setTokens] = useState<Token[]>(dummyTokens);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'active' | 'inactive'>('active');
  const [deleteConfirm, setDeleteConfirm] = useState<{show: boolean; tokenId: string; tokenName: string}>({
    show: false,
    tokenId: "",
    tokenName: ""
  });
  const itemsPerPage = 10;
  const [toggleLoading, setToggleLoading] = useState<{[key: string]: boolean}>({});
  const [toggleConfirm, setToggleConfirm] = useState<ToggleConfirmation>({
    show: false,
    tokenAddress: "",
    tokenName: "",
    property: 'active',
    currentState: false
  });

  // Remove useEffect(() => { fetchTokens(); }, []);
  // Remove fetchTokens function

  const handleDeleteConfirm = async () => {
    try {
      // This function is no longer used with dummy data, but kept for consistency
      // If axiosInstance were still available, it would be used here.
      // For now, it's a placeholder.
      console.log(`Attempting to delete token with ID: ${deleteConfirm.tokenId}`);
      // Example: axiosInstance.delete(`/admin/token/${deleteConfirm.tokenId}`);
      // For dummy data, we just remove it from the state
      setTokens(prevTokens => prevTokens.filter(token => token._id !== deleteConfirm.tokenId));
      setDeleteConfirm({ show: false, tokenId: "", tokenName: "" });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete token");
      console.error("Error deleting token:", err);
    }
  };

  const handleSort = (key: keyof Token) => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const renderSortIcon = (key: keyof Token) => {
    if (sortConfig.key !== key) return "↕️";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const formatNumber = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '0';
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(num);
  };

  const formatPriceChange = (change: string) => {
    const num = parseFloat(change);
    const isPositive = num > 0;
    return (
      <span className={`${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '+' : ''}{num.toFixed(2)}%
      </span>
    );
  };

  // Filter by active/inactive status before other filters
  const statusFilteredTokens = tokens.filter(token => 
    activeTab === 'active' ? token.isActive : !token.isActive
  );

  // Sort the data
  const sortedTokens = [...statusFilteredTokens].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    // Handle boolean values
    if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
      return sortConfig.direction === "asc" 
        ? (aValue === bValue ? 0 : aValue ? 1 : -1)
        : (aValue === bValue ? 0 : aValue ? -1 : 1);
    }
    
    // Handle string values
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === "asc" 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    // Handle numeric values
    const aNum = typeof aValue === 'string' ? parseFloat(aValue) : Number(aValue);
    const bNum = typeof bValue === 'string' ? parseFloat(bValue) : Number(bValue);
    
    if (isNaN(aNum) || isNaN(bNum)) return 0;
    return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
  });

  // Filter the sorted data
  const filteredTokens = sortedTokens.filter(token => 
    token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredTokens.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTokens = filteredTokens.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Reset to first page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const initiateToggle = (
    tokenAddress: string, 
    property: 'active' | 'spotlight' | 'live' | 'home',
    tokenName: string,
    currentState: boolean
  ) => {
    setToggleConfirm({
      show: true,
      tokenAddress,
      tokenName,
      property,
      currentState
    });
  };

  const handleToggleConfirm = async () => {
    const { tokenAddress, property } = toggleConfirm;
    setToggleLoading(prev => ({ ...prev, [`${tokenAddress}-${property}`]: true }));
    try {
      // This function is no longer used with dummy data, but kept for consistency
      // If axiosInstance were still available, it would be used here.
      // For now, it's a placeholder.
      console.log(`Attempting to toggle ${property} for token with address: ${tokenAddress}`);
      // Example: await axiosInstance.put(`/admin/token/${property}/${tokenAddress}`);
      // For dummy data, we just update the state
      setTokens(prevTokens => 
        prevTokens.map(token => 
          token.tokenAddress === tokenAddress
            ? {
                ...token,
                [property === 'active' ? 'isActive' : 
                 property === 'spotlight' ? 'isSpotlight' :
                 property === 'live' ? 'isLive' : 'isHome']: 
                !token[property === 'active' ? 'isActive' : 
                       property === 'spotlight' ? 'isSpotlight' :
                       property === 'live' ? 'isLive' : 'isHome']
              }
            : token
        )
      );
    } catch (err: any) {
      setError(err.response?.data?.message || `Failed to toggle ${property}`);
    } finally {
      setToggleLoading(prev => ({ ...prev, [`${tokenAddress}-${property}`]: false }));
      setToggleConfirm({
        show: false,
        tokenAddress: "",
        tokenName: "",
        property: 'active',
        currentState: false
      });
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
      <PageMeta title="Tokens" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tokens</h1>
          <Link 
            to="/tokens/add" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add New Token
          </Link>
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search tokens by name or symbol..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64"
          />
        </div>
        {/* Tabs */}
        <div className="flex space-x-1 mb-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'active'
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Active Tokens
          </button>
          <button
            onClick={() => setActiveTab('inactive')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'inactive'
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Inactive Tokens
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Icon
                    </th>
                    <th 
                      onClick={() => handleSort("name")} 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      Name/Symbol {renderSortIcon("name")}
                    </th>
                    <th 
                      onClick={() => handleSort("price")} 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      Price {renderSortIcon("price")}
                    </th>
                    <th 
                      onClick={() => handleSort("priceChange24h")} 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      24h Change {renderSortIcon("priceChange24h")}
                    </th>
                    <th 
                      onClick={() => handleSort("marketCap")} 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      Market Cap {renderSortIcon("marketCap")}
                    </th>
                    <th 
                      onClick={() => handleSort("volume")} 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      Volume {renderSortIcon("volume")}
                    </th>
                    <th 
                      onClick={() => handleSort("isActive")} 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      Status {renderSortIcon("isActive")}
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentTokens.length > 0 ? (
                    currentTokens.map((token) => (
                      <tr key={token._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img src={token.icon} alt={token.symbol} className="w-8 h-8 rounded-full" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{token.name}</div>
                          <div className="text-sm text-gray-500">{token.symbol}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${formatPrice(token.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatPriceChange(token.priceChange24h)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${formatNumber(token.marketCap)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${formatNumber(token.volume)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-2">
                            {/* Active Toggle */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => initiateToggle(
                                  token.tokenAddress,
                                  'active',
                                  token.name,
                                  token.isActive
                                )}
                                disabled={toggleLoading[`${token.tokenAddress}-active`]}
                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                  token.isActive ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                              >
                                <span className="sr-only">Active status</span>
                                <span
                                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                                    token.isActive ? 'translate-x-5' : 'translate-x-0'
                                  }`}
                                />
                              </button>
                              <span className="text-sm text-gray-500">Active</span>
                            </div>

                            {/* Spotlight Toggle */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => initiateToggle(
                                  token.tokenAddress,
                                  'spotlight',
                                  token.name,
                                  token.isSpotlight
                                )}
                                disabled={toggleLoading[`${token.tokenAddress}-spotlight`]}
                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                                  token.isSpotlight ? 'bg-purple-600' : 'bg-gray-200'
                                }`}
                              >
                                <span className="sr-only">Spotlight status</span>
                                <span
                                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                                    token.isSpotlight ? 'translate-x-5' : 'translate-x-0'
                                  }`}
                                />
                              </button>
                              <span className="text-sm text-gray-500">Spotlight</span>
                            </div>

                            {/* Live Toggle */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => initiateToggle(
                                  token.tokenAddress,
                                  'live',
                                  token.name,
                                  token.isLive
                                )}
                                disabled={toggleLoading[`${token.tokenAddress}-live`]}
                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                                  token.isLive ? 'bg-green-600' : 'bg-gray-200'
                                }`}
                              >
                                <span className="sr-only">Live status</span>
                                <span
                                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                                    token.isLive ? 'translate-x-5' : 'translate-x-0'
                                  }`}
                                />
                              </button>
                              <span className="text-sm text-gray-500">Live</span>
                            </div>

                            {/* Home Toggle */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => initiateToggle(
                                  token.tokenAddress,
                                  'home',
                                  token.name,
                                  token.isHome
                                )}
                                disabled={toggleLoading[`${token.tokenAddress}-home`]}
                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
                                  token.isHome ? 'bg-yellow-600' : 'bg-gray-200'
                                }`}
                              >
                                <span className="sr-only">Home status</span>
                                <span
                                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                                    token.isHome ? 'translate-x-5' : 'translate-x-0'
                                  }`}
                                />
                              </button>
                              <span className="text-sm text-gray-500">Home</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Link 
                            to={`/tokens/${token.tokenAddress}`} 
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            View
                          </Link>
                          <Link 
                            to={`/tokens/edit/${token._id}`}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            Edit
                          </Link>
                           <Link 
                            to={`/tokens/cron/${token.tokenAddress}`}
                            className="text-green-600 hover:text-green-900"
                          >
                            Cron
                          </Link> 
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                        No tokens found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {filteredTokens.length > 0 && (
              <div className="mt-4 flex justify-center items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                  Previous
                </button>
                
                {renderPagination()}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                </button>
                
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}
          </>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirm.show && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
              <p className="mb-6">
                Are you sure you want to delete the token "{deleteConfirm.tokenName}"? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setDeleteConfirm({ show: false, tokenId: "", tokenName: "" })}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toggle Confirmation Modal */}
        {toggleConfirm.show && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-4">Confirm Status Change</h2>
              <p className="mb-6">
                Are you sure you want to {toggleConfirm.currentState ? "disable" : "enable"} the{" "}
                <span className="font-semibold">{toggleConfirm.property}</span> status for token "{toggleConfirm.tokenName}"?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setToggleConfirm({
                    show: false,
                    tokenAddress: "",
                    tokenName: "",
                    property: 'active',
                    currentState: false
                  })}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleToggleConfirm}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 