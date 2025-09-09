import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Ecommerce from "./pages/Dashboard/ECommerce";
import UserList from "./pages/Users/UserList";
import UserDetail from "./pages/Users/UserDetail";
import UserProfileForm from "./pages/Users/UserProfileForm";
import CategoryList from "./pages/Categories/CategoryList";
import CategoryForm from "./pages/Categories/CategoryForm";
import TokenList from "./pages/Tokens/TokenList";
import TokenDetail from "./pages/Tokens/TokenDetail";
import TokenForm from "./pages/Tokens/TokenForm";
import TokenCron from "./pages/Tokens/TokenCron";
import TokenManagementForm from "./pages/Tokens/TokenManagementForm";
import TrendingTokens from "./pages/Market/TrendingTokens";
import TopTokens from "./pages/Market/TopTokens";
import TransactionHistoryForm from "./pages/Transactions/TransactionHistoryForm";
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Protected Routes */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            
            {/* User Management */}
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/users/profile/new" element={<UserProfileForm />} />
            <Route path="/users/profile/edit/:userId" element={<UserProfileForm />} />
            
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
            <Route path="/market">
              <Route path="trending-tokens" element={<TrendingTokens />} />
              <Route path="top-tokens" element={<TopTokens />} />
            </Route>
          </Route>
          
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          
          {/* Add this at the very bottom of your Routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
