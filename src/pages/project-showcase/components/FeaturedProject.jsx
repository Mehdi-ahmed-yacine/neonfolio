import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  return (
    <div className="relative bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl overflow-hidden border border-primary/20 shadow-elevation-card mb-12">
      {/* Featured Badge */}
      <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full border border-primary/30">
        <div className="flex items-center space-x-2">
          <Icon name="Star" size={16} className="text-primary-foreground" />
          <span className="text-sm font-semibold text-primary-foreground">Featured Project</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Project Image */}
        <div className="relative h-64 lg:h-96 overflow-hidden">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 lg:to-card" />
          
          {/* Floating Action Buttons */}
          <div className="absolute bottom-6 left-6 flex space-x-3">
            {project?.liveUrl && (
              <Button
                variant="default"
                iconName="ExternalLink"
                iconPosition="left"
                onClick={() => window.open(project?.liveUrl, '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow glow-primary"
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

        {/* Project Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Category */}
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Layers" size={16} className="text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wide">
              {project?.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            {project?.title}
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {project?.fullDescription || project?.description}
          </p>

          {/* Key Metrics */}
          {project?.metrics && (
            <div className="grid grid-cols-3 gap-6 mb-8">
              {project?.metrics?.slice(0, 3)?.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {metric?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric?.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
              <Icon name="Code2" size={16} className="mr-2 text-primary" />
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {project?.technologies?.slice(0, 6)?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20 font-medium"
                >
                  {tech}
                </span>
              ))}
              {project?.technologies?.length > 6 && (
                <span className="px-3 py-1.5 bg-muted/50 text-muted-foreground text-sm rounded-lg border border-border">
                  +{project?.technologies?.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onViewDetails(project)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow flex-1"
            >
              View Full Case Study
            </Button>
            <Button
              variant="outline"
              iconName="Download"
              iconPosition="left"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
            >
              Project Brief
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 hover:border-primary/30 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default FeaturedProject;