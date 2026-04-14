import { motion } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const Clients = () => {
  return (
    <section className="py-20 bg-neutral-gray border-y border-neutral-light shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle title="Empresas que confían en nosotros" subtitle="Nuestros Clientes" centered={true} />

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-12">
          {data.clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-neutral-light/50 hover:shadow-md transition-shadow w-40 h-28"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="h-full w-full items-center justify-center text-center">
                <span className="text-primary-blue font-bold text-lg">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Clients;
