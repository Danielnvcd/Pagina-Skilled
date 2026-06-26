import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    // LazyMotion + componentes `m`: carga solo el subconjunto `domAnimation`
    // (animaciones, variants, exit y gestos) y descarta el motor de layout/drag
    // que incluía el `motion` completo, reduciendo el JS inicial.
    <LazyMotion features={domAnimation} strict>
      <div className="font-sans text-neutral-dark bg-neutral-gray min-h-screen flex flex-col [overflow-x:clip] w-screen selection:bg-primary-blue selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {/* Suspense para las rutas internas cargadas de forma diferida (lazy). */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LazyMotion>
  );
}

export default App;
