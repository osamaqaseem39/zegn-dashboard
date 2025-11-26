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

interface TotalBalanceData {
  totalBalance: string;
  totalCashBalance: string;
  totalHoldingBalance: string;
  totalInUSDC: string;
  totalUsers: number;
  tokenHoldings: Array<{
    mintAddress: string;
    symbol: string;
    name: string;
    balance: string;
    valueInUSD: string;
  }>;
}

const BalanceManagement: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === 'admin';
  const [balanceData, setBalanceData] = useState<BalanceResponse | null>(null);
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [totalBalance, setTotalBalance] = useState<TotalBalanceData | null>(null);
  const [balanceHistory, setBalanceHistory] = useState<BalanceHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (user) {
      loadBalanceData();
      
      // Set up real-time refresh every 1 minute
      const refreshInterval = setInterval(() => {
        loadBalanceData();
      }, 60000); // Refresh every 1 minute
      
      return () => clearInterval(refreshInterval);
    }
  }, [user]);

  const loadBalanceData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load admin total balance if user is admin
      if (isAdmin) {
        try {
          const totalBalanceResponse = await balanceApi.getTotalBalance();
          setTotalBalance(totalBalanceResponse.data);
        } catch (totalBalanceError) {
          console.error('Error loading total balance:', totalBalanceError);
          // Continue even if total balance fails
        }
      }

      // Load balance information (for non-admin users)
      if (!isAdmin) {
        try {
          const balanceResponse = await balanceApi.getCurrentUserBalance();
          setBalanceData(balanceResponse);
        } catch (balanceError) {
          console.log('Balance info not available:', balanceError);
        }

        // Load wallet information
        try {
          const walletResponse = await balanceApi.getWalletInfo();
          setWalletInfo(walletResponse.data);
        } catch (walletError) {
          console.log('Wallet info not available:', walletError);
        }
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

  const formatCurrency = (amount: number | string) => {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num)) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
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
          <p className="text-gray-600">
            {isAdmin 
              ? 'View total balances across all users' 
              : 'Manage your wallet and track your balance'}
          </p>
        </div>
        <Button onClick={loadBalanceData} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isAdmin && totalBalance ? (
          <>
            {/* Total Balance (Sum of all wallets + all tokens) */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance (All Users)</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {formatCurrency(
                    parseFloat(totalBalance.totalCashBalance || '0') + 
                    parseFloat(totalBalance.totalHoldingBalance || '0')
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Sum of all wallet balances + token balances
                </p>
              </CardContent>
            </Card>

            {/* Wallet Balances */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Wallet Balances</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {formatCurrency(parseFloat(totalBalance.totalCashBalance || '0'))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Sum of all wallet balances (USDC)
                </p>
              </CardContent>
            </Card>

            {/* Token Balances */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Token Balances</CardTitle>
                <Coins className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {formatCurrency(parseFloat(totalBalance.totalHoldingBalance || '0'))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Sum of all token holdings value
                </p>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Admin: Aggregated Summary Section */}
      {isAdmin && totalBalance && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl">Aggregated Totals (All Users Combined)</CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Sum of all balances and token holdings across {totalBalance.totalUsers || 0} active users
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-sm text-gray-600 mb-1">Total Cash (USDC)</div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(parseFloat(totalBalance.totalCashBalance || '0'))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-sm text-gray-600 mb-1">Total Token Holdings Value</div>
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(parseFloat(totalBalance.totalHoldingBalance || '0'))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-sm text-gray-600 mb-1">Grand Total (All Assets)</div>
                <div className="text-2xl font-bold text-purple-600">
                  {formatCurrency(parseFloat(totalBalance.totalInUSDC || '0'))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Token Holdings Breakdown (Admin Only) */}
      {isAdmin && totalBalance && totalBalance.tokenHoldings && totalBalance.tokenHoldings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Aggregated Token Holdings (All Users Combined)</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Total of {totalBalance.tokenHoldings.length} different token types across all users
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Top tokens grid view */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Top Token Holdings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {totalBalance.tokenHoldings
                    .filter(holding => parseFloat(holding.balance) > 0)
                    .sort((a, b) => parseFloat(b.valueInUSD) - parseFloat(a.valueInUSD))
                    .slice(0, 12)
                    .map((token) => (
                      <div key={token.mintAddress} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2">
                              <Coins className="h-4 w-4 text-muted-foreground" />
                              <span className="font-semibold">{token.symbol}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{token.name || token.symbol}</p>
                            <p className="text-xs text-gray-500 font-mono mt-1">{token.mintAddress.substring(0, 8)}...</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div>
                            <p className="text-xs text-muted-foreground">Total Balance</p>
                            <p className="text-sm font-semibold">
                              {parseFloat(token.balance || '0').toLocaleString(undefined, {
                                minimumFractionDigits: 4,
                                maximumFractionDigits: 8
                              })}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Value in USD</p>
                            <p className="text-sm font-semibold text-green-600">
                              {formatCurrency(parseFloat(token.valueInUSD || '0'))}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Complete table view of all tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Complete Token Holdings List</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left p-2">Token Name</th>
                        <th className="text-left p-2">Symbol</th>
                        <th className="text-left p-2">Mint Address</th>
                        <th className="text-right p-2">Total Balance (All Users)</th>
                        <th className="text-right p-2">Total Value (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {totalBalance.tokenHoldings
                        .filter(holding => parseFloat(holding.balance) > 0)
                        .sort((a, b) => parseFloat(b.valueInUSD) - parseFloat(a.valueInUSD))
                        .map((token) => (
                          <tr key={token.mintAddress} className="border-b hover:bg-gray-50">
                            <td className="p-2 font-medium">{token.name || token.symbol}</td>
                            <td className="p-2">
                              <Badge variant="outline">{token.symbol}</Badge>
                            </td>
                            <td className="p-2 text-xs font-mono text-gray-600">
                              {token.mintAddress.substring(0, 8)}...{token.mintAddress.substring(token.mintAddress.length - 6)}
                            </td>
                            <td className="p-2 text-right font-medium">
                              {parseFloat(token.balance || '0').toLocaleString(undefined, {
                                minimumFractionDigits: 4,
                                maximumFractionDigits: 8
                              })}
                            </td>
                            <td className="p-2 text-right font-semibold text-green-600">
                              {formatCurrency(parseFloat(token.valueInUSD || '0'))}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 font-bold bg-gray-100">
                        <td colSpan={4} className="p-2 text-right">Total Value of All Token Holdings:</td>
                        <td className="p-2 text-right text-lg text-green-600">
                          {formatCurrency(parseFloat(totalBalance.totalHoldingBalance || '0'))}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Wallet Information */}
      {walletInfo && !isAdmin && (
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