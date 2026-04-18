import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Briefcase, Calendar, Users, MapPin, Zap, Network, ShieldCheck, Wrench, Brush, Cpu, Factory } from 'lucide-react';

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

const getProjectIcon = (description, client) => {
  const text = (description + " " + client).toLowerCase();
  if (text.includes('eléctrica') || text.includes('tablero') || text.includes('ccm')) return Zap;
  if (text.includes('red') || text.includes('network') || text.includes('cctv') || text.includes('fibra')) return Network;
  if (text.includes('robot') || text.includes('plc')) return Cpu;
  if (text.includes('safety')) return ShieldCheck;
  if (text.includes('pintura') || text.includes('cabina')) return Brush;
  if (text.includes('mecánico') || text.includes('neumático') || text.includes('instalación') || text.includes('retrofit')) return Wrench;
  return Factory;
};

const Projects = () => {
  const iconsMap = [Calendar, Briefcase, Users, MapPin];
  const metricsArray = Object.values(data.stats);

  return (
    <section id="proyectos" className="py-24 bg-neutral-gray border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experiencia Comprobada" subtitle="Impacto Real" centered={true} />

        {/* Contadores Dinámicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metricsArray.map((metric, index) => {
            const Icon = iconsMap[index % iconsMap.length];
            return (
              <Card key={index} className="p-8 text-center" hoverEffect={false}>
                <div className="flex justify-center mb-4 text-primary-blue">
                  <Icon size={40} opacity={0.2} />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl font-black text-primary-blue mb-2"
                >
                  <StatCounter value={metric.value} />
                </motion.div>
                <div className="text-sm font-bold uppercase tracking-wider text-gray-500">{metric.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Proyecto Destacado */}
        <div className="mb-24">
          <Card className="p-0 border-l-4 border-l-accent-red overflow-hidden">
             <div className="bg-primary-blue text-white p-8 flex justify-between items-center gap-4">
               <div>
                 <div className="flex items-center gap-3 mb-2">
                   <span className="text-accent-red font-bold uppercase tracking-wider text-xs">Proyecto Destacado</span>
                   <span className="text-[9px] font-black uppercase tracking-widest bg-white/10 border border-white/15 text-blue-200 px-2 py-0.5 rounded-full">Sector Automotriz</span>
                 </div>
                 <h3 className="text-2xl md:text-3xl font-black">{data.featuredProject.title}</h3>
               </div>
               <img src="/proveedores/vwm.png" alt="Volkswagen de México" className="hidden sm:block h-12 md:h-16 object-contain drop-shadow-md bg-white rounded-lg p-2" />
             </div>
             <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Instalación</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {data.featuredProject.installation.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Pruebas</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {data.featuredProject.electricalAndNetworkTesting.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Ingeniería</h4>
                  <p className="text-sm text-slate-600">{data.featuredProject.engineering}</p>
                </div>
             </div>
          </Card>
        </div>

        {/* Timeline Cronológico Profesional */}
        <div className="mt-20 pt-10 border-t border-blue-100">
          <div className="text-center mb-16">
            <span className="text-accent-red font-bold uppercase tracking-widest text-xs block mb-3">HISTORIAL TÉCNICO</span>
            <h3 className="text-4xl md:text-5xl font-black text-primary-blue tracking-tight">Trayectoria Operativa</h3>
          </div>

          <div className="space-y-16">
            {Object.entries(
              data.projectsTimeline.reduce((acc, project) => {
                if (!acc[project.year]) acc[project.year] = [];
                acc[project.year].push(project);
                return acc;
              }, {})
            )
            .sort(([yearA], [yearB]) => yearB - yearA) // Orden descendente (2024 -> 2019)
            .map(([year, projects]) => (
              <div key={year} className="relative">
                {/* Year Badge (Sticky para mejor experiencia) */}
                <div className="sticky top-24 z-20 mb-8 flex justify-start md:justify-center">
                  <div className="bg-primary-blue text-white px-8 py-2 rounded-full font-black text-2xl shadow-xl border-4 border-neutral-gray flex items-center gap-3">
                    <Calendar size={24} className="text-accent-red" />
                    {year}
                  </div>
                </div>
                
                {/* Contenedor de proyectos por año */}
                <div className="max-w-4xl mx-auto ml-10 md:ml-auto md:border-l-0 border-l-4 border-blue-100 pl-8 md:pl-0 py-2 space-y-6">
                  {projects.map((item, index) => {
                    const ProjectIcon = getProjectIcon(item.description, item.clientLocation);
                    return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{ willChange: 'opacity' }}
                      className="relative bg-white p-6 md:p-8 rounded-2xl shadow border border-neutral-light hover:border-blue-300 hover:shadow-lg transition-colors group"
                    >
                      {/* Timeline dot (Mobile: a la izquierda, Desktop: oculto o decorativo) */}
                      <div className="absolute -left-[42px] top-8 w-4 h-4 bg-white border-4 border-accent-red rounded-full md:hidden"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                            <ProjectIcon size={20} />
                          </div>
                          <h4 className="text-lg font-bold text-slate-800 leading-snug">{item.clientLocation}</h4>
                        </div>
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full whitespace-nowrap self-start border border-green-200">
                          Completado
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base ml-0 sm:ml-13 md:ml-13 pl-13">
                        {item.description}
                      </p>
                    </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
