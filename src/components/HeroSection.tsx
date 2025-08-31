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
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'from-blue-400 to-blue-600'
    },
    { 
      id: 'security', 
      label: 'Pentesting', 
      subtitle: 'Ethical Hacking',
      icon: Terminal,
      color: 'from-emerald-500 to-emerald-700',
      hoverColor: 'from-emerald-400 to-emerald-600'
    },
    { 
      id: 'backend', 
      label: 'Backend Dev', 
      subtitle: 'APIs & Microservicios',
      icon: Server,
      color: 'from-orange-500 to-orange-700',
      hoverColor: 'from-orange-400 to-orange-600'
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center section-padding z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
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
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
            {name}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            {title}
          </p>
        </motion.div>

        {/* Pillar Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
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
                className="group relative p-6 border border-white/20 rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-200 hover:shadow-md"
              >
                {/* Icon - Static */}
                <div className="mb-4">
                  <div className={`mx-auto w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br ${button.color} transition-all duration-200 shadow-sm group-hover:shadow-md`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 transition-colors duration-200">
                    {button.label}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
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