import React, { useEffect, useState } from 'react';
import { Play, MessageCircle, TrendingUp, BarChart3, Phone, BookOpen, Target } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentStock, setCurrentStock] = useState(0);
  
  const [stockData, setStockData] = useState([
    { symbol: 'Loading...', price: 'Fetching...', change: '...', color: 'text-gray-500', volume: '...', api: 'API' }
  ]);

  // Fetch real market data for hero section
  const fetchHeroData = async () => {
    try {
      // Fetch a few key stocks for hero display
      const [cryptoResponse, stockResponse] = await Promise.all([
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum&order=market_cap_desc&per_page=2&page=1&sparkline=false&price_change_percentage=24h'),
        fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=cr8pr61r01qnc8qhqhd0cr8pr61r01qnc8qhqhe0')
      ]);

      const heroData = [];

      // Add Indian indices (simulated)

      // Add crypto data
      if (cryptoResponse.ok) {
        const cryptoData = await cryptoResponse.json();
        cryptoData.forEach((crypto: any) => {
          heroData.push({
            symbol: crypto.symbol.toUpperCase(),
            price: `$${crypto.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            change: `${crypto.price_change_percentage_24h >= 0 ? '+' : ''}${crypto.price_change_percentage_24h.toFixed(2)}%`,
            color: crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500',
            volume: `${(crypto.total_volume / 1e9).toFixed(1)}B`,
            api: 'CoinGecko'
          });
        });
      }

      // Add US stock data
      if (stockResponse.ok) {
        const stockData = await stockResponse.json();
        if (stockData.c && stockData.c > 0) {
          const changePercent = stockData.dp || 0;
          heroData.push({
            symbol: 'AAPL',
            price: `$${stockData.c.toFixed(2)}`,
            change: `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`,
            color: changePercent >= 0 ? 'text-green-500' : 'text-red-500',
            volume: '45M',
            api: 'Finnhub'
          });
        }
      }

      if (heroData.length > 0) {
        setStockData(heroData);
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };
  
  useEffect(() => {
    // Fetch initial data
    fetchHeroData();
    
    // Update data every 60 seconds
    const priceInterval = setInterval(fetchHeroData, 60000);
    
    // Rotate current stock every 2 seconds
    const interval = setInterval(() => {
      setCurrentStock((prev) => (prev + 1) % stockData.length);
    }, 2000);
    
    return () => {
      clearInterval(interval);
      clearInterval(priceInterval);
    };
  }, []);

  return (
    <section id="home" className={`relative min-h-screen flex items-center ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Master the{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Stock Market
                </span>
              </h1>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
                Transform your financial future with expert guidance, real-time insights, and proven strategies from India's trusted investment platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                <span>Explore Services</span>
              </a>
              <a 
                href="tel:+919355659990"
                className={`flex items-center justify-center space-x-2 border-2 ${
                darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              } px-8 py-4 rounded-lg font-semibold transition-all duration-200`}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a 
                href="https://wa.me/919355659990?text=Hi%20Team%20Brightway%20Investor%2C%20%F0%9F%91%8B%0AI%20came%20across%20your%20website%2C%20and%20I%27m%20really%20interested%20in%20learning%20more%20about%20your%20services.%0ACould%20you%20please%20share%20the%20details%20about%20your%20stock%20market%20programs%20and%20consultation%20offerings%3F%20%F0%9F%93%88%0ALooking%20forward%20to%20hearing%20from%20you%21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Investment Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl ${
                darkMode ? 'bg-blue-900/20 border border-blue-600' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-center space-x-3 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className={`font-semibold text-sm ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                    Investment Tip
                  </h3>
                </div>
                <p className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  Diversify your portfolio across different sectors to minimize risk
                </p>
                <a 
                  href="#smart-investment-tips"
                  className={`inline-block mt-2 text-xs font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} underline`}
                >
                  Learn More →
                </a>
              </div>
              
              <div className={`p-4 rounded-xl ${
                darkMode ? 'bg-green-900/20 border border-green-600' : 'bg-green-50 border border-green-200'
              }`}>
                <div className="flex items-center space-x-3 mb-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <h3 className={`font-semibold text-sm ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                    Market Guide
                  </h3>
                </div>
                <p className={`text-xs ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                  Always research fundamentals before investing in any stock
                </p>
                <a 
                  href="#how-to-start-investing"
                  className={`inline-block mt-2 text-xs font-medium ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'} underline`}
                >
                  Start Guide →
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Live Market Data */}
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-xl`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Live Market Updates
              </h3>
              <div className="space-y-3">
                {stockData.map((stock, index) => (
                  <div
                    key={stock.symbol}
                    className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
                      index === currentStock
                        ? darkMode ? 'bg-blue-900/30 border border-blue-600' : 'bg-blue-50 border border-blue-200'
                        : darkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}
                  >
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stock.symbol}
                      </p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stock.api}: {stock.volume}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stock.price}
                        <span className="ml-2 inline-flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="ml-1 text-xs text-green-500">LIVE</span>
                        </span>
                      </p>
                      <p className={`text-xs font-semibold ${stock.color}`}>{stock.change}</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className={`w-3 h-3 ${stock.color}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Widgets Preview */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#calculators"
                className={`p-4 rounded-xl ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-shadow cursor-pointer block`}
              >
                <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  SIP Calculator
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Plan your investments
                </p>
              </a>
              <a 
                href="#calculators"
                className={`p-4 rounded-xl ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-shadow cursor-pointer block`}
              >
                <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  CAGR Calculator
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Calculate returns
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;