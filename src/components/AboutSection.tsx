import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutSectionProps {
  aboutText: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ aboutText }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
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
            className="grid md:grid-cols-3 gap-8 items-center"
          >
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full p-1">
                <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-gradient">L</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                📝 <strong>PLACEHOLDER:</strong> Reemplaza este círculo con tu foto profesional
              </p>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="md:col-span-2 text-left"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                  {aboutText}
                </p>
                
                {/* Key highlights */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">🎓 Formación</h4>
                    <p className="text-gray-300">5to año de Ing. en Sistemas de Información</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <h4 className="text-lg font-semibold text-green-400 mb-2">🎯 Enfoque</h4>
                    <p className="text-gray-300">Desarrollo + Seguridad = Soluciones Robustas</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};