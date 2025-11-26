import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { balanceApi, BalanceResponse } from '../../api/balanceApi';
import { transactionApi, Transaction } from '../../api/transactionApi';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  RefreshCw,
  DollarSign,
  Coins,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DashboardStats {
  totalBalance: number;
  totalRewards: number;
  recentTransactions: Transaction[];
  balanceChange: number;
  balanceChangePercent: number;
}

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    totalBalance: 0,
    totalRewards: 0,
    recentTransactions: [],
    balanceChange: 0,
    balanceChangePercent: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboardData();
    
    // Set up real-time refresh every 30 seconds
    const refreshInterval = setInterval(() => {
      loadDashboardData();
    }, 30000); // Refresh every 30 seconds
    
    return () => clearInterval(refreshInterval);
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load balance information
      const balanceResponse = await balanceApi.getCurrentUserBalance();
      
      // Load recent transactions
      const transactionResponse = await transactionApi.getTransactionHistory({
        limit: 5,
        offset: 0
      });

      setStats({
        totalBalance: balanceResponse.data.balance || 0,
        totalRewards: balanceResponse.data.totalRewards || 0,
        recentTransactions: transactionResponse.transactions || [],
        balanceChange: 0, // This would need to be calculated from historical data
        balanceChangePercent: 0
      });
    } catch (err: any) {
      console.error('Error loading dashboard data:', err);
      setError(err.message || 'Failed to load dashboard data');
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

  const formatTokenAmount = (amount: string, decimals: number = 6) => {
    const num = parseFloat(amount);
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge variant="default" className="bg-green-100 text-green-800">Success</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'buy':
        return <ArrowUpRight className="h-4 w-4 text-green-500" />;
      case 'sell':
        return <ArrowDownRight className="h-4 w-4 text-red-500" />;
      case 'send':
        return <ArrowUpRight className="h-4 w-4 text-blue-500" />;
      case 'referral':
        return <Coins className="h-4 w-4 text-purple-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={loadDashboardData} className="mr-2">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.firstName || user?.email}!</h1>
        <p className="text-blue-100">Manage your tokens and track your transactions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Balance */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalBalance)}</div>
            <p className="text-xs text-muted-foreground">
              {stats.balanceChange >= 0 ? (
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +{formatCurrency(stats.balanceChange)} ({stats.balanceChangePercent.toFixed(2)}%)
                </span>
              ) : (
                <span className="text-red-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {formatCurrency(stats.balanceChange)} ({stats.balanceChangePercent.toFixed(2)}%)
                </span>
              )}
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
            <div className="text-2xl font-bold">{formatCurrency(stats.totalRewards)}</div>
            <p className="text-xs text-muted-foreground">
              From referrals and platform rewards
            </p>
          </CardContent>
        </Card>

        {/* Recent Transactions Count */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.recentTransactions.length}</div>
            <p className="text-xs text-muted-foreground">
              Last 5 transactions
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => navigate('/tokens')}
              >
                Buy Tokens
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/transactions')}
              >
                View Transactions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/transactions')}
            >
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {stats.recentTransactions.length === 0 ? (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No transactions yet</h3>
              <p className="text-gray-600 mb-4">Start by buying your first tokens</p>
              <Button onClick={() => navigate('/tokens')}>
                Buy Tokens
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {stats.recentTransactions.map((transaction) => (
                <div key={transaction._id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium capitalize">{transaction.type}</span>
                        {getStatusIcon(transaction.status)}
                      </div>
                      <p className="text-sm text-gray-600">
                        {transaction.token?.symbol || 'Unknown Token'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(transaction.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {transaction.type === 'buy' ? '+' : '-'}
                      {formatTokenAmount(transaction.amount)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatCurrency(parseFloat(transaction.amountInUSD))}
                    </div>
                    <div className="mt-1">
                      {getStatusBadge(transaction.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              +{stats.balanceChangePercent.toFixed(2)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Since last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(stats.recentTransactions.map(t => t.token?.symbol)).size}
            </div>
            <p className="text-xs text-muted-foreground">
              Different tokens held
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.recentTransactions.length > 0 
                ? Math.round((stats.recentTransactions.filter(t => t.status === 'success').length / stats.recentTransactions.length) * 100)
                : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Transaction success rate
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;