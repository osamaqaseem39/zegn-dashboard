import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  Shield,
  BarChart3,
  PieChart,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  RefreshCw
} from 'lucide-react';
import { authApi } from '../../api/authApi';
import { tokenApi } from '../../api/tokenApi';
import { transactionApi } from '../../api/transactionApi';
import { categoryApi } from '../../api/categoryApi';

interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalTransactions: number;
  totalVolume: number;
  totalTokens: number;
  activeTokens: number;
  totalCategories: number;
  systemHealth: 'healthy' | 'warning' | 'critical';
}

interface RecentActivity {
  id: string;
  type: 'user_registration' | 'transaction' | 'token_creation' | 'category_update';
  description: string;
  timestamp: string;
  user?: string;
  amount?: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    activeUsers: 0,
    totalTransactions: 0,
    totalVolume: 0,
    totalTokens: 0,
    activeTokens: 0,
    totalCategories: 0,
    systemHealth: 'healthy'
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAdminData();
  }, []);

  const loadAdminData = async () => {
    try {
      setLoading(true);
      
      // Load all admin data in parallel
      const [usersData, tokensData, transactionsData, categoriesData] = await Promise.all([
        authApi.getUsers({ limit: 1000 }),
        tokenApi.getTokens(),
        transactionApi.getTransactionHistory({ limit: 1000 }),
        categoryApi.getCategories()
      ]);

      // Calculate stats
      const activeUsers = usersData.users?.filter(user => user.isActive).length || 0;
      const totalVolume = transactionsData.transactions?.reduce((sum, tx) => sum + (tx.amount || 0), 0) || 0;
      const activeTokens = tokensData.filter(token => token.isActive).length;

      setStats({
        totalUsers: usersData.users?.length || 0,
        activeUsers,
        totalTransactions: transactionsData.transactions?.length || 0,
        totalVolume,
        totalTokens: tokensData.length,
        activeTokens,
        totalCategories: categoriesData.length,
        systemHealth: 'healthy'
      });

      // Generate recent activity (mock data for now)
      setRecentActivity([
        {
          id: '1',
          type: 'user_registration',
          description: 'New user registered',
          timestamp: new Date().toISOString(),
          user: 'john.doe@example.com'
        },
        {
          id: '2',
          type: 'transaction',
          description: 'Large transaction completed',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          amount: 5000
        },
        {
          id: '3',
          type: 'token_creation',
          description: 'New token added to platform',
          timestamp: new Date(Date.now() - 7200000).toISOString()
        }
      ]);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_registration':
        return <Users className="h-4 w-4 text-blue-500" />;
      case 'transaction':
        return <DollarSign className="h-4 w-4 text-green-500" />;
      case 'token_creation':
        return <TrendingUp className="h-4 w-4 text-purple-500" />;
      case 'category_update':
        return <Settings className="h-4 w-4 text-orange-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getHealthStatus = (health: string) => {
    switch (health) {
      case 'healthy':
        return { color: 'text-green-600', icon: <CheckCircle className="h-4 w-4" />, bg: 'bg-green-50' };
      case 'warning':
        return { color: 'text-yellow-600', icon: <AlertTriangle className="h-4 w-4" />, bg: 'bg-yellow-50' };
      case 'critical':
        return { color: 'text-red-600', icon: <AlertTriangle className="h-4 w-4" />, bg: 'bg-red-50' };
      default:
        return { color: 'text-gray-600', icon: <Clock className="h-4 w-4" />, bg: 'bg-gray-50' };
    }
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
          <Button onClick={loadAdminData}>Retry</Button>
        </div>
      </div>
    );
  }

  const healthStatus = getHealthStatus(stats.systemHealth);

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <Shield className="h-8 w-8 text-purple-600" />
            <span>Admin Dashboard</span>
          </h1>
          <p className="text-gray-600">System overview and management</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={loadAdminData}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Badge className={`${healthStatus.bg} ${healthStatus.color} border-0`}>
            {healthStatus.icon}
            <span className="ml-2">System {stats.systemHealth}</span>
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activeUsers} active ({Math.round((stats.activeUsers / stats.totalUsers) * 100)}%)
            </p>
            <Progress value={(stats.activeUsers / stats.totalUsers) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalVolume)}</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalTransactions} transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tokens</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTokens}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activeTokens} active
            </p>
            <Progress value={(stats.activeTokens / stats.totalTokens) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCategories}</div>
            <p className="text-xs text-muted-foreground">
              System categories
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.user && `User: ${activity.user}`}
                        {activity.amount && ` • Amount: ${formatCurrency(activity.amount)}`}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-500">
                      {formatDate(activity.timestamp)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add New Token
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Create Admin User
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Manage Categories
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>System Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">API Status</span>
                <Badge variant="default" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Database</span>
                <Badge variant="default" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Connected
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Storage</span>
                <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  75% Used
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last Backup</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>User Growth</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                <p>Chart will be implemented here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5" />
              <span>Transaction Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <PieChart className="h-12 w-12 mx-auto mb-2" />
                <p>Chart will be implemented here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;