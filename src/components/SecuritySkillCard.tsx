import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SecuritySkillCardProps {
  skill: string;
  icon: React.ReactNode;
  index: number;
  inView: boolean;
  theme?: 'devops' | 'security' | 'development';
}

export const SecuritySkillCard: React.FC<SecuritySkillCardProps> = ({ skill, icon, index, inView, theme = 'security' }) => {
  const [securityStatus, setSecurityStatus] = useState<'secure' | 'idle'>('idle');

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setSecurityStatus('secure');
      }, 1200 + index * 200);
      
      return () => clearTimeout(timer);
    }
  }, [inView, index]);

  const getStatusColor = () => {
    if (securityStatus === 'secure') {
      switch (theme) {
        case 'devops': return 'border-blue-400/50 bg-blue-500/10';
        case 'security': return 'border-green-400/50 bg-green-500/10';
        case 'development': return 'border-orange-400/50 bg-orange-500/10';
        default: return 'border-green-400/50 bg-green-500/10';
      }
    }
    return 'border-white/20 bg-white/10';
  };

  const getHoverColor = () => {
    switch (theme) {
      case 'devops': return 'bg-blue-400/0 group-hover:bg-blue-400/5';
      case 'security': return 'bg-green-400/0 group-hover:bg-green-400/5';
      case 'development': return 'bg-orange-400/0 group-hover:bg-orange-400/5';
      default: return 'bg-green-400/0 group-hover:bg-green-400/5';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
      className={`relative flex items-center space-x-2 p-2.5 rounded-lg backdrop-blur-sm border transition-all duration-500 hover:bg-white/20 group ${getStatusColor()}`}
    >
      {/* Icon */}
      <div className="relative z-10 flex-shrink-0">
        {icon}
      </div>
      
      {/* Skill name */}
      <div className="flex-1 relative z-10 min-w-0">
        <span className="text-white font-medium text-xs truncate block">{skill}</span>
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${getHoverColor()}`} />
    </motion.div>
  );
};