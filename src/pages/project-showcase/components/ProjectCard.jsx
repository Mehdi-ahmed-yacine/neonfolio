import React, { useState } from 'react';

import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-elevation-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Neon Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full">
            <span className="text-xs font-semibold text-primary-foreground">Featured</span>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full border border-border">
          <span className={`text-xs font-medium ${
            project?.status === 'Live' ? 'text-success' : 
            project?.status === 'In Progress' ? 'text-warning' : 'text-muted-foreground'
          }`}>
            {project?.status}
          </span>
        </div>
        
        {/* Hover Actions */}
        <div className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {project?.liveUrl && (
            <Button
              variant="default"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              onClick={(e) => {
                e?.stopPropagation();
                window.open(project?.liveUrl, '_blank');
              }}
              className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-glow-sm"
            >
              Live Demo
            </Button>
          )}
          {project?.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              onClick={(e) => {
                e?.stopPropagation();
                window.open(project?.githubUrl, '_blank');
              }}
              className="bg-card/90 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary/10"
            >
              Code
            </Button>
          )}
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {project?.title}
          </h3>
          <p className="text-sm text-accent font-medium">{project?.category}</p>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>
        
        {/* Key Metrics */}
        {project?.metrics && (
          <div className="flex flex-wrap gap-4 mb-4">
            {project?.metrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-primary">{metric?.value}</div>
                <div className="text-xs text-muted-foreground">{metric?.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>
        
        {/* Action Button */}
        <Button
          variant="ghost"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onViewDetails(project)}
          className="text-primary hover:bg-primary/10 hover:text-primary border border-primary/20 hover:border-primary/40"
        >
          View Case Study
        </Button>
      </div>
      {/* Neon Border Effect */}
      <div className={`absolute inset-0 rounded-xl border-2 border-primary/0 transition-all duration-300 pointer-events-none ${
        isHovered ? 'border-primary/30 shadow-glow-sm' : ''
      }`} />
    </div>
  );
};

export default ProjectCard;