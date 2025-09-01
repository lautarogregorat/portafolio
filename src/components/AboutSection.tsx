import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TechIcon } from './TechIcon';

interface AboutSectionProps {
  aboutText: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ aboutText }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section id="about" className="min-h-screen flex items-center section-padding py-20 bg-primary z-10 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Sobre <span className="text-gradient">Mí</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-12"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
                  {aboutText}
                </p>
              </div>
            </motion.div>
                
            {/* Professional Highlights Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="text-2xl">🎓</div>
                  <h4 className="text-lg font-semibold text-blue-400">Formación</h4>
                </div>
                <p className="text-gray-300 text-sm">5to año UTN FRC</p>
                <p className="text-gray-400 text-xs mt-1">Ing. en Sistemas de Información</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <TechIcon name="Hack the Box" className="w-6 h-6" fallback={<div className="text-2xl">🛡️</div>} />
                  <h4 className="text-lg font-semibold text-green-400">Seguridad</h4>
                </div>
                <p className="text-gray-300 text-sm">Pentesting</p>
                <p className="text-gray-400 text-xs mt-1">Hack the Box Path</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <TechIcon name="Kubernetes" className="w-6 h-6" fallback={<div className="text-2xl">⚙️</div>} />
                  <h4 className="text-lg font-semibold text-purple-400">DevSecOps</h4>
                </div>
                <p className="text-gray-300 text-sm">Docker + Kubernetes</p>
                <p className="text-gray-400 text-xs mt-1">CI/CD + AWS</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-orange-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <TechIcon name="React" className="w-6 h-6" fallback={<div className="text-2xl">🚀</div>} />
                  <h4 className="text-lg font-semibold text-orange-400">Full-Stack</h4>
                </div>
                <p className="text-gray-300 text-sm">Java/Spring + React</p>
                <p className="text-gray-400 text-xs mt-1">APIs RESTful + Microservicios</p>
              </motion.div>
            </div>

            {/* Achievement Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-12 bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
            >
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-3">💡 Proyecto Destacado</h4>
                <p className="text-gray-300 mb-2">Sistema de Gestión Veterinaria - Animalia</p>
                <div className="flex justify-center gap-8 text-sm">
                  <span className="text-blue-400">📈 +100% Performance</span>
                  <span className="text-green-400">⚡ -80% Tiempo Respuesta</span>
                  <span className="text-purple-400">🐳 Docker + CI/CD</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};