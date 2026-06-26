import { m } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { data } from '../data/content';

const Brands = () => {
  return (
    <section id="proveedores" className="bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionTitle title="Socios Tecnológicos" subtitle="Calidad Garantizada" centered={true} />
        
        <p className="text-slate-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Integramos tecnología de vanguardia mediante el suministro de componentes de las marcas líderes en el sector industrial a nivel global.
        </p>

        {/* Brand categories - Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Automatización Industrial', logos: [
              { name: 'ABB', src: '/proveedores/abb.webp' },
              { name: 'Siemens', src: '/proveedores/siemens.png' },
              { name: 'Eaton', src: '/proveedores/eaton.webp' },
            ] },
            { label: 'Conectividad y Protección', logos: [
              { name: 'Phoenix Contact', src: '/proveedores/phoenix.webp' },
              { name: 'Weidmüller', src: '/proveedores/weidmuller.png' },
            ] },
            { label: 'Cables y Conductores', logos: [
              { name: 'Helukabel', src: '/proveedores/helukabel.webp' },
              { name: 'LAPP Group', src: '/proveedores/lapp.webp' },
              { name: 'Ascable', src: '/proveedores/ascable.webp' },
            ] },
            { label: 'Canalización Eléctrica', logos: [
              { name: 'Charofil', src: '/proveedores/charofil.webp' },
              { name: 'Viakon', src: '/proveedores/viakon.webp' },
            ] },
          ].map((cat, i) => {
            return (
            <m.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-sm p-6 text-center hover:border-primary-blue transition-colors duration-300 group"
            >
              <h3 className="text-sm font-bold text-slate-900 mb-4">{cat.label}</h3>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {cat.logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="w-10 h-10 bg-white border border-slate-200 rounded-sm flex items-center justify-center p-1.5"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      title={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </m.div>
            );
          })}
        </div>

        {/* Marquee Animation Container - Refined */}
        <div className="relative w-full overflow-hidden py-12 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent border-t border-slate-50">
          <m.div 
            className="flex w-max items-center justify-start"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40
            }}
          >
            {[...data.brands, ...data.brands].map((brand, index) => (
              <div key={index} className="px-10 min-w-[220px] flex justify-center items-center h-20 group">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-12 md:max-h-16 max-w-[160px] object-contain transition-all duration-500 cursor-pointer"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback de texto si el logo no existe */}
                <div style={{display: 'none'}} className="h-full w-full items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-sm group-hover:border-primary-blue transition-colors">
                  <span className="text-sm font-bold text-slate-500 group-hover:text-primary-blue text-center uppercase tracking-wider">{brand.name}</span>
                </div>
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
