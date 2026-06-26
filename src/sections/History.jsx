import { m } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import * as Icons from 'lucide-react';
import portadaImg from '../assets/images/Portada.webp';

const History = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="historia" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle title="Nuestra Historia y ADN" subtitle="Fundación y Propósito" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 lg:items-stretch">
          
          {/* Left Column: Text & Cards */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col h-full"
          >
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 border-l-4 border-primary-blue pl-6">
              Fundada en <strong>{data.companyInfo.history.location} en {data.companyInfo.history.year}</strong>, {data.companyInfo.history.description}
            </p>

            <div className="flex flex-col gap-6 flex-grow justify-center">
              {/* Misión */}
              <div className="bg-white p-6 lg:p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-primary-blue">
                    <Icons.Target size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wider text-sm">Nuestra Misión</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {data.companyInfo.mission}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visión */}
              <div className="bg-white p-6 lg:p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-red-50/80 border border-red-100 flex items-center justify-center text-accent-red">
                    <Icons.Eye size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wider text-sm">Nuestra Visión</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {data.companyInfo.vision}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Right Column: Image */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative overflow-hidden shadow-2xl h-[400px] lg:h-auto min-h-[500px]"
          >
            <img
              src={portadaImg}
              alt="Portada Skilled Proyectos Industriales"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-primary-blue/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#002742] via-[#00416B]/80 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 lg:p-10 w-full">
              <p className="text-xl md:text-2xl font-bold text-white leading-tight mb-6">
                La ingeniería no es solo resolver problemas, es diseñar el futuro operativo con precisión y seguridad.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-accent-red rounded-full"></div>
                <div>
                  <div className="font-bold tracking-widest text-white text-xs uppercase">Equipo Directivo</div>
                  <div className="text-[10px] text-blue-200/80 font-medium mt-1">Skilled Proyectos Industriales</div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Valores */}
        <div className="pt-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <span className="text-accent-red font-bold uppercase tracking-widest text-xs mb-3 block">ADN Corporativo</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-blue">Pilares Operativos</h2>
          </div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12"
          >
            {data.companyInfo.values.map((valor, index) => {
              const iconsList = [
                <Icons.Crosshair size={36} strokeWidth={1.5} />,
                <Icons.ShieldCheck size={36} strokeWidth={1.5} />,
                <Icons.Activity size={36} strokeWidth={1.5} />,
                <Icons.Cpu size={36} strokeWidth={1.5} />,
                <Icons.Scale size={36} strokeWidth={1.5} />
              ];
              const IconComp = iconsList[index % iconsList.length];

              return (
                <m.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
                  <div className="text-slate-400 mb-6 group-hover:text-primary-blue transition-colors duration-300 transform group-hover:-translate-y-2">
                    {IconComp}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">{valor.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{valor.description}</p>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default History;
