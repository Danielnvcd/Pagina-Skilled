import { motion } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const Clients = () => {
  return (
    <section id="clientes" className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle title="Empresas que confían en nosotros" subtitle="Nuestros Clientes" centered={true} />

        <div className="mt-16 bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-slate-100 border-b border-slate-100">
            {data.clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="flex items-center justify-center p-8 aspect-[3/2] hover:bg-slate-50 transition-colors duration-300 group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-14 max-w-[120px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none' }} className="h-full w-full items-center justify-center text-center">
                  <span className="text-slate-400 font-bold text-sm tracking-wide group-hover:text-primary-blue transition-colors">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Clients;
