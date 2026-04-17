import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from '../data/content';
import { Zap, Factory, Lightbulb, Cog, Network, ShieldCheck, Award, ChevronDown, MessageCircle } from 'lucide-react';

const ICONS = [Zap, Factory, Lightbulb, Cog, Network, ShieldCheck];

const PipelineStepper = ({ steps }) => (
  <div className="mt-2">
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Flujo de ejecución</p>
    <div className="flex items-start gap-0 overflow-x-auto pb-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center flex-shrink-0">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white text-[10px] font-black flex-shrink-0 shadow-md shadow-red-200">
              {i + 1}
            </div>
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-500 mt-2 text-center max-w-[64px] leading-tight">
              {step}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="w-8 h-px bg-slate-200 flex-shrink-0 mb-5 mx-1" />
          )}
        </div>
      ))}
    </div>
  </div>
);

const HighlightsGrid = ({ highlights, certification }) => (
  <div className="mt-2">
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Alcances del servicio</p>
    <div className="grid grid-cols-2 gap-2">
      {highlights.map((h, i) => (
        <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:border-red-200 hover:bg-red-50/40 transition-colors duration-200">
          <div className="w-1 h-4 bg-accent-red rounded-full mb-2" />
          <p className="text-xs font-black text-slate-800 leading-tight">{h.title}</p>
          <p className="text-[11px] text-slate-500 leading-snug mt-1">{h.desc}</p>
        </div>
      ))}
    </div>
    {certification && (
      <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
        <Award size={18} className="text-amber-500 flex-shrink-0" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">Certificación</p>
          <p className="text-xs font-bold text-slate-700">{certification.label}</p>
          <p className="text-[10px] text-slate-400 font-mono mt-0.5">#{certification.number}</p>
        </div>
      </div>
    )}
  </div>
);

