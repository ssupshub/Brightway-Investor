import React from 'react';
import {
  BookOpen,
  Users,
  FileText,
  User,
  BarChart3,
  Briefcase,
  Globe,
  TrendingUp,
  Shield,
  Calculator,
  Phone,
} from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: BookOpen,
      title: "Stock Market Education",
      description: "Basic to advanced concepts",
      fullDescription: "Comprehensive courses covering fundamental analysis, technical analysis, market psychology, and advanced trading strategies. Perfect for beginners and experienced traders alike.",
      features: ["Fundamental Analysis", "Technical Analysis", "Risk Management", "Portfolio Building"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Investment Community",
      description: "Join our community of successful investors",
      fullDescription: "Connect with like-minded investors, share experiences, and learn from each other in our exclusive investment community.",
      features: ["Community Access", "Peer Learning", "Discussion Forums", "Success Stories"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "Monthly & Daily Insights",
      description: "Charts, analysis, and data",
      fullDescription: "Detailed market reports, technical charts, and data-driven insights delivered daily and monthly to keep you ahead of the market.",
      features: ["Daily Market Reports", "Technical Charts", "Sector Analysis", "Economic Calendar"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: User,
      title: "One-on-One Mentorship",
      description: "Premium support",
      fullDescription: "Personal mentorship sessions with experienced traders and analysts to accelerate your learning and trading performance.",
      features: ["Personal Mentor", "Custom Strategy", "Progress Tracking", "Unlimited Calls"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Stock Analysis PDFs",
      description: "Performance reviews, news, results",
      fullDescription: "Comprehensive PDF reports on individual stocks including financial analysis, news impact, and quarterly results breakdown.",
      features: ["Financial Analysis", "News Impact", "Quarterly Results", "Price Targets"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Briefcase,
      title: "Mutual Funds & ETF Education",
      description: "Learn about mutual funds and ETFs",
      fullDescription: "Educational content on mutual fund selection, ETF strategies, and systematic investment planning for long-term wealth creation.",
      features: ["Fund Education", "SIP Learning", "Goal-based Planning", "Tax Education"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Forex & Global Market News",
      description: "Latest updates",
      fullDescription: "Stay updated with global market movements, forex trends, and international events that impact Indian markets.",
      features: ["Global Market News", "Forex Analysis", "Currency Trends", "Impact Assessment"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className={`pt-20 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Comprehensive investment solutions tailored for your financial success
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  
                  <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-700'} leading-relaxed`}>
                    {service.fullDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors bg-gradient-to-r ${service.color} text-white hover:opacity-90`}>
                    <a href="https://wa.me/919355659990" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      Contact on WhatsApp
                    </a>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Start Your Investment Journey?
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Get personalized guidance from our experts and make informed investment decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919355659990"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: +91 9355659990</span>
            </a>
            <a 
              href="https://wa.me/919355659990"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
            >
              <span>WhatsApp Us: +91 9355659990</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;