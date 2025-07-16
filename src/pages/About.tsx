import React from 'react';
import { Heart, Target, BookOpen, Users, Star, TrendingUp } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const differentiators = [
    {
      icon: BookOpen,
      title: 'We teach from experience, not just from books',
      description: 'Real-world knowledge gained through years of trading and learning from mistakes.'
    },
    {
      icon: Users,
      title: 'We explain in simple language, not complicated jargon',
      description: 'Complex concepts broken down into easy-to-understand terms for everyone.'
    },
    {
      icon: Heart,
      title: 'We care about your growth — not just numbers',
      description: 'Your financial success and understanding matter more than our metrics.'
    },
    {
      icon: TrendingUp,
      title: "We're still learning, improving, and growing with you",
      description: 'Continuous improvement and learning together as a community.'
    }
  ];

  return (
    <div className={`main-content ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brightway Investor
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Story – The Real Journey Behind Brightway Investor
            </h2>
            <p className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Founded with Purpose. Built with Passion.
            </p>
          </div>

          <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
            <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                In 2023, I started Brightway Investor with one simple goal —<br />
                <strong className={darkMode ? 'text-white' : 'text-gray-900'}>
                  To help people truly understand the stock market.
                </strong>
              </p>

              <p>
                I wasn't a big influencer, nor was I backed by any large company — just someone with a strong desire to share the right knowledge that could change people's financial future.
              </p>

              <p>
                Before launching Brightway, I spent years learning, making mistakes, growing as a trader, and most importantly — understanding how to explain complex concepts in a simple way.
              </p>

              <p>
                I began by teaching a few individuals — helping them understand how the stock market works, what mistakes to avoid, and how they could grow safely even with small capital.<br />
                Seeing their progress gave me the confidence and clarity that I could create something bigger.
              </p>

              <p>
                So, I launched Brightway Investor — not just as a company, but as a mission to educate more people and provide them with the right guidance.
              </p>

              <p>
                To reach more learners, I created a dedicated website, Instagram reel series, and interactive sessions, all focused on clarity, simplicity, and real value — with no fake promises or hype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              💡 What Makes Brightway Different?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <p className={`text-xl leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              At Brightway Investor, we believe that everyone deserves access to quality financial education — and we're here to make that happen, one learner at a time.
            </p>
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Join us — and let's walk your financial journey the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bright Way</span>.
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's build your financial future together, step by step
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
      </section>
    </div>
  );
};

export default About;