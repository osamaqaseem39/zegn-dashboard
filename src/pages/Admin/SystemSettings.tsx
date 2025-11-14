import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Switch } from '../../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { 
  Settings, 
  Shield, 
  Database, 
  Mail, 
  Bell,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface SystemConfig {
  maintenanceMode: boolean;
  registrationEnabled: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  maxFileSize: number;
  sessionTimeout: number;
  apiRateLimit: number;
  backupFrequency: string;
  logLevel: string;
  securityLevel: string;
}

const SystemSettings: React.FC = () => {
  const [config, setConfig] = useState<SystemConfig>({
    maintenanceMode: false,
    registrationEnabled: true,
    emailNotifications: true,
    pushNotifications: true,
    maxFileSize: 10,
    sessionTimeout: 30,
    apiRateLimit: 1000,
    backupFrequency: 'daily',
    logLevel: 'info',
    securityLevel: 'medium'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadSystemConfig();
  }, []);

  const loadSystemConfig = async () => {
    try {
      setLoading(true);
      // In a real app, this would fetch from the API
      // For now, we'll use the default config
    } catch (err) {
      setError('Failed to load system configuration');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real app, this would save to the API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Settings saved successfully');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Failed to save settings');
    } finally {
      setLoading(false);
    }
  };

  const handleConfigChange = (key: keyof SystemConfig, value: any) => {
    setConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getSecurityLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <Settings className="h-8 w-8 text-blue-600" />
            <span>System Settings</span>
          </h1>
          <p className="text-gray-600">Configure system-wide settings and preferences</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={loadSystemConfig} disabled={loading}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={handleSave} disabled={loading}>
            <Save className="h-4 w-4 mr-2" />
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
          <AlertTriangle className="h-4 w-4 mr-2" />
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
          <CheckCircle className="h-4 w-4 mr-2" />
          {success}
        </div>
      )}

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>General Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Maintenance Mode</label>
                  <p className="text-sm text-gray-500">
                    Enable maintenance mode to restrict access
                  </p>
                </div>
                <Switch
                  checked={config.maintenanceMode}
                  onCheckedChange={(checked) => handleConfigChange('maintenanceMode', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">User Registration</label>
                  <p className="text-sm text-gray-500">
                    Allow new users to register
                  </p>
                </div>
                <Switch
                  checked={config.registrationEnabled}
                  onCheckedChange={(checked) => handleConfigChange('registrationEnabled', checked)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Max File Size (MB)</label>
                  <Input
                    type="number"
                    value={config.maxFileSize}
                    onChange={(e) => handleConfigChange('maxFileSize', parseInt(e.target.value))}
                    placeholder="10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Session Timeout (minutes)</label>
                  <Input
                    type="number"
                    value={config.sessionTimeout}
                    onChange={(e) => handleConfigChange('sessionTimeout', parseInt(e.target.value))}
                    placeholder="30"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Security Level</label>
                <Select
                  value={config.securityLevel}
                  onValueChange={(value) => handleConfigChange('securityLevel', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2">
                  <Badge className={getSecurityLevelColor(config.securityLevel)}>
                    {config.securityLevel.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Current security level
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">API Rate Limit (requests per hour)</label>
                <Input
                  type="number"
                  value={config.apiRateLimit}
                  onChange={(e) => handleConfigChange('apiRateLimit', parseInt(e.target.value))}
                  placeholder="1000"
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Info className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Security Recommendations</h4>
                    <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                      <li>• Enable two-factor authentication for admin accounts</li>
                      <li>• Regularly update security certificates</li>
                      <li>• Monitor failed login attempts</li>
                      <li>• Use strong password policies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Email Notifications</label>
                  <p className="text-sm text-gray-500">
                    Send notifications via email
                  </p>
                </div>
                <Switch
                  checked={config.emailNotifications}
                  onCheckedChange={(checked) => handleConfigChange('emailNotifications', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Push Notifications</label>
                  <p className="text-sm text-gray-500">
                    Send push notifications to users
                  </p>
                </div>
                <Switch
                  checked={config.pushNotifications}
                  onCheckedChange={(checked) => handleConfigChange('pushNotifications', checked)}
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Email Configuration</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Configure SMTP settings in the environment variables for email notifications to work properly.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Advanced Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Log Level</label>
                <Select
                  value={config.logLevel}
                  onValueChange={(value) => handleConfigChange('logLevel', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="error">Error</SelectItem>
                    <SelectItem value="warn">Warning</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="debug">Debug</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Backup Frequency</label>
                <Select
                  value={config.backupFrequency}
                  onValueChange={(value) => handleConfigChange('backupFrequency', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800">Warning</h4>
                    <p className="text-sm text-red-700 mt-1">
                      Advanced settings can affect system stability. Only modify these if you understand the implications.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemSettings;