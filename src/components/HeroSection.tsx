import { motion } from 'framer-motion';
import { ChevronDown, Shield, Server, Terminal } from 'lucide-react';
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
      icon: Shield,
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'from-blue-500 to-blue-700'
    },
    { 
      id: 'security', 
      label: 'Pentesting', 
      subtitle: 'Ethical Hacking',
      icon: Terminal,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'from-blue-400 to-blue-600'
    },
    { 
      id: 'backend', 
      label: 'Backend Dev', 
      subtitle: 'APIs & Microservicios',
      icon: Server,
      color: 'from-blue-700 to-blue-900',
      hoverColor: 'from-blue-600 to-blue-800'
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-start md:justify-center items-center section-padding pt-20 md:pt-0 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto mt-8 md:mt-0"
      >
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug sm:leading-tight"
        >
          <span className="text-gradient">{heroTitle}</span>
        </motion.h1>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white mb-2">
            {name}
          </h2>
          <p className="text-xl sm:text-2xl md:text-2xl text-gray-300">
            {title}
          </p>
        </motion.div>

        {/* Pillar Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center sm:grid sm:grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          {pillarButtons.map((button, index) => {
            const IconComponent = button.icon;
            return (
              <motion.button
                key={button.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                onClick={() => scrollToSection(button.id)}
                className="group relative px-3 py-2 sm:p-4 md:p-6 border border-white/20 rounded-full sm:rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-200 hover:shadow-md flex items-center sm:block"
              >
                {/* Icon - Responsive */}
                <div className="mb-0 sm:mb-4 mr-2 sm:mr-0 sm:flex sm:justify-center flex-shrink-0">
                  <div className={`w-6 h-6 sm:w-14 sm:h-14 flex items-center justify-center rounded sm:rounded-lg bg-gradient-to-br ${button.color} transition-all duration-200 shadow-sm group-hover:shadow-md`}>
                    <IconComponent className="w-3 h-3 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                {/* Content - Responsive */}
                <div className="flex flex-col sm:block">
                  <h3 className="text-sm sm:text-lg font-semibold text-white mb-0 sm:mb-1 transition-colors duration-200">
                    {button.label}
                  </h3>
                  <p className="hidden sm:block text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
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