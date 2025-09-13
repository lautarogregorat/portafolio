import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  fallback?: React.ReactNode;
}

// Mapeo de tecnologías a sus respectivos archivos SVG y PNG
const techLogos: { [key: string]: string } = {
  'DevSecOps': '/ovejeroalemanlogodevsecops.png',
  'Docker': '/docker-icon.svg',
  'Kubernetes': '/kubernetes.svg',
  'Spring Boot': '/spring-icon.svg',
  'Nmap': '/nmap-project-logo.svg',
  'AWS': '/aws.svg',
  'Java': '/java.svg',
  'React': '/react.svg',
  'MySQL': '/mysql.svg',
  'SQL/NoSQL': '/mysql.svg',
  'JavaScript': '/javascript.svg',
  'Node.js': '/nodejs-icon.svg',
  'JWT': '/jwt-icon.svg',
  'Material-UI': '/material-ui.svg',
  'Postman': '/postman-icon.svg',
  'GitLab': '/gitlab-icon.svg',
  'Linux': '/linux-tux.svg',
  'Kali Linux': '/kali-linux-seeklogo.svg',
  'Hack the Box': '/hack-the-box-svgrepo-com.svg',
  'Metasploit': '/metasploit-logo-light-external-use.svg',
  'Vite': '/vite.svg',
  'TypesenseQL': '/typesense-icon.svg',
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