import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { supabase, authHelpers } from './lib/supabase';
import Login from './components/Auth/Login';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Stocks from './pages/Stocks';
import FAQ from './pages/FAQ';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

interface User {
  email: string;
  name: string;
  id: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    authHelpers.signOut().catch(error => {
      console.error('Logout error:', error);
    });
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  // Check for existing session on app load
  useEffect(() => {
    const checkSession = async () => {
      // Set a timeout for better UX
      const timeoutId = setTimeout(() => {
        console.warn('Session check timeout - proceeding without authentication');
        setIsLoading(false);
      }, 5000); // 5 second timeout
      
      try {
        // Get session with timeout
        const { data: { session }, error } = await Promise.race([
          supabase.auth.getSession(),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Session check timeout')), 4000)
          )
        ]) as any;
        
        clearTimeout(timeoutId);
        
        if (error) {
          console.error('Session error:', error);
          setIsLoading(false);
          return;
        }
        
        if (session?.user) {
          const { data: profile } = await authHelpers.getUserProfile(session.user.id);
          
          setUser({
            email: session.user.email!,
            name: profile?.full_name || session.user.email!.split('@')[0],
            id: session.user.id
          });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.warn('Session check failed:', error);
        setUser(null);
      } finally {
        clearTimeout(timeoutId);
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      try {
        console.log('Auth state change:', event, session?.user?.email);
        
        if (event === 'SIGNED_OUT' || !session?.user) {
          setUser(null);
        } else if (session.user) {
          const { data: profile } = await authHelpers.getUserProfile(session.user.id);
          
          setUser({
            email: session.user.email!,
            name: profile?.full_name || session.user.email!.split('@')[0],
            id: session.user.id
          });
          
          if (event === 'SIGNED_IN') {
            setShowLogin(false);
          }
        }
      } catch (error) {
        console.error('Auth state change error:', error);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
            <img 
              src="/WhatsApp Image 2025-07-13 at 14.56.47.jpeg" 
              alt="Brightway Investor" 
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading...</p>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            If this takes too long, please refresh the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <ScrollToTop />
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          user={user} 
          onLogout={handleLogout}
          onShowLogin={handleShowLogin}
        />
        
        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative max-w-md w-full mx-4">
              <button
                onClick={handleCloseLogin}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 z-10"
              >
                ✕
              </button>
              <Login darkMode={darkMode} onLogin={handleLogin} onToggleMode={toggleDarkMode} />
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/stocks" element={<Stocks darkMode={darkMode} user={user} onShowLogin={handleShowLogin} />} />
          <Route path="/faq" element={<FAQ darkMode={darkMode} />} />
          <Route path="/disclaimer" element={<Disclaimer darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;