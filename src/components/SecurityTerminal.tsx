import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SecurityTerminalProps {
  commands: string[];
  className?: string;
}

export const SecurityTerminal: React.FC<SecurityTerminalProps> = ({ commands, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const currentCommand = commands[currentCommandIndex];
      
      if (currentCharIndex < currentCommand.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentCommand[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, Math.random() * 50 + 30); // Velocidad variable para simular tipeo humano
        
        return () => clearTimeout(timeout);
      } else {
        // Comando completado, pasar al siguiente después de una pausa
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + '\n');
          setCurrentCommandIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 1000);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [currentCommandIndex, currentCharIndex, commands]);

  return (
    <div className={`bg-black rounded-lg border border-green-500/30 ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-t-lg border-b border-green-500/20">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-sm font-mono ml-4">security-pipeline@devops:~$</span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        <pre className="text-green-400 whitespace-pre-wrap">
          {displayedText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
            █
          </span>
        </pre>
      </div>
    </div>
  );
};