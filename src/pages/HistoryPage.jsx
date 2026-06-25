import { useEffect } from 'react';
import Seo from '../components/Seo';
import History from '../sections/History';

const HistoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Seo
        title="Historia"
        path="/historia"
        description="Fundada en Puebla en 2019, Skilled brinda soluciones integrales en ingeniería eléctrica y automatización. Conoce nuestra misión, visión y los pilares que guían cada proyecto."
      />
      <History />
    </div>
  );
};

export default HistoryPage;
