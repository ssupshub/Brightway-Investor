import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Search, Filter, RefreshCw } from 'lucide-react';

interface StocksProps {
  darkMode: boolean;
}

interface Stock {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
  marketCap: string;
  sector: string;
  isPositive: boolean;
  isLive: boolean;
}

const Stocks: React.FC<StocksProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortBy, setSortBy] = useState('symbol');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const stocksData: Stock[] = [
    {
      symbol: 'RELIANCE',
      name: 'Reliance Industries Ltd',
      price: '₹2,847.50',
      change: '+66.70',
      changePercent: '+2.34%',
      volume: '2.5M',
      marketCap: '₹19.2L Cr',
      sector: 'Oil & Gas',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'TCS',
      name: 'Tata Consultancy Services',
      price: '₹3,456.80',
      change: '+63.50',
      changePercent: '+1.87%',
      volume: '1.8M',
      marketCap: '₹12.6L Cr',
      sector: 'IT',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'HDFCBANK',
      name: 'HDFC Bank Ltd',
      price: '₹1,678.90',
      change: '-7.60',
      changePercent: '-0.45%',
      volume: '3.2M',
      marketCap: '₹9.3L Cr',
      sector: 'Banking',
      isPositive: false,
      isLive: true
    },
    {
      symbol: 'INFY',
      name: 'Infosys Ltd',
      price: '₹1,234.56',
      change: '+38.90',
      changePercent: '+3.21%',
      volume: '1.9M',
      marketCap: '₹5.1L Cr',
      sector: 'IT',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'ICICIBANK',
      name: 'ICICI Bank Ltd',
      price: '₹987.65',
      change: '+9.60',
      changePercent: '+0.98%',
      volume: '2.1M',
      marketCap: '₹6.9L Cr',
      sector: 'Banking',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'WIPRO',
      name: 'Wipro Ltd',
      price: '₹445.30',
      change: '+6.35',
      changePercent: '+1.45%',
      volume: '1.3M',
      marketCap: '₹2.4L Cr',
      sector: 'IT',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'BAJFINANCE',
      name: 'Bajaj Finance Ltd',
      price: '₹6,789.20',
      change: '-84.50',
      changePercent: '-1.23%',
      volume: '0.8M',
      marketCap: '₹4.2L Cr',
      sector: 'Financial Services',
      isPositive: false,
      isLive: true
    },
    {
      symbol: 'MARUTI',
      name: 'Maruti Suzuki India Ltd',
      price: '₹10,234.75',
      change: '+68.25',
      changePercent: '+0.67%',
      volume: '0.9M',
      marketCap: '₹3.1L Cr',
      sector: 'Auto',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'HINDUNILVR',
      name: 'Hindustan Unilever Ltd',
      price: '₹2,456.80',
      change: '-12.30',
      changePercent: '-0.50%',
      volume: '1.1M',
      marketCap: '₹5.8L Cr',
      sector: 'FMCG',
      isPositive: false,
      isLive: true
    },
    {
      symbol: 'BHARTIARTL',
      name: 'Bharti Airtel Ltd',
      price: '₹1,123.45',
      change: '+23.80',
      changePercent: '+2.16%',
      volume: '2.3M',
      marketCap: '₹6.2L Cr',
      sector: 'Telecom',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'ASIANPAINT',
      name: 'Asian Paints Ltd',
      price: '₹3,234.90',
      change: '-45.60',
      changePercent: '-1.39%',
      volume: '0.7M',
      marketCap: '₹3.1L Cr',
      sector: 'Paints',
      isPositive: false,
      isLive: true
    },
    {
      symbol: 'KOTAKBANK',
      name: 'Kotak Mahindra Bank Ltd',
      price: '₹1,789.30',
      change: '+15.70',
      changePercent: '+0.88%',
      volume: '1.5M',
      marketCap: '₹3.6L Cr',
      sector: 'Banking',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: '$43,256.78',
      change: '+1,245.67',
      changePercent: '+2.94%',
      volume: '28.5B',
      marketCap: '$847B',
      sector: 'Crypto',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2,567.89',
      change: '+89.45',
      changePercent: '+3.61%',
      volume: '15.2B',
      marketCap: '$308B',
      sector: 'Crypto',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: '$312.45',
      change: '+8.90',
      changePercent: '+2.93%',
      volume: '2.1B',
      marketCap: '$48B',
      sector: 'Crypto',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: '$0.4567',
      change: '+0.0234',
      changePercent: '+5.41%',
      volume: '890M',
      marketCap: '$16B',
      sector: 'Crypto',
      isPositive: true,
      isLive: true
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: '$67.89',
      change: '-1.23',
      changePercent: '-1.78%',
      volume: '1.2B',
      marketCap: '$29B',
      sector: 'Crypto',
      isPositive: false,
      isLive: true
    }
  ];

  const sectors = ['All', 'IT', 'Banking', 'Oil & Gas', 'Auto', 'FMCG', 'Telecom', 'Financial Services', 'Paints', 'Crypto'];

  const filteredStocks = stocksData
    .filter(stock => 
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(stock => selectedSector === 'All' || stock.sector === selectedSector)
    .sort((a, b) => {
      switch (sortBy) {
        case 'change':
          return parseFloat(b.changePercent) - parseFloat(a.changePercent);
        case 'volume':
          return parseFloat(b.volume) - parseFloat(a.volume);
        case 'price':
          return parseFloat(b.price.replace(/[₹,]/g, '')) - parseFloat(a.price.replace(/[₹,]/g, ''));
        default:
          return a.symbol.localeCompare(b.symbol);
      }
    });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    setLastUpdated(new Date());
  };

  return (
    <div className={`pt-16 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Live <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stock Prices
              </span>
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Real-time stock prices and market data for informed investment decisions
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
              <button
                onClick={refreshData}
                className={`p-1 rounded-full hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700' : ''} transition-colors`}
              >
                <RefreshCw className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  placeholder="Search stocks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors`}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors`}
              >
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors`}
              >
                <option value="symbol">Sort by Symbol</option>
                <option value="change">Sort by Change</option>
                <option value="volume">Sort by Volume</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stocks Table */}
      <section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl overflow-hidden ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <tr>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Stock
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Price
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Change
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Volume
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Market Cap
                    </th>
                    <th className={`px-6 py-4 text-center text-sm font-semibold ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Sector
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStocks.map((stock, index) => (
                    <tr
                      key={stock.symbol}
                      className={`border-t ${
                        darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-50'
                      } transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {stock.symbol}
                            {stock.isLive && (
                              <span className="ml-2 inline-flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="ml-1 text-xs text-green-500">LIVE</span>
                              </span>
                            )}
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {stock.name}
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-right font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {stock.price}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className={`flex items-center justify-end space-x-1 ${
                          stock.isPositive ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stock.isPositive ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <div>
                            <div className="font-semibold">{stock.changePercent}</div>
                            <div className="text-sm">{stock.change}</div>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-right ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {stock.volume}
                      </td>
                      <td className={`px-6 py-4 text-right ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {stock.marketCap}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {stock.sector}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4 p-4">
              {filteredStocks.map((stock) => (
                <div
                  key={stock.symbol}
                  className={`p-4 rounded-xl border ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } shadow-lg`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stock.symbol}
                        {stock.isLive && (
                          <span className="ml-2 inline-flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="ml-1 text-xs text-green-500">LIVE</span>
                          </span>
                        )}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stock.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stock.price}
                      </div>
                      <div className={`flex items-center space-x-1 ${
                        stock.isPositive ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stock.isPositive ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-semibold">{stock.changePercent}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Volume</p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stock.volume}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Market Cap</p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stock.marketCap}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sector</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {stock.sector}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stocks;