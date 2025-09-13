import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ParticleBackground } from './components/ParticleBackground';
import Navbar from './components/Navbar';
import type { PortfolioData } from './types/portfolio';

// Portfolio data with placeholders
const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Franco Lautaro Gregorat',
    title: 'Estudiante de Ing. en Sistemas de Información',
    heroTitle: 'DevSecOps & Desarrollo Seguro',
    aboutText: `Estudiante avanzado de 5to año de Ingeniería en Sistemas de Información en UTN FRC, con experiencia práctica en el desarrollo de soluciones full-stack seguras y escalables. Mi expertise abarca desde la implementación de APIs RESTful con Java y Spring Boot hasta interfaces modernas con React, siempre aplicando principios de desarrollo seguro.

Mi enfoque se centra en crear soluciones tecnológicas robustas, implementando prácticas de CI/CD, containerización con Kubernetes, y aplicando conocimientos de pentesting para desarrollar sistemas inherentemente seguros desde el diseño hasta el despliegue.`
  },
  pillars: [], // Los pilares se manejan directamente en PillarsSection
  projects: [
    {
      id: 'shopup',
      title: 'ShopUp',
      description: 'Plataforma web completa diseñada para simplificar la gestión de pequeños emprendedores. Permite crear tiendas online propias y vender productos en un marketplace compartido.',
      technologies: ['React', 'Node.js', 'Spring Boot', 'MySQL', 'Docker'],
      githubUrl: 'https://github.com/lautarogregorat/shopup'
    },
    {
      id: 'digital-money-house',
      title: 'Digital Money House',
      description: 'Billetera digital con arquitectura de microservicios usando Spring Cloud (Eureka, Gateway, Config Server). Incluye suite de testing integral y despliegue automatizado en Kubernetes.',
      technologies: ['Spring Cloud', 'Docker', 'Kubernetes', 'Helm', 'JUnit', 'Mockito', 'RestAssured'],
      githubUrl: 'https://github.com/lautarogregorat/digital-money-house'
    },
    {
      id: 'animalia',
      title: 'Animalia - Sistema Veterinario',
      description: 'Sistema de gestión veterinaria con API RESTful segura. Optimización del 100% en recuperación de datos y 80% de reducción en tiempos de respuesta mediante Docker.',
      technologies: ['Java', 'Spring Boot', 'React', 'Material UI', 'Docker', 'JWT', 'MySQL'],
      githubUrl: 'https://github.com/lautarogregorat/animalia'
    },
    {
      id: 'ecommerce-platform',
      title: 'Plataforma E-commerce Distribuida',
      description: 'E-commerce con arquitectura de microservicios desacoplados (Productos, Pedidos, Inventario) comunicados vía Kafka. Stack completo de observabilidad con Prometheus, Grafana y Loki.',
      technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'AWS', 'Linux'],
      githubUrl: 'https://github.com/lautarogregorat/ecommerce-microservices'
    },
    {
      id: 'isidoro',
      title: 'Isidoro S.A.',
      description: 'Sitio web institucional responsive y multilenguaje con microservicio para gestión de formularios. CI/CD automatizado con GitHub Actions y despliegue en Docker.',
      technologies: ['React', 'Vite', 'JavaScript', 'Node.js', 'GitLab', 'Docker'],
      githubUrl: 'https://github.com/lautarogregorat/isidoro-website'
    },
    {
      id: 'diamond-fitness',
      title: 'Diamond Fitness',
      description: 'Sistema de gestión para gimnasios desarrollado en Java Swing, específicamente optimizado para hardware legacy (Windows 7, 2GB RAM).',
      technologies: ['Java', 'Swing', 'MySQL', 'Windows Desktop'],
      githubUrl: 'https://github.com/lautarogregorat/diamond-fitness'
    }
  ],
  contact: {
    email: 'lautarogregorat@gmail.com', // 📝 PLACEHOLDER: Replace with your email
    linkedin: 'https://www.linkedin.com/in/francolautarogregorat/', // 📝 PLACEHOLDER: Replace with your LinkedIn
    github: 'https://github.com/lautarogregorat' // 📝 PLACEHOLDER: Replace with your GitHub
  }
};

function App() {
  return (
    <div className="relative min-h-screen bg-primary overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection 
          name={portfolioData.personalInfo.name}
          title={portfolioData.personalInfo.title}
          heroTitle={portfolioData.personalInfo.heroTitle}
        />
        
        <AboutSection 
          aboutText={portfolioData.personalInfo.aboutText}
        />
        
        <PillarsSection />
        
        <ProjectsSection 
          projects={portfolioData.projects}
        />
        
        <ContactSection 
          contact={portfolioData.contact}
        />
      </main>

    </div>
  );
}

export default App;