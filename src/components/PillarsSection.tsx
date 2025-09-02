import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Code, GitBranch, Database, Cloud, MonitorCheck, Terminal, Zap } from 'lucide-react';
import { TechIcon } from './TechIcon';
import { SecurityTerminal } from './SecurityTerminal';
import { SecuritySkillCard } from './SecuritySkillCard';

interface PillarProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  bgColor: string;
  icon: React.ReactNode;
  codeSnippet?: string | string[];
}

const PillarSection: React.FC<PillarProps> = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  skills, 
  bgColor, 
  icon, 
  codeSnippet 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const skillIcons: { [key: string]: React.ReactNode } = {
    'CI/CD': <TechIcon name="GitLab" fallback={<GitBranch className="w-5 h-5" />} />,
    'Jenkins': <GitBranch className="w-5 h-5" />,
    'GitHub Actions': <GitBranch className="w-5 h-5" />,
    'Docker': <TechIcon name="Docker" fallback={<Cloud className="w-5 h-5" />} />,
    'Kubernetes': <TechIcon name="Kubernetes" fallback={<Cloud className="w-5 h-5" />} />,
    'Terraform': <Code className="w-5 h-5" />,
    'Monitoreo': <MonitorCheck className="w-5 h-5" />,
    'OWASP Top 10': <Shield className="w-5 h-5" />,
    'Nmap': <TechIcon name="Nmap" fallback={<Terminal className="w-5 h-5" />} />,
    'Burp Suite': <Shield className="w-5 h-5" />,
    'Metasploit': <Zap className="w-5 h-5" />,
    'Wireshark': <MonitorCheck className="w-5 h-5" />,
    'APIs RESTful': <Cloud className="w-5 h-5" />,
    'Spring Boot': <TechIcon name="Spring Boot" fallback={<Code className="w-5 h-5" />} />,
    'Microservicios': <Cloud className="w-5 h-5" />,
    'JPA/Hibernate': <Database className="w-5 h-5" />,
    'SQL/NoSQL': <TechIcon name="SQL/NoSQL" fallback={<Database className="w-5 h-5" />} />,
    'React/Next.js': <TechIcon name="React" fallback={<Code className="w-5 h-5" />} />,
    'TypeScript': <TechIcon name="TypeScript" fallback={<Code className="w-5 h-5" />} />,
    'Tailwind CSS': <TechIcon name="Tailwind CSS" fallback={<Code className="w-5 h-5" />} />,
  };

  // Layout especial para Desarrollo de Software con 2 columnas
  if (id === 'backend') {
    return (
      <section 
        id={id} 
        ref={ref}
        className={`min-h-screen flex items-start section-padding py-12 md:py-16 transition-all duration-1000 ${inView ? bgColor : 'bg-primary'} relative z-10 overflow-hidden`}
      >
        <div className="max-w-6xl mx-auto pt-12 md:pt-16 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda: Logo, Título, Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:sticky lg:top-20 text-center lg:text-left"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                {icon}
              </motion.div>

              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                {title}
              </motion.h2>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-white/80"
              >
                {subtitle}
              </motion.p>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Columna Derecha: Skills arriba, Terminal abajo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 pt-8 md:pt-16 lg:pt-20 xl:pt-24"
            >
              {/* Fila 1: Skills Grid */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Stack Tecnológico</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {skills.map((skill, index) => (
                    <div key={skill} className="transform hover:scale-105 transition-transform duration-200">
                      <SecuritySkillCard
                        skill={skill}
                        icon={skillIcons[skill] || <Code className="w-4 h-4" />}
                        index={index}
                        inView={inView}
                        theme="development"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Fila 2: Terminal */}
              <div>
                {codeSnippet && Array.isArray(codeSnippet) && (
                  <SecurityTerminal commands={codeSnippet} className="w-full" />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Layout especial para Ciberseguridad Ofensiva con 2 columnas
  if (id === 'security') {
    return (
      <section 
        id={id} 
        ref={ref}
        className={`min-h-screen flex items-start section-padding py-12 md:py-16 transition-all duration-1000 ${inView ? bgColor : 'bg-primary'} relative z-10 overflow-hidden`}
      >
        <div className="max-w-6xl mx-auto pt-12 md:pt-16 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda: Logo, Título, Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:sticky lg:top-20 text-center lg:text-left"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                {icon}
              </motion.div>

              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                {title}
              </motion.h2>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-white/80"
              >
                {subtitle}
              </motion.p>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Columna Derecha: Skills arriba, Terminal abajo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 pt-8 md:pt-16 lg:pt-20 xl:pt-24"
            >
              {/* Fila 1: Skills Grid */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Arsenal de Hacking</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {skills.map((skill, index) => (
                    <div key={skill} className="transform hover:scale-105 transition-transform duration-200">
                      <SecuritySkillCard
                        skill={skill}
                        icon={skillIcons[skill] || <Code className="w-4 h-4" />}
                        index={index}
                        inView={inView}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Fila 2: Terminal */}
              <div>
                {codeSnippet && Array.isArray(codeSnippet) && (
                  <SecurityTerminal commands={codeSnippet} className="w-full" />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Layout especial para DevSecOps con 2 columnas
  if (id === 'devops') {
    return (
      <section 
        id={id} 
        ref={ref}
        className={`min-h-screen flex items-start section-padding py-12 md:py-16 transition-all duration-1000 ${inView ? bgColor : 'bg-primary'} relative z-10 overflow-hidden`}
      >
        {/* Security Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto pt-12 md:pt-16 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda: Logo, Título, Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:sticky lg:top-20 text-center lg:text-left"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                {icon}
              </motion.div>

              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                {title}
              </motion.h2>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-white/80"
              >
                {subtitle}
              </motion.p>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Columna Derecha: Skills arriba, Terminal abajo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 pt-8 md:pt-16 lg:pt-20 xl:pt-24"
            >
              {/* Fila 1: Skills Grid 3x2 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Tecnologías Clave</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {skills.map((skill, index) => (
                    <div key={skill} className="transform hover:scale-105 transition-transform duration-200">
                      <SecuritySkillCard
                        skill={skill}
                        icon={skillIcons[skill] || <Code className="w-4 h-4" />}
                        index={index}
                        inView={inView}
                        theme="devops"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Fila 2: Terminal */}
              <div>
                {codeSnippet && Array.isArray(codeSnippet) && (
                  <SecurityTerminal commands={codeSnippet} className="w-full" />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Layout original para otros pilares
  return (
    <section 
      id={id} 
      ref={ref}
      className={`min-h-screen flex items-center section-padding py-20 transition-all duration-1000 ${inView ? bgColor : 'bg-primary'} relative z-10 overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            {icon}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-white/70 max-w-3xl mx-auto mb-12"
          >
            {description}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Habilidades Clave</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {skillIcons[skill] || <Code className="w-5 h-5" />}
                  <span className="text-white font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet or Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative"
          >
            {codeSnippet ? (
              <div className="bg-black/50 rounded-lg p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm text-green-400 overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            ) : (
              <div className="bg-white/10 rounded-lg p-8 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-6xl mb-4">{icon}</div>
                <p className="text-white/70">Representación visual del pilar profesional</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      id: 'devops',
      title: 'DevSecOps',
      subtitle: 'Shifting Left Security',
      description: 'Integro prácticas de seguridad desde las primeras etapas del ciclo de desarrollo, automatizando procesos y garantizando despliegues seguros y confiables.',
      skills: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      bgColor: 'bg-devops',
      icon: (
        <img 
          src="/ovejeroalemanlogodevsecops.png" 
          alt="DevSecOps Guardian" 
          className="w-48 h-48 md:w-52 md:h-52 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
        />
      ),
      codeSnippet: [
        '🔍 Initiating security pipeline...',
        '📋 Running SAST analysis...',
        '✅ Static analysis: PASSED',
        '🐳 Scanning container vulnerabilities...',
        '✅ Container scan: PASSED',
        '🔐 Checking secrets in code...',
        '✅ Secret detection: CLEAN',
        '📊 Generating security report...',
        '🛡️  Pipeline secure - Ready for deployment!'
      ]
    },
    {
      id: 'security',
      title: 'Ciberseguridad Ofensiva',
      subtitle: 'Pentesting & Ethical Hacking',
      description: 'Me especializo en la identificación proactiva de vulnerabilidades, realizando pruebas de penetración y análisis de seguridad para fortalecer las defensas.',
      skills: ['OWASP Top 10', 'Nmap', 'Burp Suite', 'Metasploit', 'Wireshark'],
      bgColor: 'bg-security',
      icon: (
        <img 
          src="/ovejeroalemanlogopen-Photoroom.png" 
          alt="Cybersecurity Hacker Dog" 
          className="w-48 h-48 md:w-52 md:h-52 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]"
        />
      ),
      codeSnippet: [
        '🔍 Starting penetration testing...',
        '📡 Running Nmap reconnaissance...',
        '✅ nmap -sV -sC -O target.com',
        '🌐 Port scan completed: 22,80,443 open',
        '🔧 Launching Burp Suite scanner...',
        '✅ Automated web vulnerability scan initiated',
        '🎯 Testing for SQL injection...',
        "✅ Payload: ' OR '1'='1' --",
        '🚨 Critical vulnerability detected!',
        '📊 Generating penetration test report...'
      ]
    },
    {
      id: 'backend',
      title: 'Desarrollo de Software',
      subtitle: 'Full Stack Development',
      description: 'Desarrollo aplicaciones web completas desde el frontend hasta el backend, creando soluciones escalables con tecnologías modernas y arquitecturas robustas.',
      skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'APIs RESTful', 'Microservicios', 'JPA/Hibernate', 'SQL/NoSQL'],
      bgColor: 'bg-backend',
      icon: (
        <img 
          src="/ovejeroalemanlogodev-Photoroom.png" 
          alt="Software Developer Dog" 
          className="w-48 h-48 md:w-52 md:h-52 drop-shadow-[0_0_8px_rgba(180,83,9,0.3)]"
        />
      ),
      codeSnippet: [
        '🚀 Initializing full-stack project...',
        '📦 npm create next-app@latest my-app --typescript',
        '✅ Frontend project created successfully',
        '🔧 Setting up Spring Boot backend...',
        '✅ @SpringBootApplication initialized',
        '🎨 Installing Tailwind CSS...',
        '✅ Tailwind configuration complete',
        '🔗 Connecting frontend to backend APIs...',
        '✅ REST endpoints configured',
        '🏗️  Building production bundle...',
        '🚀 Deployment ready!'
      ]
    }
  ];

  return (
    <div className="relative">
      {pillars.map((pillar) => (
        <PillarSection key={pillar.id} {...pillar} />
      ))}
    </div>
  );
};