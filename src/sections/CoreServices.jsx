import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Bot, LayoutGrid, Workflow, Wrench, CarFront, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const services = [
  {
    icon: Cpu,
    title: 'Automatización con PLC',
    desc: 'Programación de controladores Siemens y Allen-Bradley para automatizar procesos productivos con lógica robusta y control HMI/SCADA.',
    image: '/servicios/software-hardware.jpg',
  },
  {
    icon: Bot,
    title: 'Integración de robots industriales',
    desc: 'Instalación eléctrica e integración de celdas robóticas para aplicación de pintura, sello y manipulación en líneas de producción.',
    image: '/servicios/integracion.jpg',
  },
  {
    icon: LayoutGrid,
    title: 'Tableros eléctricos y control',
    desc: 'Diseño y fabricación a medida de tableros de fuerza y control, sistemas de protección y puesta a tierra bajo normativa vigente.',
    image: '/servicios/ingenieria.jpg',
  },
  {
    icon: Workflow,
    title: 'Puesta en marcha de líneas automatizadas',
    desc: 'Commissioning, pruebas de lazo y arranque en sitio garantizando continuidad operativa y cero tiempos muertos no programados.',
    image: '/servicios/infraestructura.jpg',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y soporte técnico',
    desc: 'Mantenimiento preventivo y correctivo, diagnóstico y modernización (retrofit) de equipos e instalaciones industriales.',
    image: '/servicios/redes.jpg',
  },
  {
    icon: CarFront,
    title: 'Soluciones para armadoras automotrices',
    desc: 'Experiencia comprobada con plantas e integradores de la industria automotriz: Ford, Volkswagen, Daimler, Stellantis y Dürr.',
    image: '/sectores/automotriz.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const CoreServices = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Soluciones"
          title="Ingeniería aplicada a procesos industriales"
          centered
        />

        <p className="max-w-3xl mx-auto -mt-4 mb-16 text-center text-slate-600 text-lg leading-relaxed">
          Cubrimos el ciclo completo de un proyecto de automatización, desde la ingeniería
          de detalle hasta la puesta en marcha, con un enfoque en productividad, seguridad
          y continuidad operativa.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200"
        >
          {services.map(({ icon: Icon, title, desc, image }) => (
            <motion.article
              key={title}
              variants={cardVariants}
              className="group relative bg-white p-8 flex flex-col transition-colors duration-300 hover:bg-slate-50"
            >
              {/* Image strip */}
              <div className="relative h-40 -mx-8 -mt-8 mb-7 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover grayscale-[35%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-primary-blue/10 to-transparent" />
                <div className="absolute bottom-4 left-8 w-11 h-11 rounded-sm bg-white flex items-center justify-center text-primary-blue shadow-md">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight pr-6">
                {title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {desc}
              </p>

              <span className="absolute top-7 right-7 text-slate-300 group-hover:text-accent-red transition-colors duration-300">
                <ArrowUpRight size={20} />
              </span>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm uppercase tracking-wider hover:text-accent-red transition-colors group"
          >
            Ver portafolio completo de servicios
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
