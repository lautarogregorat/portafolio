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
    name: 'Lautaro [Tu Apellido]',
    title: 'Estudiante de Ing. en Sistemas | Desarrollador Backend & Pentester',
    heroTitle: 'Construyendo Software Seguro desde el Código hasta la Nube',
    aboutText: `📝 PLACEHOLDER: Reemplaza este texto con tu párrafo personalizado sobre ti.

Debe mencionar:
• Que eres estudiante avanzado de 5to año de Ingeniería en Sistemas de Información
• Tu pasión por la intersección entre desarrollo y seguridad
• Tu objetivo de crear soluciones tecnológicas robustas y resilientes
• Cualquier experiencia relevante o proyectos destacados
• Tu visión sobre el futuro de la tecnología segura`
  },
  pillars: [], // Los pilares se manejan directamente en PillarsSection
  projects: [
    // 📝 PLACEHOLDER: Uncomment and fill with your real projects
    // {
    //   id: 'project-1',
    //   title: 'Tu Proyecto 1',
    //   description: 'Descripción breve del proyecto y su impacto.',
    //   technologies: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL'],
    //   githubUrl: 'https://github.com/tu-usuario/proyecto-1',
    //   imageUrl: 'https://tu-demo-url.com' // Optional
    // },
    // {
    //   id: 'project-2',
    //   title: 'Tu Proyecto 2',
    //   description: 'Descripción breve del proyecto y su impacto.',
    //   technologies: ['Python', 'Django', 'Redis', 'AWS'],
    //   githubUrl: 'https://github.com/tu-usuario/proyecto-2'
    // }
  ],
  contact: {
    email: 'tu-email@ejemplo.com', // 📝 PLACEHOLDER: Replace with your email
    linkedin: 'https://linkedin.com/in/TU_PERFIL', // 📝 PLACEHOLDER: Replace with your LinkedIn
    github: 'https://github.com/TU_USUARIO' // 📝 PLACEHOLDER: Replace with your GitHub
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

      {/* Development Notice */}
      <div className="fixed bottom-4 right-4 z-40 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 backdrop-blur-sm">
        <p className="text-yellow-300 text-sm font-medium">
          🚧 Portafolio en desarrollo
        </p>
        <p className="text-yellow-300/70 text-xs">
          Reemplaza los placeholders con tu información
        </p>
      </div>
    </div>
  );
}

export default App;