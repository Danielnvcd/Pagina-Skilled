import { useEffect } from 'react';
import Seo from '../components/Seo';
import Brands from '../sections/Brands';

const ProvidersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Seo
        title="Proveedores"
        path="/proveedores"
        description="Trabajamos con marcas líderes de la automatización y la electricidad industrial: Siemens, Allen-Bradley, ABB, Eaton, Phoenix Contact, Weidmüller, Helukabel, LAPP, Charofil y Viakon."
      />
      <Brands />
    </div>
  );
};

export default ProvidersPage;
