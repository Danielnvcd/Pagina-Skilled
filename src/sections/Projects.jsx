import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import CircuitBg from '../components/CircuitBg';
import { Briefcase, Calendar, Users, MapPin } from 'lucide-react';

const StatCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const num = parseInt(String(value), 10);
  const suffix = String(value).replace(String(num), '');
  const [display, setDisplay] = useState('0' + suffix);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, num, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v)) + suffix),
    });
    return controls.stop;
  }, [isInView, num, suffix]);

  return <span ref={ref}>{display}</span>;
};

const Projects = () => {
  const iconsMap = [Calendar, Briefcase, Users, MapPin];
  const metricsArray = Object.values(data.stats);

  return (
    <section id="proyectos" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <CircuitBg />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          subtitle="Impacto Real"
          title="Experiencia Comprobada"
          centered
          dark
        />

        {/* Contadores Dinámicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {metricsArray.map((metric, index) => {
            const Icon = iconsMap[index % iconsMap.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-white rounded-xl p-5 md:p-6 overflow-hidden group border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icono de fondo como marca de agua */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                  className="absolute -bottom-4 -right-4 text-slate-50 group-hover:text-blue-50 transition-colors duration-500"
                >
                  <Icon size={80} strokeWidth={1} />
                </motion.div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icono superior */}
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-blue transition-colors duration-300 border border-slate-100 shadow-sm">
                    <Icon size={18} className="text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Número */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.25 }}
                    className="text-3xl md:text-4xl font-black text-slate-900 leading-none mb-2 tracking-tight"
                  >
                    <StatCounter value={metric.value} />
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.35 }}
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 leading-snug"
                  >
                    {metric.label}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
