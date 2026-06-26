import { m } from 'framer-motion';
import { ShieldCheck, Gauge, TrendingUp, FileCheck } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    desc: 'Diseño bajo normativas NOM, NFPA y NEC, con sistemas de protección y resguardos que protegen al personal y a los equipos.',
  },
  {
    icon: Gauge,
    title: 'Eficiencia',
    desc: 'Soluciones que optimizan el consumo energético y el rendimiento de las líneas, reduciendo desperdicios y tiempos de ciclo.',
  },
  {
    icon: TrendingUp,
    title: 'Productividad',
    desc: 'Automatización orientada a maximizar el OEE y la disponibilidad de los activos productivos de la planta.',
  },
  {
    icon: FileCheck,
    title: 'Cumplimiento técnico',
    desc: 'Ingeniería de detalle, documentación As-Built y entrega de proyectos bajo estándares internacionales de calidad.',
  },
];

const Trust = () => {
  return (
    <section className="relative py-24 bg-[#041527] overflow-hidden">
      {/* Subtle dot texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-dot-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-start">
          {/* Heading */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-3 text-blue-200/80 font-bold uppercase tracking-[0.22em] text-[11px] mb-5">
              <span className="h-px w-8 bg-accent-red" />
              Por qué Skilled
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              Soluciones diseñadas para ambientes industriales exigentes
            </h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Cada proyecto se ejecuta pensando en la realidad de una planta en operación
              continua. Integramos ingeniería eléctrica, automatización y robótica con un
              estándar técnico que las armadoras y fabricantes exigen.
            </p>
          </m.div>

          {/* Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <m.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="bg-[#041527] p-7"
              >
                <div className="w-11 h-11 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-accent-red mb-5">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
