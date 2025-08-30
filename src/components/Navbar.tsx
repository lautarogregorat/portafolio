import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = ['hero', 'about', 'devops', 'security', 'backend', 'projects', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  const navigationItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'devops', label: 'DevSecOps' },
    { id: 'security', label: 'Pentesting' },
    { id: 'backend', label: 'Backend' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen ? 'z-30' : 'z-50'
        } ${
          isScrolled 
            ? 'bg-primary/90 backdrop-blur-md border-b border-white/10 py-4' 
            : 'bg-transparent border-b border-white/0 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('hero')}
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              Lautaro
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className={`md:hidden p-2 text-white hover:text-blue-400 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background blur */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Menu content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-primary/95 backdrop-blur-md border-l border-white/10 flex flex-col"
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-xl font-bold text-gradient">Navegación</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation items */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-6">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  Desarrollado con ❤️ y seguridad
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;