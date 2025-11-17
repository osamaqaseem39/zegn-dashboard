import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/form/Form';
import Input from '../../components/form/input/InputField';
import Select from '../../components/form/input/SelectField';
import TextArea from '../../components/form/input/TextArea';
import Checkbox from '../../components/form/input/Checkbox';
import { authApi, UserProfile } from '../../api/authApi';
import { Mail, User, Phone, MapPin, Calendar, Shield, Bell } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

interface UserProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  bio?: string;
  dateOfBirth?: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  preferences: {
    language: string;
    timezone: string;
    currency: string;
  };
}

const UserProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [formData, setFormData] = useState<UserProfileFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    bio: '',
    dateOfBirth: '',
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    preferences: {
      language: 'en',
      timezone: 'UTC',
      currency: 'USD',
    },
  });

  const isEditMode = !!userId;

  useEffect(() => {
    if (isEditMode) {
      loadUserData();
    }
  }, [userId]);

  const loadUserData = async () => {
    try {
      setLoading(true);
      const userData = await authApi.getProfile();
      setUser(userData);
      
      // Populate form with user data
      setFormData({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email,
        phone: '',
        address: '',
        bio: '',
        dateOfBirth: '',
        notifications: {
          email: true,
          push: true,
          sms: false,
        },
        preferences: {
          language: 'en',
          timezone: 'UTC',
          currency: 'USD',
        },
      });
    } catch (error) {
      console.error('Failed to load user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
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
      
      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        // Add other fields as needed
      };

      if (isEditMode) {
        await authApi.updateProfile(updateData);
      }
      
      navigate('/users');
    } catch (error) {
      console.error('Failed to save user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
  ];

  const timezoneOptions = [
    { value: 'UTC', label: 'UTC' },
    { value: 'EST', label: 'Eastern Time' },
    { value: 'CST', label: 'Central Time' },
    { value: 'MST', label: 'Mountain Time' },
    { value: 'PST', label: 'Pacific Time' },
  ];

  const currencyOptions = [
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'EUR', label: 'Euro (€)' },
    { value: 'GBP', label: 'British Pound (£)' },
    { value: 'JPY', label: 'Japanese Yen (¥)' },
    { value: 'CAD', label: 'Canadian Dollar (C$)' },
  ];

  return (
    <Form
      title="User Profile"
      subtitle={isEditMode ? "Update user information and preferences" : "Create new user profile"}
      onSubmit={handleSubmit}
      onCancel={() => navigate('/users')}
      loading={loading}
      variant={isEditMode ? 'edit' : 'create'}
      showBackButton={true}
      onBack={() => navigate('/users')}
    >
      {/* Basic Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="Enter first name"
              required
              icon={<User className="h-4 w-4" />}
            />
            
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Enter last name"
              required
              icon={<User className="h-4 w-4" />}
            />
            
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter email address"
              required
              icon={<Mail className="h-4 w-4" />}
            />
            
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter phone number"
              icon={<Phone className="h-4 w-4" />}
            />
            
            <Input
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              icon={<Calendar className="h-4 w-4" />}
            />
            
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter address"
              icon={<MapPin className="h-4 w-4" />}
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <TextArea
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={(value) => handleInputChange('bio', typeof value === 'string' ? value : value.target.value)}
            placeholder="Tell us about yourself..."
            rows={4}
            maxLength={500}
            hint="Maximum 500 characters"
          />
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Select
              label="Language"
              name="language"
              value={formData.preferences.language}
              onChange={(e) => handleNestedChange('preferences', 'language', e.target.value)}
              options={languageOptions}
              placeholder="Select language"
            />
            
            <Select
              label="Timezone"
              name="timezone"
              value={formData.preferences.timezone}
              onChange={(e) => handleNestedChange('preferences', 'timezone', e.target.value)}
              options={timezoneOptions}
              placeholder="Select timezone"
            />
            
            <Select
              label="Currency"
              name="currency"
              value={formData.preferences.currency}
              onChange={(e) => handleNestedChange('preferences', 'currency', e.target.value)}
              options={currencyOptions}
              placeholder="Select currency"
            />
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Notification Settings
          </h3>
          <div className="space-y-4">
            <Checkbox
              label="Email Notifications"
              name="emailNotifications"
              checked={formData.notifications.email}
              onChange={(value) => handleNestedChange('notifications', 'email', typeof value === 'boolean' ? value : value.target.checked)}
              hint="Receive notifications via email"
            />
            
            <Checkbox
              label="Push Notifications"
              name="pushNotifications"
              checked={formData.notifications.push}
              onChange={(value) => handleNestedChange('notifications', 'push', typeof value === 'boolean' ? value : value.target.checked)}
              hint="Receive push notifications in the app"
            />
            
            <Checkbox
              label="SMS Notifications"
              name="smsNotifications"
              checked={formData.notifications.sms}
              onChange={(value) => handleNestedChange('notifications', 'sms', typeof value === 'boolean' ? value : value.target.checked)}
              hint="Receive notifications via SMS"
            />
          </div>
        </div>

        {/* Account Status */}
        {isEditMode && user && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Account Status
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Verification
                      </span>
                      <Badge variant={user.isEmailVerified ? "default" : "secondary"}>
                        {user.isEmailVerified ? "Verified" : "Pending"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Account Balance
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        ${typeof user.balance === 'number' ? user.balance.toFixed(2) : parseFloat(String(user.balance || 0)).toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Member Since
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Referral Code
                      </span>
                      <span className="text-sm font-mono text-brand-600 dark:text-brand-400">
                        {user.referralCode || 'N/A'}
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

export default UserProfileForm; 