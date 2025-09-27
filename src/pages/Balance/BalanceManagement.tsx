import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { balanceApi, BalanceResponse, WalletInfo } from '../../api/balanceApi';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Wallet, 
  RefreshCw, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Coins,
  Activity,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  Shield,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BalanceHistory {
  date: string;
  balance: number;
  change: number;
  type: 'deposit' | 'withdrawal' | 'reward' | 'fee';
  description: string;
}

const BalanceManagement: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [balanceData, setBalanceData] = useState<BalanceResponse | null>(null);
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [balanceHistory, setBalanceHistory] = useState<BalanceHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadBalanceData();
  }, []);

  const loadBalanceData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load balance information
      const balanceResponse = await balanceApi.getCurrentUserBalance();
      setBalanceData(balanceResponse);

      // Load wallet information
      try {
        const walletResponse = await balanceApi.getWalletInfo();
        setWalletInfo(walletResponse.data);
      } catch (walletError) {
        console.log('Wallet info not available:', walletError);
      }

      // Load balance history
      try {
        const historyResponse = await balanceApi.getBalanceHistory({
          limit: 20,
          offset: 0
        });
        setBalanceHistory(historyResponse.data.history || []);
      } catch (historyError) {
        console.log('Balance history not available:', historyError);
      }
    } catch (err: any) {
      console.error('Error loading balance data:', err);
      setError(err.message || 'Failed to load balance data');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatAddress = (address: string) => {
    if (!address) return 'Not connected';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getHistoryIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'withdrawal':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'reward':
        return <Coins className="h-4 w-4 text-purple-500" />;
      case 'fee':
        return <DollarSign className="h-4 w-4 text-orange-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getHistoryBadge = (type: string) => {
    switch (type) {
      case 'deposit':
        return <Badge variant="default" className="bg-green-100 text-green-800">Deposit</Badge>;
      case 'withdrawal':
        return <Badge variant="destructive">Withdrawal</Badge>;
      case 'reward':
        return <Badge variant="secondary" className="bg-purple-100 text-purple-800">Reward</Badge>;
      case 'fee':
        return <Badge variant="outline" className="bg-orange-100 text-orange-800">Fee</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Balance</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={loadBalanceData} className="mr-2">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Balance Management</h1>
          <p className="text-gray-600">Manage your wallet and track your balance</p>
        </div>
        <Button onClick={loadBalanceData} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Balance */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {formatCurrency(balanceData?.data.balance || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Current available balance
            </p>
          </CardContent>
        </Card>

        {/* Total Rewards */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {formatCurrency(balanceData?.data.totalRewards || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              From referrals and rewards
            </p>
          </CardContent>
        </Card>

        {/* Wallet Status */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wallet Status</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              {walletInfo?.isActive ? (
                <Badge variant="default" className="bg-green-100 text-green-800">
                  Connected
                </Badge>
              ) : (
                <Badge variant="destructive">Not Connected</Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {walletInfo?.isActive ? 'Wallet is active and secure' : 'Connect your wallet to start trading'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Wallet Information */}
      {walletInfo && (
        <Card>
          <CardHeader>
            <CardTitle>Wallet Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Wallet Address</p>
                  <p className="text-sm text-gray-600 font-mono">
                    {formatAddress(walletInfo.address)}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(walletInfo.address)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`https://explorer.solana.com/address/${walletInfo.address}`, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Balance</p>
                  <p className="text-lg font-semibold">
                    {formatCurrency(walletInfo.balance)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Rewards</p>
                  <p className="text-lg font-semibold">
                    {formatCurrency(walletInfo.totalRewards)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Balance History */}
      <Card>
        <CardHeader>
          <CardTitle>Balance History</CardTitle>
        </CardHeader>
        <CardContent>
          {balanceHistory.length === 0 ? (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No balance history</h3>
              <p className="text-gray-600 mb-4">Your balance changes will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {balanceHistory.map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getHistoryIcon(entry.type)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{entry.description}</span>
                        {getHistoryBadge(entry.type)}
                      </div>
                      <p className="text-sm text-gray-600">
                        {new Date(entry.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${
                      entry.change >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {entry.change >= 0 ? '+' : ''}{formatCurrency(entry.change)}
                    </div>
                    <div className="text-sm text-gray-600">
                      Balance: {formatCurrency(entry.balance)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => navigate('/tokens')}
            >
              <TrendingUp className="h-6 w-6" />
              <span>Buy Tokens</span>
            </Button>
            
            <Button 
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => navigate('/transactions')}
            >
              <Activity className="h-6 w-6" />
              <span>View Transactions</span>
            </Button>
            
            <Button 
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => navigate('/tokens')}
            >
              <TrendingDown className="h-6 w-6" />
              <span>Sell Tokens</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceManagement;