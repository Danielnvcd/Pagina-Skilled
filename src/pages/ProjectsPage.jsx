import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Zap, Network, ShieldCheck, Wrench, Brush, Cpu, Factory } from 'lucide-react';
import { data } from '../data/content';
import Card from '../components/Card';

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

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-accent-red font-black uppercase tracking-[0.2em] text-xs mb-3 block">
            Nuestra Experiencia
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-primary-blue leading-tight">
            Proyectos y Trayectoria
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="h-1 bg-accent-red mt-4 rounded-full"
          />
          <p className="text-slate-600 text-base mt-5 max-w-2xl leading-relaxed">
            Un historial comprobado de excelencia en ingeniería, ejecutando proyectos complejos para los líderes de la industria.
          </p>
        </motion.div>

        {/* Proyecto Destacado - Modern Showcase */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Content */}
            <div className="lg:w-2/3 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-accent-red font-black uppercase tracking-widest text-[10px]">Caso de Éxito</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Sector Automotriz</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-8 leading-tight">
                {data.featuredProject.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Instalación */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center text-primary-blue">
                      <Wrench size={12} />
                    </div>
                    Instalación
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    {data.featuredProject.installation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-blue/50 mt-0.5 flex-shrink-0">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Pruebas */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center text-primary-blue">
                      <Zap size={12} />
                    </div>
                    Pruebas y Redes
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    {data.featuredProject.electricalAndNetworkTesting.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-blue/50 mt-0.5 flex-shrink-0">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Ingeniería */}
                <div className="md:col-span-2 mt-2 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center text-primary-blue">
                      <Cpu size={12} />
                    </div>
                    Ingeniería Aplicada
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                    {data.featuredProject.engineering}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Showcase Brand */}
            <div className="lg:w-1/3 bg-primary-blue relative flex items-center justify-center min-h-[200px] lg:min-h-full overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-blue-950 opacity-90" />
              
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl p-6 transform hover:scale-105 transition-transform duration-700">
                <img src="/proveedores/vwm.png" alt="Volkswagen de México" className="w-full h-full object-contain" />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-white/5 rounded-full pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square border border-white/5 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Timeline Cronológico Profesional - Modern Minimalist */}
        <div className="mt-24 pt-16">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-5xl font-black text-primary-blue tracking-tight mb-4">Trayectoria Operativa</h3>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Historial detallado de implementaciones industriales por año.</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Elegant thin center line (Desktop) or left line (Mobile) */}
            <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent md:-translate-x-1/2" />

            <div className="space-y-24">
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
                  
                  {/* Year marker */}
                  <div className="flex justify-start md:justify-center mb-16 relative z-10">
                    <div className="bg-slate-50 px-6 py-2 rounded-full border border-slate-200 shadow-sm flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                      <span className="font-black text-xl text-primary-blue tracking-wider">{year}</span>
                    </div>
                  </div>
                  
                  {/* Contenedor de proyectos por año */}
                  <div className="space-y-12">
                    {projects.map((item, index) => {
                      const ProjectIcon = getProjectIcon(item.description, item.clientLocation);
                      const isEven = index % 2 === 0;
                      return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                      >
                        {/* Empty space for desktop alternating layout */}
                        <div className="hidden md:block md:w-1/2" />
                        
                        {/* Timeline dot */}
                        <div className="absolute left-[38px] md:left-1/2 top-8 md:top-8 w-3 h-3 bg-white border-2 border-primary-blue rounded-full md:-translate-x-1/2 z-10 ring-4 ring-slate-50" />
                        
                        {/* Card */}
                        <div className={`md:w-1/2 w-full pl-24 md:px-14`}>
                          <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200/60 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-5">
                              <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-primary-blue flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                                  <ProjectIcon size={20} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 leading-snug">{item.clientLocation}</h4>
                              </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
