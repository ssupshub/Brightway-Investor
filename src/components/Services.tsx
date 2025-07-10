import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  Users,
  FileText,
  User,
  BarChart3,
  Briefcase,
  Globe,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      icon: BookOpen,
      title: 'Stock Market Education',
      description: 'Basic to advanced concepts',
      fullDescription: 'Comprehensive courses covering fundamental analysis, technical analysis, market psychology, and advanced trading strategies. Perfect for beginners and experienced traders alike.',
      features: ['Fundamental Analysis', 'Technical Analysis', 'Risk Management', 'Portfolio Building'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Investment Community',
      description: 'Join our community of successful investors',
      fullDescription: 'Connect with like-minded investors, share experiences, and learn from each other in our exclusive investment community.',
      features: ['Community Access', 'Peer Learning', 'Discussion Forums', 'Success Stories'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FileText,
      title: 'Monthly & Daily Insights',
      description: 'Charts, analysis, and data',
      fullDescription: 'Detailed market reports, technical charts, and data-driven insights delivered daily and monthly to keep you ahead of the market.',
      features: ['Daily Market Reports', 'Technical Charts', 'Sector Analysis', 'Economic Calendar'],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: User,
      title: 'One-on-One Mentorship',
      description: 'Premium support',
      fullDescription: 'Personal mentorship sessions with experienced traders and analysts to accelerate your learning and trading performance.',
      features: ['Personal Mentor', 'Custom Strategy', 'Progress Tracking', 'Unlimited Calls'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: BarChart3,
      title: 'Stock Analysis PDFs',
      description: 'Performance reviews, news, results',
      fullDescription: 'Comprehensive PDF reports on individual stocks including financial analysis, news impact, and quarterly results breakdown.',
      features: ['Financial Analysis', 'News Impact', 'Quarterly Results', 'Price Targets'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Briefcase,
      title: 'Mutual Funds & ETF Education',
      description: 'Learn about mutual funds and ETFs',
      fullDescription: 'Educational content on mutual fund selection, ETF strategies, and systematic investment planning for long-term wealth creation.',
      features: ['Fund Education', 'SIP Learning', 'Goal-based Planning', 'Tax Education'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Globe,
      title: 'Forex & Global Market News',
      description: 'Latest updates',
      fullDescription: 'Stay updated with global market movements, forex trends, and international events that impact Indian markets.',
      features: ['Global Market News', 'Forex Analysis', 'Currency Trends', 'Impact Assessment'],
      color: 'from-teal-500 to-teal-600',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Services
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Comprehensive investment solutions tailored for your financial success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl ${
                  isExpanded ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="space-y-4 animate-fadeIn">
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {service.fullDescription}
                      </p>
                      
                      <div>
                        <h4 className={`font-medium mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className={`text-sm flex items-center space-x-2 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  )}

                  {/* View More Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className={`flex items-center justify-center space-x-1 w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{isExpanded ? 'View Less' : 'View More'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {!isExpanded && (
                    <a
                      href="https://wa.me/919355659990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full mt-2 py-2 px-4 rounded-lg font-medium text-center transition-colors bg-gradient-to-r ${service.color} text-white hover:opacity-90`}
                    >
                      Contact on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;