import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { data } from '../data/content';

const Brands = () => {
  return (
    <section id="proveedores" className="py-20 bg-white border-b border-t border-neutral-light overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionTitle title="Nuestros Proveedores" subtitle="Calidad Garantizada" centered={true} />
        
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
          Suministramos e integramos materiales, equipos, refacciones e insumos de las marcas líderes en el sector industrial a nivel mundial.
        </p>

        {/* Brand categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { label: 'Automatización industrial', brands: 'ABB · Siemens · Eaton' },
            { label: 'Conectividad y protección', brands: 'Phoenix Contact · Weidmüller' },
            { label: 'Cables y conductores', brands: 'Helukabel · LAPP Group · Ascable-Recael' },
            { label: 'Canalización eléctrica', brands: 'Charofil · Viakon' },
          ].map((cat) => (
            <div key={cat.label} className="bg-neutral-gray border border-neutral-light rounded-xl px-4 py-3 text-left min-w-[180px]">
              <p className="text-[9px] font-black uppercase tracking-widest text-accent-red mb-1">{cat.label}</p>
              <p className="text-xs font-bold text-slate-700">{cat.brands}</p>
            </div>
          ))}
        </div>

        {/* Marquee Animation Container - Ahora usando la imagen de las marcas */}
        <div className="relative w-full overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
          <motion.div 
            className="flex w-max items-center justify-start"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35
            }}
          >
            {/* Duplicamos la lista entera para la animación infinita de marquesina */}
            {[...data.brands, ...data.brands].map((brand, index) => (
              <div key={index} className="px-8 min-w-[200px] flex justify-center items-center h-20">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-16 md:max-h-20 max-w-[150px] object-contain opacity-100 hover:grayscale hover:opacity-50 transition-all duration-500 cursor-pointer"
                  onError={(e) => {
                    // Si el usuario aún no ha descargado el logo, la imagen se oculta 
                    // y mostramos en su lugar un recuadro de texto con el nombre de la marca.
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback de texto si el logo no existe */}
                <div style={{display: 'none'}} className="h-full w-full items-center justify-center p-4 bg-neutral-gray border border-neutral-light rounded-xl hover:border-primary-blue hover:shadow-md transition-all">
                  <span className="text-xl font-bold text-gray-500 text-center">{brand.name}</span>
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
