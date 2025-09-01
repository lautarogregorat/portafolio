import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { TechIcon } from './TechIcon';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 h-full">
        {/* Project Image Placeholder */}
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <div className="aspect-video bg-blue-600 flex items-center justify-center">
            <div className="text-4xl font-bold text-white">
              {project.title.charAt(0)}
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            {project.imageUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center space-x-2 px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                <TechIcon name={tech} className="w-4 h-4" />
                <span>{tech}</span>
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
            {project.imageUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="min-h-screen flex items-center section-padding py-20 bg-primary relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Proyectos <span className="text-gradient">Destacados</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Una selección de mis trabajos más relevantes que demuestran mis habilidades técnicas y enfoque en la seguridad.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center py-16"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">🚧 Proyectos en Desarrollo</h3>
              <p className="text-gray-300 mb-6">
                Actualmente estoy trabajando en varios proyectos emocionantes. ¡Pronto estarán disponibles!
              </p>
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  📝 <strong>PLACEHOLDER:</strong> Proporciona información de 2-3 proyectos:
                </p>
                <ul className="text-yellow-300/80 text-sm mt-2 text-left">
                  <li>• Título del proyecto</li>
                  <li>• Descripción breve (1-2 líneas)</li>
                  <li>• Tecnologías utilizadas</li>
                  <li>• URL del repositorio GitHub</li>
                  <li>• URL de demo (opcional)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">¿Quieres ver más de mi trabajo?</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/[TU_USUARIO]" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 text-white font-medium"
          >
            <Github className="w-5 h-5" />
            <span>Ver todos mis repositorios</span>
          </motion.a>
          <p className="text-sm text-gray-400 mt-2">
            📝 <strong>PLACEHOLDER:</strong> Reemplaza [TU_USUARIO] con tu username de GitHub
          </p>
        </motion.div>
      </div>
    </section>
  );
};