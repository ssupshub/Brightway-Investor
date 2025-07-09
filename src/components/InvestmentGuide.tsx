import React from 'react';
import { BookOpen, Target, TrendingUp, Shield, DollarSign, BarChart3, Users, Lightbulb } from 'lucide-react';

interface InvestmentGuideProps {
  darkMode: boolean;
}

const InvestmentGuide: React.FC<InvestmentGuideProps> = ({ darkMode }) => {
  const tips = [
    {
      icon: Target,
      title: 'Set Clear Goals',
      description: 'Define your investment objectives - whether it\'s wealth creation, retirement planning, or short-term gains.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Diversify Your Portfolio',
      description: 'Don\'t put all eggs in one basket. Spread investments across different sectors and asset classes.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Research Before Investing',
      description: 'Always analyze company fundamentals, financial health, and market trends before making investment decisions.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Start with Small Amounts',
      description: 'Begin your investment journey with amounts you can afford to lose while you learn the market.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: TrendingUp,
      title: 'Think Long-term',
      description: 'Successful investing requires patience. Focus on long-term wealth creation rather than quick profits.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Learn Continuously',
      description: 'Stay updated with market news, learn new strategies, and continuously improve your investment knowledge.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const investmentSteps = [
    {
      step: '1',
      title: 'Open Demat Account',
      description: 'Choose a reliable broker and open your Demat and trading account to start investing.'
    },
    {
      step: '2', 
      title: 'Complete KYC',
      description: 'Submit required documents for KYC verification to activate your trading account.'
    },
    {
      step: '3',
      title: 'Fund Your Account',
      description: 'Transfer money to your trading account through net banking or other payment methods.'
    },
    {
      step: '4',
      title: 'Research Stocks',
      description: 'Analyze companies, read financial reports, and understand market trends before investing.'
    },
    {
      step: '5',
      title: 'Start Investing',
      description: 'Begin with small amounts in blue-chip stocks and gradually diversify your portfolio.'
    },
    {
      step: '6',
      title: 'Monitor & Review',
      description: 'Regularly review your portfolio performance and rebalance as per your goals.'
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Investment Tips */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-yellow-500" />
            </div>
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Smart Investment Tips
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Essential guidelines to help you make informed investment decisions and build wealth systematically
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tip.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tip.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investment Guide Steps */}
        <div>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              How to Start Investing
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              A step-by-step guide to begin your investment journey in the Indian stock market
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            } hidden lg:block`}></div>

            <div className="space-y-12">
              {investmentSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                    <div className={`p-6 rounded-2xl ${
                      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    } shadow-lg hover:shadow-xl transition-shadow`}>
                      <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {step.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl my-4 lg:my-0 relative z-10">
                    {step.step}
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white`}>
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized guidance from our experts and make informed investment decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919355659990"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: +91 9355659990
              </a>
              <a 
                href="https://wa.me/919355659990"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuide;