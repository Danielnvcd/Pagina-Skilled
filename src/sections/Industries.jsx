import { CarFront, Factory, ServerCog, Activity } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Industries = () => {
  const sectors = [
    {
      id: 'automotriz',
      name: 'Automotriz y Autopartes',
      desc: 'Automatización de líneas de ensamble, celdas robóticas y control de calidad bajo estrictos estándares de la industria.',
      img: '/sectores/automotriz.jpg',
      icon: CarFront
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
      icon: ServerCog
    },
    {
      id: 'energia',
      name: 'Energía y Facilidades',
      desc: 'Sistemas de monitoreo de energía (SCADA), cuartos de control y automatización de subestaciones y servicios auxiliares.',
      img: '/sectores/energia.jpg',
      icon: Activity
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Sectores de Especialidad"
          title="Industrias que Atendemos"
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-slate-200">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div key={sector.id} className="flex flex-col lg:px-8 first:lg:pl-0 last:lg:pr-0">
                {/* Image */}
                <div className="relative h-44 overflow-hidden mb-6">
                  <img 
                    src={sector.img} 
                    alt={sector.name} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-primary-blue rounded-full flex-shrink-0"></div>
                  <Icon size={22} className="text-primary-blue flex-shrink-0" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {sector.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
