import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = () => {
  const stats = [
    {
      icon: 'Code2',
      value: '50+',
      label: 'Projects Completed',
      description: 'Full-stack applications delivered',
      color: 'text-primary'
    },
    {
      icon: 'Users',
      value: '25+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'text-accent'
    },
    {
      icon: 'TrendingUp',
      value: '99%',
      label: 'Success Rate',
      description: 'Projects delivered on time',
      color: 'text-success'
    },
    {
      icon: 'Award',
      value: '3+',
      label: 'Years Experience',
      description: 'Professional development',
      color: 'text-warning'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-card via-muted/20 to-card rounded-2xl p-8 mb-12 border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Portfolio Highlights
        </h2>
        <p className="text-muted-foreground">
          Delivering exceptional results through innovative solutions
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className="text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted/30 border border-border mb-4 group-hover:border-primary/30 transition-colors duration-300`}>
              <Icon 
                name={stat?.icon} 
                size={24} 
                className={`${stat?.color} group-hover:scale-110 transition-transform duration-300`} 
              />
            </div>
            
            <div className={`text-3xl font-bold ${stat?.color} mb-1`}>
              {stat?.value}
            </div>
            
            <div className="text-sm font-semibold text-foreground mb-1">
              {stat?.label}
            </div>
            
            <div className="text-xs text-muted-foreground">
              {stat?.description}
            </div>
          </div>
        ))}
      </div>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
      </div>
    </div>
  );
};

export default ProjectStats;