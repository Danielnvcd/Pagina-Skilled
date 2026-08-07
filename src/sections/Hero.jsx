import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { data } from '../data/content';

const AREAS = [
  'Instalación eléctrica',
  'Tableros',
  'Redes industriales',
  'Ingeniería SW/HW',
  'Suministro',
];

// Aparición escalonada de los bloques de la columna de texto.
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-screen !min-h-[100dvh] overflow-hidden bg-[#041527] pt-24">
      <div className="flex-grow flex items-center w-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Columna de texto */}
            <m.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
              className="lg:col-span-7"
            >
              <m.div variants={rise} className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-accent-red" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                  Ingeniería eléctrica industrial · Puebla
                </span>
              </m.div>

              <m.h1
                variants={rise}
                className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white tracking-tight leading-[1.05]"
              >
                Ponemos la electricidad que{' '}
                <span className="text-accent-red">mueve tu planta</span>.
              </m.h1>

              <m.p
                variants={rise}
                className="mt-7 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
              >
                Instalación eléctrica, tableros de fuerza y control y puesta en marcha
                para celdas robóticas, cabinas de pintura y líneas de transporte en
                plantas automotrices.
              </m.p>

              {/* Tira de áreas: da la amplitud de los 6 servicios sin cargar el
                  titular. Versión corta de data.services, que ahí llevan prefijo
                  de código (SIE, RVD…) y no se leen bien en el hero. */}
              <m.ul
                variants={rise}
                className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-400 max-w-xl"
              >
                {AREAS.map((area, i) => (
                  <li key={area} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="w-1 h-1 rounded-full bg-accent-red" aria-hidden="true" />
                    )}
                    {area}
                  </li>
                ))}
              </m.ul>

              <m.div variants={rise} className="mt-10 flex flex-col sm:flex-row gap-4">
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
            </m.div>

            {/* Panel de foto. Oculto en móvil: ahí la columna de texto ocupa el alto
                completo sobre el fondo sólido. */}
            <m.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="hidden lg:block lg:col-span-5 relative"
            >
              {/* Bloque rojo desplazado: rompe el rectángulo y da la asimetría. */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-accent-red" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-sm border border-white/10 aspect-[4/5]">
                <img
                  src="/sectores/indus.webp"
                  alt="Robot de aplicación de pintura conectado sobre una línea de carrocerías"
                  width="640"
                  height="800"
                  /* El origen es 1400x700 (2:1) y el panel es 4:5: el recorte
                     centrado dejaría fuera el robot, que está a la derecha.
                     El 58% lo encuadra junto a los mazos de cable. */
                  className="w-full h-full object-cover object-[58%_50%]"
                />
              </div>
            </m.div>

          </div>
        </div>
      </div>

      {/* Banda de credenciales: la prueba social sube por encima del pliegue. */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 border-t border-white/10 mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-5">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 whitespace-nowrap">
              Han confiado en nosotros
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {data.clients.map((client) => (
                <img
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  loading="lazy"
                  /* brightness-0 + invert deja cada logo en silueta blanca, sin
                     importar el color original del archivo. */
                  className="h-7 w-20 object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default Hero;
