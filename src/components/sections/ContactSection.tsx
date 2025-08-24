import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter,
  MapPin,
  Send,
  MessageCircle 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactInfo = {
    email: 'sharmilamathiyalagan16@gmail.com',
    phone: '+91 93447 49782',
    location: 'Coimbatore, Tamil Nadu, India'
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'neon-purple',
      description: 'View my code and projects'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'neon-cyan',
      description: 'Connect professionally'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'neon-pink',
      description: 'Follow my journey'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'neon-cyan',
      description: 'Tech thoughts and updates'
    }
  ];

  const quickActions = [
    {
      title: 'Email Me',
      description: 'Send me a direct email',
      icon: Mail,
      action: `mailto:${contactInfo.email}`,
      color: 'neon-purple'
    },
    {
      title: 'Call Me',
      description: 'Let\'s have a conversation',
      icon: Phone,
      action: `tel:${contactInfo.phone}`,
      color: 'neon-cyan'
    },
    {
      title: 'Schedule a Meeting',
      description: 'Book a time that works for both',
      icon: MessageCircle,
      action: `mailto:${contactInfo.email}?subject=Meeting Request`,
      color: 'neon-pink'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate, discuss opportunities, or just have a chat about technology? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a passionate developer for your team, 
                want to collaborate on an exciting project, or simply want to connect 
                with a fellow tech enthusiast, I'm always open to new conversations and opportunities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-dark-surface/30 rounded-lg border border-neon-purple/20"
              >
                <Mail className="h-6 w-6 text-neon-purple" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium">{contactInfo.email}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-dark-surface/30 rounded-lg border border-neon-cyan/20"
              >
                <Phone className="h-6 w-6 text-neon-cyan" />
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground font-medium">{contactInfo.phone}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-dark-surface/30 rounded-lg border border-neon-pink/20"
              >
                <MapPin className="h-6 w-6 text-neon-pink" />
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground font-medium">{contactInfo.location}</div>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="outline"
                    className={`w-full justify-start border-${action.color}/30 text-${action.color} hover:bg-${action.color}/10 transition-all duration-300`}
                    onClick={() => window.open(action.action, '_blank')}
                  >
                    <action.icon className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs text-muted-foreground">{action.description}</div>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Find Me Online</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card 
                      className={`bg-dark-surface/50 border-${social.color}/20 hover:border-${social.color}/50 transition-all duration-300 cursor-pointer card-3d`}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r from-${social.color}/20 to-neon-cyan/20`}>
                            <social.icon size={24} className={`text-${social.color} neon-glow`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{social.name}</h4>
                            <p className="text-sm text-muted-foreground">{social.description}</p>
                          </div>
                          <Send size={16} className="text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-dark-surface/50 to-dark-surface/30 border-neon-purple/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 mb-4">
                      <MessageCircle size={32} className="text-neon-purple" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Let's Build Something Amazing Together
                    </h3>
                    <p className="text-muted-foreground">
                      I'm always excited to work on innovative projects and meet like-minded people. 
                      Drop me a message and let's create something extraordinary!
                    </p>
                  </div>
                  
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow transition-all duration-300"
                    onClick={() => window.open(`mailto:${contactInfo.email}?subject=Let's Collaborate!`, '_blank')}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};