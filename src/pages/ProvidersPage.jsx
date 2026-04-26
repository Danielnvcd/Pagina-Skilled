import React, { useEffect } from 'react';
import Brands from '../sections/Brands';

const ProvidersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-24 bg-white" />
      <Brands />
    </>
  );
};

export default ProvidersPage;
