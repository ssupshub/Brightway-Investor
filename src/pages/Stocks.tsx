import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Search, RefreshCw, AlertCircle } from 'lucide-react';

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
  const [stocksData, setStocksData] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiStatus, setApiStatus] = useState({
    finnhub: 'loading',
    coingecko: 'loading',
    indices: 'loading'
  });

  // Fetch US Stocks Data
  const fetchUSStocksData = async (): Promise<Stock[]> => {
    try {
      setApiStatus(prev => ({ ...prev, finnhub: 'loading' }));
      
      // Generate realistic fallback data for US stocks since API key is invalid
      const usStocks = US_STOCKS.map(stock => {
        const basePrice = Math.random() * 300 + 50; // Price between $50-$350
        const changeAmount = (Math.random() - 0.5) * 20; // Change between -$10 to +$10
        const changePercent = (changeAmount / basePrice) * 100;
        
        return {
          symbol: stock.symbol,
          name: stock.name,
          price: `$${basePrice.toFixed(2)}`,
          change: changeAmount >= 0 ? `+$${changeAmount.toFixed(2)}` : `-$${Math.abs(changeAmount).toFixed(2)}`,
          changePercent: `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`,
          volume: `${(Math.random() * 100 + 10).toFixed(1)}M`,
          marketCap: `$${(Math.random() * 2000 + 500).toFixed(1)}B`,
          sector: 'US Stocks',
          isPositive: changeAmount >= 0,
          isLive: false // Indicate this is simulated data
        };
      });
      
      setApiStatus(prev => ({ ...prev, finnhub: 'error' }));
      return usStocks;
    } catch (error) {
      console.error('Error fetching US stocks:', error);
      setApiStatus(prev => ({ ...prev, finnhub: 'error' }));
      return [];
    }
  };

  // Fetch Crypto Data
  const fetchCryptoData = async (): Promise<Stock[]> => {
    try {
      setApiStatus(prev => ({ ...prev, coingecko: 'loading' }));
      
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${CRYPTO_SYMBOLS.join(',')}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      const cryptoStocks: Stock[] = CRYPTO_SYMBOLS.map(symbol => {
        const coinData = data[symbol];
        if (!coinData) {
          return null;
        }
        
        const price = coinData.usd;
        const change24h = coinData.usd_24h_change || 0;
        const volume = coinData.usd_24h_vol || 0;
        const marketCap = coinData.usd_market_cap || 0;
        
        return {
          symbol: symbol.toUpperCase().replace('-', ''),
          name: symbol.charAt(0).toUpperCase() + symbol.slice(1).replace('-', ' '),
          price: price >= 1 ? `$${price.toFixed(2)}` : `$${price.toFixed(6)}`,
          change: change24h >= 0 ? `+${change24h.toFixed(2)}%` : `${change24h.toFixed(2)}%`,
          changePercent: `${change24h >= 0 ? '+' : ''}${change24h.toFixed(2)}%`,
          volume: volume > 1000000 ? `$${(volume / 1000000).toFixed(1)}M` : `$${volume.toFixed(0)}`,
          marketCap: marketCap > 1000000000 ? `$${(marketCap / 1000000000).toFixed(1)}B` : `$${(marketCap / 1000000).toFixed(1)}M`,
          sector: 'Crypto',
          isPositive: change24h >= 0,
          isLive: true
        };
      }).filter(Boolean) as Stock[];
      
      setApiStatus(prev => ({ ...prev, coingecko: 'success' }));
      return cryptoStocks;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setApiStatus(prev => ({ ...prev, coingecko: 'error' }));
      return [];
    }
  };

  // Simulate Indian Indices Data

  // Fetch All Market Data
  const fetchAllMarketData = async () => {
    setIsLoading(true);
    
    try {
      const [usStocks, cryptoData] = await Promise.all([
        fetchUSStocksData(),
        fetchCryptoData()
      ]);
      
      const allStocks = [...usStocks, ...cryptoData];
      setStocksData(allStocks);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching market data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter and sort stocks
  const filteredStocks = stocksData
    .filter(stock => {
      const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           stock.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'All' || stock.sector === selectedSector;
      return matchesSearch && matchesSector;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          const priceA = parseFloat(a.price.replace(/[$,]/g, ''));
          const priceB = parseFloat(b.price.replace(/[$,]/g, ''));
          return priceB - priceA;
        case 'change':
          const changeA = parseFloat(a.changePercent.replace(/[%+]/g, ''));
          const changeB = parseFloat(b.changePercent.replace(/[%+]/g, ''));
          return changeB - changeA;
        default:
          return a.symbol.localeCompare(b.symbol);
      }
    });

  // Fetch data on component mount and set up auto-refresh
  useEffect(() => {
    fetchAllMarketData();
    
    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchAllMarketData, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const sectors = ['All', 'Crypto', 'US Stocks'];

  // US Stocks to fetch
  const US_STOCKS = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.' },
    { symbol: 'TSLA', name: 'Tesla Inc.' },
    { symbol: 'META', name: 'Meta Platforms Inc.' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation' },
    { symbol: 'NFLX', name: 'Netflix Inc.' },
    { symbol: 'AMD', name: 'Advanced Micro Devices' },
    { symbol: 'CRM', name: 'Salesforce Inc.' },
    { symbol: 'ORCL', name: 'Oracle Corporation' },
    { symbol: 'ADBE', name: 'Adobe Inc.' },
    { symbol: 'PYPL', name: 'PayPal Holdings' },
    { symbol: 'INTC', name: 'Intel Corporation' },
    { symbol: 'CSCO', name: 'Cisco Systems' }
  ];

  // Crypto symbols to fetch
  const CRYPTO_SYMBOLS = [
    'bitcoin', 'ethereum', 'binancecoin', 'ripple', 'cardano', 
    'solana', 'dogecoin', 'polkadot', 'polygon', 'avalanche-2',
    'chainlink', 'litecoin', 'uniswap', 'stellar', 'filecoin'
  ];


  // ... rest of the code remains the same ...

  return (
    <div className={`main-content min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Live Market Data
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${apiStatus.finnhub === 'success' ? 'bg-green-500' : apiStatus.finnhub === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
              <span className="text-sm">US Stocks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${apiStatus.coingecko === 'success' ? 'bg-green-500' : apiStatus.coingecko === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
              <span className="text-sm">Crypto</span>
            </div>
            <button
              onClick={fetchAllMarketData}
              disabled={isLoading}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700' 
                  : 'bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400'
              } text-white disabled:cursor-not-allowed`}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
          <p className="text-sm opacity-75">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                  : 'bg-white border-gray-300 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
          </div>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            {sectors.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="symbol">Symbol</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="change">Change</option>
          </select>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-6 h-6 animate-spin text-blue-500" />
              <span>Loading market data...</span>
            </div>
          </div>
        )}

        {/* Stocks Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStocks.map((stock) => (
              <div
                key={stock.symbol}
                className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{stock.symbol}</h3>
                    <p className="text-sm opacity-75 truncate">{stock.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {stock.isLive && (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                    {stock.isPositive ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{stock.price}</span>
                    <div className={`text-right ${stock.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                      <div className="font-semibold">{stock.change}</div>
                      <div className="text-sm">({stock.changePercent})</div>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-opacity-20 border-gray-400">
                    <div className="flex justify-between text-sm opacity-75">
                      <span>Volume</span>
                      <span>{stock.volume}</span>
                    </div>
                    {stock.marketCap && (
                      <div className="flex justify-between text-sm opacity-75">
                        <span>Market Cap</span>
                        <span>{stock.marketCap}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm opacity-75">
                      <span>Sector</span>
                      <span>{stock.sector}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredStocks.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No stocks found</h3>
            <p className="opacity-75">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
  );
};

export default Stocks;