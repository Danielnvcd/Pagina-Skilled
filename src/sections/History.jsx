import { motion } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import * as Icons from 'lucide-react';
import equipoImg from '../assets/images/equipo.png';
import CircuitBg from '../components/CircuitBg';

const History = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="historia" className="py-24 bg-white relative overflow-hidden">
      <CircuitBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Nuestra Historia y ADN" subtitle="Fundación y Propósito" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="prose max-w-none"
          >
            <p className="mb-10 text-slate-600 text-lg leading-relaxed">
              Fundada en <strong>{data.companyInfo.history.location} en {data.companyInfo.history.year}</strong>, {data.companyInfo.history.description}
            </p>
            
            <div className="space-y-6">
              {/* Misión */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-2xl p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-blue" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                    <Icons.Target size={22} />
                  </div>
                  Misión
                </h3>
                <p className="text-slate-600 leading-relaxed m-0 text-base">"{data.companyInfo.mission}"</p>
              </div>

              {/* Visión */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-2xl p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-red" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-accent-red group-hover:bg-accent-red group-hover:text-white transition-colors duration-300">
                    <Icons.Eye size={22} />
                  </div>
                  Visión
                </h3>
                <p className="text-slate-600 leading-relaxed m-0 text-base">"{data.companyInfo.vision}"</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[460px] flex items-end group"
          >
            {/* Imagen de fondo */}
            <img
              src={equipoImg}
              alt="Equipo Skilled Proyectos Industriales"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay degradado desde abajo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-[#020b16]/70 to-transparent"></div>
            
            {/* Contenido sobre el overlay */}
            <div className="relative z-10 p-10 text-white w-full">
              <Icons.Quote className="text-accent-red/50 mb-4" size={48} />
              <p className="text-2xl md:text-3xl font-bold leading-tight mb-8 text-white">
                La ingeniería no es solo resolver problemas, es diseñar el futuro operativo con precisión y seguridad.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-accent-red rounded-full"></div>
                <div>
                  <div className="font-extrabold tracking-widest text-white text-sm uppercase">Equipo Directivo</div>
                  <div className="text-xs text-blue-200/80 font-medium mt-1">Skilled Proyectos Industriales</div>
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
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {data.companyInfo.values.map((valor, index) => {
              const staticIcons = [Icons.Zap, Icons.ShieldCheck, Icons.CheckCircle, Icons.Lightbulb, Icons.UserCheck];
              const Icon = staticIcons[index % staticIcons.length];
              return (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <div className="h-full bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-primary-blue transition-colors duration-300 shadow-sm">
                      <Icon className="h-6 w-6 text-primary-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 leading-tight mb-2">{valor.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{valor.description}</p>
                  </div>
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
