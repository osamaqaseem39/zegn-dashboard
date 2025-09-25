import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { userApi, UserBalanceResponse, UserSummary } from "../../api/userApi";
import { authApi, UserProfile } from "../../api/authApi";

interface WalletInfo {
  turnKeyWalletId: string;
  address: string;
  hasExported: boolean;
}

interface VerificationInfo {
  code: string;
  validityDateTime: string | null;
}

interface ExportVerificationInfo {
  code: string;
}

interface User extends UserSummary {
  userName?: string;
  role?: string;
  referralCode?: string;
  exportVerificationInfo?: ExportVerificationInfo;
  walletInfo?: WalletInfo;
  isEnableNotification?: boolean;
  isActive?: boolean;
  profileUrl?: string;
  updatedAt?: string;
  verificationInfo?: VerificationInfo;
}

interface UserResponse {
  status: {
    code: number;
    message: string;
  };
  body: {
    user: User;
  };
}

interface TokenAccount {
  // Add token account properties if needed
}

interface Holding {
  // Add holding properties if needed
}

type Balance = any;

interface BalanceResponse {
  status: {
    code: number;
    message: string;
  };
  body: {
    balance: Balance;
  };
}

export default function UserDetail() {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState<Balance | null>(null);
  const [balanceLoading, setBalanceLoading] = useState(false);
  const [balanceError, setBalanceError] = useState("");

  const fetchUserDetail = useCallback(async () => {
    setLoading(true);
    try {
      if (!userId) throw new Error('Missing userId');
      const data = await authApi.getUserById(userId);
      // data may be inside body or be the user directly
      const u: any = (data as any)?.user || (data as any)?.body?.user || data;
      const mapped: User = {
        _id: u._id || u.id,
        email: u.email,
        firstName: u.firstName,
        lastName: u.lastName,
        createdAt: u.createdAt,
        updatedAt: u.updatedAt,
        userName: u.userName,
        role: u.role,
        referralCode: u.referralCode,
        exportVerificationInfo: u.exportVerificationInfo,
        walletInfo: u.walletInfo,
        isEnableNotification: u.isEnableNotification,
        isActive: u.isActive,
        profileUrl: u.profileUrl,
        verificationInfo: u.verificationInfo,
      };
      setUser(mapped);
      setError("");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch user details");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const fetchBalance = useCallback(async () => {
    setBalanceLoading(true);
    setBalanceError("");
    try {
      if (!userId) throw new Error('Missing userId');
      const resp = await authApi.getUserBalance(userId);
      const b: any = (resp as any)?.balance || (resp as any)?.body?.balance || resp;
      setBalance(b);
    } catch (err: any) {
      setBalanceError(err.response?.data?.message || "Failed to fetch balance");
      setBalance(null);
    } finally {
      setBalanceLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchUserDetail();
  }, [fetchUserDetail]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const formatBalance = (value: string | undefined) => {
    if (!value) return "0.00";
    try {
      const numValue = parseFloat(value);
      return isNaN(numValue) ? "0.00" : numValue.toFixed(2);
    } catch (error) {
      console.error("Error formatting balance:", error);
      return "0.00";
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-4">
          {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">User not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Details</h1>
        <Link
          to="/users"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Back to Users
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Basic Information</h2>
                <button
                  onClick={handleToggleBalance}
                  className={`px-4 py-2 rounded-lg text-white ${
                    showBalance ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {showBalance ? 'Hide Balance' : 'Show Balance'}
                </button>
              </div>
              {showBalance && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  {balanceLoading ? (
                    <div className="text-center">Loading balance...</div>
                  ) : balanceError ? (
                    <div className="text-red-600">{balanceError}</div>
                  ) : balance ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Total Balance:</span>
                        <span className="text-lg font-bold text-green-600">
                          ${formatBalance(balance.totalBalance)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Cash Balance:</span>
                        <span className="text-md text-gray-600">
                          ${formatBalance(balance.cashBalance)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Holdings Balance:</span>
                        <span className="text-md text-gray-600">
                          ${formatBalance(balance.totalHoldingBalance)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">All Time Profit:</span>
                        <span className={`text-md ${
                          parseFloat(balance.allTimeProfit) >= 0 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          ${formatBalance(balance.allTimeProfit)}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
              <div className="space-y-2">
                <p><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Username:</span> {user.userName || 'Not set'}</p>
                <p>
                  <span className="font-medium">Role:</span>
                  <span className={`ml-2 px-2 py-1 rounded ${
                    user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                  }`}>
                    {user.role || 'user'}
                  </span>
                </p>
                <p>
                  <span className="font-medium">Status:</span>
                  <span className={`ml-2 px-2 py-1 rounded ${
                    user.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </p>
                <p><span className="font-medium">Referral Code:</span> {user.referralCode || '-'}</p>
                <p><span className="font-medium">Notifications:</span> {user.isEnableNotification ? 'Enabled' : 'Disabled'}</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Dates</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Created:</span> {formatDate(user.createdAt || '')}</p>
                <p><span className="font-medium">Last Updated:</span> {formatDate(user.updatedAt || '')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-4">Wallet Information</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Wallet ID:</span> {user.walletInfo?.turnKeyWalletId || '-'}</p>
                <p><span className="font-medium">Address:</span> {user.walletInfo?.address || '-'}</p>
                <p><span className="font-medium">Exported:</span> {user.walletInfo?.hasExported ? 'Yes' : 'No'}</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Verification Information</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Export Code:</span> {user.exportVerificationInfo?.code || 'Not set'}</p>
                <p><span className="font-medium">Verification Code:</span> {user.verificationInfo?.code || 'Not set'}</p>
                <p>
                  <span className="font-medium">Validity Date:</span>
                  {user.verificationInfo?.validityDateTime 
                    ? formatDate(user.verificationInfo.validityDateTime)
                    : 'Not set'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 