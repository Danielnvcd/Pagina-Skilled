import { Car, Factory, Network, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Industries = () => {
  const sectors = [
    {
      id: 'automotriz',
      name: 'Automotriz y Autopartes',
      desc: 'Automatización de líneas de ensamble, celdas robóticas y control de calidad bajo estrictos estándares de la industria.',
      img: '/sectores/automotriz.jpg',
      icon: Car
    },
    {
      id: 'manufactura',
      name: 'Manufactura Avanzada',
      desc: 'Modernización de maquinaria (Retrofit), control de motores y optimización de OEE en plantas de producción continua.',
      img: '/sectores/manufactura.jpg',
      icon: Factory
    },
    {
      id: 'redes',
      name: 'Redes Industriales',
      desc: 'Diseño e implementación de topologías robustas, tendido de fibra óptica y certificación de nodos de control (Profinet, Ethernet/IP).',
      img: '/sectores/redes.jpg',
      icon: Network
    },
    {
      id: 'energia',
      name: 'Energía y Facilidades',
      desc: 'Sistemas de monitoreo de energía (SCADA), cuartos de control y automatización de subestaciones y servicios auxiliares.',
      img: '/sectores/energia.jpg',
      icon: Zap
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Sectores de Especialidad"
          title="Industrias que Atendemos"
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div key={sector.id} className="group flex flex-col bg-white rounded-sm border border-slate-200 overflow-hidden hover:border-primary-blue transition-colors duration-300">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-slate-100">
                  <div className="absolute inset-0 bg-primary-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={sector.img} 
                    alt={sector.name} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback si no hay imagen */}
                  <div style={{ display: 'none' }} className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{sector.id}.jpg</span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-sm flex items-center justify-center z-20 shadow-sm border border-slate-100 group-hover:border-primary-blue transition-colors">
                    <Icon size={20} className="text-primary-blue" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary-blue transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
