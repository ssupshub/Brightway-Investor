import React from 'react';
import { AlertTriangle, Shield, BookOpen, Scale } from 'lucide-react';

interface DisclaimerProps {
  darkMode: boolean;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ darkMode }) => {
  return (
    <div className={`pt-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-red-50 to-orange-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Important <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Disclaimer
              </span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Please read this disclaimer carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Disclaimer Content */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Market Risk Warning */}
            <div className={`p-8 rounded-2xl border-l-4 border-red-500 ${
              darkMode ? 'bg-red-900/20 border border-red-800' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Investment Risk Warning
                  </h2>
                  <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <strong>Investments in securities market are subject to market risks.</strong> Read all the related documents carefully before investing. Past performance is not indicative of future results.
                  </p>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Stock prices can go up or down and you may lose money</li>
                    <li>• Market volatility can significantly impact your investments</li>
                    <li>• There are no guaranteed returns in stock market investments</li>
                    <li>• Economic and political factors can affect market performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Educational Purpose */}
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-start space-x-4">
                <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Educational Guidance Only
                  </h2>
                  <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Brightway Investor provides <strong>educational guidance and market insights</strong> to help you make informed investment decisions. Our content is for educational purposes only and should not be considered as personalized investment advice.
                  </p>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• All content is for educational and informational purposes</li>
                    <li>• We teach you how to analyze and research investments</li>
                    <li>• Our goal is to improve your financial literacy</li>
                    <li>• You are responsible for your own investment decisions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEBI Registration */}
            <div className={`p-8 rounded-2xl border-l-4 border-orange-500 ${
              darkMode ? 'bg-orange-900/20 border border-orange-800' : 'bg-orange-50 border border-orange-200'
            }`}>
              <div className="flex items-start space-x-4">
                <Scale className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    SEBI Registration Status
                  </h2>
                  <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <strong>Brightway Investor is NOT a SEBI-registered investment advisor.</strong> We are transparent about our status and operate as an educational platform.
                  </p>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• We are not authorized to provide personalized investment advice</li>
                    <li>• We do not manage portfolios or handle client funds</li>
                    <li>• Our services are limited to education and general market insights</li>
                    <li>• Always consult with SEBI-registered advisors for personalized advice</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* General Terms */}
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    General Terms & Conditions
                  </h2>
                  <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h3 className="font-semibold mb-2">No Guarantee of Results</h3>
                      <p>We do not guarantee any specific investment results or returns. Market performance depends on various factors beyond our control.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Personal Responsibility</h3>
                      <p>You are solely responsible for your investment decisions. Always do your own research and consider your risk tolerance before investing.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Content Accuracy</h3>
                      <p>While we strive for accuracy, we cannot guarantee that all information is error-free or up-to-date. Market conditions change rapidly.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                      <p>Brightway Investor and its team shall not be liable for any losses arising from the use of our educational content or services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white`}>
              <h2 className="text-2xl font-bold mb-4">Questions About This Disclaimer?</h2>
              <p className="text-lg mb-4">
                If you have any questions about this disclaimer or our services, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+919355659990"
                  className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <span>📞 +91 9355659990</span>
                </a>
                <a 
                  href="https://wa.me/919355659990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Last updated: January 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;