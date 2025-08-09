import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExperienceSection = ({ experiences }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-elevation-card border border-border/50">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon name="Briefcase" size={20} className="text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Professional Experience</h2>
          <p className="text-muted-foreground">Career journey and achievements</p>
        </div>
      </div>
      <div className="space-y-8">
        {experiences?.map((experience, index) => (
          <div key={index} className="relative">
            {/* Timeline Line */}
            {index < experiences?.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
            )}

            <div className="flex gap-6">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border-2 border-primary/30">
                  <Icon name="Building2" size={16} className="text-primary" />
                </div>
              </div>

              {/* Experience Content */}
              <div className="flex-1 min-w-0">
                <div className="bg-muted/20 rounded-xl p-6 hover:bg-muted/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {experience?.position}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="text-primary font-medium">{experience?.company}</p>
                        <span className="text-muted-foreground">•</span>
                        <p className="text-muted-foreground">{experience?.location}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        <span>{experience?.duration}</span>
                        <span>•</span>
                        <span>{experience?.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {experience?.current && (
                        <span className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(index)}
                        iconName={expandedExperience === index ? "ChevronUp" : "ChevronDown"}
                        iconPosition="right"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {expandedExperience === index ? "Less" : "More"}
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience?.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience?.achievements?.slice(0, expandedExperience === index ? undefined : 3)?.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience?.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedExperience === index && (
                    <div className="border-t border-border/30 pt-4 mt-4 space-y-4">
                      {experience?.projects && (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Notable Projects</h4>
                          <div className="space-y-3">
                            {experience?.projects?.map((project, projIndex) => (
                              <div key={projIndex} className="bg-background/50 rounded-lg p-4">
                                <h5 className="font-medium text-foreground mb-2">{project?.name}</h5>
                                <p className="text-sm text-muted-foreground mb-2">{project?.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {project?.technologies?.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {experience?.metrics && (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Performance Metrics</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {experience?.metrics?.map((metric, metricIndex) => (
                              <div key={metricIndex} className="text-center p-3 bg-background/50 rounded-lg">
                                <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                                <div className="text-xs text-muted-foreground">{metric?.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;