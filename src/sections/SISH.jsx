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
            className="relative bg-primary-blue rounded-2xl p-8 text-white"
          >
            <SnakeBorder color="#EA0029" duration={6} snakeSize={90} delay={0} />
            <h3 className="text-xl font-bold mb-1">Desarrollo de Diagramas Eléctricos</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Elaboración de diagramas eléctricos profesionales en plataformas líderes de la industria:
            </p>
            <motion.div
              variants={logoContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center justify-center gap-6 mb-6"
            >
              {/* AutoCAD */}
              <motion.div variants={logoItem} className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-24 shadow-lg">
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
              <motion.div variants={logoItem} className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-24 shadow-lg">
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
            <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-3">
              {[
                { icon: FileCode2, label: 'Diagramas de fuerza y control' },
                { icon: GitBranch, label: 'Diagramas de red e instrumentación' },
                { icon: Monitor, label: 'Planos As Built actualizados' },
                { icon: Cpu, label: 'Documentación técnica entregable' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-2">
                  <Icon size={13} className="text-accent-red mt-0.5 flex-shrink-0" />
                  <span className="text-[11px] text-blue-100/80 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bloque 2: Programación PLC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative bg-neutral-gray rounded-2xl p-8 border border-neutral-light"
          >
            <SnakeBorder color="#00416B" duration={6} snakeSize={90} delay={-3} />
            <h3 className="text-xl font-bold text-slate-800 mb-1">Programación PLC</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Desarrollo e implementación de programas para controladores lógicos programables en plataformas:
            </p>
            <motion.div
              variants={logoContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center justify-center gap-6"
            >
              {/* Allen-Bradley */}
              <motion.div variants={logoItem} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center w-36 h-24 shadow border border-neutral-light gap-2">
                <img src="/proveedores/ab.png" alt="Allen-Bradley" className="max-h-12 max-w-full object-contain" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Studio 5000</span>
              </motion.div>
              {/* Siemens */}
              <motion.div variants={logoItem} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center w-36 h-24 shadow border border-neutral-light gap-2">
                <img src="/proveedores/siemens.png" alt="Siemens" className="max-h-12 max-w-full object-contain" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">TIA Portal</span>
              </motion.div>
            </motion.div>
            {/* Capabilities */}
            <div className="mt-6 border-t border-neutral-light pt-5 grid grid-cols-2 gap-3">
              {[
                { icon: Cpu, label: 'Automatización de procesos industriales' },
                { icon: GitBranch, label: 'Programación ladder, FBD y SCL' },
                { icon: Monitor, label: 'Control y monitoreo HMI/SCADA' },
                { icon: FileCode2, label: 'Industria automotriz y manufacturera' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-2">
                  <Icon size={13} className="text-primary-blue mt-0.5 flex-shrink-0" />
                  <span className="text-[11px] text-slate-500 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SISH;
