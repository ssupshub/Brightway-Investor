import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Stocks', href: '/stocks' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95' : 'bg-white/95'
    } backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Brightway Investor" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Brightway Investor
              </h1>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Where Intelligence Meets Investments
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : darkMode 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact Number */}
            <a 
              href="tel:+917291888999"
              className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode ? 'bg-green-900 text-green-400 hover:bg-green-800' : 'bg-green-50 text-green-700 hover:bg-green-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 9355659990</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : darkMode 
                        ? 'text-gray-300 hover:text-blue-400' 
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="tel:+919355659990"
                className={`mx-4 mt-2 flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-green-900 text-green-400' : 'bg-green-50 text-green-700'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 9355659990</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;