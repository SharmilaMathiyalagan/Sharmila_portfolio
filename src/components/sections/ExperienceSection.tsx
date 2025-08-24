import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building, TrendingUp } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experience = {
    title: 'Engineering Intern',
    company: 'The Website Makers',
    duration: 'January 2024 - March 2024',
    location: 'Remote',
    description: 'Gained hands-on experience in full-stack web development, focusing on creating responsive and user-friendly websites.',
    achievements: [
      'Built 5+ responsive websites using HTML, CSS, and JavaScript',
      'Improved UI usability and reduced bounce rate by 15%',
      'Optimized CSS resulting in 10% faster page load times',
      'Collaborated with design team to implement modern UI/UX principles',
      'Implemented responsive design patterns for mobile-first approach'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git', 'Figma']
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey in web development and software engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-dark-surface/50 border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 card-3d">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-foreground mb-2">{experience.title}</CardTitle>
                  <div className="flex items-center gap-2 text-neon-cyan mb-2">
                    <Building size={18} />
                    <span className="text-lg font-medium">{experience.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mt-4">
                {experience.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="text-neon-purple" size={20} />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-lg border border-neon-purple/20"
                >
                  <div className="text-2xl font-bold text-neon-purple">5+</div>
                  <div className="text-sm text-muted-foreground">Websites Built</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 rounded-lg border border-neon-cyan/20"
                >
                  <div className="text-2xl font-bold text-neon-cyan">15%</div>
                  <div className="text-sm text-muted-foreground">Bounce Rate Reduction</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 rounded-lg border border-neon-pink/20"
                >
                  <div className="text-2xl font-bold text-neon-pink">10%</div>
                  <div className="text-sm text-muted-foreground">Page Load Improvement</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};