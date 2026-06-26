import { m } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { TerminalSquare, Cpu, GitBranch, MonitorSmartphone } from 'lucide-react';

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
        <SectionTitle title="SISH — Ingeniería Software & Hardware" subtitle="Automatización y Control" centered={true} />

        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-slate-600 text-lg leading-relaxed">
            Nuestro departamento de Sistemas Integrales de Software y Hardware (SISH) es el núcleo técnico donde materializamos soluciones industriales de alta complejidad. Integrando ingeniería de detalle y programación bajo los estándares internacionales más estrictos, garantizamos que cada proceso, desde un tablero eléctrico hasta el SCADA, opere con máxima seguridad, eficiencia y conectividad continua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          {/* Bloque 1: Diagramas Eléctricos */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center py-10 lg:pr-12"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Desarrollo de Diagramas Eléctricos</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-sm">
              Elaboración de diagramas eléctricos profesionales y precisos en las plataformas líderes de la industria global:
            </p>

            {/* Plataformas */}
            <div className="mb-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">Plataformas</p>
              <m.div
                variants={logoContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-end justify-center gap-10"
              >
                <m.div variants={logoItem} className="flex flex-col items-center gap-3">
                  <img
                    src="/proveedores/autocad.png"
                    alt="AutoCAD"
                    className="h-12 w-auto object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">AutoCAD</span>
                </m.div>
                <m.div variants={logoItem} className="flex flex-col items-center gap-3">
                  <img
                    src="/proveedores/eplan.png"
                    alt="ePLAN"
                    className="h-12 w-auto object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">ePLAN</span>
                </m.div>
              </m.div>
            </div>

            {/* Entregables */}
            <div className="border-t border-slate-100 pt-6 w-full">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Entregables</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 max-w-md mx-auto text-left">
                {[
                  { icon: TerminalSquare, label: 'Diagramas de fuerza y control' },
                  { icon: GitBranch, label: 'Diagramas de red e instrumentación' },
                  { icon: MonitorSmartphone, label: 'Planos As Built actualizados' },
                  { icon: Cpu, label: 'Documentación técnica entregable' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <Icon size={14} className="text-primary-blue mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-slate-600 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Bloque 2: Programación PLC */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col items-center text-center py-10 lg:pl-12"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Programación PLC</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-sm">
              Desarrollo e implementación de lógicas de control robustas para las marcas más prestigiosas de controladores:
            </p>

            {/* Plataformas */}
            <div className="mb-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">Plataformas</p>
              <m.div
                variants={logoContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-end justify-center gap-10"
              >
                <m.div variants={logoItem} className="flex flex-col items-center gap-3">
                  <img src="/proveedores/ab.webp" alt="Allen-Bradley" className="h-12 w-auto object-contain" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Studio 5000</span>
                </m.div>
                <m.div variants={logoItem} className="flex flex-col items-center gap-3">
                  <img src="/proveedores/siemens.png" alt="Siemens" className="h-12 w-auto object-contain" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">TIA Portal</span>
                </m.div>
              </m.div>
            </div>

            {/* Capacidades */}
            <div className="border-t border-slate-100 pt-6 w-full">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Capacidades</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 max-w-md mx-auto text-left">
                {[
                  { icon: Cpu, label: 'Automatización de procesos' },
                  { icon: GitBranch, label: 'Lógica ladder, FBD y SCL' },
                  { icon: MonitorSmartphone, label: 'Control avanzado HMI/SCADA' },
                  { icon: TerminalSquare, label: 'Industria automotriz / manufactura' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <Icon size={14} className="text-accent-red mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-slate-600 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
};

export default SISH;
