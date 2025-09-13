import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  fallback?: React.ReactNode;
}

// Mapeo de tecnologías a sus respectivos archivos SVG y PNG
const techLogos: { [key: string]: string } = {
  'DevSecOps': import.meta.env.BASE_URL + 'ovejeroalemanlogodevsecops.png',
  'Docker': import.meta.env.BASE_URL + 'docker-icon.svg',
  'Kubernetes': import.meta.env.BASE_URL + 'kubernetes.svg',
  'Spring Boot': import.meta.env.BASE_URL + 'spring-icon.svg',
  'Nmap': import.meta.env.BASE_URL + 'nmap-project-logo.svg',
  'AWS': import.meta.env.BASE_URL + 'aws.svg',
  'Java': import.meta.env.BASE_URL + 'java.svg',
  'React': import.meta.env.BASE_URL + 'react.svg',
  'MySQL': import.meta.env.BASE_URL + 'mysql.svg',
  'SQL/NoSQL': import.meta.env.BASE_URL + 'mysql.svg',
  'JavaScript': import.meta.env.BASE_URL + 'javascript.svg',
  'Node.js': import.meta.env.BASE_URL + 'nodejs-icon.svg',
  'JWT': import.meta.env.BASE_URL + 'jwt-icon.svg',
  'Material-UI': import.meta.env.BASE_URL + 'material-ui.svg',
  'Postman': import.meta.env.BASE_URL + 'postman-icon.svg',
  'GitLab': import.meta.env.BASE_URL + 'gitlab-icon.svg',
  'Linux': import.meta.env.BASE_URL + 'linux-tux.svg',
  'Kali Linux': import.meta.env.BASE_URL + 'kali-linux-seeklogo.svg',
  'Hack the Box': import.meta.env.BASE_URL + 'hack-the-box-svgrepo-com.svg',
  'Metasploit': import.meta.env.BASE_URL + 'metasploit-logo-light-external-use.svg',
  'Vite': import.meta.env.BASE_URL + 'vite.svg',
  'TypesenseQL': import.meta.env.BASE_URL + 'typesense-icon.svg',
};

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5", fallback }) => {
  const logoPath = techLogos[name];
  
  if (logoPath) {
    return (
      <img 
        src={logoPath} 
        alt={`${name} logo`}
        className={className}
        onError={(e) => {
          // Si falla cargar el SVG, mostrar fallback si existe
          if (fallback) {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            // Aquí podrías mostrar el fallback, pero requiere más lógica
          }
        }}
      />
    );
  }
  
  // Si no hay logo disponible, mostrar fallback
  return <>{fallback}</>;
};