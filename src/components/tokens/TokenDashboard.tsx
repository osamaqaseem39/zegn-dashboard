import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tokenApi, Token } from '../../api/tokenApi';
import TokenChart from './TokenChart';

interface TokenDashboardProps {
  limit?: number;
  showCharts?: boolean;
  className?: string;
}

const TokenDashboard: React.FC<TokenDashboardProps> = ({ 
  limit = 6, 
  showCharts = true,
  className = '' 
}) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await tokenApi.getTokens();
        setTokens(Array.isArray(data) ? data.slice(0, limit) : []);
      } catch (err: any) {
        console.error('Error fetching tokens:', err);
        setError(err.response?.data?.message || 'Failed to fetch tokens');
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
    
    // Set up real-time refresh every 30 seconds
    const refreshInterval = setInterval(() => {
      fetchTokens();
    }, 30000); // Refresh every 30 seconds
    
    return () => clearInterval(refreshInterval);
  }, [limit]);

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

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className}`}>
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-4">
          <div className="flex items-center">
            <div className="text-red-500 text-xl mr-2">⚠️</div>
            <div>
              <p className="font-medium">Error loading tokens</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (tokens.length === 0) {
    return (
      <div className={`${className}`}>
        <div className="bg-gray-50 border border-gray-200 text-gray-600 rounded-md p-8 text-center">
          <div className="text-gray-400 text-4xl mb-2">📊</div>
          <p className="font-medium">No tokens available</p>
          <p className="text-sm mt-1">Add some tokens to see them here</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokens.map((token) => {
          const priceChange = formatPriceChange(token.priceChange24h);
          const isPositive = priceChange >= 0;

          return (
            <div key={token._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Token Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {token.icon ? (
                      <img 
                        src={token.icon} 
                        alt={token.symbol} 
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                        {token.symbol?.charAt(0) || '?'}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{token.name}</h3>
                      <p className="text-sm text-gray-500">{token.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      ${formatPrice(token.price)}
                    </div>
                    <div className={`text-sm font-medium ${
                      isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Stats */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Market Cap</p>
                    <p className="text-sm font-semibold text-gray-900">
                      ${formatNumber(token.marketCap)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Volume</p>
                    <p className="text-sm font-semibold text-gray-900">
                      ${formatNumber(token.volume)}
                    </p>
                  </div>
                </div>

                {/* Mini Chart */}
                {showCharts && (
                  <div className="mb-4">
                    <TokenChart 
                      tokenId={token._id} 
                      tokenSymbol={token.symbol}
                      className="h-32"
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    to={`/tokens/${token.tokenAddress}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/tokens/cron/${token.tokenAddress}`}
                    className="flex-1 bg-gray-600 text-white text-center py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TokenDashboard;