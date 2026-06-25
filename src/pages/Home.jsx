import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import CoreServices from '../sections/CoreServices';
import Trust from '../sections/Trust';
import Methodology from '../sections/Methodology';
import Industries from '../sections/Industries';
import Clients from '../sections/Clients';
import FinalCTA from '../sections/FinalCTA';
import Contact from '../sections/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <CoreServices />
      <Trust />
      <Methodology />
      <Industries />
      <Clients />
      <FinalCTA />
      <Contact />
    </>
  );
};

export default Home;
