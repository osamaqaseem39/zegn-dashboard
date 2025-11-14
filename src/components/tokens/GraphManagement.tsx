import React, { useState, useEffect } from 'react';
import { tokenApi } from '../../api/tokenApi';

interface GraphManagementProps {
  tokenId: string;
  tokenSymbol?: string;
  onUpdate?: () => void;
  className?: string;
}

const GraphManagement: React.FC<GraphManagementProps> = ({
  tokenId,
  tokenSymbol = 'Token',
  onUpdate,
  className = ''
}) => {
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [graphStats, setGraphStats] = useState<{
    totalTokens: number;
    tokensWithGraphData: number;
    lastUpdated: string;
    cronEnabledTokens: number;
  } | null>(null);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handlePopulateData = async (days: number = 7) => {
    setLoading(prev => ({ ...prev, populate: true }));
    try {
      await tokenApi.populateGraphData(tokenId, days);
      showMessage('success', `Historical data populated for ${days} days`);
      if (onUpdate) onUpdate();
    } catch (err: any) {
      showMessage('error', err.response?.data?.message || 'Failed to populate data');
    } finally {
      setLoading(prev => ({ ...prev, populate: false }));
    }
  };

  const handleEnableCron = async () => {
    setLoading(prev => ({ ...prev, cron: true }));
    try {
      await tokenApi.enableGraphCron(tokenId);
      showMessage('success', 'Automatic updates enabled');
      if (onUpdate) onUpdate();
    } catch (err: any) {
      showMessage('error', err.response?.data?.message || 'Failed to enable cron');
    } finally {
      setLoading(prev => ({ ...prev, cron: false }));
    }
  };

  const fetchGraphStats = async () => {
    try {
      const stats = await tokenApi.getGraphStats();
      setGraphStats(stats);
    } catch (err: any) {
      console.error('Error fetching graph stats:', err);
    }
  };

  useEffect(() => {
    fetchGraphStats();
  }, []);

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Graph Data Management - {tokenSymbol}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Manage historical data and automatic updates for this token
        </p>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`mx-6 mt-4 p-4 rounded-md ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-700' 
            : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          <div className="flex items-center">
            <div className="text-lg mr-2">
              {message.type === 'success' ? '✅' : '⚠️'}
            </div>
            <span className="text-sm font-medium">{message.text}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="p-6 space-y-4">
        {/* Populate Historical Data */}
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Populate Historical Data</h4>
            <p className="text-sm text-gray-600">
              Fetch and store historical price data for charting
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handlePopulateData(7)}
              disabled={loading.populate}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading.populate ? 'Loading...' : '7 Days'}
            </button>
            <button
              onClick={() => handlePopulateData(30)}
              disabled={loading.populate}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading.populate ? 'Loading...' : '30 Days'}
            </button>
          </div>
        </div>

        {/* Enable Automatic Updates */}
        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Enable Automatic Updates</h4>
            <p className="text-sm text-gray-600">
              Enable cron job for automatic price data updates
            </p>
          </div>
          <button
            onClick={handleEnableCron}
            disabled={loading.cron}
            className="px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading.cron ? 'Enabling...' : 'Enable Cron'}
          </button>
        </div>
      </div>

      {/* Global Statistics */}
      {graphStats && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <h4 className="font-medium text-gray-900 mb-4">System Statistics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{graphStats.totalTokens}</div>
              <div className="text-xs text-gray-500">Total Tokens</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{graphStats.tokensWithGraphData}</div>
              <div className="text-xs text-gray-500">With Data</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">{graphStats.cronEnabledTokens}</div>
              <div className="text-xs text-gray-500">Cron Enabled</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-600">
                {new Date(graphStats.lastUpdated).toLocaleDateString()}
              </div>
              <div className="text-xs text-gray-500">Last Updated</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphManagement;