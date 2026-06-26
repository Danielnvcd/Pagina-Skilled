import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-[#041527] px-8 py-16 sm:px-16 sm:py-20"
        >
          {/* Accent edge */}
          <span className="absolute top-0 left-0 h-full w-1.5 bg-accent-red" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-3 text-blue-200/80 font-bold uppercase tracking-[0.22em] text-[11px] mb-5">
                <span className="h-px w-8 bg-accent-red" />
                Siguiente paso
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                Hablemos de tu próximo proyecto de automatización
              </h2>
              <p className="mt-5 text-slate-300 leading-relaxed">
                Cuéntanos los requerimientos de tu planta o línea de producción. Un
                especialista analizará el alcance y te propondrá una solución llave en mano.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                to="/#contacto"
                className="group inline-flex items-center justify-center gap-2 bg-accent-red text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-colors hover:bg-red-700"
              >
                Contactar a un especialista
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default FinalCTA;
