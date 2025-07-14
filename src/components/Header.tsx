import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, MessageCircle, LogOut, User } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  user: { email: string; name: string };
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95' : 'bg-white/95'
    } backdrop-blur-lg border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-md">
              <img 
                src="/WhatsApp Image 2025-07-13 at 14.56.47.jpeg" 
                alt="Brightway Investor" 
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Brightway Investor
              </h1>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Where Intelligence Meets Investments
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400'
                    : darkMode 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium truncate max-w-20">
                  {user.name}
                </span>
              </button>

              {showUserMenu && (
                <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-50 ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                    <p className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {user.name}
                    </p>
                    <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setShowUserMenu(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 text-left transition-colors ${
                      darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              )}
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919355659990"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors shadow-sm ${
                darkMode ? 'bg-green-900/50 text-green-400 hover:bg-green-800 border border-green-700' : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            {/* Call Button */}
            <a 
              href="tel:+919355659990"
              className={`hidden lg:flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors shadow-sm ${
                darkMode ? 'bg-blue-900/50 text-blue-400 hover:bg-blue-800 border border-blue-700' : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors shadow-sm ${
                darkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
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
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900/98' : 'border-gray-200 bg-white/98'} backdrop-blur-lg`}>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className={`mx-4 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400'
                      : darkMode 
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/919355659990"
                target="_blank"
                rel="noopener noreferrer"
                className={`mx-4 mt-2 flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors shadow-sm ${
                  darkMode ? 'bg-green-900/50 text-green-400 border border-green-700' : 'bg-green-50 text-green-700 border border-green-200'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp Us</span>
              </a>
              <button
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                className={`mx-4 mt-2 flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors shadow-sm ${
                  darkMode ? 'bg-red-900/50 text-red-400 border border-red-700' : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;