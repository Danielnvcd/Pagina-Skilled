import { motion } from 'framer-motion';
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
            { label: 'Automatización Industrial', brands: 'ABB, Siemens, Eaton', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { label: 'Conectividad y Protección', brands: 'Phoenix Contact, Weidmüller', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { label: 'Cables y Conductores', brands: 'Helukabel, LAPP Group, Ascable', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { label: 'Canalización Eléctrica', brands: 'Charofil, Viakon', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
          ].map((cat, i) => (
            <motion.div 
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-sm p-6 text-left hover:border-primary-blue transition-colors duration-300 group"
            >
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary-blue group-hover:border-primary-blue transition-colors duration-300">
                <svg className="w-5 h-5 text-primary-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{cat.label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{cat.brands}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee Animation Container - Refined */}
        <div className="relative w-full overflow-hidden py-12 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent border-t border-slate-50">
          <motion.div 
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
