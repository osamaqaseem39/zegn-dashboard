import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { authApi, UserProfile } from '../../api/authApi';
import { transactionApi, Transaction, QuoteResponse } from '../../api/transactionApi';
import { tokenApi, Token, TokenPricesResponse } from '../../api/tokenApi';
import { referralApi, ReferralStats, ReferralEarnings } from '../../api/referralApi';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Activity, 
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  Share2
} from 'lucide-react';

interface DashboardStats {
  totalBalance: number;
  totalTransactions: number;
  totalReferrals: number;
  totalEarnings: number;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [tokenPrices, setTokenPrices] = useState<TokenPricesResponse>({});
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [referralStats, setReferralStats] = useState<ReferralStats | null>(null);
  const [referralEarnings, setReferralEarnings] = useState<ReferralEarnings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Trading state
  const [selectedToken, setSelectedToken] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [slippage, setSlippage] = useState<string>('1');
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [tradingLoading, setTradingLoading] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load user profile
      const userProfile = await authApi.getProfile();
      setUser(userProfile);

      // Load tokens and prices
      const tokensData = await tokenApi.getTokens();
      setTokens(tokensData);
      
      const symbols = tokensData.map(token => token.symbol);
      const pricesData = await tokenApi.getTokenPrices(symbols);
      setTokenPrices(pricesData);

      // Load recent transactions
      const transactionsData = await transactionApi.getTransactionHistory({ limit: 10 });
      setTransactions(transactionsData.transactions);

      // Load referral data
      const [statsData, earningsData] = await Promise.all([
        referralApi.getReferralStats(),
        referralApi.getReferralEarnings()
      ]);
      setReferralStats(statsData);
      setReferralEarnings(earningsData);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleGetQuote = async () => {
    if (!selectedToken || !amount) return;

    try {
      setTradingLoading(true);
      const quoteData = await transactionApi.getQuote({
        fromTokenSymbol: 'USDC',
        fromTokenAddress: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        toTokenSymbol: selectedToken,
        toTokenAddress: tokens.find(t => t.symbol === selectedToken)?.tokenAddress || '',
        amount: parseFloat(amount),
        slippage: parseFloat(slippage)
      });
      setQuote(quoteData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get quote');
    } finally {
      setTradingLoading(false);
    }
  };

  const handleBuyToken = async () => {
    if (!selectedToken || !amount) return;

    try {
      setTradingLoading(true);
      await transactionApi.buyToken({
        tokenSymbol: selectedToken,
        tokenAddress: tokens.find(t => t.symbol === selectedToken)?.tokenAddress || '',
        amount: parseFloat(amount),
        slippage: parseFloat(slippage)
      });
      
      // Reload data after successful transaction
      await loadDashboardData();
      setAmount('');
      setQuote(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to buy token');
    } finally {
      setTradingLoading(false);
    }
  };

  const copyReferralCode = async () => {
    if (user?.referralCode) {
      await navigator.clipboard.writeText(user.referralCode);
      // You could add a toast notification here
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={loadDashboardData}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.firstName || 'User'}!</h1>
          <p className="text-gray-600">Here's what's happening with your account</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="flex items-center space-x-2">
            <Wallet className="h-4 w-4" />
            <span>{formatCurrency(user?.balance || 0)}</span>
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(user?.balance || 0)}</div>
            <p className="text-xs text-muted-foreground">Available for trading</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{transactions.length}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{referralStats?.totalReferrals || 0}</div>
            <p className="text-xs text-muted-foreground">Active: {referralStats?.activeReferrals || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(referralEarnings?.totalEarnings || 0)}</div>
            <p className="text-xs text-muted-foreground">From referrals</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trading Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Trade Tokens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Token</label>
                  <Select value={selectedToken} onValueChange={setSelectedToken}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a token" />
                    </SelectTrigger>
                    <SelectContent>
                      {tokens.map((token) => (
                        <SelectItem key={token.symbol} value={token.symbol}>
                          <div className="flex items-center space-x-2">
                            <img src={token.icon} alt={token.name} className="w-4 h-4 rounded-full" />
                            <span>{token.symbol}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Amount (USDC)</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Slippage (%)</label>
                  <Input
                    type="number"
                    placeholder="1"
                    value={slippage}
                    onChange={(e) => setSlippage(e.target.value)}
                  />
                </div>

                <div className="flex items-end">
                  <Button 
                    onClick={handleGetQuote} 
                    disabled={!selectedToken || !amount || tradingLoading}
                    className="w-full"
                  >
                    {tradingLoading ? 'Loading...' : 'Get Quote'}
                  </Button>
                </div>
              </div>

              {quote && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Quote</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Estimated Output:</span>
                      <span className="font-medium">{quote.estimatedOutput.toFixed(6)} {selectedToken}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price Impact:</span>
                      <span className="font-medium">{quote.price.toFixed(6)} USDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fee:</span>
                      <span className="font-medium">{formatCurrency(quote.fee)}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={handleBuyToken} 
                    disabled={tradingLoading}
                    className="w-full mt-4"
                  >
                    {tradingLoading ? 'Processing...' : 'Buy Token'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Token Prices */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Token Prices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tokens.map((token) => {
                  const price = tokenPrices[token.symbol];
                  return (
                    <div key={token.symbol} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img src={token.icon} alt={token.name} className="w-6 h-6 rounded-full" />
                        <div>
                          <div className="font-medium">{token.symbol}</div>
                          <div className="text-sm text-gray-600">{token.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{formatCurrency(price?.price || 0)}</div>
                        <div className={`text-sm flex items-center ${
                          (price?.change24h || 0) >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {(price?.change24h || 0) >= 0 ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {formatPercentage(price?.change24h || 0)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction._id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'buy' ? 'bg-green-100' : 
                    transaction.type === 'sell' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    {transaction.type === 'buy' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : transaction.type === 'sell' ? (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    ) : (
                      <Activity className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium capitalize">{transaction.type}</div>
                    <div className="text-sm text-gray-600">{transaction.tokenSymbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{formatCurrency(transaction.amount)}</div>
                  <div className="text-sm text-gray-600">
                    {new Date(transaction.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <Badge variant={
                  transaction.status === 'completed' ? 'default' :
                  transaction.status === 'pending' ? 'secondary' :
                  transaction.status === 'failed' ? 'destructive' : 'outline'
                }>
                  {transaction.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Referral Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Referral Program</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <div className="font-medium">Your Referral Code</div>
                <div className="text-2xl font-bold text-blue-600">{user?.referralCode || 'N/A'}</div>
              </div>
              <Button variant="outline" size="sm" onClick={copyReferralCode}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold">{referralStats?.totalReferrals || 0}</div>
                <div className="text-sm text-gray-600">Total Referrals</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold">{formatCurrency(referralEarnings?.totalEarnings || 0)}</div>
                <div className="text-sm text-gray-600">Total Earnings</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Earnings</span>
                <span className="font-medium">{formatCurrency(referralEarnings?.totalEarnings || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Pending</span>
                <span className="font-medium">{formatCurrency(referralEarnings?.pendingEarnings || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Paid</span>
                <span className="font-medium">{formatCurrency(referralEarnings?.paidEarnings || 0)}</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to next payout</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard; 