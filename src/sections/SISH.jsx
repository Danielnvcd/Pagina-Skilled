import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SnakeBorder from '../components/SnakeBorder';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Bloque 1: Diagramas Eléctricos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-gradient-to-br from-[#00172D] to-[#002a52] rounded-2xl p-8 lg:p-10 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden group border border-blue-900/50"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
            
            <SnakeBorder color="#e11d48" duration={6} snakeSize={90} delay={0} />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-3">Desarrollo de Diagramas Eléctricos</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-8 max-w-md">
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
                <motion.div variants={logoItem} className="bg-white rounded-xl p-5 flex items-center justify-center w-40 h-28 shadow-lg border border-white/20 hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="/proveedores/autocad.png"
                    alt="AutoCAD"
                    className="max-h-16 max-w-full object-contain"
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
                <motion.div variants={logoItem} className="bg-white rounded-xl p-5 flex items-center justify-center w-40 h-28 shadow-lg border border-white/20 hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="/proveedores/eplan.png"
                    alt="ePLAN"
                    className="max-h-16 max-w-full object-contain"
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
              <div className="border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FileCode2, label: 'Diagramas de fuerza y control' },
                  { icon: GitBranch, label: 'Diagramas de red e instrumentación' },
                  { icon: Monitor, label: 'Planos As Built actualizados' },
                  { icon: Cpu, label: 'Documentación técnica entregable' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-red/20 flex items-center justify-center border border-accent-red/30 flex-shrink-0">
                       <Icon size={14} className="text-accent-red" />
                    </div>
                    <span className="text-[13px] font-medium text-blue-50 leading-snug">{label}</span>
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
            className="relative bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-shadow duration-500"
          >
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

            <SnakeBorder color="#00172D" duration={6} snakeSize={90} delay={-3} />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Programación PLC</h3>
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
                <motion.div variants={logoItem} className="bg-slate-50 rounded-xl p-5 flex flex-col items-center justify-center w-40 h-28 border border-slate-100 shadow-sm hover:-translate-y-1 hover:border-slate-200 hover:shadow-md transition-all gap-3">
                  <img src="/proveedores/ab.png" alt="Allen-Bradley" className="max-h-12 max-w-full object-contain" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Studio 5000</span>
                </motion.div>
                {/* Siemens */}
                <motion.div variants={logoItem} className="bg-slate-50 rounded-xl p-5 flex flex-col items-center justify-center w-40 h-28 border border-slate-100 shadow-sm hover:-translate-y-1 hover:border-slate-200 hover:shadow-md transition-all gap-3">
                  <img src="/proveedores/siemens.png" alt="Siemens" className="max-h-12 max-w-full object-contain" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">TIA Portal</span>
                </motion.div>
              </motion.div>
              
              {/* Capabilities */}
              <div className="mt-8 border-t border-slate-100 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Cpu, label: 'Automatización de procesos' },
                  { icon: GitBranch, label: 'Lógica ladder, FBD y SCL' },
                  { icon: Monitor, label: 'Control avanzado HMI/SCADA' },
                  { icon: FileCode2, label: 'Industria automotriz / manufactura' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
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
