import React from 'react';
import Header from '../layout/Header';
import { HeroSection } from './HeroSection';
import { TaxesSection } from './TaxesSection';
import { MobileMenu } from '../layout/MobileMenu';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TaxesSection />
    </div>
  );
};

export default Home;
