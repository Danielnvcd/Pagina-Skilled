import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, BadgeCheck } from 'lucide-react';
import Button from '../components/Button';
import portadaImg from '../assets/images/Portada.png';

const Hero = () => {
  const words = [
    "alta ingeniería.",
    "ingeniería eléctrica.",
    "automatización PLC.",
    "redes y datos."
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(e => console.log(e));
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

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
    <section className="relative flex pt-24 lg:pt-32 pb-12 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 lg:items-start">

          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-accent-red font-black uppercase tracking-[0.2em] text-xs mb-4 block">
                Skilled Proyectos Industriales
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary-blue tracking-tight leading-[1.1] mb-2 sm:whitespace-nowrap">
                Soluciones integrales en
              </h1>

              {/* Typewriter word */}
              <div className="min-h-[40px] sm:min-h-[56px] lg:min-h-[72px] mb-6">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-accent-red tracking-tight leading-[1.1]">
                  {currentText}
                </span>
                <span className="text-accent-red ml-0.5 font-light animate-pulse text-3xl sm:text-5xl lg:text-6xl">|</span>
              </div>

              {/* Animated red underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '5rem' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="h-1.5 bg-accent-red mb-8 rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
            >
              Ayudamos a plantas industriales a operar con máxima seguridad, eficiencia y rentabilidad a través de servicios de ingeniería de clase mundial.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-16"
            >
              <Link to="/servicios" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Button variant="primary" className="w-full text-sm font-bold uppercase tracking-wider py-4 px-8 group">
                    Ver Portafolio 
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/historia" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="w-full sm:w-auto text-primary-blue text-sm font-bold uppercase tracking-wider py-4 transition-colors hover:text-accent-red relative group"
                >
                  Conoce Nuestro ADN
                  <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-accent-red group-hover:w-full transition-all duration-300 ease-out"></span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: '6', label: 'Años de operación' },
                { value: '30+', label: 'Proyectos realizados' },
                { value: '5+', label: 'Clientes industriales' },
                { value: '4', label: 'Estados del país' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-primary-blue">{stat.value}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="hidden lg:block relative h-[500px] w-full -mt-16"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
              aria-hidden="true"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
