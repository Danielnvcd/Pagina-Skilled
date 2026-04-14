import { motion } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import * as Icons from 'lucide-react';
import equipoImg from '../assets/images/equipo.jpg';

const History = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="historia" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Nuestra Historia y ADN" subtitle="Fundación y Propósito" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="prose max-w-none text-gray-600 text-lg leading-relaxed"
          >
            <p className="mb-6">
              Fundada en <strong>{data.companyInfo.history.location} en {data.companyInfo.history.year}</strong>, {data.companyInfo.history.description}
            </p>
            <Card hoverEffect={false} className="p-8 bg-neutral-gray border-l-4 border-l-primary-blue border-y-0 border-r-0 rounded-r-xl rounded-l-none mb-6">
              <h3 className="text-xl font-bold text-primary-blue mb-2 flex items-center">
                <Icons.Target className="mr-3 text-accent-red" size={24} /> Misión
              </h3>
              <p className="text-base m-0 text-gray-700 italic">"{data.companyInfo.mission}"</p>
            </Card>
            <Card hoverEffect={false} className="p-8 bg-neutral-gray border-l-4 border-l-accent-red border-y-0 border-r-0 rounded-r-xl rounded-l-none">
              <h3 className="text-xl font-bold text-primary-blue mb-2 flex items-center">
                <Icons.Eye className="mr-3 text-accent-red" size={24} /> Visión
              </h3>
              <p className="text-base m-0 text-gray-700 italic">"{data.companyInfo.vision}"</p>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[380px] flex items-end"
          >
            {/* Imagen de fondo */}
            <img 
              src={equipoImg} 
              alt="Equipo Skilled Proyectos Industriales" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay degradado desde abajo */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue via-primary-blue/60 to-transparent"></div>
            {/* Contenido sobre el overlay */}
            <div className="relative z-10 p-8 text-white">
              <div className="text-5xl text-accent-red mb-2 opacity-60 leading-none">"</div>
              <p className="text-xl font-bold leading-snug mb-6">
                La ingeniería no es solo resolver problemas, es diseñar el futuro operativo con precisión y seguridad.
              </p>
              <div className="flex items-center">
                <div className="h-1 w-10 bg-accent-red mr-3 rounded-full"></div>
                <div>
                  <div className="font-bold text-white text-sm">Equipo Directivo</div>
                  <div className="text-xs text-blue-200">Skilled Proyectos Industriales</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <SectionTitle title="Nuestros Valores" subtitle="Pilares Operativos" centered={true} />
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {data.companyInfo.values.map((valor, index) => {
              const staticIcons = [Icons.Zap, Icons.ShieldCheck, Icons.CheckCircle, Icons.Lightbulb, Icons.UserCheck];
              const Icon = staticIcons[index % staticIcons.length];
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card hoverEffect={true} className="h-full p-6 text-center border-t-4 border-t-transparent hover:border-t-accent-red transition-all group">
                    <div className="mx-auto h-16 w-16 mb-6 rounded-full bg-blue-50 group-hover:bg-accent-red flex items-center justify-center transition-colors">
                      <Icon className="h-8 w-8 text-primary-blue group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2">{valor.title}</h4>
                    <p className="text-sm text-gray-600">{valor.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;
