import React, { useState } from 'react';
import { userApi } from '../../api/userApi';

interface BalanceTestProps {}

const BalanceTest: React.FC<BalanceTestProps> = () => {
  const [balance, setBalance] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [rawResponse, setRawResponse] = useState<string>('');
  const [includeHoldings, setIncludeHoldings] = useState(false);

  const testSelfBalance = async () => {
    setLoading(true);
    setError('');
    setRawResponse('');
    setBalance(null);

    try {
      console.log('Testing self user balance endpoint...');
      console.log('Include holdings:', includeHoldings);
      
      const response = await userApi.getMyBalance(includeHoldings);
      
      console.log('Balance response:', response);
      setBalance(response);
      setRawResponse(JSON.stringify(response, null, 2));
      
    } catch (err: any) {
      console.error('Error testing balance:', err);
      setError(err.response?.data?.message || err.message || 'Failed to fetch balance');
      setRawResponse(JSON.stringify(err.response?.data || err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  const formatValue = (value: any) => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'string' || typeof value === 'number') {
      const num = parseFloat(value.toString());
      return isNaN(num) ? value.toString() : `$${num.toFixed(2)}`;
    }
    return value.toString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Self User Balance Endpoint Test</h2>
      
      {/* Test Controls */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Test Configuration</h3>
        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeHoldings}
              onChange={(e) => setIncludeHoldings(e.target.checked)}
              className="mr-2"
            />
            Include Holdings Data
          </label>
        </div>
        <button
          onClick={testSelfBalance}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Self Balance Endpoint'}
        </button>
      </div>

      {/* Endpoint Information */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Endpoint Details</h3>
        <div className="text-sm text-gray-700">
          <p><strong>Method:</strong> GET</p>
          <p><strong>URL:</strong> /api/v1/user/balance{includeHoldings ? '?isHoldings=true' : ''}</p>
          <p><strong>Authentication:</strong> Required (JWT Bearer Token)</p>
          <p><strong>Description:</strong> Fetches the authenticated user's balance information</p>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Balance Display */}
      {balance && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Balance Data</h3>
          
          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-sm text-gray-600">Total Balance</div>
              <div className="text-xl font-bold text-green-600">
                {formatValue(balance.totalBalance)}
              </div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-sm text-gray-600">Cash Balance</div>
              <div className="text-lg text-gray-800">
                {formatValue(balance.cashBalance)}
              </div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-sm text-gray-600">Holdings Balance</div>
              <div className="text-lg text-gray-800">
                {formatValue(balance.totalHoldingBalance)}
              </div>
            </div>
          </div>

          {/* All Time Profit */}
          {balance.allTimeProfit !== undefined && (
            <div className="text-center p-3 bg-white rounded-lg mb-4">
              <div className="text-sm text-gray-600">All Time Profit</div>
              <div className={`text-lg font-semibold ${
                parseFloat(balance.allTimeProfit || '0') >= 0 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {formatValue(balance.allTimeProfit)}
              </div>
            </div>
          )}

          {/* Token Accounts */}
          {balance.tokens && balance.tokens.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Token Accounts ({balance.tokens.length})</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {balance.tokens.map((token: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="font-medium">{token.symbol || 'Unknown'}</span>
                    <div className="text-right">
                      <div className="text-sm">{token.balance || '0'}</div>
                      <div className="text-xs text-gray-500">{formatValue(token.value)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Holdings */}
          {balance.holdings && balance.holdings.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Holdings ({balance.holdings.length})</h4>
              <div className="text-sm text-gray-600">Holdings data available</div>
            </div>
          )}

          {/* Error in Balance */}
          {balance.error && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-yellow-800">
                <strong>Balance Warning:</strong> {balance.error}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Raw Response */}
      {rawResponse && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Raw Response</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto max-h-96 overflow-y-auto">
            {rawResponse}
          </pre>
        </div>
      )}

      {/* Test Instructions */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Testing Instructions</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>1. Make sure you are logged in (have a valid JWT token)</li>
          <li>2. Check/uncheck "Include Holdings Data" to test both variations</li>
          <li>3. Click "Test Self Balance Endpoint" to make the API call</li>
          <li>4. Check the browser console for additional logging</li>
          <li>5. Review both the formatted display and raw response</li>
        </ul>
      </div>
    </div>
  );
};

export default BalanceTest;