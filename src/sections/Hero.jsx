import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '7', label: 'Años de operación' },
  { value: '300+', label: 'Proyectos ejecutados' },
  { value: '6', label: 'Estados del país' },
  { value: '100%', label: 'Llave en mano' },
];

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reinicia y reproduce una sola vez al volver al Hero
          node.currentTime = 0;
          node.play().catch(() => { });
        } else {
          node.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden bg-[#041527] pt-24 pb-16">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        aria-hidden="true"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays for legibility and corporate depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041527] via-[#041527]/90 to-[#041527]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#041527] via-transparent to-[#041527]/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]"
          >
            Automatización industrial y soluciones eléctricas para la manufactura moderna
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-7 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Diseñamos, integramos y ponemos en marcha sistemas eléctricos, PLC, robótica
            y líneas automatizadas para la industria automotriz y manufacturera en México.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/#contacto"
              className="group inline-flex items-center justify-center gap-2 bg-accent-red text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-colors hover:bg-red-700"
            >
              Solicitar cotización
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-colors hover:bg-white/10 hover:border-white/60"
            >
              Ver soluciones
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
            className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
