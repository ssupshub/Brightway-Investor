import React from 'react';

interface MarqueeTickerProps {
  darkMode: boolean;
}

const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ darkMode }) => {
  const tickerItems = [
    "🔥 NIFTY 50: 19,845.65 (+1.23%) | Volume: 2.5B",
    "📈 SENSEX: 66,527.67 (+0.89%) | Volume: 1.8B", 
    "⭐ Top Gainer: RELIANCE (+2.34%) | ₹2,847.50",
    "📊 HDFC BANK: ₹1,678.90 (-0.45%) | Volume: 3.2M",
    "💡 TCS: ₹3,456.80 (+1.87%) | Market Cap: ₹12.6L Cr",
    "🎯 INFOSYS: ₹1,234.56 (+3.21%) | Volume: 1.9M",
    "🚀 ICICI BANK: ₹987.65 (+0.98%) | Market Cap: ₹6.9L Cr",
    "₿ BITCOIN: $43,256.78 (+2.94%) | Volume: 28.5B",
    "⟠ ETHEREUM: $2,567.89 (+3.61%) | Volume: 15.2B",
    "📞 Call Now: +91 9355659990 for Expert Guidance",
    "💼 WIPRO: ₹445.30 (+1.45%) | Volume: 1.3M",
  ];

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