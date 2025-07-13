import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="/WhatsApp Image 2025-07-13 at 14.49.35.jpeg" 
                  alt="Brightway Investor" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Brightway Investor</h3>
                <p className="text-sm text-gray-400">Where Intelligence Meets Investments</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering investors with knowledge, insights, and strategies to build wealth through smart investing in the Indian stock market.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1FvcFMAQ7A/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/brightwayinvestor?igsh=MWh4YThjcnkxdjkzNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              </a>
              <a href="https://t.me/brightwayinvestor" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Stock Market Education',
                'Portfolio Consultation',
                'One-on-One Mentorship',
                'Daily Market Insights',
                'Mutual Fund Advisory'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919355659990"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9355659990</span>
              </a>
              <a 
                href="https://wa.me/919355659990?text=Hi%20Team%20Brightway%20Investor%2C%20%F0%9F%91%8B%0AI%20came%20across%20your%20website%2C%20and%20I%27m%20really%20interested%20in%20learning%20more%20about%20your%20services.%0ACould%20you%20please%20share%20the%20details%20about%20your%20stock%20market%20programs%20and%20consultation%20offerings%3F%20%F0%9F%93%88%0ALooking%20forward%20to%20hearing%20from%20you%21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp Support</span>
              </a>
              <p className="text-gray-400 text-sm">Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Brightway Investor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
              Disclaimer
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;