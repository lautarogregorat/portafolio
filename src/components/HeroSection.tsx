import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '../hooks/useScrollSpy';

interface HeroSectionProps {
  name: string;
  title: string;
  heroTitle: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ name, title, heroTitle }) => {
  const pillarButtons = [
    { 
      id: 'devops', 
      label: 'DevSecOps', 
      subtitle: 'Shifting Left Security',
      logo: '/ovejeroalemanlogodevsecops.png'
    },
    { 
      id: 'security', 
      label: 'Ciberseguridad', 
      subtitle: 'Ethical Hacking',
      logo: '/ovejeroalemanlogopen-Photoroom.png'
    },
    { 
      id: 'backend', 
      label: 'Desarrollo', 
      subtitle: 'Full Stack Apps',
      logo: '/ovejeroalemanlogodev-Photoroom.png'
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center section-padding pt-24 md:pt-32 lg:pt-28 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-6xl mx-auto mt-8 md:mt-4 lg:mt-0"
      >
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10 md:mb-6 leading-snug sm:leading-tight text-center md:text-left text-white"
        >
          <span className="block md:hidden">DevSecOps & Desarrollo Seguro</span>
          <span className="hidden md:block">Construyendo Software Seguro desde el Código hasta la Nube</span>
        </motion.h1>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-semibold text-white mb-2">
            {name}
          </h2>
          <p className="text-lg sm:text-2xl md:text-2xl text-gray-300">
            {title}
          </p>
        </motion.div>

        {/* Pillar Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-1 sm:gap-12 md:grid-cols-3 md:gap-16 lg:gap-20 mb-4 sm:mb-6 md:mb-12 max-w-6xl mx-auto"
        >
          {pillarButtons.map((button, index) => {
            return (
              <motion.button
                key={button.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                onClick={() => scrollToSection(button.id)}
                className={`group transition-all duration-300 flex flex-col items-center space-y-2 ${index === 2 ? 'col-span-2 justify-self-center sm:col-span-1 md:col-span-1' : ''}`}
              >
                {/* Logo */}
                <img 
                  src={button.logo}
                  alt={`${button.label} Logo`}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain transition-all duration-300 group-hover:scale-105"
                />

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 transition-colors duration-200">
                    {button.label}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base md:text-base lg:text-lg group-hover:text-gray-300 transition-colors duration-200">
                    {button.subtitle}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};