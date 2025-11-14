import React, { useState, useEffect } from 'react';
import { tokenApi, Token } from '../../api/tokenApi';
import TokenChart from './TokenChart';
import TokenPrice from './TokenPrice';
import GraphManagement from './GraphManagement';

const CoinGeckoDemo: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await tokenApi.getTokens();
        const tokenArray = Array.isArray(data) ? data : [];
        setTokens(tokenArray);
        if (tokenArray.length > 0) {
          setSelectedToken(tokenArray[0]);
        }
      } catch (err: any) {
        console.error('Error fetching tokens:', err);
        setError(err.response?.data?.message || 'Failed to fetch tokens');
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading demo data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-red-600 mb-2">Demo Error</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (tokens.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Tokens Available</h3>
          <p className="text-gray-500 mb-4">
            Add some tokens to see the CoinGecko integration in action
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          🚀 CoinGecko Integration Demo
        </h2>
        <p className="text-gray-600">
          Real-time price charts and market data powered by CoinGecko API
        </p>
      </div>

      {/* Token Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Token to View Chart
        </label>
        <select
          value={selectedToken?._id || ''}
          onChange={(e) => {
            const token = tokens.find(t => t._id === e.target.value);
            setSelectedToken(token || null);
          }}
          className="w-full max-w-md border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {tokens.map((token) => (
            <option key={token._id} value={token._id}>
              {token.name} ({token.symbol})
            </option>
          ))}
        </select>
      </div>

      {/* Demo Components */}
      {selectedToken && (
        <div className="space-y-6">
          {/* Price Component */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Price</h3>
            <TokenPrice tokenId={selectedToken._id} />
          </div>

          {/* Chart Component */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Chart</h3>
            <TokenChart 
              tokenId={selectedToken._id} 
              tokenSymbol={selectedToken.symbol}
            />
          </div>

          {/* Graph Management */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Graph Management</h3>
            <GraphManagement 
              tokenId={selectedToken._id}
              tokenSymbol={selectedToken.symbol}
            />
          </div>

          {/* Features List */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              ✨ Integration Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Real-time price updates
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Interactive price charts
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Multiple timeframes (4H, 1D, MAX)
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Responsive design
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Color-coded price changes
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Loading states & error handling
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Market cap & volume data
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  ApexCharts integration
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Historical data population
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Automatic cron updates
                </div>
                <div className="flex items-center text-sm text-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Graph statistics tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinGeckoDemo;