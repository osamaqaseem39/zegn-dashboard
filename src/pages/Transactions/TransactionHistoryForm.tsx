import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';
import Input from '../../components/form/input/InputField';
import Select from '../../components/form/input/SelectField';
import Checkbox from '../../components/form/input/Checkbox';
import { transactionApi, Transaction, TransactionHistoryRequest } from '../../api/transactionApi';
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
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

interface TransactionFilterForm {
  search: string;
  type: string;
  status: string;
  tokenSymbol: string;
  dateFrom: string;
  dateTo: string;
  minAmount: string;
  maxAmount: string;
  includePending: boolean;
  includeFailed: boolean;
}

interface TransactionHistoryData {
  transactions: Transaction[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
  filters: TransactionFilterForm;
}

const TransactionHistoryForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [data, setData] = useState<TransactionHistoryData>({
    transactions: [],
    pagination: {
      page: 1,
      limit: 20,
      total: 0,
      pages: 0,
    },
    filters: {
      search: '',
      type: '',
      status: '',
      tokenSymbol: '',
      dateFrom: '',
      dateTo: '',
      minAmount: '',
      maxAmount: '',
      includePending: true,
      includeFailed: true,
    },
  });

  useEffect(() => {
    loadTransactions();
  }, [data.filters, data.pagination.page]);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      
      const request: TransactionHistoryRequest = {
        offset: (data.pagination.page - 1) * data.pagination.limit,
        limit: data.pagination.limit,
        type: data.filters.type as any,
        tokenSymbol: data.filters.tokenSymbol || undefined,
      };

      const response = await transactionApi.getTransactionHistory(request);
      
