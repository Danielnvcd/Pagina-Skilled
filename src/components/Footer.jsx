import { useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/content';
import { Mail, PhoneCall, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import PrivacyModal from './PrivacyModal';

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#041527] text-white pt-10 pb-6 border-t-4 border-accent-red" id="contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <img src={logoImg} alt="Skilled Proyectos Industriales" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">
              Soluciones integrales de alta ingeniería que transforman la rentabilidad
            </p>
            <div className="text-xs mb-4">
              <strong className="block text-white mb-1">Dirección General:</strong>
              <span className="text-slate-400 block">{data.contact.personnel[0].name} - {data.contact.personnel[0].position}</span>
              <span className="text-slate-400 block">{data.contact.personnel[1].name} - {data.contact.personnel[1].position}</span>
            </div>

            {/* Redes Sociales */}
            <div>
              <strong className="block text-white mb-2 text-xs">Síguenos:</strong>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61571232704026" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-accent-red hover:text-white hover:border-accent-red transition-all shadow-sm">
                  <Facebook size={14} />
                </a>
                <a href="https://www.instagram.com/skilled_proyectos/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-accent-red hover:text-white hover:border-accent-red transition-all shadow-sm">
                  <Instagram size={14} />
                </a>
                <a href="https://www.linkedin.com/company/skilled-proyectos-industriales/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-accent-red hover:text-white hover:border-accent-red transition-all shadow-sm">
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="text-base font-bold mb-4 border-b border-white/10 pb-1">Contáctanos</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="text-accent-red mr-2 mt-0.5 flex-shrink-0" size={16} />
                <a href={`mailto:${data.contact.companyEmail}`} className="text-slate-300 hover:text-white transition-colors">
                  {data.contact.companyEmail}
                </a>
              </li>
              <li className="flex items-start">
                <PhoneCall className="text-accent-red mr-2 mt-0.5 flex-shrink-0" size={16} />
                <a href={`tel:${data.contact.companyPhone.replace(/\s/g,'')}`} className="text-slate-300 hover:text-white transition-colors">
                  {data.contact.companyPhone}
                </a>
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="text-base font-bold mb-4 border-b border-white/10 pb-1">Ubicación</h4>
            <div className="flex items-start mb-3">
              <MapPin className="text-accent-red mr-2 mt-0.5 flex-shrink-0" size={16} />
              <p className="text-slate-300 leading-relaxed text-xs">
                {data.contact.address}
              </p>
            </div>
            {/* Mapa Google Maps real */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg mt-2 h-32">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0914011967816!2d-98.25510182454764!3d19.103645782106625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc5000aa257a3%3A0xd8089d86e33317b6!2sSKILLED%20Proyectos%20Industriales!5e0!3m2!1ses-419!2smx!4v1776160917901!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Skilled Proyectos Industriales"
              />
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-500 gap-2">
          <p>&copy; {new Date().getFullYear()} Skilled Proyectos Industriales. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Aviso de Privacidad
            </button>
            <span className="text-slate-700">|</span>
            <p>Diseñado con React & Tailwind</p>
          </div>
        </div>
      </div>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </motion.footer>
  );
};

export default Footer;
