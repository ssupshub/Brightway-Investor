import React, { useState } from 'react';
import { Star, User, Send, MessageSquare } from 'lucide-react';

interface ReviewsProps {
  darkMode: boolean;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

const Reviews: React.FC<ReviewsProps> = ({ darkMode }) => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Excellent service! The stock market education helped me understand investing better. The mentorship program is outstanding and helped me achieve consistent returns.',
      date: '2024-01-15',
      avatar: 'RK'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Amazing mentorship program. The one-on-one sessions were very helpful in building my investment strategy. The daily insights are incredibly valuable.',
      date: '2024-01-10',
      avatar: 'PS'
    },
    {
      id: 3,
      name: 'Amit Patel',
      rating: 5,
      comment: 'Best investment in my financial education! The portfolio consultation service is outstanding. My portfolio has grown significantly with their guidance.',
      date: '2024-01-08',
      avatar: 'AP'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      rating: 5,
      comment: 'The stock market education course is comprehensive and easy to understand. Perfect for beginners like me who wanted to start investing.',
      date: '2024-01-05',
      avatar: 'NG'
    },
    {
      id: 5,
      name: 'Suresh Reddy',
      rating: 5,
      comment: 'Fantastic community and support. The daily market insights help me make informed decisions. Highly recommend their services.',
      date: '2024-01-03',
      avatar: 'SR'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.comment.trim()) {
      const review: Review = {
        id: reviews.length + 1,
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        avatar: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      
      setReviews([review, ...reviews]);
      setNewReview({ name: '', rating: 5, comment: '' });
      setShowForm(false);
    }
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : darkMode ? 'text-gray-600' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Client Reviews
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            What our clients say about our services
          </p>
        </div>

        {/* Add Review Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className={`max-w-2xl mx-auto mb-12 p-8 rounded-2xl ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Share Your Experience
            </h3>
            
            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Name *
                </label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                  className={`w-full p-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Rating *
                </label>
                {renderStars(newReview.rating, true, (rating) => 
                  setNewReview({ ...newReview, rating })
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Review *
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                  rows={4}
                  className={`w-full p-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors resize-none`}
                  placeholder="Share your experience with our services..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Send className="w-5 h-5" />
                <span>Submit Review</span>
              </button>
            </form>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white`}>
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied clients who have transformed their financial future
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

export default Reviews;