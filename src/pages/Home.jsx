import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import Hero from '../sections/Hero';
import CoreServices from '../sections/CoreServices';
import Trust from '../sections/Trust';
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
      <Seo
        path="/"
        description="Automatización industrial, soluciones eléctricas, PLC, robótica y líneas automatizadas para la industria automotriz y manufacturera en México. Proyectos llave en mano con clientes como Volkswagen, Ford, Daimler y Stellantis."
      />
      <Hero />
      <CoreServices />
      <Trust />
      <Methodology />
      <Industries />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
