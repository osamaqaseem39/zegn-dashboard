import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authApi } from '../../api/authApi';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Attempting login with:', { email, password });
      await login({ email, password });
      console.log('Login successful, navigating to dashboard');
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Login failed:', err);
      console.error('Error response:', err.response?.data);
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async () => {
    setCreatingAdmin(true);
    setError('');
    
    try {
      console.log('Creating admin user...');
      const adminData = {
        email: 'admin@zegn.com',
        password: 'Admin123!@#',
        userName: 'System Administrator',
        role: 'admin'
      };
      
      const response = await authApi.createAdmin(adminData);
      console.log('Admin created:', response);
      setError('Admin user created successfully! You can now log in.');
    } catch (err: any) {
      console.error('Create admin failed:', err);
      setError(err.response?.data?.message || err.message || 'Failed to create admin user');
    } finally {
      setCreatingAdmin(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your admin credentials to access the dashboard
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Welcome to ZEGN</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  disabled={creatingAdmin}
                  onClick={handleCreateAdmin}
                  className="w-full"
                >
                  {creatingAdmin ? 'Creating Admin...' : 'Create Admin User'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
