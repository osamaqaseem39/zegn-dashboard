import React, { useEffect, useState } from 'react';
import { tokenApi, Token } from '../../api/tokenApi';

interface TokenPriceProps {
  tokenId: string;
  className?: string;
}

const TokenPrice: React.FC<TokenPriceProps> = ({ 
  tokenId, 
  className = '' 
}) => {
  const [token, setToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setLoading(true);
        setError(null);
        const tokenData = await tokenApi.getTokenById(tokenId);
        setToken(tokenData);
      } catch (err: any) {
        console.error('Error fetching token data:', err);
        setError(err.response?.data?.message || 'Failed to fetch token data');
      } finally {
        setLoading(false);
      }
    };

    if (tokenId) {
      fetchTokenData();
    }
  }, [tokenId]);

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
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  if (error || !token) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-2">⚠️</div>
          <p className="text-red-600 font-medium">Error loading price data</p>
          <p className="text-gray-600 text-sm mt-1">
            {error || 'Token not found'}
          </p>
        </div>
      </div>
    );
  }

  const priceChange = formatPriceChange(token.priceChange24h);
  const isPositive = priceChange >= 0;

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Current Price
          </h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900">
              ${formatPrice(token.price)}
            </span>
            <span className={`ml-3 px-2 py-1 rounded-full text-sm font-medium ${
              isPositive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            24h change
          </p>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-gray-500">Market Cap</div>
          <div className="text-lg font-semibold text-gray-900">
            ${formatNumber(token.marketCap)}
          </div>
          <div className="text-sm text-gray-500 mt-1">Volume</div>
          <div className="text-lg font-semibold text-gray-900">
            ${formatNumber(token.volume)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenPrice;