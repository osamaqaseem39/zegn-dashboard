import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { transactionApi, Transaction, BuyTransactionRequest, SellTransactionRequest, SendTransactionRequest } from '../../api/transactionApi';
import { balanceApi } from '../../api/balanceApi';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import Label from '../../components/form/Label';
import { 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  Coins, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Send,
  RefreshCw,
  ExternalLink,
  Copy,
  Check,
  DollarSign,
  Users,
  Wallet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TransactionFilters {
  search: string;
  type: string;
  status: string;
  dateFrom: string;
  dateTo: string;
  minAmount: string;
  maxAmount: string;
}

interface TransactionFormData {
  currentTokenPrice: string;
  amount: string;
  amountInUSD: string;
  slippage: string;
  token: string;
  to?: string; // For send transactions
}

const TransactionManagement: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === 'admin';
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalBalance, setTotalBalance] = useState<any>(null);
  const [usersTransactionSummary, setUsersTransactionSummary] = useState<any[]>([]);
  const [filters, setFilters] = useState<TransactionFilters>({
    search: '',
    type: '',
    status: '',
    dateFrom: '',
    dateTo: '',
    minAmount: '',
    maxAmount: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactionType, setTransactionType] = useState<'buy' | 'sell' | 'send'>('buy');
  const [formData, setFormData] = useState<TransactionFormData>({
    currentTokenPrice: '',
    amount: '',
    amountInUSD: '',
    slippage: '0.5',
    token: '',
    to: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    loadTransactions();
    
    // Set up real-time refresh every 30 seconds
    const refreshInterval = setInterval(() => {
      loadTransactions();
    }, 30000); // Refresh every 30 seconds
    
    return () => clearInterval(refreshInterval);
  }, [filters]);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await transactionApi.getTransactionHistory({
        search: filters.search || undefined,
        type: filters.type || undefined,
        status: filters.status || undefined,
        dateFrom: filters.dateFrom || undefined,
        dateTo: filters.dateTo || undefined,
        minAmount: filters.minAmount || undefined,
        maxAmount: filters.maxAmount || undefined,
        limit: isAdmin ? 50 : 50,
        offset: 0,
        populate: isAdmin ? 'token,user' : 'token'
      });

      setTransactions(response.transactions || []);

      // Load admin-specific data if user is admin
      if (isAdmin) {
        try {
          const [totalBalanceData, transactionSummaryData] = await Promise.all([
            balanceApi.getTotalBalance(),
            balanceApi.getUsersWithTransactionSummary()
          ]);
          setTotalBalance(totalBalanceData.data);
          setUsersTransactionSummary(transactionSummaryData.data || []);
        } catch (err) {
          console.error('Error loading admin data:', err);
          // Continue even if admin data fails
        }
      }
    } catch (err: any) {
      console.error('Error loading transactions:', err);
      setError(err.message || 'Failed to load transactions');
    } finally {
      setLoading(false);
    }
  };

  const handleTransactionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError(null);

      let response;
      if (transactionType === 'buy') {
        const buyData: BuyTransactionRequest = {
          currentTokenPrice: formData.currentTokenPrice,
          amount: formData.amount,
          amountInUSD: formData.amountInUSD,
          slippage: formData.slippage,
          token: formData.token
        };
        response = await transactionApi.buyToken(buyData);
      } else if (transactionType === 'sell') {
        const sellData: SellTransactionRequest = {
          currentTokenPrice: formData.currentTokenPrice,
          amount: formData.amount,
          amountInUSD: formData.amountInUSD,
          slippage: formData.slippage,
          token: formData.token
        };
        response = await transactionApi.sellToken(sellData);
      } else if (transactionType === 'send') {
        const sendData: SendTransactionRequest = {
          to: formData.to || '',
          amount: formData.amount,
          token: formData.token
        };
        response = await transactionApi.sendToken(sendData);
      }

      if (response?.status === 'success') {
        setShowTransactionForm(false);
        setFormData({
          currentTokenPrice: '',
          amount: '',
          amountInUSD: '',
          slippage: '0.5',
          token: '',
          to: ''
        });
        loadTransactions();
      } else {
        setError(response?.error || 'Transaction failed');
      }
    } catch (err: any) {
      console.error('Transaction error:', err);
      setError(err.message || 'Transaction failed');
    } finally {
      setSubmitting(false);
    }
  };

  const formatCurrency = (amount: string | number) => {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num)) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatTokenAmount = (amount: string, decimals: number = 6) => {
    const num = parseFloat(amount);
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals
    });
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
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
        return <Send className="h-4 w-4 text-blue-500" />;
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isAdmin ? 'Transaction Management (All Users)' : 'Transaction Management'}
          </h1>
          <p className="text-gray-600">
            {isAdmin ? 'View and manage all user transactions' : 'View and manage your transactions'}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button onClick={loadTransactions} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          {!isAdmin && (
            <Button onClick={() => setShowTransactionForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Transaction
            </Button>
          )}
        </div>
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
                  {formatCurrency(totalBalance.totalCashBalance || '0')}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-sm text-gray-600 mb-1">Total Token Holdings Value</div>
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(totalBalance.totalHoldingBalance || '0')}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-sm text-gray-600 mb-1">Grand Total (All Assets)</div>
                <div className="text-2xl font-bold text-purple-600">
                  {formatCurrency(totalBalance.totalInUSDC || '0')}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Admin: User-wise Transactions & Profit/Loss */}
      {isAdmin && usersTransactionSummary.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>User-wise Transactions & Profit/Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Username</th>
                    <th className="text-center p-2">Total Txns</th>
                    <th className="text-center p-2">Buy</th>
                    <th className="text-center p-2">Sell</th>
                    <th className="text-right p-2">Buy Volume</th>
                    <th className="text-right p-2">Sell Volume</th>
                    <th className="text-right p-2">Profit/Loss</th>
                    <th className="text-right p-2">All-Time Profit</th>
                    <th className="text-center p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {usersTransactionSummary.map((userData) => {
                    const profitLoss = parseFloat(userData.totalProfitLoss || '0');
                    const allTimeProfit = parseFloat(userData.allTimeProfit || '0');
                    return (
                      <tr key={userData._id} className="border-b hover:bg-gray-50">
                        <td className="p-2">{userData.email}</td>
                        <td className="p-2">{userData.userName || 'N/A'}</td>
                        <td className="p-2 text-center">{userData.totalTransactions || 0}</td>
                        <td className="p-2 text-center">
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            {userData.buyTransactions || 0}
                          </Badge>
                        </td>
                        <td className="p-2 text-center">
                          <Badge variant="outline" className="bg-red-50 text-red-700">
                            {userData.sellTransactions || 0}
                          </Badge>
                        </td>
                        <td className="p-2 text-right">{formatCurrency(userData.totalBuyVolume || '0')}</td>
                        <td className="p-2 text-right">{formatCurrency(userData.totalSellVolume || '0')}</td>
                        <td className={`p-2 text-right font-semibold ${profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatCurrency(profitLoss.toString())}
                        </td>
                        <td className={`p-2 text-right font-semibold ${allTimeProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatCurrency(allTimeProfit.toString())}
                        </td>
                        <td className="p-2 text-center">
                          <Badge variant={userData.isActive ? 'default' : 'secondary'}>
                            {userData.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Admin: Aggregated Token Holdings */}
      {isAdmin && totalBalance && totalBalance.tokenHoldings && totalBalance.tokenHoldings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Aggregated Token Holdings (All Users Combined)</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Total of {totalBalance.tokenHoldings.length} different token types across all users
            </p>
          </CardHeader>
          <CardContent>
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
                    .map((holding) => (
                      <tr key={holding.mintAddress} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{holding.name || holding.symbol}</td>
                        <td className="p-2">
                          <Badge variant="outline">{holding.symbol}</Badge>
                        </td>
                        <td className="p-2 text-xs font-mono text-gray-600">
                          {holding.mintAddress.substring(0, 8)}...{holding.mintAddress.substring(holding.mintAddress.length - 6)}
                        </td>
                        <td className="p-2 text-right font-medium">
                          {parseFloat(holding.balance).toLocaleString(undefined, {
                            minimumFractionDigits: 4,
                            maximumFractionDigits: 8
                          })}
                        </td>
                        <td className="p-2 text-right font-semibold text-green-600">
                          {formatCurrency(holding.valueInUSD)}
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 font-bold bg-gray-100">
                    <td colSpan={4} className="p-2 text-right">Total Value of All Token Holdings:</td>
                    <td className="p-2 text-right text-lg text-green-600">
                      {formatCurrency(totalBalance.totalHoldingBalance || '0')}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Filters</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </CardHeader>
        {showFilters && (
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search transactions..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  className="w-full p-2 border rounded-md"
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                >
                  <option value="">All Types</option>
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                  <option value="send">Send</option>
                  <option value="referral">Referral</option>
                </select>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  className="w-full p-2 border rounded-md"
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                >
                  <option value="">All Status</option>
                  <option value="success">Success</option>
                  <option value="failed">Failed</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div>
                <Label htmlFor="dateFrom">From Date</Label>
                <Input
                  id="dateFrom"
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-red-800">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions ({transactions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {transactions.length === 0 ? (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No transactions found</h3>
              <p className="text-gray-600 mb-4">Start by creating your first transaction</p>
              <Button onClick={() => setShowTransactionForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                New Transaction
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction._id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium capitalize">{transaction.type}</span>
                        {getStatusIcon(transaction.status)}
                        {getStatusBadge(transaction.status)}
                      </div>
                      <p className="text-sm text-gray-600">
                        {transaction.token?.symbol || 'Unknown Token'}
                        {isAdmin && transaction.user && typeof transaction.user === 'object' && transaction.user !== null && (
                          <span className="ml-2 text-xs text-blue-600">
                            ({transaction.user.email || transaction.user.userName || 'User'})
                          </span>
                        )}
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
                      {formatCurrency(transaction.amountInUSD)}
                    </div>
                    {transaction.transactionHash && (
                      <div className="flex items-center space-x-2 mt-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(transaction.transactionHash, transaction._id)}
                        >
                          {copied === transaction._id ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`https://explorer.solana.com/tx/${transaction.transactionHash}`, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Transaction Form Modal */}
      {showTransactionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>New {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} Transaction</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTransactionSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="token">Token Address</Label>
                  <Input
                    id="token"
                    placeholder="Enter token address"
                    value={formData.token}
                    onChange={(e) => setFormData({ ...formData, token: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="currentTokenPrice">Current Token Price (USD)</Label>
                  <Input
                    id="currentTokenPrice"
                    type="number"
                    step="0.000001"
                    placeholder="0.000123"
                    value={formData.currentTokenPrice}
                    onChange={(e) => setFormData({ ...formData, currentTokenPrice: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.000001"
                    placeholder="1000000"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="amountInUSD">Amount in USD</Label>
                  <Input
                    id="amountInUSD"
                    type="number"
                    step="0.01"
                    placeholder="123.45"
                    value={formData.amountInUSD}
                    onChange={(e) => setFormData({ ...formData, amountInUSD: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="slippage">Slippage (%)</Label>
                  <Input
                    id="slippage"
                    type="number"
                    step="0.1"
                    min="0.1"
                    max="10"
                    placeholder="0.5"
                    value={formData.slippage}
                    onChange={(e) => setFormData({ ...formData, slippage: e.target.value })}
                  />
                </div>
                
                {transactionType === 'send' && (
                  <div>
                    <Label htmlFor="to">Recipient Address</Label>
                    <Input
                      id="to"
                      placeholder="Enter recipient address"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      required
                    />
                  </div>
                )}
                
                <div className="flex space-x-2">
                  <Button type="submit" disabled={submitting} className="flex-1">
                    {submitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Transaction
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowTransactionForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TransactionManagement;