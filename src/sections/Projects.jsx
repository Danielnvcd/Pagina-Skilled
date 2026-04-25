import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
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

    <section id="proyectos" className="py-24 bg-primary-blue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-blue via-blue-950 to-primary-blue pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          subtitle="Impacto Real"
          title="Experiencia Comprobada"
          centered
          dark
        />

        {/* Contadores Dinámicos - Banner Corporativo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 mt-16 max-w-5xl mx-auto border-y border-white/10 py-10">
          {metricsArray.map((metric, index) => {
            const Icon = iconsMap[index % iconsMap.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center p-6 sm:p-4 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-5 group-hover:bg-accent-red transition-colors duration-300 border border-white/10 shadow-lg">
                    <Icon size={22} className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="text-4xl md:text-5xl font-black text-white leading-none mb-3 tracking-tight drop-shadow-md"
                  >
                    <StatCounter value={metric.value} />
                  </motion.div>

                  <div className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-200/80 leading-snug">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
};

export default Projects;
