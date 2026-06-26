import { m } from 'framer-motion';
import { PlugZap, Factory, BrainCircuit, Settings2, ServerCog, BadgeCheck, Medal, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { data } from '../data/content';

const ICONS = [PlugZap, Factory, BrainCircuit, Settings2, ServerCog, BadgeCheck];

const ServiceCard = ({ service, index }) => {
  const Icon = ICONS[index];
  const items = service.highlights
    ? service.highlights.slice(0, 3)
    : service.pipeline
    ? service.pipeline.slice(0, 4).map((s) => ({ title: s, desc: null }))
    : [];

  return (
    <div
      className="group flex flex-col bg-white rounded-sm overflow-hidden border border-slate-200 hover:border-primary-blue transition-colors duration-300"
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
      <div className="relative flex flex-col flex-1 p-5 sm:p-8 bg-white">
        
        {/* Title & Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue group-hover:border-primary-blue transition-colors duration-300">
             <Icon size={20} className="text-primary-blue group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-primary-blue transition-colors duration-200">
            {service.name.replace(/^[A-Z_]+ /, '')}
          </h3>
        </div>

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
          <div className="mb-6 flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-sm px-4 py-3">
            <Medal size={18} className="text-primary-blue flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-none mb-1">Certificación</p>
              <p className="text-xs font-semibold text-slate-800 leading-tight">{service.certification.label}</p>
            </div>
          </div>
        )}

        <Link
          to="/#contacto"
          className="mt-auto flex items-center justify-center gap-2 w-full min-h-[44px] py-3 px-4 bg-transparent hover:bg-slate-50 text-primary-blue text-sm font-semibold rounded-sm border border-slate-200 transition-colors duration-200"
        >
          Solicitar información
          <ChevronRight size={16} />
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
      <m.div
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
        <m.div
          initial={{ width: 0 }}
          whileInView={{ width: '5rem' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="h-1 bg-accent-red mt-4 rounded-full"
        />
        <p className="text-slate-600 text-base mt-5 max-w-2xl leading-relaxed">
          Soluciones integrales de ingeniería eléctrica, automatización y telecomunicaciones para la industria.
        </p>
      </m.div>

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
