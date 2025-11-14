import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/form/Form';
import Input from '../../components/form/input/InputField';
import Select from '../../components/form/input/SelectField';
import TextArea from '../../components/form/input/TextArea';
import Checkbox from '../../components/form/input/Checkbox';
import { tokenApi, Token } from '../../api/tokenApi';
import { solscanApiService, SolscanTokenMetadata } from '../../api/solscanApi';
import { Coins, Link, Globe, Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

interface TokenFormData {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
  description?: string;
  website?: string;
  twitter?: string;
  telegram?: string;
  discord?: string;
  isActive: boolean;
  isVerified: boolean;
  category: string;
  tags: string[];
  metadata: {
    marketCap?: number;
    volume24h?: number;
    circulatingSupply?: number;
    totalSupply?: number;
  };
}

const TokenManagementForm: React.FC = () => {
  const navigate = useNavigate();
  const { tokenAddress } = useParams();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<Token | null>(null);
  const [formData, setFormData] = useState<TokenFormData>({
    symbol: '',
    name: '',
    address: '',
    decimals: 18,
    logoURI: '',
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    discord: '',
    isActive: true,
    isVerified: false,
    category: 'cryptocurrency',
    tags: [],
    metadata: {},
  });

  const isEditMode = !!tokenAddress;

  useEffect(() => {
    if (isEditMode) {
      loadTokenData();
    }
  }, [tokenAddress]);

  const loadTokenData = async () => {
    try {
      setLoading(true);
      
      if (tokenAddress) {
        // Fetch token metadata from Solscan API
        const metadata = await solscanApiService.getTokenMetadata(tokenAddress);
        
        const tokenData: Token = {
          _id: '',
          symbol: metadata.symbol,
          name: metadata.metadata?.name || metadata.symbol,
          tokenAddress: metadata.address,
          description: metadata.description || '',
          decimals: metadata.decimals,
          icon: metadata.metadata?.image || '',
          marketCap: '',
          holder: '',
          supply: '',
          price: '',
          volume: 0,
          priceChange24h: '',
          isActive: true,
          isSpotlight: false,
          isHome: false,
          category: '',
          createdAt: '',
          updatedAt: '',
          isLive: true,
        };
        
        setToken(tokenData);
        
        // Populate form with Solscan data
        setFormData({
          symbol: metadata.symbol,
          name: metadata.metadata?.name || metadata.symbol,
          address: metadata.address,
          decimals: metadata.decimals,
          logoURI: metadata.metadata?.image || '',
          description: metadata.description || metadata.metadata?.description || '',
          website: metadata.website || '',
          twitter: metadata.twitter || '',
          telegram: '',
          discord: '',
          isActive: true,
          isVerified: true,
          category: 'cryptocurrency',
          tags: ['blockchain'],
          metadata: {
            marketCap: metadata.market_cap || 0,
            volume24h: metadata.volume_24h || 0,
            circulatingSupply: metadata.holder || 0,
            totalSupply: metadata.supply ? Number(metadata.supply) : 0,
          },
        });
      }
    } catch (error) {
      console.error('Failed to load token data from Solscan:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (parent: string, field: string, value: any) => {
    setFormData(prev => {
      const currentParent = prev[parent as keyof typeof prev];
      if (typeof currentParent === 'object' && currentParent !== null) {
        return {
          ...prev,
          [parent]: {
            ...currentParent,
            [field]: value,
          },
        };
      }
      return prev;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      // Validate required fields
      if (!formData.symbol || !formData.name || !formData.address) {
        throw new Error('Please fill in all required fields');
      }

      // In a real app, you'd call the API to save the token
      console.log('Saving token:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/tokens');
    } catch (error) {
      console.error('Failed to save token:', error);
    } finally {
      setLoading(false);
    }
  };

  const categoryOptions = [
    { value: 'cryptocurrency', label: 'Cryptocurrency' },
    { value: 'defi', label: 'DeFi Token' },
    { value: 'nft', label: 'NFT Token' },
    { value: 'governance', label: 'Governance Token' },
    { value: 'utility', label: 'Utility Token' },
    { value: 'meme', label: 'Meme Token' },
  ];

  const tagOptions = [
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'defi', label: 'DeFi' },
    { value: 'smart-contracts', label: 'Smart Contracts' },
    { value: 'nft', label: 'NFT' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'metaverse', label: 'Metaverse' },
    { value: 'ai', label: 'AI' },
    { value: 'privacy', label: 'Privacy' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Form
      title="Token Management"
      subtitle={isEditMode ? "Update token information and settings" : "Add new token to the platform"}
      onSubmit={handleSubmit}
      onCancel={() => navigate('/tokens')}
      loading={loading}
      variant={isEditMode ? 'edit' : 'create'}
      showBackButton={true}
      onBack={() => navigate('/tokens')}
    >
      <div className="space-y-6">
        {/* Basic Token Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Token Symbol"
              name="symbol"
              value={formData.symbol}
              onChange={(e) => handleInputChange('symbol', e.target.value)}
              placeholder="e.g., SOL, ETH, BTC"
              required
              icon={<Coins className="h-4 w-4" />}
              hint="Short symbol for the token (3-5 characters)"
            />
            
            <Input
              label="Token Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., Solana, Ethereum, Bitcoin"
              required
              icon={<Coins className="h-4 w-4" />}
            />
            
            <Input
              label="Contract Address"
              name="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="0x..."
              required
              icon={<Link className="h-4 w-4" />}
              hint="Blockchain contract address"
            />
            
            <Input
              label="Decimals"
              name="decimals"
              type="number"
              value={formData.decimals}
              onChange={(e) => handleInputChange('decimals', parseInt(e.target.value))}
              min="0"
              max="18"
              required
              icon={<Coins className="h-4 w-4" />}
              hint="Number of decimal places (usually 18 for ERC-20)"
            />
            
            <Input
              label="Logo URL"
              name="logoURI"
              value={formData.logoURI}
              onChange={(e) => handleInputChange('logoURI', e.target.value)}
              placeholder="https://example.com/logo.png"
              icon={<Globe className="h-4 w-4" />}
              hint="URL to token logo image"
            />
            
            <Select
              label="Category"
              name="category"
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              options={categoryOptions}
              placeholder="Select category"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <TextArea
            label="Description"
            name="description"
            value={formData.description}
            onChange={(value) => handleInputChange('description', typeof value === 'string' ? value : value.target.value)}
            placeholder="Describe the token and its use case..."
            rows={4}
            maxLength={1000}
            hint="Maximum 1000 characters"
          />
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Social Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Website"
              name="website"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              placeholder="https://example.com"
              icon={<Globe className="h-4 w-4" />}
            />
            
            <Input
              label="Twitter"
              name="twitter"
              value={formData.twitter}
              onChange={(e) => handleInputChange('twitter', e.target.value)}
              placeholder="https://twitter.com/username"
              icon={<Globe className="h-4 w-4" />}
            />
            
            <Input
              label="Telegram"
              name="telegram"
              value={formData.telegram}
              onChange={(e) => handleInputChange('telegram', e.target.value)}
              placeholder="https://t.me/channel"
              icon={<Globe className="h-4 w-4" />}
            />
            
            <Input
              label="Discord"
              name="discord"
              value={formData.discord}
              onChange={(e) => handleInputChange('discord', e.target.value)}
              placeholder="https://discord.gg/server"
              icon={<Globe className="h-4 w-4" />}
            />
          </div>
        </div>

        {/* Token Settings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Token Settings
          </h3>
          <div className="space-y-4">
            <Checkbox
              label="Active Token"
              name="isActive"
              checked={formData.isActive}
              onChange={(value) => handleInputChange('isActive', typeof value === 'boolean' ? value : value.target.checked)}
              hint="Enable trading for this token"
            />
            
            <Checkbox
              label="Verified Token"
              name="isVerified"
              checked={formData.isVerified}
              onChange={(value) => handleInputChange('isVerified', typeof value === 'boolean' ? value : value.target.checked)}
              hint="Mark as verified by the platform"
            />
          </div>
        </div>

        {/* Market Data */}
        {isEditMode && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Market Data
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Market Cap
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formatCurrency(formData.metadata.marketCap || 0)}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        24h Volume
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formatCurrency(formData.metadata.volume24h || 0)}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Coins className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Circulating Supply
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formData.metadata.circulatingSupply?.toLocaleString() || '0'}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Total Supply
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formData.metadata.totalSupply?.toLocaleString() || '0'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Token Status */}
        {isEditMode && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Token Status
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Trading Status
                      </span>
                      <Badge className={formData.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                        {formData.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Verification Status
                      </span>
                      <Badge className={formData.isVerified ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}>
                        {formData.isVerified ? "Verified" : "Unverified"}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Category
                      </span>
                      <Badge className="bg-gray-100 text-gray-800">
                        {formData.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Contract Address
                      </span>
                      <span className="text-sm font-mono text-brand-600 dark:text-brand-400">
                        {formData.address.slice(0, 8)}...{formData.address.slice(-6)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Form>
  );
};

export default TokenManagementForm; 