import React, { useEffect } from 'react';
import Services from '../sections/Services';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Services />
    </>
  );
};

export default ServicesPage;
