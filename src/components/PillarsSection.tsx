import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Server, Code, GitBranch, Lock, Database, Cloud, MonitorCheck, Terminal, Zap } from 'lucide-react';
import { TechIcon } from './TechIcon';

interface PillarProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  bgColor: string;
  icon: React.ReactNode;
  codeSnippet?: string;
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
    'APIs RESTful': <Server className="w-5 h-5" />,
    'Spring Boot': <TechIcon name="Spring Boot" fallback={<Code className="w-5 h-5" />} />,
    'Microservicios': <Server className="w-5 h-5" />,
    'JPA/Hibernate': <Database className="w-5 h-5" />,
    'SQL/NoSQL': <TechIcon name="SQL/NoSQL" fallback={<Database className="w-5 h-5" />} />,
  };

  return (
    <section 
      id={id} 
      ref={ref}
      className={`min-h-screen flex items-center section-padding py-20 transition-all duration-1000 ${inView ? bgColor : 'bg-primary'} relative z-10`}
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
            <div className="p-6 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              {icon}
            </div>
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
      skills: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Monitoreo'],
      bgColor: 'bg-devops',
      icon: <Shield className="w-16 h-16 text-white" />,
      codeSnippet: `# Dockerfile con security scanning
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --chown=nextjs:nodejs . .
USER nextjs

# Security scan
RUN npm audit --audit-level high`
    },
    {
      id: 'security',
      title: 'Ciberseguridad Ofensiva',
      subtitle: 'Pentesting & Ethical Hacking',
      description: 'Me especializo en la identificación proactiva de vulnerabilidades, realizando pruebas de penetración y análisis de seguridad para fortalecer las defensas.',
      skills: ['OWASP Top 10', 'Nmap', 'Burp Suite', 'Metasploit', 'Wireshark'],
      bgColor: 'bg-security',
      icon: <Lock className="w-16 h-16 text-white" />,
      codeSnippet: `# Nmap reconnaissance
nmap -sV -sC -O target.com

# Burp Suite automated scan
java -jar burpsuite.jar --scan-url=https://target.com

# SQL Injection test
' OR '1'='1' --`
    },
    {
      id: 'backend',
      title: 'Desarrollo Backend',
      subtitle: 'Java & Spring Boot Specialist',
      description: 'Desarrollo aplicaciones backend robustas y escalables utilizando Java y Spring Boot, implementando arquitecturas de microservicios y APIs RESTful.',
      skills: ['APIs RESTful', 'Spring Boot', 'Microservicios', 'JPA/Hibernate', 'SQL/NoSQL'],
      bgColor: 'bg-backend',
      icon: <Server className="w-16 h-16 text-white" />,
      codeSnippet: `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(
        @PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(
        @Valid @RequestBody UserDto userDto) {
        User user = userService.create(userDto);
        return ResponseEntity.status(201).body(user);
    }
}`
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