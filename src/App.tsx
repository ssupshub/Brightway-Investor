import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

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