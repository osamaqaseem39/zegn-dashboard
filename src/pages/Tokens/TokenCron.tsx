import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { tokenApi, Token } from "../../api/tokenApi";
import { PageMeta } from '../../components/common/PageMeta';

interface TokenCronData extends Token {
  graphType?: string;
  grapDataInfo?: {
    isCronUpdate: boolean;
    isMaxGraphDataAdded: boolean;
    isOneDayGraphDataAdded: boolean;
    isFourHourGraphDataAdded: boolean;
  };
}

export default function TokenCron() {
  const { tokenAddress } = useParams();
  const [token, setToken] = useState<TokenCronData | null>(null);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState<Record<string, boolean>>({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Clear messages after timeout
  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 5000);
  };

  const fetchTokenDetails = useCallback(async () => {
    try {
      setLoading(true);
      const tokenData = await tokenApi.getByAddress(tokenAddress as string);
      
      // Map the token data to include default cron data if not present
      const tokenCronData: TokenCronData = {
        ...tokenData,
        graphType: (tokenData as any).graphType || 'cmc',
        grapDataInfo: (tokenData as any).grapDataInfo || {
          isCronUpdate: false,
          isMaxGraphDataAdded: false,
          isOneDayGraphDataAdded: false,
          isFourHourGraphDataAdded: false,
        }
      };
      setToken(tokenCronData);
    } catch (err: any) {
      console.error('TokenCron: Error fetching token details:', err);
      // Set a default token structure on error
      setToken({
        _id: '',
        tokenAddress: tokenAddress || '',
        symbol: 'Unknown',
        name: 'Unknown Token',
        description: '',
        decimals: 0,
        icon: '',
        marketCap: '',
        holder: '',
        supply: '',
        price: '',
        volume: 0,
        priceChange24h: '',
        isActive: false,
        isSpotlight: false,
        isHome: false,
        category: '',
        createdAt: '',
        updatedAt: '',
        isLive: false,
        graphType: 'cmc',
        grapDataInfo: {
          isCronUpdate: false,
          isMaxGraphDataAdded: false,
          isOneDayGraphDataAdded: false,
          isFourHourGraphDataAdded: false,
        }
      });
    } finally {
      setLoading(false);
    }
  }, [tokenAddress]);

  useEffect(() => {
    if (tokenAddress) {
      fetchTokenDetails();
    }
  }, [tokenAddress, fetchTokenDetails]);

  const handleDeleteData = () => {
    if (!token) return;
    setShowDeleteModal(true);
  };

  const handleActivateGraph = async () => {
    if (!token) return;
    setButtonLoading(prev => ({ ...prev, activate: true }));
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await tokenApi.activateGraphCron(token._id);
      setSuccessMessage("Graph cron activated successfully!");
      clearMessages();
      await fetchTokenDetails();
    } catch (err: any) {
      console.error('TokenCron: Error activating graph:', err);
      setErrorMessage(err.response?.data?.message || "Failed to activate graph cron");
    } finally {
      setButtonLoading(prev => ({ ...prev, activate: false }));
    }
  };

  const handleLatestGraphData = async () => {
    if (!token) return;
    setButtonLoading(prev => ({ ...prev, latest: true }));
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await tokenApi.fetchLatestGraphData(token._id);
      setSuccessMessage("Latest graph data fetched successfully!");
      clearMessages();
      await fetchTokenDetails();
    } catch (err: any) {
      console.error('TokenCron: Error fetching latest graph data:', err);
      setErrorMessage(err.response?.data?.message || "Failed to update latest graph data");
    } finally {
      setButtonLoading(prev => ({ ...prev, latest: false }));
    }
  };

  const confirmDelete = async () => {
    if (!token || deleteInput !== "Delete Cron Data") return;

    setButtonLoading(prev => ({ ...prev, delete: true }));
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await tokenApi.deleteGraphData(token._id);
      setSuccessMessage("Graph data deleted successfully!");
      clearMessages();
      await fetchTokenDetails();
      setShowDeleteModal(false);
      setDeleteInput("");
    } catch (err: any) {
      console.error('TokenCron: Error deleting graph data:', err);
      setErrorMessage(err.response?.data?.message || "Failed to delete graph data");
    } finally {
      setButtonLoading(prev => ({ ...prev, delete: false }));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!token) return null;

  return (
    <>
      <PageMeta title="Token Cron" />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link to="/tokens" className="text-blue-600 hover:text-blue-800">
            ← Back to Tokens
          </Link>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-green-700">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold">
              {token.name} ({token.symbol}) - Cron Status
            </h1>
            <p className="text-gray-600 mt-2">Token Address: {token.tokenAddress}</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Graph Data Status</h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Cron Update:</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      token.grapDataInfo?.isCronUpdate 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {token.grapDataInfo?.isCronUpdate ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Max Graph Data:</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      token.grapDataInfo?.isMaxGraphDataAdded 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {token.grapDataInfo?.isMaxGraphDataAdded ? "Added" : "Pending"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>24h Graph Data:</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      token.grapDataInfo?.isOneDayGraphDataAdded 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {token.grapDataInfo?.isOneDayGraphDataAdded ? "Added" : "Pending"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>4h Graph Data:</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      token.grapDataInfo?.isFourHourGraphDataAdded 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {token.grapDataInfo?.isFourHourGraphDataAdded ? "Added" : "Pending"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Manual Graph Updates</h2>

            <div className="space-y-4">
              <button
                onClick={handleDeleteData}
                disabled={buttonLoading.delete}
                className={`w-full p-4 rounded-lg flex items-center justify-between ${
                  buttonLoading.delete
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <span className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 mr-3">
                    1
                  </span>
                  {buttonLoading.delete ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Deleting Data...
                    </span>
                  ) : "Delete Data"}
                </span>
                {token?.grapDataInfo?.isMaxGraphDataAdded && (
                  <span className="text-green-500">✓</span>
                )}
              </button>

              <button
                onClick={handleActivateGraph}
                disabled={buttonLoading.activate}
                className={`w-full p-4 rounded-lg flex items-center justify-between ${
                  buttonLoading.activate
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <span className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 mr-3">
                    2
                  </span>
                  {buttonLoading.activate ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Activating Graph...
                    </span>
                  ) : "Activate Graph"}
                </span>
                {token?.grapDataInfo?.isOneDayGraphDataAdded && (
                  <span className="text-green-500">✓</span>
                )}
              </button>

              <button
                onClick={handleLatestGraphData}
                disabled={buttonLoading.latest}
                className={`w-full p-4 rounded-lg flex items-center justify-between ${
                  buttonLoading.latest
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <span className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 mr-3">
                    3
                  </span>
                  {buttonLoading.latest ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Updating Latest Graph Data...
                    </span>
                  ) : "Latest Graph Data"}
                </span>
                {token?.grapDataInfo?.isFourHourGraphDataAdded && (
                  <span className="text-green-500">✓</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-6">
              Please type <strong>"Delete Cron Data"</strong> to confirm.
            </p>
            <input
              type="text"
              value={deleteInput}
              onChange={(e) => setDeleteInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteInput("");
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleteInput !== "Delete Cron Data"}
                className={`px-4 py-2 text-white rounded ${
                  deleteInput === "Delete Cron Data" ? "bg-red-600 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}  
