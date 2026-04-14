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
                whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl group hover:bg-white/20 transition-colors text-white flex flex-col"
              >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-accent-red/20 text-accent-red rounded-lg group-hover:bg-accent-red group-hover:text-white transition-colors">
                      <Icon size={28} />
                    </div>
                    <span className="text-5xl font-black opacity-10 group-hover:opacity-30 transition-opacity">0{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {service.brands && (
                    <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
                       {service.brands.map((brand, bidx) => (
                          <span key={bidx} className="text-xs font-semibold px-2 py-1 bg-white/10 rounded">{brand}</span>
                       ))}
                    </div>
                  )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
