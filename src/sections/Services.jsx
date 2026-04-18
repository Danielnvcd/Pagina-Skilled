import { motion } from 'framer-motion';
import { Zap, Factory, Lightbulb, Cog, Network, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { data } from '../data/content';

const ICONS = [Zap, Factory, Lightbulb, Cog, Network, ShieldCheck];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const ServiceCard = ({ service, index }) => {
  const Icon = ICONS[index];
  const items = service.highlights
    ? service.highlights.slice(0, 3)
    : service.pipeline
    ? service.pipeline.slice(0, 4).map((s) => ({ title: s, desc: null }))
    : [];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-400 border border-slate-100"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-accent-red" />

      {/* Card image */}
      <div className="relative h-44 overflow-hidden bg-[#050f1f]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050f1f] via-[#050f1f]/40 to-transparent" />

        {/* ID badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-accent-red text-white text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow-md">
            {service.id}
          </span>
        </div>

        {/* Icon circle */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Icon size={18} className="text-white" />
        </div>

        {/* Number watermark */}
        <div className="absolute bottom-2 right-4 text-[5rem] font-black text-white/5 leading-none select-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-base font-black text-[#050f1f] leading-tight mb-3 group-hover:text-primary-blue transition-colors duration-200">
          {service.name.replace(/^[A-Z_]+ /, '')}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-accent-red pl-3 mb-5">
          {service.description}
        </p>

        {/* Highlights / Pipeline */}
        {items.length > 0 && (
          <ul className="space-y-2 mb-6 flex-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-red flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700 leading-snug">
                  {item.title}
                  {item.desc && (
                    <span className="font-normal text-slate-400"> — {item.desc}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Certification badge */}
        {service.certification && (
          <div className="mb-5 flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
            <Award size={14} className="text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-amber-700 leading-none">Certificación</p>
              <p className="text-[10px] font-bold text-slate-700 leading-tight">{service.certification.label}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <a
          href="#contacto"
          className="mt-auto flex items-center justify-center gap-2 w-full bg-primary-blue text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl hover:bg-[#00305a] transition-colors duration-200 group/btn"
        >
          Solicitar información
          <ArrowRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => (
  <section id="servicios" className="py-24 bg-primary-blue relative overflow-hidden">
    {/* Subtle dot pattern overlay */}
    <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <span className="text-accent-red font-black uppercase tracking-[0.2em] text-xs mb-3 block">
          Nuestra Oferta
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
          Portafolio de Servicios
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '5rem' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="h-1 bg-accent-red mt-4 rounded-full"
        />
        <p className="text-blue-200/70 text-sm mt-4 max-w-xl leading-relaxed">
          Soluciones integrales de ingeniería eléctrica, automatización y telecomunicaciones para la industria.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>

    </div>
  </section>
);

export default Services;
