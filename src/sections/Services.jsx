import { motion } from 'framer-motion';
import { Zap, Factory, Lightbulb, Cog, Network, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { data } from '../data/content';

const ICONS = [Zap, Factory, Lightbulb, Cog, Network, ShieldCheck];

const ServiceCard = ({ service, index }) => {
  const Icon = ICONS[index];
  const items = service.highlights
    ? service.highlights.slice(0, 3)
    : service.pipeline
    ? service.pipeline.slice(0, 4).map((s) => ({ title: s, desc: null }))
    : [];

  return (
    <div
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Card image header */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        
        {/* Floating ID badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border border-white/30">
            {service.id}
          </span>
        </div>
      </div>

      {/* Body container */}
      <div className="relative flex flex-col flex-1 p-6 pt-8 bg-white">
        
        {/* Floating Icon Overlapping Image and Body */}
        <div className="absolute -top-8 right-6 w-14 h-14 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
             <Icon size={20} className="text-primary-blue" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-3 pr-12 group-hover:text-primary-blue transition-colors duration-200">
          {service.name.replace(/^[A-Z_]+ /, '')}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Highlights / Pipeline */}
        {items.length > 0 && (
          <div className="mb-6 border-t border-slate-100 pt-5">
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">
                    <span className="font-semibold">{item.title}</span>
                    {item.desc && (
                      <span className="font-normal text-slate-500"> — {item.desc}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certification badge */}
        {service.certification && (
          <div className="mb-6 flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3">
            <Award size={18} className="text-primary-blue flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-none mb-1">Certificación</p>
              <p className="text-xs font-semibold text-slate-800 leading-tight">{service.certification.label}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <Link
          to="/#contacto"
          className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-50 hover:bg-primary-blue text-slate-700 hover:text-white text-sm font-semibold rounded-lg border border-slate-200 hover:border-transparent transition-all duration-300 group/btn"
        >
          Solicitar información
          <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => (
  <section id="servicios" className="pt-36 pb-24 bg-slate-50 relative overflow-hidden">
    {/* Subtle dot pattern overlay in light mode */}
    <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-100 pointer-events-none" />

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
        <h2 className="text-3xl md:text-5xl font-black text-primary-blue leading-tight">
          Portafolio de Servicios
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '5rem' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="h-1 bg-accent-red mt-4 rounded-full"
        />
        <p className="text-slate-600 text-base mt-5 max-w-2xl leading-relaxed">
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
