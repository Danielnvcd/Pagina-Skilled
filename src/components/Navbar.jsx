import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import logoImg from '../assets/images/logo.webp';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashClick = (e, href) => {
    if (href.startsWith('/#')) {
      const hash = href.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Opcional: Actualizar la URL sin recargar
          window.history.pushState(null, '', href);
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Historia', href: '/historia' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proveedores', href: '/proveedores' },
  ];

  return (
    <m.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white border-b border-slate-200 py-3' : 'bg-white py-3'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img 
            src={logoImg} 
            alt="Skilled Logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-10 drop-shadow-md'}`} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleHashClick(e, link.href)}
              className={`relative text-sm font-bold transition-colors hover:text-accent-red group ${
                scrolled ? 'text-primary-blue' : 'text-primary-blue drop-shadow-sm'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Social Icons Desktop */}
          <div className="flex items-center space-x-3 border-l border-neutral-light pl-6">
            <a aria-label="Skilled en Facebook" href="https://www.facebook.com/profile.php?id=61571232704026" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-accent-red ${scrolled ? 'text-primary-blue/70' : 'text-primary-blue/80'}`}>
              <Facebook size={18} />
            </a>
            <a aria-label="Skilled en Instagram" href="https://www.instagram.com/skilled_proyectos/" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-accent-red ${scrolled ? 'text-primary-blue/70' : 'text-primary-blue/80'}`}>
              <Instagram size={18} />
            </a>
            <a aria-label="Skilled en LinkedIn" href="https://www.linkedin.com/company/skilled-proyectos-industriales/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-accent-red ${scrolled ? 'text-primary-blue/70' : 'text-primary-blue/80'}`}>
              <Linkedin size={18} />
            </a>
          </div>
          <Link to="/#contacto" onClick={(e) => handleHashClick(e, '/#contacto')}>
            <Button variant="primary">Contacto</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            className="p-2 text-primary-blue hover:text-accent-red transition-colors"
          >
            <Menu size={28}/>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Drawer */}
            <m.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="fixed top-0 right-0 h-[100dvh] w-4/5 max-w-sm bg-white border-l border-slate-200 z-[70] md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-5 border-b border-slate-100">
                <img src={logoImg} alt="Skilled Logo" className="h-8 object-contain" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Cerrar menú de navegación"
                  className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 hover:text-accent-red transition-colors rounded-full hover:bg-slate-50 active:bg-slate-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="px-6 py-8 space-y-2 flex flex-col flex-grow overflow-y-auto">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleHashClick(e, link.href)}
                    className={`block py-4 text-xl font-bold text-slate-800 border-b border-slate-100 hover:text-primary-blue active:bg-slate-50 transition-colors ${location.pathname === link.href.split('#')[0] && location.hash === (link.href.includes('#') ? '#' + link.href.split('#')[1] : '') ? 'text-primary-blue' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-10">
                  <Link to="/#contacto" onClick={(e) => handleHashClick(e, '/#contacto')}>
                    <Button variant="primary" className="w-full py-4 text-base min-h-[48px]">
                      Contacto
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Social Icons Mobile Footer */}
              <div className="p-8 bg-slate-50 mt-auto border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-5">Síguenos</p>
                <div className="flex justify-center gap-8">
                  <a aria-label="Skilled en Facebook" href="https://www.facebook.com/profile.php?id=61571232704026" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-red hover:scale-110 transition-all">
                    <Facebook size={24} />
                  </a>
                  <a aria-label="Skilled en Instagram" href="https://www.instagram.com/skilled_proyectos/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-red hover:scale-110 transition-all">
                    <Instagram size={24} />
                  </a>
                  <a aria-label="Skilled en LinkedIn" href="https://www.linkedin.com/company/skilled-proyectos-industriales/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-red hover:scale-110 transition-all">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  );
};

export default Navbar;
