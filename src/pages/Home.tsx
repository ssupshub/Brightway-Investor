import React from 'react';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicket';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Calculators from '../components/Calculators';
import InvestmentGuide from '../components/InvestmentGuide';
import Reviews from '../components/Reviews';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div>
      <Hero darkMode={darkMode} />
      <MarqueeTicker darkMode={darkMode} />
      <div id="services">
        <Services darkMode={darkMode} />
      </div>
      <InvestmentGuide darkMode={darkMode} />
      <Calculators darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Reviews darkMode={darkMode} />
    </div>
  );
};

export default Home;