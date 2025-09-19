import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { tokenApi, GraphDataPoint } from '../../api/tokenApi';

interface TokenChartProps {
  tokenId: string;
  tokenSymbol?: string;
  className?: string;
}

type TimePeriod = 'max' | '1d' | '4h';

const TokenChart: React.FC<TokenChartProps> = ({ 
  tokenId, 
  tokenSymbol = 'Token',
  className = '' 
}) => {
  const [chartData, setChartData] = useState<GraphDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('max');
  const [priceChange, setPriceChange] = useState<number>(0);

  const fetchChartData = async (period: TimePeriod) => {
    try {
      setLoading(true);
      setError(null);
      const response = await tokenApi.getTokenGraphData(tokenId, period);
      setChartData(response.data);
      
      // Calculate price change from first to last data point
      if (response.data.length > 1) {
        const firstPrice = parseFloat(response.data[0].price);
        const lastPrice = parseFloat(response.data[response.data.length - 1].price);
        const change = ((lastPrice - firstPrice) / firstPrice) * 100;
        setPriceChange(change);
      }
    } catch (err: any) {
      console.error('Error fetching chart data:', err);
      setError(err.response?.data?.message || 'Failed to fetch chart data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tokenId) {
      fetchChartData(timePeriod);
    }
  }, [tokenId, timePeriod]);

  const handleTimePeriodChange = (period: TimePeriod) => {
    setTimePeriod(period);
  };

  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    if (isNaN(num)) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(num);
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    if (timePeriod === '4h') {
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } else if (timePeriod === '1d') {
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      fontFamily: 'Outfit, sans-serif',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    colors: [priceChange >= 0 ? '#10B981' : '#EF4444'], // Green for positive, red for negative
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    grid: {
      show: true,
      borderColor: '#f1f5f9',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: 'category',
      categories: chartData.map(point => formatDate(point.timestamp)),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280',
        },
        formatter: (value) => `$${formatPrice(value.toString())}`,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        format: timePeriod === '4h' || timePeriod === '1d' 
          ? 'MMM dd, HH:mm' 
          : 'MMM dd, yyyy',
      },
      y: {
        formatter: (value) => `$${formatPrice(value.toString())}`,
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Outfit, sans-serif',
      },
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: `${tokenSymbol} Price`,
      data: chartData.map(point => parseFloat(point.price)),
    },
  ];

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="flex items-center justify-center h-80">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading chart data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="flex items-center justify-center h-80">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-red-600 font-medium">Error loading chart</p>
            <p className="text-gray-600 text-sm mt-2">{error}</p>
            <button
              onClick={() => fetchChartData(timePeriod)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="flex items-center justify-center h-80">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">📊</div>
            <p className="text-gray-600 font-medium">No chart data available</p>
            <p className="text-gray-500 text-sm mt-2">
              Chart data will appear once the token's graph cron is activated
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {tokenSymbol} Price Chart
            </h3>
            <div className="flex items-center mt-1">
              <span className="text-2xl font-bold text-gray-900">
                ${formatPrice(chartData[chartData.length - 1]?.price || '0')}
              </span>
              <span className={`ml-3 px-2 py-1 rounded text-sm font-medium ${
                priceChange >= 0 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
              </span>
            </div>
          </div>
          
          {/* Time Period Selector */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {[
              { key: '4h', label: '4H' },
              { key: '1d', label: '1D' },
              { key: 'max', label: 'MAX' },
            ].map((period) => (
              <button
                key={period.key}
                onClick={() => handleTimePeriodChange(period.key as TimePeriod)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  timePeriod === period.key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <Chart
          options={chartOptions}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default TokenChart;