import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Brightway Investor transformed my trading journey. Their webinars are incredibly insightful and the mentorship program helped me achieve 35% returns this year!',
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'The daily insights and portfolio consultation service is outstanding. I finally understand how to read charts and make informed decisions. Highly recommended!',
      avatar: 'PS',
    },
    {
      name: 'Amit Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'Best investment in my financial education! The one-on-one mentorship is worth every penny. My portfolio has grown by 42% in just 8 months.',
      avatar: 'AP',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What Our Clients Say
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Real success stories from real investors
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className={`relative p-8 rounded-2xl ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          } shadow-xl transition-all duration-500`}>
            <Quote className={`w-12 h-12 mb-6 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            } opacity-50`} />
            
            <blockquote className={`text-lg md:text-xl leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold`}>
                {testimonials[currentTestimonial].avatar}
              </div>
              <div>
                <h4 className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
              <div className="flex ml-auto">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-600 scale-125'
                    : darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Smaller Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h5 className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h5>
                    <p className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="flex ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } line-clamp-3`}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;