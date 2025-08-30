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
    { id: 'devops', label: 'DevSecOps', color: 'bg-devops hover:bg-blue-700' },
    { id: 'security', label: 'Pentesting', color: 'bg-security hover:bg-emerald-700' },
    { id: 'backend', label: 'Backend Dev', color: 'bg-backend hover:bg-amber-700' },
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

        {/* Pillar Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
          {pillarButtons.map((button, index) => (
            <motion.button
              key={button.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(button.id)}
              className={`px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-white transition-all duration-300 ${button.color} shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              {button.label}
            </motion.button>
          ))}
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