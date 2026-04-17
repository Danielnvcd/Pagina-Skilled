import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import logoImg from '../assets/images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Historia', href: '#historia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img 
            src={logoImg} 
            alt="Skilled Logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12 drop-shadow-md'}`} 
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-bold transition-colors hover:text-accent-red group ${
                scrolled ? 'text-primary-blue' : 'text-primary-blue drop-shadow-sm'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-red transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          {/* Social Icons Desktop */}
          <div className="flex items-center space-x-3 border-l border-neutral-light pl-6">
            <a href="https://www.facebook.com/profile.php?id=61571232704026" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-accent-red ${scrolled ? 'text-primary-blue/70' : 'text-primary-blue/80'}`}>
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/skilled_proyectos/" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-accent-red ${scrolled ? 'text-primary-blue/70' : 'text-primary-blue/80'}`}>
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/skilled-proyectos-industriales/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-accent-red ${scrolled ? 'text-primary-blue/70' : 'text-primary-blue/80'}`}>
              <Linkedin size={18} />
            </a>
          </div>
          <a href="#contacto">
            <Button variant="primary">Contacto</Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${scrolled ? 'text-primary-blue' : 'text-primary-blue'}`}
          >
            {mobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-light shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-bold text-primary-blue rounded-md hover:bg-neutral-light"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">Contacto</Button>
                </a>
              </div>
              {/* Social Icons Mobile */}
              <div className="flex justify-center gap-6 pt-6 pb-2 border-t border-neutral-light mt-4">
                <a href="https://www.facebook.com/profile.php?id=61571232704026" target="_blank" rel="noopener noreferrer" className="text-primary-blue/70 hover:text-accent-red">
                  <Facebook size={22} />
                </a>
                <a href="https://www.instagram.com/skilled_proyectos/" target="_blank" rel="noopener noreferrer" className="text-primary-blue/70 hover:text-accent-red">
                  <Instagram size={22} />
                </a>
                <a href="https://www.linkedin.com/company/skilled-proyectos-industriales/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-primary-blue/70 hover:text-accent-red">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
