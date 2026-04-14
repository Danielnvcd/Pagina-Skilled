import { motion } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import * as Icons from 'lucide-react';

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="servicios" className="py-24 bg-primary-blue text-white relative">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <span className="text-accent-red font-bold uppercase tracking-wider text-sm mb-2 block">Nuestra Oferta</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">Portafolio de Servicios</h2>
          <div className="h-1 w-20 bg-accent-red mt-4"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.services.map((service, index) => {
            const staticIcons = [Icons.Zap, Icons.Factory, Icons.Lightbulb, Icons.Cog, Icons.Network, Icons.ShieldCheck];
            const Icon = staticIcons[index % staticIcons.length];
            
            return (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-[#071c35] border border-blue-900 rounded-2xl group overflow-hidden text-white flex flex-col"
              >
                  {/* Photo Thumbnail */}
                  <div className="h-48 relative overflow-hidden bg-blue-950">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{display: 'none'}} className="absolute inset-0 items-center justify-center bg-blue-900 text-blue-800 font-bold text-sm">
                      Falta agregar la foto: {service.image.split('/').pop()}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071c35] to-transparent opacity-90"></div>
                    <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-accent-red/20 transition-colors pointer-events-none">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent-red/20 text-accent-red rounded-lg group-hover:bg-accent-red group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold leading-tight flex-1">{service.name}</h3>
                    </div>
                    
                    <p className="text-blue-200/80 text-sm leading-relaxed mb-4 flex-grow group-hover:text-blue-100 transition-colors">
                      {service.description}
                    </p>
                    
                    {service.brands && (
                      <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
                         {service.brands.map((brand, bidx) => (
                            <span key={bidx} className="text-xs font-semibold px-2 py-1 bg-white/10 rounded">{brand}</span>
                         ))}
                      </div>
                    )}
                  </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
