import React, { useEffect } from 'react';
import History from '../sections/History';

const HistoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <History />
    </div>
  );
};

export default HistoryPage;
