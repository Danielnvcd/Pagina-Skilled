import { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    let observer;
    const start = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Reinicia y reproduce al volver al Hero. preload="none" hace que
            // los bytes del vídeo se descarguen recién aquí (no en la carga).
            node.currentTime = 0;
            node.play().catch(() => { });
          } else {
            node.pause();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(node);
    };

    // Diferimos el arranque hasta que el navegador esté inactivo para que la
    // descarga del vídeo no compita con el LCP (el póster ya se ve al instante).
    const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const id = ric(start);

    return () => {
      cancel(id);
      if (observer) observer.unobserve(node);
    };
  }, []);

  return (
    <section className="relative flex flex-col min-h-screen !min-h-[100dvh] overflow-hidden bg-[#041527] pt-24 pb-8">
      {/* Background video: póster ligero para pintar al instante (LCP) y carga
          diferida del vídeo (preload="none" + arranque en idle, ver useEffect).
          WebM (VP9) primero por mejor compresión; MP4 como respaldo (Safari). */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        poster="/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        aria-hidden="true"
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays for legibility and corporate depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041527] via-[#041527]/90 to-[#041527]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#041527] via-transparent to-[#041527]/60" />

      <div className="flex-grow flex items-center w-full relative z-10">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]"
          >
            Automatización industrial y soluciones eléctricas para la manufactura moderna
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-7 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Diseñamos, integramos y ponemos en marcha sistemas eléctricos, PLC, robótica
            y líneas automatizadas para la industria automotriz y manufacturera en México.
          </m.p>

          <m.div
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
          </m.div>
        </div>
       </div>
      </div>

      {/* Indicador de scroll (solo escritorio) */}
      <m.a
        href="#servicios"
        aria-label="Desplazarse hacia abajo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex relative z-20 self-center mt-6 flex-shrink-0 flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] font-bold">Desliza</span>
        <span className="flex items-start justify-center w-6 h-10 rounded-full border-2 border-white/40 p-1.5">
          <m.span
            className="block w-1 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
          />
        </span>
        <m.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </m.span>
      </m.a>
    </section>
  );
};

export default Hero;
