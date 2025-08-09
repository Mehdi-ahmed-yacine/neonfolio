import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillDetailPanel = ({ skill, onClose }) => {
  if (!skill) return null;

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-primary';
      case 'Advanced': return 'text-accent';
      case 'Intermediate': return 'text-warning';
      case 'Beginner': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
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
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl shadow-elevation-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <Icon name={skill?.icon} size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{skill?.name}</h2>
              <p className={`text-sm font-medium ${getProficiencyColor(skill?.proficiency)}`}>
                {skill?.proficiency} Level
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            className="text-muted-foreground hover:text-foreground"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Proficiency Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Proficiency Level</span>
              <span className={`text-sm font-bold ${getProficiencyColor(skill?.proficiency)}`}>
                {getProficiencyPercentage(skill?.proficiency)}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out`}
                style={{ width: `${getProficiencyPercentage(skill?.proficiency)}%` }}
              />
            </div>
          </div>

          {/* Experience & Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">Experience</span>
              </div>
              <p className="text-2xl font-bold text-primary">{skill?.experience} Years</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="FolderOpen" size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">Projects</span>
              </div>
              <p className="text-2xl font-bold text-accent">{skill?.projectCount}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">About This Skill</h3>
            <p className="text-muted-foreground leading-relaxed">
              {skill?.description}
            </p>
          </div>

          {/* Recent Projects */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Recent Projects</h3>
            <div className="space-y-2">
              {skill?.recentProjects?.map((project, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/20 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-foreground font-medium">{project?.name}</span>
                  <span className="text-xs text-muted-foreground">({project?.year})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          {skill?.learningPath && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Learning Journey</h3>
              <div className="space-y-2">
                {skill?.learningPath?.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      milestone?.completed ? 'bg-primary' : 'bg-muted-foreground'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-foreground">{milestone?.title}</p>
                      <p className="text-xs text-muted-foreground">{milestone?.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {skill?.certifications && skill?.certifications?.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              <div className="space-y-2">
                {skill?.certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-success/10 border border-success/20 rounded-lg">
                    <Icon name="Award" size={16} className="text-success" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{cert?.name}</p>
                      <p className="text-xs text-muted-foreground">{cert?.issuer} • {cert?.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="TrendingUp" size={16} />
              <span>Last updated: {skill?.lastUpdated}</span>
            </div>
            <Button
              variant="outline"
              onClick={onClose}
              iconName="ArrowLeft"
              iconPosition="left"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Back to Matrix
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailPanel;