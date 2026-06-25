import { useEffect } from 'react';
import Seo from '../components/Seo';
import Services from '../sections/Services';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Servicios"
        path="/servicios"
        description="Portafolio de servicios: automatización con PLC, integración de robots, tableros eléctricos y control, redes industriales, ingeniería SW/HW y proyectos llave en mano para la industria en México."
      />
      <Services />
    </>
  );
};

export default ServicesPage;
