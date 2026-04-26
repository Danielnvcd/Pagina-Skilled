import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import SISH from '../sections/SISH';
import Methodology from '../sections/Methodology';
import Industries from '../sections/Industries';
import Clients from '../sections/Clients';
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
      <SISH />
      <Methodology />
      <Industries />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
