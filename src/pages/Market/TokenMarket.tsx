import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/common/PageMeta';
import TokenDashboard from '../../components/tokens/TokenDashboard';
import { tokenApi, Token } from '../../api/tokenApi';
import { useAuth } from '../../context/AuthContext';

const TokenMarket: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'change' | 'marketCap'>('marketCap');
  const [filter, setFilter] = useState<'all' | 'active' | 'spotlight' | 'live'>('all');

  useEffect(() => {
    if (!authLoading && user) {
      fetchTokens();
    }
  }, [authLoading, user]);

  const fetchTokens = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await tokenApi.getTokens();
      setTokens(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error('Error fetching tokens:', err);
      setError(err.response?.data?.message || 'Failed to fetch tokens');
    } finally {
      setLoading(false);
    }
  };

  const filteredTokens = tokens.filter(token => {
    switch (filter) {
      case 'active':
        return token.isActive;
      case 'spotlight':
        return token.isSpotlight;
      case 'live':
        return token.isLive;
      default:
        return true;
    }
  });

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(b.price) - parseFloat(a.price);
      case 'change':
        return parseFloat(b.priceChange24h) - parseFloat(a.priceChange24h);
      case 'marketCap':
        return parseFloat(b.marketCap) - parseFloat(a.marketCap);
      default:
        return 0;
    }
  });

  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    if (isNaN(num)) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(num);
  };

  const formatPriceChange = (change: string) => {
    const num = parseFloat(change);
    if (isNaN(num)) return 0;
    return num;
  };

  const formatNumber = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '0';
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(num);
  };

  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading market data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Error loading market data</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
            <button
              onClick={fetchTokens}
              className="ml-4 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageMeta title="Token Market" />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Token Market</h1>
            <p className="text-gray-600 mt-2">Discover and analyze tokens with real-time data</p>
          </div>
          <Link
            to="/tokens/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            Add New Token
          </Link>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {[
                { key: 'all', label: 'All Tokens' },
                { key: 'active', label: 'Active' },
                { key: 'spotlight', label: 'Spotlight' },
                { key: 'live', label: 'Live' },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key as any)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    filter === filterOption.key
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="marketCap">Market Cap</option>
                <option value="price">Price</option>
                <option value="change">24h Change</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Token Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedTokens.length} of {tokens.length} tokens
          </p>
        </div>

        {/* Token Display */}
        {viewMode === 'grid' ? (
          <TokenDashboard 
            limit={sortedTokens.length} 
            showCharts={true}
            className="mb-8"
          />
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Token
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      24h Change
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Market Cap
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Volume
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedTokens.map((token) => {
                    const priceChange = formatPriceChange(token.priceChange24h);
                    const isPositive = priceChange >= 0;

                    return (
                      <tr key={token._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {token.icon ? (
                              <img 
                                src={token.icon} 
                                alt={token.symbol} 
                                className="w-10 h-10 rounded-full mr-3"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium mr-3">
                                {token.symbol?.charAt(0) || '?'}
                              </div>
                            )}
                            <div>
                              <div className="text-sm font-medium text-gray-900">{token.name}</div>
                              <div className="text-sm text-gray-500">{token.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            ${formatPrice(token.price)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-medium ${
                            isPositive ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${formatNumber(token.marketCap)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${formatNumber(token.volume)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-1">
                            {token.isActive && (
                              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            )}
                            {token.isSpotlight && (
                              <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                                Spotlight
                              </span>
                            )}
                            {token.isLive && (
                              <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                Live
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <Link
                              to={`/tokens/${token.tokenAddress}`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              View
                            </Link>
                            <Link
                              to={`/tokens/cron/${token.tokenAddress}`}
                              className="text-green-600 hover:text-green-900"
                            >
                              Manage
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TokenMarket;