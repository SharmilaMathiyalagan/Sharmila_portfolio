import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Database, Code, Globe } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Employee Admin Portal',
      description: 'A comprehensive administrative portal for employee management built with clean architecture principles. Features include employee CRUD operations, role-based access control, and advanced filtering capabilities.',
      technologies: ['ASP.NET Core', 'SQL Server', 'Clean Architecture', 'Entity Framework', 'C#'],
      features: [
        'Clean Architecture implementation',
        'Role-based authentication & authorization',
        'Advanced employee search and filtering',
        'RESTful API design',
        'Responsive admin dashboard'
      ],
      githubUrl: 'https://github.com',
      liveUrl: null,
      icon: Database,
      color: 'neon-purple'
    },
    {
      title: 'Voice of Her',
      description: 'An innovative platform empowering women to share their experiences and stories. Built with vanilla JavaScript and integrated with Google Sheets API for seamless data management and real-time updates.',
      technologies: ['JavaScript', 'Google Sheets API', 'HTML5', 'CSS3', 'Netlify'],
      features: [
        'Real-time story submission',
        'Google Sheets integration',
        'Responsive design',
        'Content moderation system',
        'Social sharing capabilities'
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://netlify.app',
      icon: Globe,
      color: 'neon-cyan'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group"
            >
              <Card className="bg-dark-surface/50 border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 h-full card-3d overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r from-${project.color}/20 to-neon-cyan/20`}>
                      <project.icon size={32} className={`text-${project.color} neon-glow`} />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-neon-purple transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.05, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 bg-${project.color} rounded-full mt-2 flex-shrink-0`} />
                          <p className="text-sm text-muted-foreground">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + techIndex * 0.03, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`bg-${project.color}/20 text-${project.color} border-${project.color}/30`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-darker-surface transition-all duration-300 flex-1`}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-darker-surface transition-all duration-300 flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-dark-surface/30 to-dark-surface/50 border-neon-purple/20 max-w-md mx-auto">
            <CardContent className="p-8">
              <Code className="h-12 w-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                Currently working on exciting new projects involving AI, blockchain, and cloud technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};