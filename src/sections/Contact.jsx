import { useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CircuitBg from '../components/CircuitBg';
import Card from '../components/Card';
import PrivacyModal from '../components/PrivacyModal';

const Contact = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <CircuitBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle title="¿Listo para optimizar operaciones?" subtitle="Hablemos de Ingeniería" centered={false} />
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo directivo está preparado para analizar las necesidades de tu planta industrial o proyecto y ofrecer un desarrollo llave en mano.
            </p>

            {/* Tarjetas de contacto directivo */}
            <div className="bg-primary-blue text-white rounded-2xl p-8 shadow-lg border-l-4 border-accent-red">
              {data.contact.personnel.map((person, index) => (
                <div key={index} className={index !== 0 ? "border-t border-blue-800 pt-6 mt-6" : ""}>
                  <h4 className="text-lg md:text-xl font-bold mb-3">
                    {person.name} <span className="font-normal opacity-80 text-base md:text-lg">— {person.position}</span>
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm md:text-base opacity-90">
                    <a href={`mailto:${person.email}`} className="text-blue-300 hover:text-white transition-colors underline underline-offset-4 decoration-blue-800 hover:decoration-blue-400">
                      {person.email}
                    </a>
                    <span className="hidden sm:block text-blue-800">|</span>
                    <a href={`tel:${person.phone.replace(/\s/g,'')}`} className="hover:text-blue-200 transition-colors">
                      Cel: {person.phone}
                    </a>
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
          >
            <Card hoverEffect={false} className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="sr-only">Nombre</label>
                  <input type="text" id="name" placeholder="Nombre completo" className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Correo electrónico</label>
                  <input type="email" id="email" placeholder="Correo electrónico corporativo" className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <textarea id="message" rows="4" placeholder="Detalles de su requerimiento..." className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red transition-all resize-none"></textarea>
                </div>
                <p className="text-xs text-gray-400 text-center">
                  Al enviar acepta nuestro{' '}
                  <button onClick={() => setPrivacyOpen(true)} className="underline hover:text-primary-blue transition-colors">
                    Aviso de Privacidad
                  </button>
                </p>
                <Button variant="primary" className="w-full">
                  Solicitar Asesoría
                </Button>
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </section>
  );
};

export default Contact;
