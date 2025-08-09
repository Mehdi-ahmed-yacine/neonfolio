import React from 'react';
import Image from '../../../components/AppImage';

const HeroProfile = () => {
  return (
    <div className="relative group">
      {/* Hexagonal Profile Frame */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
        {/* Animated Border */}
        <div className="absolute inset-0 clip-hexagon bg-gradient-to-br from-primary via-accent to-primary animate-border-rotate opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Inner Frame */}
        <div className="absolute inset-2 clip-hexagon bg-background overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            alt="Mehdi Ahmed Yacine - Full Stack Developer"
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 clip-hexagon bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-glow" />
      </div>

      {/* Floating Status Badge */}
      <div className="absolute -bottom-4 -right-4 glass-effect rounded-full px-4 py-2 border border-primary/30">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
          <span className="text-sm font-medium text-success">Available for Projects</span>
        </div>
      </div>

      {/* Skill Badges - Floating Animation */}
      <div className="absolute -top-8 -left-8 animate-float">
        <div className="glass-effect rounded-lg px-3 py-1 border border-primary/20">
          <span className="text-xs font-code text-primary">React</span>
        </div>
      </div>

      <div className="absolute -top-4 -right-12 animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-effect rounded-lg px-3 py-1 border border-accent/20">
          <span className="text-xs font-code text-accent">Node.js</span>
        </div>
      </div>

      <div className="absolute -bottom-8 -left-12 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-effect rounded-lg px-3 py-1 border border-primary/20">
          <span className="text-xs font-code text-primary">Python</span>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;