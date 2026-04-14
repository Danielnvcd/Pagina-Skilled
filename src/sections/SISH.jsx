import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const SISH = () => {
  return (
    <section id="sish" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="SISH — Ingeniería Software & Hardware" subtitle="Automatización y Control" centered={false} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Bloque 1: Diagramas Eléctricos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary-blue rounded-2xl p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-3">Desarrollo de Diagramas Eléctricos</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-8">
              Elaboración de diagramas eléctricos profesionales en plataformas líderes de la industria:
            </p>
            <div className="flex items-center justify-center gap-6">
              {/* AutoCAD */}
              <div className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-24 shadow-lg">
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
              </div>
              {/* ePLAN */}
              <div className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-24 shadow-lg">
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
              </div>
            </div>
          </motion.div>

          {/* Bloque 2: Programación PLC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="bg-neutral-gray rounded-2xl p-8 border border-neutral-light"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-3">Programación PLC</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Desarrollo e implementación de programas para controladores lógicos programables en plataformas:
            </p>
            <div className="flex items-center justify-center gap-6">
              {/* Allen-Bradley */}
              <div className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-24 shadow border border-neutral-light">
                <img
                  src="/proveedores/ab.png"
                  alt="Allen-Bradley"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              {/* Siemens */}
              <div className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-24 shadow border border-neutral-light">
                <img
                  src="/proveedores/siemens.png"
                  alt="Siemens"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              <strong className="text-slate-700">Siemens</strong> y <strong className="text-slate-700">Allen-Bradley</strong> — las plataformas de automatización más utilizadas en la industria automotriz.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SISH;
