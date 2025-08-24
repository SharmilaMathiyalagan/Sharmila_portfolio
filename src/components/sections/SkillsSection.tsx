import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, Database, Globe, Cloud, 
  Wrench, GitBranch, Smartphone, Cpu 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'text-neon-purple',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'Go', level: 70 },
      ]
    },
    {
      title: 'Backend',
      icon: Cpu,
      color: 'text-neon-cyan',
      skills: [
        { name: 'ASP.NET Core', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Entity Framework', level: 80 },
        { name: 'Node.js', level: 75 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-neon-pink',
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 },
      ]
    },
    {
      title: 'Web & Cloud',
      icon: Globe,
      color: 'text-neon-purple',
      skills: [
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'AWS (EC2, S3, RDS)', level: 80 },
        { name: 'Lambda Functions', level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'text-neon-cyan',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Google Sheets API', level: 80 },
        { name: 'Docker', level: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies with hands-on experience in full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="bg-dark-surface/50 border-neon-purple/20 card-3d hover:border-neon-purple/50 transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 ${category.color}`}>
                      <category.icon size={32} className="neon-glow" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                        duration: 0.4 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={0}
                          className="h-2 bg-muted"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, 
                            duration: 0.8, 
                            ease: "easeOut" 
                          }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                          style={{ boxShadow: '0 0 10px hsl(var(--neon-purple))' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Redux', 'Tailwind CSS', 'Bootstrap', 'Figma', 'VS Code', 
              'Netlify', 'Vercel', 'npm/yarn', 'Webpack', 'Babel',
              'Jest', 'ESLint', 'Prettier', 'SASS/SCSS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-muted/50 text-muted-foreground rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};