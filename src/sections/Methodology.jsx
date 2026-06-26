import { Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Methodology = () => {
  const steps = [
    {
      title: '1. Levantamiento y Diagnóstico',
      desc: 'Inspección técnica en planta, evaluación de infraestructura existente y levantamiento de requerimientos bajo normativas de seguridad (NOM/OSHA).',
    },
    {
      title: '2. Ingeniería de Detalle',
      desc: 'Diseño de diagramas eléctricos (ePLAN/AutoCAD) y arquitectura de control. Selección rigurosa de componentes (Siemens, Allen-Bradley).',
    },
    {
      title: '3. Integración y Ejecución',
      desc: 'Programación de PLC/HMI, ensamble de tableros y despliegue en sitio garantizando cero tiempos de inactividad no programados (Zero Downtime).',
    },
    {
      title: '4. Commissioning y Soporte',
      desc: 'Puesta en marcha, pruebas de lazo (loop checks), entrega de planos "As-Built" y pólizas de mantenimiento preventivo/correctivo.',
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle 
          title="Metodología de Ejecución" 
          subtitle="Proceso Estándar" 
          centered={true} 
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-slate-200">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col h-full lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-primary-blue rounded-full flex-shrink-0"></div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Commitment Banner */}
        <div className="mt-16 bg-[#020b16] p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="text-white text-xl font-bold mb-2">Compromiso Llave en Mano</h4>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Asumimos la responsabilidad total del ciclo de vida del proyecto. Desde la ingeniería conceptual hasta la capacitación de operadores, garantizando soluciones que cumplen con los estándares internacionales más exigentes de la industria manufacturera y de procesos.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="px-6 py-3 border border-white/20 bg-white/5 flex items-center gap-3">
              <Shield size={20} className="text-accent-red" />
              <span className="text-white text-sm font-bold tracking-wide">Garantía de Integración</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;
