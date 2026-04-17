import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyModal = ({ open, onClose }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 flex-shrink-0">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-red mb-0.5">Legal</p>
                <h2 className="text-xl font-black text-primary-blue">Aviso de Privacidad</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-slate-500 hover:text-slate-800"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-6 py-6 text-sm text-slate-600 leading-relaxed space-y-5">

              <p>
                <strong className="text-slate-800">Skilled Proyectos Industriales, S.A. de C.V.</strong> (en adelante
                "la Empresa"), con domicilio en Calle Álamos No. 29 Int. 5, Sanctorum Cuautlancingo, Puebla, México,
                es responsable del tratamiento de sus datos personales conforme a lo establecido en la{' '}
                <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP) y su Reglamento.
              </p>

              <section>
                <h3 className="font-bold text-slate-800 mb-1">1. Datos personales recabados</h3>
                <p>A través del formulario de contacto de este sitio web recabamos:</p>
                <ul className="list-disc ml-5 mt-1 space-y-0.5">
                  <li>Nombre completo</li>
                  <li>Correo electrónico corporativo</li>
                  <li>Descripción del requerimiento o proyecto</li>
                </ul>
                <p className="mt-2">
                  No recabamos datos personales sensibles (datos patrimoniales, financieros, de salud ni biométricos).
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-800 mb-1">2. Finalidades del tratamiento</h3>
                <p><strong>Finalidades primarias (necesarias):</strong></p>
                <ul className="list-disc ml-5 mt-1 space-y-0.5">
                  <li>Atender su solicitud de información o cotización de servicios de ingeniería.</li>
                  <li>Dar seguimiento comercial al requerimiento enviado.</li>
                  <li>Elaborar propuestas técnicas y económicas.</li>
                </ul>
                <p className="mt-2"><strong>Finalidades secundarias (opcionales):</strong></p>
                <ul className="list-disc ml-5 mt-1 space-y-0.5">
                  <li>Envío de información sobre nuevos servicios, proyectos o actualizaciones de la Empresa.</li>
                </ul>
                <p className="mt-2">
                  Si no desea que sus datos sean tratados para finalidades secundarias, puede manifestarlo
                  enviando un correo a{' '}
                  <a href="mailto:Proyectos@skilled.mx" className="text-primary-blue underline">
                    Proyectos@skilled.mx
                  </a>{' '}
                  con el asunto "Opt-out comunicaciones".
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-800 mb-1">3. Transferencia de datos</h3>
                <p>
                  Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo las excepciones
                  previstas en el artículo 37 de la LFPDPPP (autoridades competentes, orden judicial u obligación legal).
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-800 mb-1">4. Derechos ARCO</h3>
                <p>
                  Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de
                  sus datos personales (derechos ARCO). Para ejercerlos, envíe una solicitud a:
                </p>
                <ul className="list-disc ml-5 mt-1 space-y-0.5">
                  <li>
                    <strong>Correo:</strong>{' '}
                    <a href="mailto:Proyectos@skilled.mx" className="text-primary-blue underline">
                      Proyectos@skilled.mx
                    </a>
                  </li>
                  <li><strong>Teléfono:</strong> 222 639 07 40</li>
                  <li>
                    <strong>Domicilio:</strong> Calle Álamos No. 29 Int. 5, Sanctorum Cuautlancingo, Puebla, México.
                  </li>
                </ul>
                <p className="mt-2">
                  Su solicitud debe incluir: nombre completo, correo de contacto, descripción clara del derecho a
                  ejercer y copia de identificación oficial. Daremos respuesta en un plazo máximo de 20 días hábiles.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-800 mb-1">5. Seguridad de los datos</h3>
                <p>
                  La Empresa implementa medidas de seguridad administrativas, técnicas y físicas para proteger sus
                  datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-800 mb-1">6. Cambios al aviso de privacidad</h3>
                <p>
                  Cualquier modificación a este aviso será notificada a través de este sitio web. Le recomendamos
                  revisar periódicamente esta sección.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-800 mb-1">7. INAI</h3>
                <p>
                  Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir al
                  Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales
                  (INAI): <a href="https://home.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary-blue underline">www.inai.org.mx</a>.
                </p>
              </section>

              <p className="text-xs text-slate-400 pt-2 border-t border-neutral-200">
                Última actualización: abril 2026. Skilled Proyectos Industriales.
              </p>
            </div>

            {/* Footer del modal */}
            <div className="px-6 py-4 border-t border-neutral-200 flex-shrink-0">
              <button
                onClick={onClose}
                className="w-full bg-primary-blue text-white font-bold py-2.5 rounded-lg hover:bg-blue-900 transition-colors text-sm"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
