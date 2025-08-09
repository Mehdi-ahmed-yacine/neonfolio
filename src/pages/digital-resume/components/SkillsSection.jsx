import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: 'Grid3X3' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'database', label: 'Database', icon: 'Database' },
    { id: 'tools', label: 'Tools & DevOps', icon: 'Settings' },
    { id: 'soft', label: 'Soft Skills', icon: 'Users' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills?.filter(skill => skill?.category === activeCategory);

  const getSkillIcon = (category) => {
    const iconMap = {
      frontend: 'Monitor',
      backend: 'Server',
      database: 'Database',
      tools: 'Settings',
      soft: 'Users'
    };
    return iconMap?.[category] || 'Code2';
  };

  const getProficiencyColor = (level) => {
    const colorMap = {
      'Expert': 'text-primary',
      'Advanced': 'text-accent',
      'Intermediate': 'text-success',
      'Beginner': 'text-warning'
    };
    return colorMap?.[level] || 'text-muted-foreground';
  };

  const getProficiencyBg = (level) => {
    const bgMap = {
      'Expert': 'bg-primary/10 border-primary/30',
      'Advanced': 'bg-accent/10 border-accent/30',
      'Intermediate': 'bg-success/10 border-success/30',
      'Beginner': 'bg-warning/10 border-warning/30'
    };
    return bgMap?.[level] || 'bg-muted/10 border-muted/30';
  };

  const getProficiencyWidth = (level) => {
    const widthMap = {
      'Expert': 'w-full',
      'Advanced': 'w-4/5',
      'Intermediate': 'w-3/5',
      'Beginner': 'w-2/5'
    };
    return widthMap?.[level] || 'w-1/5';
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-elevation-card border border-border/50">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
          <Icon name="Code2" size={20} className="text-warning" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
          <p className="text-muted-foreground">Proficiency levels and expertise areas</p>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === category?.id
                ? 'bg-primary/20 text-primary border border-primary/30' :'bg-muted/20 text-muted-foreground hover:bg-muted/30 hover:text-foreground border border-transparent'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills?.map((skill, index) => (
          <div
            key={index}
            className="bg-muted/20 rounded-xl p-6 hover:bg-muted/30 transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${getProficiencyBg(skill?.proficiency)}`}>
                <Icon name={getSkillIcon(skill?.category)} size={16} className={getProficiencyColor(skill?.proficiency)} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {skill?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{skill?.description}</p>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-medium ${getProficiencyColor(skill?.proficiency)}`}>
                    {skill?.proficiency}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{skill?.experience}</span>
                </div>
              </div>
            </div>

            {/* Proficiency Bar */}
            <div className="mb-4">
              <div className="w-full bg-background/50 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${getProficiencyWidth(skill?.proficiency)} ${
                    skill?.proficiency === 'Expert' ? 'bg-primary' :
                    skill?.proficiency === 'Advanced' ? 'bg-accent' :
                    skill?.proficiency === 'Intermediate'? 'bg-success' : 'bg-warning'
                  }`}
                ></div>
              </div>
            </div>

            {/* Related Technologies */}
            {skill?.technologies && (
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">Related Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {skill?.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-background/50 text-muted-foreground text-xs rounded border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certification Badge */}
            {skill?.certified && (
              <div className="mt-3 flex items-center space-x-2">
                <Icon name="Award" size={14} className="text-success" />
                <span className="text-xs text-success font-medium">Certified</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Skills Summary */}
      <div className="mt-8 pt-8 border-t border-border/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {skills?.filter(s => s?.proficiency === 'Expert')?.length}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">
              {skills?.filter(s => s?.proficiency === 'Advanced')?.length}
            </div>
            <div className="text-sm text-muted-foreground">Advanced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">
              {skills?.filter(s => s?.category === 'frontend')?.length + skills?.filter(s => s?.category === 'backend')?.length}
            </div>
            <div className="text-sm text-muted-foreground">Full-Stack</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning mb-1">
              {new Date()?.getFullYear() - 2019}+
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;