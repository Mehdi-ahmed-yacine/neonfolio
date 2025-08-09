import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationSection = ({ education, certifications }) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-elevation-card border border-border/50">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
          <Icon name="GraduationCap" size={20} className="text-accent" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Education & Certifications</h2>
          <p className="text-muted-foreground">Academic background and professional credentials</p>
        </div>
      </div>
      <div className="space-y-8">
        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center space-x-2">
            <Icon name="BookOpen" size={18} className="text-accent" />
            <span>Education</span>
          </h3>
          <div className="space-y-6">
            {education?.map((edu, index) => (
              <div key={index} className="relative">
                {index < education?.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-accent/50 to-transparent"></div>
                )}
                
                <div className="flex gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border-2 border-accent/30">
                      <Icon name="School" size={16} className="text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="bg-muted/20 rounded-xl p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-1">{edu?.degree}</h4>
                          <p className="text-accent font-medium mb-2">{edu?.institution}</p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                            <Icon name="Calendar" size={14} />
                            <span>{edu?.duration}</span>
                            <span>•</span>
                            <span>{edu?.location}</span>
                          </div>
                          {edu?.gpa && (
                            <div className="flex items-center space-x-2 text-sm">
                              <Icon name="Award" size={14} className="text-success" />
                              <span className="text-success font-medium">GPA: {edu?.gpa}</span>
                            </div>
                          )}
                        </div>
                        {edu?.honors && (
                          <span className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded-full">
                            {edu?.honors}
                          </span>
                        )}
                      </div>
                      
                      {edu?.relevantCourses && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu?.relevantCourses?.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {edu?.projects && (
                        <div>
                          <h5 className="text-sm font-semibold text-foreground mb-3">Academic Projects</h5>
                          <ul className="space-y-2">
                            {edu?.projects?.map((project, projIndex) => (
                              <li key={projIndex} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-sm leading-relaxed">
                                  {project}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center space-x-2">
            <Icon name="Award" size={18} className="text-success" />
            <span>Professional Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-muted/20 rounded-xl p-6 hover:bg-muted/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center border-2 border-success/30 flex-shrink-0">
                    <Icon name="Shield" size={16} className="text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-foreground mb-1">{cert?.name}</h4>
                    <p className="text-success font-medium text-sm mb-2">{cert?.issuer}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
                      <Icon name="Calendar" size={12} />
                      <span>Issued: {cert?.issueDate}</span>
                      {cert?.expiryDate && (
                        <>
                          <span>•</span>
                          <span>Expires: {cert?.expiryDate}</span>
                        </>
                      )}
                    </div>
                    {cert?.credentialId && (
                      <div className="flex items-center space-x-2 text-xs">
                        <Icon name="Hash" size={12} className="text-muted-foreground" />
                        <span className="text-muted-foreground font-mono">{cert?.credentialId}</span>
                      </div>
                    )}
                    {cert?.skills && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {cert?.skills?.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-success/10 text-success text-xs rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;