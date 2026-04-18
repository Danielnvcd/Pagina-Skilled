import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import portadaImg from '../assets/images/Portada.png';

const Hero = () => {
  const words = [
    "alta ingeniería",
    "ingeniería eléctrica",
    "automatización PLC",
    "redes y datos",
    "suministro"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        // Si terminó de escribir la palabra, esperar y luego borrar
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        // Si terminó de borrar, pasar a la siguiente palabra
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-blue">
      {/* Background Cover con Portada.png */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${portadaImg})` }}>
        {/* Overlays industriales oscuros para que el texto resalte */}
        <div className="absolute inset-0 bg-primary-blue bg-opacity-70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-60"></div>

        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary-blue clip-path-slant opacity-20 drop-shadow-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >


            <h1
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 min-h-[140px] md:min-h-[160px]"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              Soluciones en <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                {currentText}
              </span>
              <span className="animate-pulse text-blue-300">|</span>
              <br /> industrial.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-xl text-blue-50 mb-10 max-w-2xl leading-relaxed"
          >
            Ayudamos a plantas industriales a operar con más seguridad, eficiencia y rentabilidad mediante ingeniería eléctrica, PLC y redes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#servicios">
              <Button variant="primary" className="w-full sm:w-auto text-lg py-4 px-8">
                Ver Portafolio
              </Button>
            </a>
            <a href="#historia">
              <Button variant="outline" className="w-full sm:w-auto text-lg py-4 px-8 bg-white/50 backdrop-blur-sm">
                Conoce Nuestro ADN
              </Button>
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { value: '6', label: 'Años de operación' },
              { value: '30+', label: 'Proyectos realizados' },
              { value: '5+', label: 'Clientes industriales' },
              { value: '4', label: 'Estados del país' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-2xl font-black text-accent-red">{stat.value}</span>
                <span className="text-xs text-blue-200/80 uppercase tracking-wider leading-tight max-w-[80px]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
