import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Target } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

export const AboutSection: React.FC = () => {
  const achievements = [
    { icon: GraduationCap, title: 'Rank Holder', desc: 'Semester 2' },
    { icon: Award, title: 'NPTEL Elite', desc: 'Algorithms Certificate' },
    { icon: Target, title: 'Problem Solver', desc: '150+ LeetCode' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer creating innovative solutions with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Sharmila M" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-neon-purple/50 neon-glow"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Hi, I'm Sharmila! 👋</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a 2nd-year IT student at <span className="text-neon-cyan">Karpagam Institute of Technology</span> with 
                strong skills in web development, cloud computing, and problem-solving. I love building impactful 
                projects and participating in hackathons.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology is driven by curiosity and the desire to create solutions that make a difference. 
                From full-stack web applications to cloud infrastructure, I enjoy exploring new technologies and 
                pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Academic Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-dark-surface/50 border-neon-purple/20 card-3d hover:border-neon-purple/50 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <achievement.icon className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'AWS', 'Docker', 'GraphQL', 'Next.js'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};