import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import portadaImg from '../assets/images/Portada.png';

const Hero = () => {
  const words = [
    "alta ingeniería.",
    "ingeniería eléctrica.",
    "automatización PLC.",
    "redes y datos.",
    "suministro de equipos."
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-6 overflow-hidden bg-[#020b16]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${portadaImg})` }}
        />
        {/* Sleek corporate gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b16] via-[#020b16]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-transparent to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 clip-path-slant z-10 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-accent-red" />
              <span className="text-accent-red font-bold uppercase tracking-[0.2em] text-xs">
                Skilled Proyectos Industriales
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Soluciones integrales en <br />
              <span className="block min-h-[80px] sm:min-h-[60px] md:min-h-[80px] lg:min-h-[90px] mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  {currentText}
                </span>
                <span className="animate-pulse text-blue-400 ml-1 font-light">|</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100/80 mb-6 max-w-2xl leading-relaxed font-light"
          >
            Ayudamos a plantas industriales a operar con máxima seguridad, eficiencia y rentabilidad a través de servicios de ingeniería de clase mundial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/#servicios" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-accent-red hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                Ver Portafolio
              </button>
            </Link>
            <Link to="/historia" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-lg backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300">
                Conoce Nuestro ADN
              </button>
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-16"
          >
            {[
              { value: '6', label: 'Años de operación' },
              { value: '30+', label: 'Proyectos realizados' },
              { value: '5+', label: 'Clientes industriales' },
              { value: '4', label: 'Estados del país' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs text-blue-200/60 uppercase tracking-widest font-semibold">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
