import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageCircle } from 'lucide-react';

interface FAQProps {
  darkMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I start investing in the stock market?",
      answer: "Starting your investment journey is simple with Brightway Investor. First, open a Demat and trading account with any registered broker. Then, start with our Stock Market Education course to understand the basics. We recommend beginning with small amounts and gradually increasing your investment as you gain knowledge and confidence."
    },
    {
      question: "What is the minimum capital needed to start investing?",
      answer: "You can start investing with as little as ₹500-₹1,000. However, we recommend having at least ₹10,000-₹25,000 to properly diversify your portfolio. Remember, it's not about how much you start with, but about starting and being consistent with your investments."
    },
    {
      question: "Can I learn from scratch with no prior knowledge?",
      answer: "Absolutely! Our courses are designed for complete beginners. We start with the very basics like what is a stock, how the market works, and gradually move to advanced concepts. Our step-by-step approach ensures you understand each concept before moving to the next level."
    },
    {
      question: "Is Brightway Investor SEBI-registered?",
      answer: "No, Brightway Investor is not a SEBI-registered investment advisor. We are an educational platform that provides stock market education, analysis, and insights. We believe in complete transparency about our status. All our content is for educational purposes, and we always recommend doing your own research before making investment decisions."
    },
    {
      question: "What makes your education different from free YouTube content?",
      answer: "While YouTube has great free content, our structured approach provides personalized guidance, real-time support, portfolio reviews, and a community of like-minded investors. We offer practical, actionable insights tailored to Indian markets with ongoing mentorship and support."
    },
    {
      question: "Do you provide guaranteed returns?",
      answer: "No, we never promise guaranteed returns. Stock market investments are subject to market risks, and past performance doesn't guarantee future results. Our focus is on education and helping you make informed decisions to improve your probability of success."
    },
    {
      question: "How long does it take to become profitable?",
      answer: "This varies greatly depending on your learning pace, market conditions, and investment approach. Some students see positive results within 3-6 months, while others may take longer. We focus on building sustainable, long-term wealth rather than quick profits."
    },
    {
      question: "What support do you provide after purchasing a course?",
      answer: "We provide ongoing support through our community groups, regular doubt-clearing sessions, updated content, and direct access to our team. Premium members get additional benefits like one-on-one calls and priority support."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with our educational content. However, we're confident in the value we provide and most students find our courses extremely helpful for their investment journey."
    },
    {
      question: "Do you provide stock tips or recommendations?",
      answer: "We focus on education rather than tips. While we may discuss stocks for educational purposes and analysis, our primary goal is to teach you how to analyze and select stocks yourself. This approach helps you become an independent, informed investor."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={`pt-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Get answers to the most common questions about stock market investing and our services
            </p>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="tel:+919355659990"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call for More Info: +91 9355659990</span>
            </a>
            <a 
              href="https://wa.me/919355659990"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                } shadow-lg hover:shadow-xl`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <h3 className={`text-lg font-semibold pr-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className={`w-5 h-5 flex-shrink-0 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className={`border-t pt-4 ${
                      darkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      } leading-relaxed`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Still Have Questions?
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We're here to help! Contact us directly for personalized assistance.
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
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;