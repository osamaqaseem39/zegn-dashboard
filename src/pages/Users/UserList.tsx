import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";
import Input from "../../components/form/input/InputField";
import BalanceModal from "../../components/modals/BalanceModal";
import { Button } from "../../components/ui/button";
import { Shield, UserPlus } from "lucide-react";

interface User {
  _id: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface PaginatedResponse {
  body: {
    users: User[];
  };
}

interface SortConfig {
  key: keyof User | "";
  direction: "asc" | "desc";
}

interface Balance {
  allTimeProfit: string;
  totalBalance: string;
  cashBalance: string;
  totalHoldingBalance: string;
  tokenAccounts: any[];
  holdings: any[];
}

interface BalanceResponse {
  status: {
    code: number;
    message: string;
  };
  body: {
    balance: Balance;
  };
}

export default function UserList() {
  // Dummy user data
  const dummyUsers: User[] = [
    { _id: '1', email: 'alice@gmail.com', role: 'admin', isActive: true },
    { _id: '2', email: 'bob@yahoo.com', role: 'user', isActive: false },
    { _id: '3', email: 'carol@outlook.com', role: 'user', isActive: true },
    { _id: '4', email: 'dave@hotmail.com', role: 'user', isActive: true },
    { _id: '5', email: 'eve@gmail.com', role: 'admin', isActive: false },
    { _id: '6', email: 'frank@icloud.com', role: 'user', isActive: true },
    { _id: '7', email: 'grace@protonmail.com', role: 'user', isActive: true },
    { _id: '8', email: 'heidi@yahoo.com', role: 'user', isActive: false },
    { _id: '9', email: 'ivan@gmail.com', role: 'user', isActive: true },
    { _id: '10', email: 'judy@outlook.com', role: 'admin', isActive: true },
    { _id: '11', email: 'karl@gmail.com', role: 'user', isActive: false },
    { _id: '12', email: 'laura@yahoo.com', role: 'user', isActive: true },
    { _id: '13', email: 'mallory@protonmail.com', role: 'user', isActive: true },
    { _id: '14', email: 'nancy@icloud.com', role: 'user', isActive: false },
    { _id: '15', email: 'oliver@gmail.com', role: 'admin', isActive: true },
    { _id: '16', email: 'peggy@hotmail.com', role: 'user', isActive: true },
    { _id: '17', email: 'quinn@yahoo.com', role: 'user', isActive: false },
    { _id: '18', email: 'ruth@outlook.com', role: 'user', isActive: true },
    { _id: '19', email: 'sybil@gmail.com', role: 'user', isActive: true },
    { _id: '20', email: 'trent@protonmail.com', role: 'user', isActive: false },
  ];

  // Remove axios/fetch logic and use dummy data
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [balance, setBalance] = useState<Balance | null>(null);
  const [balanceLoading, setBalanceLoading] = useState(false);
  const [balanceError, setBalanceError] = useState("");

  // Remove useEffect(() => { fetchUsers(); }, []);
  // Remove fetchUsers function

  const handleSort = (key: keyof User) => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const renderSortIcon = (key: keyof User) => {
    if (sortConfig.key !== key) return "↕️";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  // First sort the data
  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Then filter the sorted data
  const filteredUsers = sortedUsers.filter(
    user => user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handleShowBalance = async (userId: string) => {
    setShowBalanceModal(true);
    setBalanceLoading(true);
    setBalanceError("");
    
    try {
      const response = await axiosInstance.get<BalanceResponse>(`/admin/user/balance/${userId}`);
      setBalance(response.data.body.balance);
    } catch (err: any) {
      setBalanceError(err.response?.data?.message || "Failed to fetch balance");
      console.error("Error fetching balance:", err);
      setBalance(null);
    } finally {
      setBalanceLoading(false);
    }
  };

  const handleCloseBalanceModal = () => {
    setShowBalanceModal(false);
    setBalance(null);
    setBalanceError("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex space-x-3">
          <Link to="/users/create-admin">
            <Button variant="outline" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Create Admin</span>
            </Button>
          </Link>
          <Link to="/users/profile/new">
            <Button className="flex items-center space-x-2">
              <UserPlus className="h-4 w-4" />
              <span>Add User</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64"
        />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    onClick={() => handleSort("email")} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    Email {renderSortIcon("email")}
                  </th>
                  <th 
                    onClick={() => handleSort("role")} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    Role {renderSortIcon("role")}
                  </th>
                  <th 
                    onClick={() => handleSort("isActive")} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    Status {renderSortIcon("isActive")}
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentUsers.length > 0 ? (
                  currentUsers.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded ${
                          user.role === "admin" 
                            ? "bg-purple-100 text-purple-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded ${
                          user.isActive 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {user.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => handleShowBalance(user._id)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          Show Balance
                        </button>
                        <Link 
                          to={`/users/${user._id}`} 
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {filteredUsers.length > 0 && (
            <div className="mt-4 flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              
              {renderPagination()}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
              
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          )}
        </>
      )}

      <BalanceModal
        isOpen={showBalanceModal}
        onClose={handleCloseBalanceModal}
        balance={balance}
        loading={balanceLoading}
        error={balanceError}
      />
    </div>
  );
}