/* ── Desktop ── */
const DesktopView = ({ services, active, setActive, paused, setPaused, progress }) => (
  <div className="hidden lg:grid grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[580px]"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
  >

    {/* Sidebar */}
    <div className="bg-[#050f1f] flex flex-col border-r border-white/5 h-full overflow-y-auto">
      <div className="px-6 pt-6 pb-4 border-b border-white/5">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">Portafolio</p>
        <p className="text-xs text-blue-300/60 mt-0.5">Selecciona un servicio</p>
      </div>
      {services.map((s, i) => {
        const Icon = ICONS[i];
        const isActive = active === i;
        return (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className="relative text-left px-5 py-4 border-b border-white/5 last:border-0 group transition-colors duration-200 overflow-hidden"
            style={{ backgroundColor: isActive ? 'rgba(220,38,38,0.1)' : 'transparent' }}
          >
            {isActive && (
              <>
                <motion.div
                  layoutId="sidebar-bar"
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-red"
                />
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-accent-red/50"
                  style={{ width: `${progress}%` }}
                />
              </>
            )}
            <div className="flex items-center gap-4">
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: isActive ? 'rgba(220,38,38,0.18)' : 'rgba(255,255,255,0.04)' }}
              >
                <Icon size={16} className={isActive ? 'text-accent-red' : 'text-slate-500 group-hover:text-blue-400'} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-0.5">{s.id}</p>
                <p className={`text-[11px] font-bold leading-tight truncate transition-colors duration-150 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                  {s.name.replace(/^[A-Z_]+ /, '')}
                </p>
              </div>
              <div className={`ml-auto text-2xl font-black leading-none flex-shrink-0 transition-colors duration-200 ${isActive ? 'text-accent-red/30' : 'text-white/5'}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          </button>
        );
      })}
    </div>

    {/* Detail panel */}
    <div className="bg-white overflow-hidden h-full">
      <AnimatePresence mode="wait">
        {services.map((s, i) => active === i && (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full flex flex-col"
          >
            {/* Photo header */}
            <div className="h-52 relative overflow-hidden bg-slate-900 flex-shrink-0">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover opacity-70"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Big background number */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[7rem] font-black text-white/5 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Service label */}
              <div className="absolute bottom-0 left-0 right-0 px-8 pb-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="inline-block text-[9px] font-black uppercase tracking-[0.2em] text-accent-red bg-accent-red/10 border border-accent-red/30 rounded px-2 py-0.5 mb-2">
                      {s.id}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      {s.name.replace(/^[A-Z_]+ /, '')}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      {(() => { const Icon = ICONS[i]; return <Icon size={18} className="text-white" />; })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-grow overflow-y-auto">
              <div className="p-8 grid grid-cols-[1fr_auto] gap-8 items-start min-h-full">

                {/* Left: description + pipeline/highlights */}
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-accent-red pl-4">
                    {s.description}
                  </p>
                  {s.pipeline ? (
                    <PipelineStepper steps={s.pipeline} />
                  ) : s.highlights ? (
                    <HighlightsGrid highlights={s.highlights} certification={s.certification} />
                  ) : null}
                </div>

                {/* Right: CTA card */}
                <div className="w-48 flex-shrink-0">
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
                    <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center mx-auto mb-3">
                      <MessageCircle size={18} className="text-accent-red" />
                    </div>
                    <p className="text-xs font-black text-slate-700 leading-tight mb-1">¿Te interesa este servicio?</p>
                    <p className="text-[10px] text-slate-400 leading-snug mb-4">Solicita información o una cotización</p>
                    <a
                      href="#contacto"
                      className="block w-full bg-accent-red text-white text-[10px] font-black uppercase tracking-wider py-2.5 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Solicitar info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </div>
);

/* ── Mobile ── */
const MobileView = ({ services }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="lg:hidden space-y-2">
      {services.map((s, i) => {
        const Icon = ICONS[i];
        const isOpen = open === i;
        return (
          <div
            key={s.id}
            className="rounded-2xl overflow-hidden border transition-colors duration-200"
            style={{
              backgroundColor: isOpen ? '#050f1f' : '#071223',
              borderColor: isOpen ? 'rgba(220,38,38,0.3)' : 'rgba(255,255,255,0.06)'
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left"
            >
              <div
                className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: isOpen ? 'rgba(220,38,38,0.2)' : 'rgba(255,255,255,0.05)' }}
              >
                <Icon size={17} className={isOpen ? 'text-accent-red' : 'text-slate-500'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-600">{s.id}</p>
                <p className="text-sm font-bold text-white truncate">{s.name.replace(/^[A-Z_]+ /, '')}</p>
              </div>
              <div className={`text-xl font-black mr-1 flex-shrink-0 transition-colors duration-200 ${isOpen ? 'text-accent-red/40' : 'text-white/10'}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={15} className="text-slate-500 flex-shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/5">
                    {/* Photo */}
                    <div className="h-36 relative overflow-hidden">
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover opacity-50"
                        onError={(e) => { e.target.style.display = 'none'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050f1f] to-transparent" />
                    </div>
                    {/* Content */}
                    <div className="px-5 py-5 bg-white">
                      <p className="text-slate-500 text-sm leading-relaxed mb-5 border-l-2 border-accent-red pl-3">
                        {s.description}
                      </p>
                      {s.pipeline ? (
                        <PipelineStepper steps={s.pipeline} />
                      ) : s.highlights ? (
                        <HighlightsGrid highlights={s.highlights} certification={s.certification} />
                      ) : null}
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 mt-5 bg-accent-red text-white text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-lg"
                      >
                        <MessageCircle size={12} /> Solicitar información
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

/* ── Main ── */
const INTERVAL = 12000;

const Services = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(Date.now());
  const rafRef = useRef(null);
  const total = data.services.length;

  const advance = useCallback(() => {
    setActive(a => (a + 1) % total);
    setProgress(0);
    startRef.current = Date.now();
  }, [total]);

  useEffect(() => {
    const tick = () => {
      if (!paused) {
        const elapsed = Date.now() - startRef.current;
        const pct = Math.min((elapsed / INTERVAL) * 100, 100);
        setProgress(pct);
        if (elapsed >= INTERVAL) advance();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, advance]);

  const handleSetActive = (i) => {
    setActive(i);
    setProgress(0);
    startRef.current = Date.now();
  };

  return (
    <section id="servicios" className="py-24 bg-primary-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-accent-red font-bold uppercase tracking-wider text-sm mb-2 block">Nuestra Oferta</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">Portafolio de Servicios</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="h-1 bg-accent-red mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <DesktopView services={data.services} active={active} setActive={handleSetActive} paused={paused} setPaused={setPaused} progress={progress} />
          <MobileView services={data.services} />
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
