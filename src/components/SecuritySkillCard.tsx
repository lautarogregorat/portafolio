import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SecuritySkillCardProps {
  skill: string;
  icon: React.ReactNode;
  index: number;
  inView: boolean;
}

export const SecuritySkillCard: React.FC<SecuritySkillCardProps> = ({ skill, icon, index, inView }) => {
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
    switch (securityStatus) {
      case 'secure': return 'border-green-400/50 bg-green-500/10';
      default: return 'border-white/20 bg-white/10';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
      className={`relative flex items-center space-x-3 p-4 rounded-lg backdrop-blur-sm border transition-all duration-500 hover:bg-white/20 group ${getStatusColor()}`}
    >
      {/* Icon */}
      <div className="relative z-10">
        {icon}
      </div>
      
      {/* Skill name */}
      <div className="flex-1 relative z-10">
        <span className="text-white font-medium">{skill}</span>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-lg bg-blue-400/0 group-hover:bg-blue-400/5 transition-all duration-300" />
    </motion.div>
  );
};