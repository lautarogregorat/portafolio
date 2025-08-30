import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import type { ContactInfo } from '../types/portfolio';

interface ContactSectionProps {
  contact: ContactInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const contactItems = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      value: 'Conectemos profesionalmente',
      href: contact.linkedin,
      color: 'hover:text-blue-400 hover:border-blue-400',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: 'GitHub',
      value: 'Explora mis repositorios',
      href: contact.github,
      color: 'hover:text-gray-300 hover:border-gray-300',
      bgColor: 'hover:bg-gray-500/10'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'hover:text-green-400 hover:border-green-400',
      bgColor: 'hover:bg-green-500/10'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center section-padding py-20 bg-primary relative z-10">
      <div className="max-w-4xl mx-auto w-full">
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
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            ¿<span className="text-gradient">Conectamos</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto"
          >
            Estoy siempre abierto a nuevas oportunidades, colaboraciones y conversaciones sobre tecnología y seguridad.
          </motion.p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                target={item.label !== 'Email' ? '_blank' : '_self'}
                rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`group block p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 ${item.color} ${item.bgColor} hover:shadow-xl hover:shadow-white/5`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      {item.label}
                    </h3>
                    <p className="text-gray-300 group-hover:text-current transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-current group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Placeholder Warning */}
          {(contact.email.includes('PLACEHOLDER') || contact.linkedin.includes('PLACEHOLDER') || contact.github.includes('PLACEHOLDER')) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6 max-w-2xl mx-auto mb-12"
            >
              <h3 className="text-lg font-bold text-yellow-300 mb-3">📝 Información de Contacto Requerida</h3>
              <div className="text-yellow-300/80 text-sm text-left space-y-2">
                <p><strong>Para completar tu portafolio, proporciona:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Tu email profesional</li>
                  <li>• URL completa de tu perfil de LinkedIn</li>
                  <li>• URL completa de tu perfil de GitHub</li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              "La mejor forma de predecir el futuro es construirlo de manera segura"
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-700 hover:via-purple-700 hover:to-green-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Volver al inicio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};