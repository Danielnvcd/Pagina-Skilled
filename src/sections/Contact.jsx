import { useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import PrivacyModal from '../components/PrivacyModal';
import { Mail, PhoneCall, UserCog } from 'lucide-react';

const Contact = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle title="¿Listo para optimizar operaciones?" subtitle="Hablemos de Ingeniería" centered={false} />
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Nuestro equipo directivo está preparado para analizar las necesidades de tu planta industrial o proyecto y ofrecer un desarrollo llave en mano.
            </p>

            {/* Tarjetas de contacto directivo - Modernas */}
            <div className="space-y-6 mt-10">
              {data.contact.personnel.map((person, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-sm bg-white border border-slate-200 hover:bg-slate-50 transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-primary-blue transition-colors duration-300 flex-shrink-0">
                    <UserCog size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 leading-tight mb-1">
                      {person.name}
                    </h4>
                    <span className="text-xs font-black text-accent-red uppercase tracking-widest block mb-4">{person.position}</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-600 font-medium">
                      <a href={`mailto:${person.email}`} className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                        <Mail size={16} className="text-slate-400 group-hover:text-primary-blue transition-colors" /> {person.email}
                      </a>
                      {person.phone && (
                        <>
                          <span className="hidden sm:block text-slate-300">|</span>
                          <a href={`tel:${person.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                            <PhoneCall size={16} className="text-slate-400 group-hover:text-primary-blue transition-colors" /> Cel: {person.phone}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:mt-12"
          >
            <div className="bg-white p-10 md:p-12 rounded-sm border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Envíenos un Mensaje</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" id="name" placeholder="Nombre completo" className="w-full px-5 py-4 bg-white hover:bg-slate-50 focus:bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                </div>
                <div>
                  <input type="email" id="email" placeholder="Correo electrónico corporativo" className="w-full px-5 py-4 bg-white hover:bg-slate-50 focus:bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                </div>
                <div>
                  <textarea id="message" rows="4" placeholder="Detalles de su requerimiento..." className="w-full px-5 py-4 bg-white hover:bg-slate-50 focus:bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue transition-colors resize-none text-sm font-medium text-slate-900 placeholder:text-slate-400"></textarea>
                </div>
                
                <div className="pt-2">
                  <Button variant="primary" className="w-full py-4 text-base">
                    Solicitar Asesoría Técnica
                  </Button>
                </div>

                <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider font-bold mt-6">
                  Al enviar acepta nuestro{' '}
                  <button onClick={() => setPrivacyOpen(true)} className="text-primary-blue hover:text-accent-red transition-colors underline underline-offset-4">
                    Aviso de Privacidad
                  </button>
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </section>
  );
};

export default Contact;
