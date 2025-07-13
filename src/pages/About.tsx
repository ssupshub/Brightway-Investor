import React from 'react';
import { Target, Users, Award, TrendingUp, Heart, Shield, BookOpen, Star, Scale } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const milestones = [
    { year: '2020', title: 'Founded Brightway Investor', description: 'Started with a mission to democratize stock market education' },
    { year: '2021', title: '1,000+ Students Reached', description: 'Crossed our first major milestone of educating 1000 investors' },
    { year: '2022', title: 'Daily Market Insights Launch', description: 'Started providing daily market analysis and insights' },
    { year: '2023', title: '5,000+ Portfolio Consultations', description: 'Helped thousands optimize their investment portfolios' },
    { year: '2024', title: '10,000+ Active Community', description: 'Built a thriving community of successful investors' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in complete transparency in all our recommendations and educational content.',
    },
    {
      icon: BookOpen,
      title: 'Education First',
      description: 'Our primary focus is to educate investors rather than just provide tips.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your financial success is our success. We are committed to your growth.',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven',
      description: 'All our analysis and recommendations are backed by thorough research and data.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Students Educated' },
    { number: '5,000+', label: 'Portfolio Reviews' },
    { number: '500+', label: 'Daily Insights Shared' },
    { number: '95%', label: 'Client Satisfaction' },
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
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Empowering investors with knowledge, insights, and strategies to build wealth through smart investing in the Indian stock market.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg`}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rounak Sharma's Story */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                The Story Behind Brightway Investor
              </h2>
              <div className="space-y-4">
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Founded by <strong>Rounak Sharma</strong>, Brightway Investor was born from a simple yet powerful vision: to make stock market education accessible to every Indian investor, regardless of their background or experience level.
                </p>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  After witnessing countless individuals lose money due to lack of proper guidance and education, Rounak decided to bridge this gap by creating a platform that prioritizes education over quick profits.
                </p>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Our mission is simple: <em>"Transform financial futures through education, transparency, and data-driven insights."</em>
                </p>
              </div>
            </div>
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-xl`}>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  RS
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Rounak Sharma
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  Founder & Chief Investment Educator
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  "My goal is to create a generation of informed investors who make decisions based on knowledge, not emotions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              What Makes Us Different
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building trust through transparency and results
            </p>
          </div>

          {/* SEBI Registration Notice */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'
            } shadow-lg`}>
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Education Over Tips
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We don't just give you stock tips. We teach you how to analyze, research, and make informed decisions independently.
              </p>
            </div>

            <div className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-green-50 border border-green-200'
            } shadow-lg`}>
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Complete Transparency
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We are transparent about our methods, limitations, and the fact that we are not SEBI-registered advisors.
              </p>
            </div>

            <div className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-purple-50 border border-purple-200'
            } shadow-lg`}>
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Community-Driven
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Join a community of like-minded investors who share knowledge, experiences, and support each other's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Journey & Milestones
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Growing together, achieving together
            </p>
          </div>

          <div className="relative">
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`p-6 rounded-2xl ${
                    darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                  } shadow-lg`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {milestone.title}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {milestone.year}
                        </p>
                      </div>
                    </div>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-600'
                } border-4 ${darkMode ? 'border-gray-800' : 'border-gray-50'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Vision & Values
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              To create a financially literate India where every investor makes informed decisions based on knowledge and research, not emotions and speculation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className={`text-center p-6 rounded-2xl ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                } shadow-lg hover:shadow-xl transition-shadow`}>
                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEBI Disclaimer */}
      <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <strong>Brightway Investor is NOT a SEBI-registered investment advisor.</strong> We are transparent about our status and operate as an educational platform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;