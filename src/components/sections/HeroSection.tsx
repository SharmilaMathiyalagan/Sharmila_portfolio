import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Code, Cloud, Database } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1,
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  const floatingIcons = [
    { Icon: Code, color: 'text-neon-purple', position: 'top-20 left-20' },
    { Icon: Cloud, color: 'text-neon-cyan', position: 'top-32 right-32' },
    { Icon: Database, color: 'text-neon-pink', position: 'bottom-32 left-32' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating 3D Icons */}
      {floatingIcons.map(({ Icon, color, position }, index) => (
        <motion.div
          key={index}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2 + 1 }}
          className={`absolute ${position} hidden lg:block`}
        >
          <div className={`${color} floating`}>
            <Icon size={48} className="neon-glow" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Sharmila M</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-neon-cyan">Engineer</span> | 
            <span className="text-neon-purple"> Web Developer</span> | 
            <span className="text-neon-pink"> Cloud Enthusiast</span>
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            2nd-year IT student building impactful projects with modern web technologies and cloud solutions. 
            Passionate about creating innovative digital experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow group transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-darker-surface neon-glow-secondary transition-all duration-300"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-darker-surface neon-glow transition-all duration-300"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-neon-purple rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};