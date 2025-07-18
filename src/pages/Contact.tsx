import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <div className={`main-content ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Ready to start your investment journey? Contact us for personalized guidance and support.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <a 
              href="tel:+919355659990"
              className={`p-8 rounded-2xl border-2 border-dashed transition-all duration-200 hover:scale-105 ${
                darkMode 
                  ? 'border-blue-600 bg-blue-900/20 hover:bg-blue-900/30' 
                  : 'border-blue-600 bg-blue-50 hover:bg-blue-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Call Us Now
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">+91 9355659990</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Available Mon-Sat, 9 AM - 7 PM
                  </p>
                </div>
              </div>
            </a>

            <a 
              href="https://wa.me/919355659990"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-8 rounded-2xl border-2 border-dashed transition-all duration-200 hover:scale-105 ${
                darkMode 
                  ? 'border-green-600 bg-green-900/20 hover:bg-green-900/30' 
                  : 'border-green-600 bg-green-50 hover:bg-green-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    WhatsApp Us
                  </h3>
                  <p className="text-2xl font-bold text-green-600">+91 9355659990</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Quick responses, instant support
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Instructions & Info */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Instructions */}
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                How to Contact Us for Any Query/Doubt
              </h2>
              
              <div className="space-y-6">
                <div className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-blue-50 border border-blue-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    📞 For Immediate Assistance
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Call us directly for instant support and personalized guidance:
                  </p>
                  <a 
                    href="tel:+919355659990"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now: +91 9355659990</span>
                  </a>
                </div>

                <div className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    💬 For Quick Questions & Doubts
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    WhatsApp us for quick responses to your investment queries:
                  </p>
                  <a 
                    href="https://wa.me/919355659990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp: +91 9355659990</span>
                  </a>
                </div>

                <div className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-purple-50 border border-purple-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    🤔 What You Can Ask Us About
                  </h3>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>Stock market education and courses</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>Portfolio consultation and review</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>One-on-one mentorship programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>Investment strategies and tips</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>Market analysis and insights</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>Any doubts about investing</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ⏰ Best Time to Contact
                  </h3>
                  <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 5:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                    <p className="text-sm mt-3 opacity-75">
                      For urgent queries outside business hours, WhatsApp us and we'll respond as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg`}>
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone Support
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Direct line for immediate assistance
                    </p>
                  </div>
                </div>
                <p className="text-xl font-bold text-blue-600 mb-2">+91 9355659990</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Available Monday to Saturday, 9:00 AM - 7:00 PM IST
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg`}>
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      WhatsApp Support
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Quick responses and instant support
                    </p>
                  </div>
                </div>
                <p className="text-xl font-bold text-green-600 mb-2">+91 9355659990</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fast responses during business hours
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg`}>
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Location
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Based in the financial capital
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-purple-600 mb-2">Delhi, India</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Serving investors across India
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg`}>
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Business Hours
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      When we're available to help
                    </p>
                  </div>
                </div>
                <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 5:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;