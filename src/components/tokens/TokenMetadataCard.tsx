import React from 'react';

interface TokenMetadata {
  mintAuthority: string | null;
  freezeAuthority: string | null;
  isInitialized: boolean;
  tokenType: string;
  transferFeeConfig?: {
    newerTransferFee: {
      epoch: number;
      maximumFee: string;
      transferFeeBasisPoints: number;
    };
    olderTransferFee: {
      epoch: number;
      maximumFee: string;
      transferFeeBasisPoints: number;
    };
    transferFeeConfigAuthority: string | null;
    withdrawWithheldAuthority: string | null;
    withheldAmount: string;
  };
  extensions?: Array<{
    extension: string;
    state: any;
  }>;
}

interface TokenMetadataCardProps {
  metadata: TokenMetadata;
  tokenAddress: string;
}

export const TokenMetadataCard: React.FC<TokenMetadataCardProps> = ({ metadata, tokenAddress }) => {
  const formatBasisPoints = (basisPoints: number) => {
    return `${(basisPoints / 100).toFixed(2)}%`;
  };

  const formatLargeNumber = (num: string) => {
    const number = parseFloat(num);
    if (number >= 1e9) {
      return `${(number / 1e9).toFixed(2)}B`;
    } else if (number >= 1e6) {
      return `${(number / 1e6).toFixed(2)}M`;
    } else if (number >= 1e3) {
      return `${(number / 1e3).toFixed(2)}K`;
    }
    return number.toLocaleString();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Token Metadata</h2>
        <p className="text-gray-600 text-sm">Address: {tokenAddress}</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-medium mb-3">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className={`px-2 py-1 rounded text-sm ${
                metadata.isInitialized 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}>
                {metadata.isInitialized ? "Initialized" : "Not Initialized"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Token Type:</span>
              <span className="font-medium">{metadata.tokenType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mint Authority:</span>
              <span className="font-mono text-sm">
                {metadata.mintAuthority ? 
                  `${metadata.mintAuthority.slice(0, 8)}...${metadata.mintAuthority.slice(-8)}` : 
                  "None"
                }
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Freeze Authority:</span>
              <span className="font-mono text-sm">
                {metadata.freezeAuthority ? 
                  `${metadata.freezeAuthority.slice(0, 8)}...${metadata.freezeAuthority.slice(-8)}` : 
                  "None"
                }
              </span>
            </div>
          </div>
        </div>

        {/* Transfer Fee Configuration */}
        {metadata.transferFeeConfig && (
          <div>
            <h3 className="text-lg font-medium mb-3">Transfer Fee Configuration</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Current Transfer Fee</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fee Rate:</span>
                      <span className="font-medium text-red-600">
                        {formatBasisPoints(metadata.transferFeeConfig.newerTransferFee.transferFeeBasisPoints)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maximum Fee:</span>
                      <span className="font-mono text-sm">
                        {formatLargeNumber(metadata.transferFeeConfig.newerTransferFee.maximumFee)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Epoch:</span>
                      <span className="font-medium">
                        {metadata.transferFeeConfig.newerTransferFee.epoch}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Accumulated Fees</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Withheld Amount:</span>
                      <span className="font-mono text-sm">
                        {formatLargeNumber(metadata.transferFeeConfig.withheldAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Config Authority:</span>
                      <span className="font-mono text-sm">
                        {metadata.transferFeeConfig.transferFeeConfigAuthority ? 
                          `${metadata.transferFeeConfig.transferFeeConfigAuthority.slice(0, 8)}...${metadata.transferFeeConfig.transferFeeConfigAuthority.slice(-8)}` : 
                          "None"
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Withdraw Authority:</span>
                      <span className="font-mono text-sm">
                        {metadata.transferFeeConfig.withdrawWithheldAuthority ? 
                          `${metadata.transferFeeConfig.withdrawWithheldAuthority.slice(0, 8)}...${metadata.transferFeeConfig.withdrawWithheldAuthority.slice(-8)}` : 
                          "None"
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Extensions */}
        {metadata.extensions && metadata.extensions.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-3">Extensions</h3>
            <div className="space-y-2">
              {metadata.extensions.map((extension, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{extension.extension}</span>
                    <span className="text-sm text-gray-600">
                      {Object.keys(extension.state).length} properties
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warning for high transfer fees */}
        {metadata.transferFeeConfig && 
         metadata.transferFeeConfig.newerTransferFee.transferFeeBasisPoints > 100 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  High Transfer Fee Warning
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    This token has a transfer fee of {formatBasisPoints(metadata.transferFeeConfig.newerTransferFee.transferFeeBasisPoints)}. 
                    Users will be charged this fee on every transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenMetadataCard;