import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

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
              How to Contact Us for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Any Query/Doubt
              </span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              We're here to help with all your investment questions and doubts. Choose your preferred way to reach us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Contact */}
            <div className={`p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700' : 'bg-gradient-to-br from-blue-500 to-blue-600'
            } text-white shadow-2xl`}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">📞 Call Us Directly</h3>
              <p className="text-lg mb-6 opacity-90">
                For immediate assistance and personalized guidance
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold mb-2">+91 9355659990</p>
                <p className="text-sm opacity-75">Mon-Sat: 9 AM - 7 PM</p>
              </div>
              <a 
                href="tel:+919355659990"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* WhatsApp Contact */}
            <div className={`p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gradient-to-br from-green-900 to-green-800 border border-green-700' : 'bg-gradient-to-br from-green-500 to-green-600'
            } text-white shadow-2xl`}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">💬 WhatsApp Us</h3>
              <p className="text-lg mb-6 opacity-90">
                Quick responses to your investment queries
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold mb-2">+91 9355659990</p>
                <p className="text-sm opacity-75">Fast responses during business hours</p>
              </div>
              <a 
                href="https://wa.me/919355659990"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* What You Can Ask */}
          <div className={`mt-12 p-8 rounded-3xl ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              🤔 What You Can Ask Us About
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Stock market education and courses',
                'Portfolio consultation and review',
                'One-on-one mentorship programs',
                'Investment strategies and tips',
                'Market analysis and insights',
                'Any doubts about investing'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;