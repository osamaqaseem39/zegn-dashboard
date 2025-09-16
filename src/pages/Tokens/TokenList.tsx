import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tokenApi } from "../../api/tokenApi";
import Input from "../../components/form/input/InputField";
import { PageMeta } from '../../components/common/PageMeta';

interface Token {
  _id: string;
  name: string;
  symbol: string;
  description: string;
  decimals: number | null;
  icon: string;
  tokenAddress: string;
  marketCap: string;
  holder: string;
  supply: string;
  price: string;
  volume: number | null;
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
  // Initialize with empty array - data will be loaded from API
  const [tokens, setTokens] = useState<Token[]>([]);
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

  useEffect(() => {
    fetchTokens();
  }, []);

  const fetchTokens = async () => {
    try {
      setLoading(true);
      setError(""); // Clear any previous errors
      console.log("TokenList: Starting to fetch tokens...");
      const data = await tokenApi.getTokens();
      console.log("TokenList: Received tokens data:", data);
      console.log("TokenList: Number of tokens:", data?.length || 0);
      setTokens(data || []);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Failed to load tokens";
      setError(errorMessage);
      console.error("Error fetching tokens:", err);
      console.error("Error response:", err.response?.data);
    } finally {
      setLoading(false);
    }
  };

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

  const formatNumber = (value: string | number | null) => {
    if (value === null || value === undefined) return '0';
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '0';
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatPrice = (price: string | null) => {
    if (price === null || price === undefined || price === '') return '0.00';
    const num = parseFloat(price);
    if (isNaN(num)) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(num);
  };

  const formatPriceChange = (change: string | null) => {
    if (change === null || change === undefined || change === '') return <span className="text-gray-500">0.00%</span>;
    const num = parseFloat(change);
    if (isNaN(num)) return <span className="text-gray-500">0.00%</span>;
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
      let updatedToken;
      
      switch (property) {
        case 'active':
          updatedToken = await tokenApi.toggleActive(tokenAddress);
          break;
        case 'spotlight':
          updatedToken = await tokenApi.toggleSpotlight(tokenAddress);
          break;
        case 'live':
          updatedToken = await tokenApi.toggleLive(tokenAddress);
          break;
        case 'home':
          updatedToken = await tokenApi.toggleHome(tokenAddress);
          break;
        default:
          throw new Error(`Unknown property: ${property}`);
      }
      
      // Update the token in the state
      setTokens(prevTokens => 
        prevTokens.map(token => 
          token.tokenAddress === tokenAddress ? updatedToken : token
        )
      );
    } catch (err: any) {
      setError(err.response?.data?.message || `Failed to toggle ${property}`);
      console.error(`Error toggling ${property}:`, err);
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
                          {token.icon ? (
                            <img src={token.icon} alt={token.symbol} className="w-8 h-8 rounded-full" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                              {token.symbol?.charAt(0) || '?'}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{token.name || 'Unnamed Token'}</div>
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