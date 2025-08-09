import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillHexagon = ({ skill, index, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'from-primary to-accent';
      case 'Advanced': return 'from-accent to-primary';
      case 'Intermediate': return 'from-warning to-primary';
      case 'Beginner': return 'from-muted-foreground to-warning';
      default: return 'from-muted to-muted-foreground';
    }
  };

  const getProficiencyPercentage = (level) => {
    switch (level) {
      case 'Expert': return 95;
      case 'Advanced': return 80;
      case 'Intermediate': return 65;
      case 'Beginner': return 40;
      default: return 20;
    }
  };

  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-110 z-10' : 'hover:scale-105'
      }`}
      onClick={() => onClick(skill)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transform: isActive ? 'scale(1.1)' : undefined
      }}
    >
      {/* Hexagon Container */}
      <div className={`w-32 h-32 clip-hexagon relative overflow-hidden transition-all duration-500 ${
        isActive 
          ? 'bg-gradient-to-br from-primary/20 to-accent/20 shadow-glow-primary' 
          : 'bg-gradient-to-br from-card to-muted hover:from-primary/10 hover:to-accent/10'
      }`}>
        
        {/* Animated Border */}
        <div className={`absolute inset-0 clip-hexagon transition-all duration-500 ${
          isHovered || isActive 
            ? `bg-gradient-to-br ${getProficiencyColor(skill?.proficiency)} opacity-20` 
            : 'opacity-0'
        }`} />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Icon */}
          <div className={`mb-2 transition-all duration-300 ${
            isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
          }`}>
            <Icon name={skill?.icon} size={28} />
          </div>
          
          {/* Skill Name */}
          <h3 className={`text-xs font-semibold text-center leading-tight transition-colors duration-300 ${
            isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'
          }`}>
            {skill?.name}
          </h3>
          
          {/* Proficiency Level */}
          <div className={`text-xs mt-1 font-medium transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-accent'
          }`}>
            {skill?.proficiency}
          </div>
        </div>

        {/* Progress Ring */}
        <div className="absolute inset-0 clip-hexagon">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted/30"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${getProficiencyPercentage(skill?.proficiency) * 2.83} 283`}
              className={`transition-all duration-1000 ${
                isActive ? 'text-primary' : 'text-accent/60'
              }`}
              style={{
                strokeLinecap: 'round',
                animationDelay: `${index * 200}ms`
              }}
            />
          </svg>
        </div>

        {/* Glow Effect */}
        {(isHovered || isActive) && (
          <div className={`absolute inset-0 clip-hexagon bg-gradient-to-br ${getProficiencyColor(skill?.proficiency)} opacity-10 animate-glow`} />
        )}
      </div>
      {/* Floating Badge */}
      {skill?.isNew && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-success to-accent rounded-full flex items-center justify-center animate-float">
          <Icon name="Sparkles" size={12} className="text-success-foreground" />
        </div>
      )}
      {/* Years Experience Badge */}
      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-primary text-primary-foreground shadow-glow-sm' 
          : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
      }`}>
        {skill?.experience}y
      </div>
    </div>
  );
};

export default SkillHexagon;