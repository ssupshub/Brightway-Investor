import React from 'react';

interface MarqueeTickerProps {
  darkMode: boolean;
}

const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ darkMode }) => {
  const [tickerItems, setTickerItems] = React.useState([
    "📞 Call Now: +91 9355659990 for Expert Guidance",
    "💬 WhatsApp: +91 9355659990 for Instant Support",
    "📈 Real-time Market Data Powered by Finnhub & CoinGecko APIs",
    "🔥 Live Stock Prices | Crypto Prices | Indian Indices",
    "💡 Professional Investment Guidance Available",
    "🎯 Stock Market Education & Mentorship Programs",
    "🚀 Portfolio Consultation Services",
    "₿ Live Cryptocurrency Prices from CoinGecko",
    "📊 US Stock Market Data from Finnhub API",
    "🏦 Indian Market Indices Updated Live",
    "💼 Expert Analysis & Market Insights",
    "🌟 Join 10,000+ Successful Investors",
    "📱 Download Our Investment Calculators",
    "💰 Start Your Investment Journey Today"
  ]);


  return (
    <div className={`py-3 ${
      darkMode ? 'bg-gray-800 border-y border-gray-700' : 'bg-blue-600 border-y border-blue-700'
    } overflow-hidden`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            key={index}
            className={`inline-block px-8 text-sm font-medium ${
              darkMode ? 'text-blue-400' : 'text-white'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;