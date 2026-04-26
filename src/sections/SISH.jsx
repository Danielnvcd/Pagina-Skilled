import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FileCode2, Cpu, GitBranch, Monitor } from 'lucide-react';

const logoContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const logoItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const SISH = () => {
  return (
    <section id="sish" className="py-24 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="SISH — Ingeniería Software & Hardware" subtitle="Automatización y Control" centered={false} />

        <div className="max-w-4xl mb-12">
          <p className="text-slate-600 text-lg leading-relaxed">
            Nuestro departamento de Sistemas Integrales de Software y Hardware (SISH) es el núcleo técnico donde materializamos soluciones industriales de alta complejidad. Integrando ingeniería de detalle y programación bajo los estándares internacionales más estrictos, garantizamos que cada proceso, desde un tablero eléctrico hasta el SCADA, opere con máxima seguridad, eficiencia y conectividad continua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Bloque 1: Diagramas Eléctricos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-slate-50 rounded-sm p-8 lg:p-10 border border-slate-200 hover:border-primary-blue transition-colors duration-300 group flex flex-col"
          >
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Desarrollo de Diagramas Eléctricos</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
                Elaboración de diagramas eléctricos profesionales y precisos en las plataformas líderes de la industria global:
              </p>
              
              <motion.div
                variants={logoContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-center justify-center gap-5 mb-8"
              >
                {/* AutoCAD */}
                <motion.div variants={logoItem} className="bg-white rounded-sm p-5 flex items-center justify-center w-40 h-28 border border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                  <img
                    src="/proveedores/autocad.png"
                    alt="AutoCAD"
                    className="max-h-16 max-w-full object-contain transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{ display: 'none' }} className="h-full w-full items-center justify-center">
                    <span className="text-primary-blue font-black text-xl">AutoCAD</span>
                  </div>
                </motion.div>
                {/* ePLAN */}
                <motion.div variants={logoItem} className="bg-white rounded-sm p-5 flex items-center justify-center w-40 h-28 border border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                    <img
                    src="/proveedores/eplan.png"
                    alt="ePLAN"
                    className="max-h-16 max-w-full object-contain transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{ display: 'none' }} className="h-full w-full items-center justify-center">
                    <span className="text-primary-blue font-black text-xl">ePLAN</span>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Deliverables */}
              <div className="border-t border-slate-200 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {[
                  { icon: FileCode2, label: 'Diagramas de fuerza y control' },
                  { icon: GitBranch, label: 'Diagramas de red e instrumentación' },
                  { icon: Monitor, label: 'Planos As Built actualizados' },
                  { icon: Cpu, label: 'Documentación técnica entregable' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center border border-slate-200 flex-shrink-0">
                       <Icon size={14} className="text-primary-blue" />
                    </div>
                    <span className="text-[13px] font-medium text-slate-700 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bloque 2: Programación PLC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative bg-white rounded-sm p-8 lg:p-10 border border-slate-200 hover:border-primary-blue transition-colors duration-300 group flex flex-col"
          >
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Programación PLC</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
                Desarrollo e implementación de lógicas de control robustas para las marcas más prestigiosas de controladores:
              </p>
              
              <motion.div
                variants={logoContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-center justify-center gap-5 mb-8"
              >
                {/* Allen-Bradley */}
                <motion.div variants={logoItem} className="bg-slate-50 rounded-sm p-5 flex flex-col items-center justify-center w-40 h-28 border border-slate-200 group-hover:border-slate-300 transition-colors duration-300 gap-3">
                  <img src="/proveedores/ab.png" alt="Allen-Bradley" className="max-h-12 max-w-full object-contain transition-all duration-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Studio 5000</span>
                </motion.div>
                {/* Siemens */}
                <motion.div variants={logoItem} className="bg-slate-50 rounded-sm p-5 flex flex-col items-center justify-center w-40 h-28 border border-slate-200 group-hover:border-slate-300 transition-colors duration-300 gap-3">
                  <img src="/proveedores/siemens.png" alt="Siemens" className="max-h-12 max-w-full object-contain transition-all duration-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">TIA Portal</span>
                </motion.div>
              </motion.div>
              
              {/* Capabilities */}
              <div className="mt-auto border-t border-slate-200 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Cpu, label: 'Automatización de procesos' },
                  { icon: GitBranch, label: 'Lógica ladder, FBD y SCL' },
                  { icon: Monitor, label: 'Control avanzado HMI/SCADA' },
                  { icon: FileCode2, label: 'Industria automotriz / manufactura' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center border border-slate-200 flex-shrink-0">
                      <Icon size={14} className="text-primary-blue" />
                    </div>
                    <span className="text-[13px] font-medium text-slate-700 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SISH;
