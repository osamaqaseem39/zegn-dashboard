import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import PageReloadHandler from "./components/PageReloadHandler";
import NotFound from './pages/NotFound';

// Lazy load components for better code splitting
const SignIn = lazy(() => import("./pages/AuthPages/SignIn"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Ecommerce = lazy(() => import("./pages/Dashboard/ECommerce"));
const UserList = lazy(() => import("./pages/Users/UserList"));
const UserDetail = lazy(() => import("./pages/Users/UserDetail"));
const UserProfileForm = lazy(() => import("./pages/Users/UserProfileForm"));
const CreateAdmin = lazy(() => import("./pages/Users/CreateAdmin"));
const CategoryList = lazy(() => import("./pages/Categories/CategoryList"));
const CategoryForm = lazy(() => import("./pages/Categories/CategoryForm"));
const TokenList = lazy(() => import("./pages/Tokens/TokenList"));
const TokenDetail = lazy(() => import("./pages/Tokens/TokenDetail"));
const TokenForm = lazy(() => import("./pages/Tokens/TokenForm"));
const TokenCron = lazy(() => import("./pages/Tokens/TokenCron"));
const TokenManagementForm = lazy(() => import("./pages/Tokens/TokenManagementForm"));
const TrendingTokens = lazy(() => import("./pages/Market/TrendingTokens"));
const TopTokens = lazy(() => import("./pages/Market/TopTokens"));
const TokenMarket = lazy(() => import("./pages/Market/TokenMarket"));
const TransactionHistoryForm = lazy(() => import("./pages/Transactions/TransactionHistoryForm"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <PageReloadHandler>
          <Router>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
            {/* Protected Routes */}
            <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
              <Route index path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              
              {/* User Management */}
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/users/profile/new" element={<UserProfileForm />} />
              <Route path="/users/profile/edit/:userId" element={<UserProfileForm />} />
              <Route path="/users/create-admin" element={<CreateAdmin />} />
              
              {/* Category Management */}
              <Route path="/categories" element={<CategoryList />} />
              <Route path="/categories/add" element={<CategoryForm />} />
              <Route path="/categories/edit/:categoryId" element={<CategoryForm />} />
              
              {/* Token Management */}
              <Route path="/tokens" element={<TokenList />} />
              <Route path="/tokens/add" element={<TokenForm />} />
              <Route path="/tokens/add/:tokenAddress" element={<TokenForm />} />
              <Route path="/tokens/edit/:tokenAddress" element={<TokenForm />} />
              <Route path="/tokens/:tokenAddress" element={<TokenDetail />} />
              <Route path="/tokens/cron/:tokenAddress" element={<TokenCron />} />
              <Route path="/tokens/manage/new" element={<TokenManagementForm />} />
              <Route path="/tokens/manage/edit/:tokenAddress" element={<TokenManagementForm />} />
              
              {/* Transaction Management */}
              <Route path="/transactions" element={<TransactionHistoryForm />} />
              <Route path="/transactions/history" element={<TransactionHistoryForm />} />
              
              {/* Market Analysis */}
              <Route path="/market" element={<TokenMarket />} />
              <Route path="/market/trending-tokens" element={<TrendingTokens />} />
              <Route path="/market/top-tokens" element={<TopTokens />} />
            </Route>
            
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<SignIn />} />
            </Route>
            
            {/* Add this at the very bottom of your Routes */}
            <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Router>
        </PageReloadHandler>
      </AuthProvider>
    </ErrorBoundary>
  );
}
