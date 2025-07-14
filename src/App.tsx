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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    authHelpers.signOut().then(() => {
      setUser(null);
    });
  };

  // Check for existing session on app load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { user: currentUser } = await authHelpers.getCurrentUser();
        
        if (currentUser) {
          const { data: profile } = await authHelpers.getUserProfile(currentUser.id);
          
          setUser({
            email: currentUser.email!,
            name: profile?.full_name || currentUser.email!.split('@')[0],
            id: currentUser.id
          });
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        setUser(null);
      } else if (event === 'SIGNED_IN' && session.user) {
        const { data: profile } = await authHelpers.getUserProfile(session.user.id);
        
        setUser({
          email: session.user.email!,
          name: profile?.full_name || session.user.email!.split('@')[0],
          id: session.user.id
        });
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
        </div>
      </div>
    );
  }

  // Show login page if user is not authenticated
  if (!user) {
    return <Login darkMode={darkMode} onLogin={handleLogin} onToggleMode={toggleDarkMode} />;
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <ScrollToTop />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/stocks" element={<Stocks darkMode={darkMode} />} />
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