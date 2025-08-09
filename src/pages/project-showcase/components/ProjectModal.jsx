import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-xl border border-border shadow-elevation-card overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
            <p className="text-accent font-medium">{project?.category}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          />
        </div>
        
        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Project Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Action Buttons Overlay */}
            <div className="absolute bottom-6 left-6 flex space-x-3">
              {project?.liveUrl && (
                <Button
                  variant="default"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => window.open(project?.liveUrl, '_blank')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm"
                >
                  Live Demo
                </Button>
              )}
              {project?.githubUrl && (
                <Button
                  variant="outline"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open(project?.githubUrl, '_blank')}
                  className="bg-card/90 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary/10"
                >
                  View Code
                </Button>
              )}
            </div>
          </div>
          
          <div className="p-6">
            {/* Project Overview */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center">
                <Icon name="FileText" size={20} className="mr-2 text-primary" />
                Project Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project?.fullDescription || project?.description}
              </p>
            </div>
            
            {/* Key Metrics */}
            {project?.metrics && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2 text-success" />
                  Key Results
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project?.metrics?.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                      <div className="text-sm text-muted-foreground">{metric?.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Technical Implementation */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <Icon name="Code2" size={20} className="mr-2 text-accent" />
                Technical Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project?.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Features */}
            {project?.features && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Icon name="CheckCircle" size={20} className="mr-2 text-success" />
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Challenges & Solutions */}
            {project?.challenges && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Icon name="Lightbulb" size={20} className="mr-2 text-warning" />
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project?.challenges?.map((item, index) => (
                    <div key={index} className="p-4 bg-muted/20 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="AlertCircle" size={16} className="mr-2 text-warning" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">{item?.challenge}</p>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="CheckCircle" size={16} className="mr-2 text-success" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground text-sm">{item?.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Project Timeline */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2 text-accent" />
                Project Details
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/20 rounded-lg text-center">
                  <Icon name="Calendar" size={24} className="text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground">{project?.duration || '2-3 months'}</div>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg text-center">
                  <Icon name="Users" size={24} className="text-accent mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Team Size</div>
                  <div className="font-semibold text-foreground">{project?.teamSize || 'Solo Project'}</div>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg text-center">
                  <Icon name="Globe" size={24} className="text-success mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className={`font-semibold ${
                    project?.status === 'Live' ? 'text-success' : 
                    project?.status === 'In Progress' ? 'text-warning' : 'text-muted-foreground'
                  }`}>
                    {project?.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;