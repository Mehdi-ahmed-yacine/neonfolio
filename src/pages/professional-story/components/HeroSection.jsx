import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 clip-hexagon bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Code2" size={24} className="text-primary-foreground" />
                </div>
                <span className="text-primary font-code text-sm font-medium tracking-wider uppercase">
                  Digital Craftsman
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Ahmed Yacine
                <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text animate-gradient-shift">
                  Mehdi
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Master's student at University of Algiers 1 with a Bachelor's degree in Software and Information Systems Engineering. Experienced full-stack developer with professional internship at Sonatrach DP Hydra where I developed a web application named "Reshume".
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-sm">yacinemehdi2005@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-sm">+213 562 17 29 59</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-sm">Algeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/yacine454-may" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                <Icon name="Github" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmed-yacine-mehdi-5941a4303/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors"
              >
                <Icon name="Linkedin" size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">LinkedIn</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Icon name="Zap" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Full-Stack Developer</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Icon name="GraduationCap" size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">Master's Student</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
                <Icon name="Briefcase" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">Sonatrach Intern</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">+3</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">+10</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2025</div>
                <div className="text-sm text-muted-foreground">Bachelor's Degree</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 animate-glow"></div>
              
              {/* Main Image Container */}
              <div className="relative glass-effect rounded-2xl p-8 border border-primary/20">
                <div className="relative">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <Image
                      src="/assets/images/5798831463582517533.jpg"
                      alt="Ahmed Yacine Mehdi - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-float">
                    <Icon name="Code" size={24} className="text-primary" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30 animate-float" style={{ animationDelay: '1s' }}>
                    <Icon name="Lightbulb" size={24} className="text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-code">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;