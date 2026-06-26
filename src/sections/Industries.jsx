import SectionTitle from '../components/SectionTitle';

const Industries = () => {
  const sectors = [
    {
      id: 'automotriz',
      name: 'Automotriz',
      desc: 'Automatización de líneas de pintura y ensamble, celdas robóticas y control de calidad para armadoras e integradores.',
      img: '/sectores/automotriz.webp'
    },
    {
      id: 'manufactura',
      name: 'Manufactura',
      desc: 'Modernización de maquinaria (retrofit), control de motores y optimización de OEE en plantas de producción continua.',
      img: '/sectores/indus.webp'
    },
    {
      id: 'redes',
      name: 'Redes, Voz y Datos',
      desc: 'Diseño e instalación de redes industriales: fibra óptica, cableado estructurado e integración de PLCs y SCADA.',
      img: '/sectores/redes.webp'
    },
    {
      id: 'procesos',
      name: 'Procesos industriales',
      desc: 'Control y monitoreo de procesos (SCADA), instrumentación, cuartos de control y automatización de servicios auxiliares.',
      img: '/sectores/energia.jpg'
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
          {sectors.map((sector) => (
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

              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-primary-blue rounded-full flex-shrink-0"></div>
                <h3 className="text-base font-bold text-slate-900">
                  {sector.name}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
