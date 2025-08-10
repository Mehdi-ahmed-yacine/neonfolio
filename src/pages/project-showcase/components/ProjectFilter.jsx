import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  activeFilter, 
  onFilterChange, 
  activeCategory, 
  onCategoryChange,
  projectCount 
}) => {
  const filterOptions = [
    { key: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { key: 'featured', label: 'Featured', icon: 'Star' },
    { key: 'recent', label: 'Recent', icon: 'Clock' },
    { key: 'live', label: 'Live Projects', icon: 'Globe' }
  ];

  const categoryOptions = [
    { key: 'all', label: 'All Categories', icon: 'Layers' },
    { key: 'fullstack', label: 'Full-Stack', icon: 'Code2' },
    { key: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { key: 'backend', label: 'Backend', icon: 'Server' },
    { key: 'mobile', label: 'Mobile', icon: 'Smartphone' },
    { key: 'api', label: 'API & Integration', icon: 'Zap' }
  ];

  const technologyFilters = [
    { key: 'react', label: 'React', color: 'text-blue-400' },
    { key: 'nodejs', label: 'Node.js', color: 'text-green-400' },
    { key: 'python', label: 'Python', color: 'text-yellow-400' },
    { key: 'mongodb', label: 'MongoDB', color: 'text-green-500' },
    { key: 'postgresql', label: 'PostgreSQL', color: 'text-blue-500' },
    { key: 'aws', label: 'AWS', color: 'text-orange-400' }
  ];

  return (
    <div className="bg-card rounded-xl p-6 mb-8 border border-border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-foreground mb-1">Filter Projects</h2>
          <p className="text-sm text-muted-foreground">
            Showing {projectCount} project{projectCount !== 1 ? 's' : ''}
          </p>
        </div>
        
        {/* Reset Filters */}
        <Button
          variant="ghost"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => {
            onFilterChange('all');
            onCategoryChange('all');
          }}
          className="text-muted-foreground hover:text-primary"
        >
          Reset
        </Button>
      </div>
      {/* Filter Tabs */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
          <Icon name="Filter" size={16} className="mr-2 text-primary" />
          Filter by Status
        </h3>
        <div className="flex flex-wrap gap-2">
          {filterOptions?.map((option) => (
            <Button
              key={option?.key}
              variant={activeFilter === option?.key ? "default" : "outline"}
              size="sm"
              iconName={option?.icon}
              iconPosition="left"
              onClick={() => onFilterChange(option?.key)}
              className={activeFilter === option?.key 
                ? "bg-primary text-primary-foreground shadow-glow-sm" 
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }
            >
              {option?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
          <Icon name="FolderOpen" size={16} className="mr-2 text-accent" />
          Project Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categoryOptions?.map((category) => (
            <Button
              key={category?.key}
              variant={activeCategory === category?.key ? "default" : "outline"}
              size="sm"
              iconName={category?.icon}
              iconPosition="left"
              onClick={() => onCategoryChange(category?.key)}
              className={activeCategory === category?.key 
                ? "bg-accent text-accent-foreground" 
                : "border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
              }
            >
              {category?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Technology Filter */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
          <Icon name="Wrench" size={16} className="mr-2 text-warning" />
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologyFilters?.map((tech) => (
            <button
              key={tech?.key}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 border ${tech?.color} hover:bg-muted/50 border-border hover:border-primary/30`}
            >
              {tech?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">11</div>
            <div className="text-xs text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">7</div>
            <div className="text-xs text-muted-foreground">Live Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">15+</div>
            <div className="text-xs text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">2</div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;