      setData(prev => ({
        ...prev,
        transactions: response.transactions,
        pagination: response.pagination,
      }));
    } catch (error) {
      console.error('Failed to load transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (field: string, value: string | boolean) => {
    setData(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        [field]: value,
      },
      pagination: {
        ...prev.pagination,
        page: 1, // Reset to first page when filters change
      },
    }));
  };

  const handlePageChange = (page: number) => {
    setData(prev => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        page,
      },
    }));
  };

  const handleExport = async () => {
    try {
      setExporting(true);
      
      // In a real app, you'd call an API to export the data
      console.log('Exporting transactions with filters:', data.filters);
      
      // Simulate export
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create and download CSV
      const csvContent = generateCSV(data.transactions);
      downloadCSV(csvContent, 'transactions.csv');
      
    } catch (error) {
      console.error('Failed to export transactions:', error);
    } finally {
      setExporting(false);
    }
  };

  const generateCSV = (transactions: Transaction[]) => {
    const headers = ['Date', 'Type', 'Token', 'Amount', 'Unit Price (USD)', 'Status', 'Transaction Hash'];
    const rows = transactions.map(tx => [
      new Date(tx.createdAt).toLocaleDateString(),
      tx.type,
      tx.token?.symbol || '',
      tx.amount,
      tx.amountOutInfo?.unitPriceInUSD || '',
      tx.status,
      tx.transactionHash || 'N/A',
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const downloadCSV = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'buy':
        return <ArrowUpRight className="h-4 w-4 text-green-600" />;
      case 'sell':
        return <ArrowDownRight className="h-4 w-4 text-red-600" />;
      case 'swap':
        return <Activity className="h-4 w-4 text-blue-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const typeOptions = [
    { value: '', label: 'All Types' },
    { value: 'buy', label: 'Buy' },
    { value: 'sell', label: 'Sell' },
    { value: 'swap', label: 'Swap' },
    { value: 'deposit', label: 'Deposit' },
    { value: 'withdrawal', label: 'Withdrawal' },
  ];

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'success', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'failed', label: 'Failed' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  const tokenOptions = [
    { value: '', label: 'All Tokens' },
    { value: 'SOL', label: 'Solana (SOL)' },
    { value: 'ETH', label: 'Ethereum (ETH)' },
    { value: 'BTC', label: 'Bitcoin (BTC)' },
    { value: 'USDC', label: 'USD Coin (USDC)' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Transaction History
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            View and manage your trading transactions
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            onClick={handleExport}
            disabled={exporting}
            className="flex items-center space-x-2"
          >
            <Download className="h-4 w-4" />
            <span>{exporting ? 'Exporting...' : 'Export CSV'}</span>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Input
              label="Search"
              name="search"
              value={data.filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              placeholder="Search transactions..."
              icon={<Search className="h-4 w-4" />}
            />
            
            <Select
              label="Transaction Type"
              name="type"
              value={data.filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              options={typeOptions}
              placeholder="Select type"
            />
            
            <Select
              label="Status"
              name="status"
              value={data.filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              options={statusOptions}
              placeholder="Select status"
            />
            
            <Select
              label="Token"
              name="tokenSymbol"
              value={data.filters.tokenSymbol}
              onChange={(e) => handleFilterChange('tokenSymbol', e.target.value)}
              options={tokenOptions}
              placeholder="Select token"
            />
            
            <Input
              label="Date From"
              name="dateFrom"
              type="date"
              value={data.filters.dateFrom}
              onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
              icon={<Calendar className="h-4 w-4" />}
            />
            
            <Input
              label="Date To"
              name="dateTo"
              type="date"
              value={data.filters.dateTo}
              onChange={(e) => handleFilterChange('dateTo', e.target.value)}
              icon={<Calendar className="h-4 w-4" />}
            />
            
            <Input
              label="Min Amount"
              name="minAmount"
              type="number"
              value={data.filters.minAmount}
              onChange={(e) => handleFilterChange('minAmount', e.target.value)}
              placeholder="0.00"
              icon={<Coins className="h-4 w-4" />}
            />
            
            <Input
              label="Max Amount"
              name="maxAmount"
              type="number"
              value={data.filters.maxAmount}
              onChange={(e) => handleFilterChange('maxAmount', e.target.value)}
              placeholder="0.00"
              icon={<Coins className="h-4 w-4" />}
            />
          </div>
          
          <div className="flex items-center space-x-6 mt-6">
            <Checkbox
              label="Include Pending"
              name="includePending"
              checked={data.filters.includePending}
              onChange={(value) => handleFilterChange('includePending', typeof value === 'boolean' ? value : value.target.checked)}
            />
            
            <Checkbox
              label="Include Failed"
              name="includeFailed"
              checked={data.filters.includeFailed}
              onChange={(value) => handleFilterChange('includeFailed', typeof value === 'boolean' ? value : value.target.checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Transactions
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {data.pagination.total}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Completed
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {data.transactions.filter(tx => tx.status === 'success').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Pending
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {data.transactions.filter(tx => tx.status === 'pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Failed
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {data.transactions.filter(tx => tx.status === 'failed').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500"></div>
            </div>
          ) : data.transactions.length === 0 ? (
            <div className="text-center py-12">
              <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No transactions found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or make your first transaction.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {data.transactions.map((transaction) => (
                <div
                  key={transaction._id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getTransactionIcon(transaction.type)}
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium capitalize">
                          {transaction.type}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {transaction.token?.symbol}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(transaction.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-medium">
                        {formatCurrency(parseFloat(transaction.amount || '0'))}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        @ {formatCurrency(parseFloat(transaction.amountOutInfo?.unitPriceInUSD || '0'))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(transaction.status)}
                      <Badge
                        variant={
                          transaction.status === 'success' ? 'default' :
                          transaction.status === 'pending' ? 'secondary' :
                          transaction.status === 'failed' ? 'destructive' : 'outline'
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      {data.pagination.pages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {((data.pagination.page - 1) * data.pagination.limit) + 1} to{' '}
            {Math.min(data.pagination.page * data.pagination.limit, data.pagination.total)} of{' '}
            {data.pagination.total} results
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(data.pagination.page - 1)}
              disabled={data.pagination.page === 1}
            >
              Previous
            </Button>
            
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Page {data.pagination.page} of {data.pagination.pages}
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(data.pagination.page + 1)}
              disabled={data.pagination.page === data.pagination.pages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionHistoryForm; 