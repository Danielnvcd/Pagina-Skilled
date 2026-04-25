import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import History from '../sections/History';
import SISH from '../sections/SISH';
import Brands from '../sections/Brands';
import Projects from '../sections/Projects';
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
      <History />
      <SISH />
      <Brands />
      <Projects />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
