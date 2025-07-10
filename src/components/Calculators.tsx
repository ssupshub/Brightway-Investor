import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

interface CalculatorsProps {
  darkMode: boolean;
}

const Calculators: React.FC<CalculatorsProps> = ({ darkMode }) => {
  const [activeCalculator, setActiveCalculator] = useState('sip');
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  
  const [cagrInitial, setCagrInitial] = useState(100000);
  const [cagrFinal, setCagrFinal] = useState(200000);
  const [cagrYears, setCagrYears] = useState(5);

  const [intradayCapital, setIntradayCapital] = useState(50000);
  const [intradayEntry, setIntradayEntry] = useState(100);
  const [intradayExit, setIntradayExit] = useState(105);
  const [intradayQuantity, setIntradayQuantity] = useState(500);

  const calculateSIP = () => {
    const monthlyRate = sipRate / 100 / 12;
    const months = sipYears * 12;
    const futureValue = sipAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvested = sipAmount * months;
    const returns = futureValue - totalInvested;
    return { futureValue, totalInvested, returns };
  };

  const calculateCAGR = () => {
    const cagr = (Math.pow(cagrFinal / cagrInitial, 1 / cagrYears) - 1) * 100;
    return cagr;
  };

  const calculateIntraday = () => {
    const profitPerShare = intradayExit - intradayEntry;
    const totalProfit = profitPerShare * intradayQuantity;
    const profitPercentage = (profitPerShare / intradayEntry) * 100;
    return { totalProfit, profitPercentage };
  };

  const sipResults = calculateSIP();
  const cagrResult = calculateCAGR();
  const intradayResults = calculateIntraday();

  const calculators = [
    {
      id: 'sip',
      name: 'SIP Calculator',
      icon: Calculator,
      description: 'Calculate your SIP returns',
    },
    {
      id: 'cagr',
      name: 'CAGR Calculator',
      icon: TrendingUp,
      description: 'Calculate compound annual growth rate',
    },
    {
      id: 'intraday',
      name: 'Intraday P&L',
      icon: BarChart3,
      description: 'Estimate intraday profit & loss',
    },
  ];

  return (
    <section id="calculators" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Investment Calculators
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Plan your investments with our interactive tools
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Tabs */}
          <div className="space-y-4">
            {calculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <button
                  key={calc.id}
                  onClick={() => setActiveCalculator(calc.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                    activeCalculator === calc.id
                      ? darkMode
                        ? 'bg-blue-900 border-2 border-blue-600'
                        : 'bg-blue-50 border-2 border-blue-600'
                      : darkMode
                        ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                        : 'bg-white border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-6 h-6 ${
                      activeCalculator === calc.id ? 'text-blue-600' : darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                    <div>
                      <h3 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {calc.name}
                      </h3>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {calc.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Calculator Input */}
          <div className={`p-6 rounded-2xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            {activeCalculator === 'sip' && (
              <div className="space-y-6">
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  SIP Calculator
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Monthly Investment (₹)
                    </label>
                    <input
                      type="number"
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Expected Annual Return (%)
                    </label>
                    <input
                      type="number"
                      value={sipRate}
                      onChange={(e) => setSipRate(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Investment Period (Years)
                    </label>
                    <input
                      type="number"
                      value={sipYears}
                      onChange={(e) => setSipYears(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeCalculator === 'cagr' && (
              <div className="space-y-6">
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  CAGR Calculator
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Initial Investment (₹)
                    </label>
                    <input
                      type="number"
                      value={cagrInitial}
                      onChange={(e) => setCagrInitial(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Final Value (₹)
                    </label>
                    <input
                      type="number"
                      value={cagrFinal}
                      onChange={(e) => setCagrFinal(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Investment Period (Years)
                    </label>
                    <input
                      type="number"
                      value={cagrYears}
                      onChange={(e) => setCagrYears(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeCalculator === 'intraday' && (
              <div className="space-y-6">
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Intraday P&L Calculator
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Entry Price (₹)
                    </label>
                    <input
                      type="number"
                      value={intradayEntry}
                      onChange={(e) => setIntradayEntry(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Exit Price (₹)
                    </label>
                    <input
                      type="number"
                      value={intradayExit}
                      onChange={(e) => setIntradayExit(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={intradayQuantity}
                      onChange={(e) => setIntradayQuantity(Number(e.target.value))}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div className={`p-6 rounded-2xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <h3 className={`text-xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Results
            </h3>

            {activeCalculator === 'sip' && (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-blue-50'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Future Value
                  </p>
                  <p className={`text-2xl font-bold text-blue-600`}>
                    ₹{sipResults.futureValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-green-50'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Invested
                  </p>
                  <p className={`text-xl font-semibold text-green-600`}>
                    ₹{sipResults.totalInvested.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-purple-50'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Returns
                  </p>
                  <p className={`text-xl font-semibold text-purple-600`}>
                    ₹{sipResults.returns.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            )}

            {activeCalculator === 'cagr' && (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-blue-50'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    CAGR
                  </p>
                  <p className={`text-3xl font-bold text-blue-600`}>
                    {cagrResult.toFixed(2)}%
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-green-50'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Growth
                  </p>
                  <p className={`text-xl font-semibold text-green-600`}>
                    ₹{(cagrFinal - cagrInitial).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            )}

            {activeCalculator === 'intraday' && (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  intradayResults.totalProfit >= 0 
                    ? darkMode ? 'bg-green-900/30' : 'bg-green-50'
                    : darkMode ? 'bg-red-900/30' : 'bg-red-50'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total P&L
                  </p>
                  <p className={`text-2xl font-bold ${
                    intradayResults.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ₹{intradayResults.totalProfit.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-blue-50'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Return %
                  </p>
                  <p className={`text-xl font-semibold ${
                    intradayResults.profitPercentage >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {intradayResults.profitPercentage.toFixed(2)}%
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculators;