import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import History from './sections/History';
import Services from './sections/Services';
import SISH from './sections/SISH';
import Brands from './sections/Brands';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-neutral-dark bg-neutral-gray min-h-screen flex flex-col [overflow-x:clip] w-screen selection:bg-primary-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <History />
        <Services />
        <SISH />
        <Brands />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
