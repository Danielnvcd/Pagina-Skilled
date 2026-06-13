import { data } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import { Settings2, Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          subtitle="Caso de Éxito"
          title="Proyectos Destacados"
          centered
        />

        <div className="mt-16 bg-white rounded-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row hover:border-primary-blue transition-colors duration-300">
          {/* Left Content */}
          <div className="lg:w-2/3 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-accent-red font-bold uppercase tracking-widest text-[10px]">Industria Automotriz</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Proyecto Llave en Mano</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-8 leading-tight">
              {data.featuredProject.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {/* Instalación */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-primary-blue">
                    <Settings2 size={14} />
                  </div>
                  Instalación
                </h4>
                <ul className="text-xs text-slate-600 space-y-3">
                  {data.featuredProject.installation.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-blue mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Pruebas */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-primary-blue">
                    <Activity size={14} />
                  </div>
                  Pruebas y Redes
                </h4>
                <ul className="text-xs text-slate-600 space-y-3">
                  {data.featuredProject.electricalAndNetworkTesting.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-blue mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
               <Link to="/proyectos" className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm hover:text-blue-700 transition-colors">
                  Ver portafolio completo de proyectos <ChevronRight size={16} />
               </Link>
            </div>
          </div>

          {/* Right Showcase Image */}
          <div className="lg:w-1/3 bg-slate-50 relative flex items-center justify-center min-h-[250px] lg:min-h-full overflow-hidden border-l border-slate-200">
            <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center border border-slate-200 p-6 md:p-8">
              <img src="/proveedores/vwm.png" alt="Volkswagen de México" className="w-full h-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
