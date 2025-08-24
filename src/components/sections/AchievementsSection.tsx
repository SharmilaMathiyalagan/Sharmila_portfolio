import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Cloud, 
  Code, 
  Trophy, 
  Users, 
  BookOpen,
  Calendar,
  CheckCircle 
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: Cloud,
      title: 'AWS Certified Cloud Practitioner',
      status: 'Expected June 2025',
      description: 'Currently preparing for AWS Cloud Practitioner certification to validate cloud computing knowledge and skills.',
      category: 'Certification',
      color: 'neon-cyan',
      progress: 75
    },
    {
      icon: Code,
      title: '150+ LeetCode Problems Solved',
      status: 'Ongoing',
      description: 'Consistently solving algorithmic problems to strengthen data structures and problem-solving skills.',
      category: 'Coding',
      color: 'neon-purple',
      progress: 100
    },
    {
      icon: Award,
      title: 'NASSCOM Certified Developer',
      status: 'Certified',
      description: 'Achieved certification from NASSCOM Skill India, validating software development competencies.',
      category: 'Certification',
      color: 'neon-pink',
      progress: 100
    },
    {
      icon: Users,
      title: 'IP Utsav 2025 Participant',
      status: 'Participated',
      description: 'Actively participated in IP Utsav 2025 Innovation Convention, showcasing innovative project ideas.',
      category: 'Event',
      color: 'neon-cyan',
      progress: 100
    },
    {
      icon: BookOpen,
      title: 'NPTEL Elite Certificate',
      status: 'Certified',
      description: 'Earned Elite Certificate in Algorithms from NPTEL, demonstrating excellence in algorithmic thinking.',
      category: 'Academic',
      color: 'neon-purple',
      progress: 100
    },
    {
      icon: Trophy,
      title: 'Semester 2 Rank Holder',
      status: 'Achieved',
      description: 'Secured top rank in Semester 2, demonstrating academic excellence and consistent performance.',
      category: 'Academic',
      color: 'neon-pink',
      progress: 100
    }
  ];

  const stats = [
    { label: 'Certifications', value: '3+', icon: Award },
    { label: 'Problems Solved', value: '150+', icon: Code },
    { label: 'Events Participated', value: '5+', icon: Users },
    { label: 'Academic Rank', value: 'Top 5%', icon: Trophy }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that reflect dedication, continuous learning, and excellence in technology
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-dark-surface/50 border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-neon-purple mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
              }}
              className="group"
            >
              <Card className="bg-dark-surface/50 border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 h-full card-3d">
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-full bg-gradient-to-r from-${achievement.color}/20 to-neon-cyan/20`}>
                      <achievement.icon size={24} className={`text-${achievement.color} neon-glow`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`bg-${achievement.color}/20 text-${achievement.color} border-${achievement.color}/30 text-xs`}
                      >
                        {achievement.category}
                      </Badge>
                      {achievement.progress === 100 && (
                        <CheckCircle size={16} className="text-green-500" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-neon-purple transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className={`font-medium ${achievement.progress === 100 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {achievement.status}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Progress Bar for ongoing achievements */}
                    {achievement.progress < 100 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-foreground">{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${achievement.progress}%` }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`h-2 bg-gradient-to-r from-${achievement.color} to-neon-cyan rounded-full`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-dark-surface/30 to-dark-surface/50 border-neon-purple/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Trophy className="h-12 w-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning, Always Growing</h3>
              <p className="text-muted-foreground mb-6">
                These achievements represent my commitment to continuous learning and excellence. 
                Each milestone motivates me to reach even higher and contribute more to the tech community.
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple">
                  Next Goal: AWS Solutions Architect
                </Badge>
                <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan">
                  Target: 500+ LeetCode Problems
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};