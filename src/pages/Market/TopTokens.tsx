import { useEffect, useState } from "react";
import { tokenApi } from "../../api/tokenApi";
import { SolscanTokenMetadata } from "../../api/solscanApi";
import { Link } from 'react-router-dom';

export default function TopTokens() {
  const [tokens, setTokens] = useState<SolscanTokenMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof SolscanTokenMetadata;
    direction: 'asc' | 'desc';
  }>({ key: 'market_cap', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchTopTokens();
  }, []);

  const fetchTopTokens = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await tokenApi.getTopTokens();
      console.log("Top tokens response:", response);
      
      const responseData = (response as any)?.data ?? response;
      if (responseData.success && responseData.data && responseData.data.items) {
        setTokens(responseData.data.items);
      } else if (Array.isArray(responseData)) {
        setTokens(responseData);
      } else if (responseData.items && Array.isArray(responseData.items)) {
        setTokens(responseData.items);
      } else {
        setError(responseData.message || "Failed to fetch top tokens");
        setTokens([]);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to fetch top tokens");
      console.error("Error fetching top tokens:", err);
      setTokens([]);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  };

  const handleSort = (key: keyof SolscanTokenMetadata) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const filteredAndSortedTokens = tokens
    .filter(token => 
      (token.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol?.toLowerCase().includes(searchTerm.toLowerCase())) ?? false
    )
    .sort((a, b) => {
      if (a[sortConfig.key] === null) return 1;
      if (b[sortConfig.key] === null) return -1;
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const SortIcon = ({ column }: { column: keyof SolscanTokenMetadata }) => (
    <span className="ml-1 inline-block">
      {sortConfig.key === column ? (
        sortConfig.direction === 'asc' ? '↑' : '↓'
      ) : '↕'}
    </span>
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedTokens.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAndSortedTokens.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const PaginationControls = () => {
    const maxVisiblePages = 5;
    let pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, '...', totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }

    return (
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
            currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        
        {pages.map((page, index) => (
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => paginate(page as number)}
              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                currentPage === page
                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          )
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </nav>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Top Tokens</h1>
        <p className="mt-2 text-gray-600">Top performing tokens by market cap</p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tokens..."
          className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  Token <SortIcon column="name" />
                </th>
                <th 
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('price')}
                >
                  Price <SortIcon column="price" />
                </th>
                <th 
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('price_change_24h')}
                >
                  24h Change <SortIcon column="price_change_24h" />
                </th>
                <th 
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('market_cap')}
                >
                  Market Cap <SortIcon column="market_cap" />
                </th>
                <th 
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('holder')}
                >
                  Holders <SortIcon column="holder" />
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((token) => (
                <tr key={token.address} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="font-medium text-gray-900">{token.name}</div>
                        <div className="text-sm text-gray-500">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="text-sm text-gray-900">
                      {token.price ? `$${formatPrice(token.price)}` : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className={`text-sm ${(token.price_change_24h || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {token.price_change_24h != null ? (
                        `${(token.price_change_24h || 0) >= 0 ? '+' : ''}${(token.price_change_24h || 0).toFixed(2)}%`
                      ) : 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="text-sm text-gray-900">
                      {token.market_cap ? `$${formatNumber(token.market_cap)}` : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="text-sm text-gray-900">
                      {token.holder ? formatNumber(token.holder) : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Link
                      to={`/tokens/add?address=${token.address}`}
                      className="inline-flex items-center px-3 py-1 border border-blue-600 text-sm font-medium rounded-md text-blue-600 hover:bg-blue-50"
                    >
                      Add Token
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(indexOfLastItem, filteredAndSortedTokens.length)}
                </span>{' '}
                of <span className="font-medium">{filteredAndSortedTokens.length}</span> results
              </p>
            </div>
            <div>
              <PaginationControls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 