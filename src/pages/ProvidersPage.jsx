import React, { useEffect } from 'react';
import Brands from '../sections/Brands';

const ProvidersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Brands />
    </div>
  );
};

export default ProvidersPage;
