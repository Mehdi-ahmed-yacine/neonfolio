import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyRadar = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    {
      id: 1,
      name: "WebAssembly",
      category: "performance",
      status: "adopt",
      confidence: 85,
      timeline: "Q1 2025",
      description: `High-performance web applications with near-native speed.\nPerfect for computational heavy tasks and game development.\nSeamless integration with existing JavaScript ecosystems.`,
      impact: "High",
      complexity: "Medium",
      adoption: 78
    },
    {
      id: 2,
      name: "WebGL 2.0",
      category: "graphics",
      status: "trial",
      confidence: 72,
      timeline: "Q2 2025",
      description: `Advanced 3D graphics rendering in the browser.\nInteractive data visualizations and immersive experiences.\nCross-platform compatibility with modern browsers.`,
      impact: "High",
      complexity: "High",
      adoption: 65
    },
    {
      id: 3,
      name: "Edge Computing",
      category: "infrastructure",
      status: "assess",
      confidence: 68,
      timeline: "Q3 2025",
      description: `Distributed computing closer to data sources.\nReduced latency and improved performance.\nScalable architecture for global applications.`,
      impact: "Medium",
      complexity: "High",
      adoption: 45
    },
    {
      id: 4,
      name: "AI/ML Integration",
      category: "intelligence",
      status: "adopt",
      confidence: 90,
      timeline: "Q1 2025",
      description: `Machine learning models in web applications.\nPersonalized user experiences and smart automation.\nReal-time data processing and predictions.`,
      impact: "High",
      complexity: "Medium",
      adoption: 82
    },
    {
      id: 5,
      name: "Quantum Computing APIs",
      category: "computing",
      status: "hold",
      confidence: 35,
      timeline: "Q4 2026",
      description: `Quantum computing access through cloud APIs.\nSolving complex optimization problems.\nEarly stage but promising for specific use cases.`,
      impact: "Low",
      complexity: "Very High",
      adoption: 15
    },
    {
      id: 6,
      name: "Progressive Web Apps 3.0",
      category: "mobile",
      status: "adopt",
      confidence: 88,
      timeline: "Q1 2025",
      description: `Next-generation PWAs with enhanced capabilities.\nNative-like performance and offline functionality.\nImproved app store distribution and installation.`,
      impact: "High",
      complexity: "Low",
      adoption: 75
    }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies', icon: 'Zap' },
    { id: 'performance', name: 'Performance', icon: 'Gauge' },
    { id: 'graphics', name: 'Graphics', icon: 'Palette' },
    { id: 'infrastructure', name: 'Infrastructure', icon: 'Server' },
    { id: 'intelligence', name: 'AI/ML', icon: 'Brain' },
    { id: 'computing', name: 'Computing', icon: 'Cpu' },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone' }
  ];

  const statusConfig = {
    adopt: { color: 'text-success', bg: 'bg-success/10', border: 'border-success/30', label: 'Adopt' },
    trial: { color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/30', label: 'Trial' },
    assess: { color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30', label: 'Assess' },
    hold: { color: 'text-error', bg: 'bg-error/10', border: 'border-error/30', label: 'Hold' }
  };

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies?.filter(tech => tech?.category === selectedCategory);

  const getRadarPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 120 + (Math.random() * 80);
    return {
      x: 200 + radius * Math.cos(angle),
      y: 200 + radius * Math.sin(angle)
    };
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Technology Radar</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My assessment of emerging technologies and their potential impact on future projects. 
          Each technology is evaluated based on maturity, adoption potential, and strategic value.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
              selectedCategory === category?.id
                ? 'bg-primary/10 text-primary border border-primary/30' :'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.name}</span>
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Radar Visualization */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <h4 className="text-lg font-semibold text-foreground mb-4">Radar View</h4>
          <div className="relative">
            <svg width="400" height="400" className="mx-auto">
              {/* Radar Circles */}
              {[1, 2, 3, 4]?.map((ring) => (
                <circle
                  key={ring}
                  cx="200"
                  cy="200"
                  r={ring * 50}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-border opacity-30"
                />
              ))}
              
              {/* Radar Lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315]?.map((angle) => (
                <line
                  key={angle}
                  x1="200"
                  y1="200"
                  x2={200 + 200 * Math.cos((angle * Math.PI) / 180)}
                  y2={200 + 200 * Math.sin((angle * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-border opacity-20"
                />
              ))}

              {/* Technology Points */}
              {filteredTechnologies?.map((tech, index) => {
                const position = getRadarPosition(index, filteredTechnologies?.length);
                const status = statusConfig?.[tech?.status];
                
                return (
                  <g key={tech?.id}>
                    <circle
                      cx={position?.x}
                      cy={position?.y}
                      r="8"
                      className={`${status?.bg} cursor-pointer transition-all duration-300 hover:r-12`}
                      stroke="currentColor"
                      strokeWidth="2"
                      onClick={() => setSelectedTech(tech)}
                    />
                    <text
                      x={position?.x}
                      y={position?.y - 15}
                      textAnchor="middle"
                      className="text-xs font-medium fill-current text-foreground"
                    >
                      {tech?.name?.split(' ')?.[0]}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {Object.entries(statusConfig)?.map(([key, config]) => (
                <div key={key} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${config?.bg} border ${config?.border}`}></div>
                  <span className="text-sm text-muted-foreground">{config?.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology List */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">Technology Assessment</h4>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredTechnologies?.map((tech) => {
              const status = statusConfig?.[tech?.status];
              
              return (
                <div
                  key={tech?.id}
                  onClick={() => setSelectedTech(tech)}
                  className="bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {tech?.name}
                      </h5>
                      <p className="text-sm text-muted-foreground">{tech?.timeline}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${status?.bg} ${status?.color} border ${status?.border}`}>
                      {status?.label}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Confidence: {tech?.confidence}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Adoption: {tech?.adoption}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Selected Technology Detail */}
      {selectedTech && (
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-semibold text-foreground">{selectedTech?.name}</h4>
              <p className="text-muted-foreground">Expected Timeline: {selectedTech?.timeline}</p>
            </div>
            <button
              onClick={() => setSelectedTech(null)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{selectedTech?.confidence}%</div>
              <div className="text-sm text-muted-foreground">Confidence Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{selectedTech?.impact}</div>
              <div className="text-sm text-muted-foreground">Business Impact</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning mb-1">{selectedTech?.complexity}</div>
              <div className="text-sm text-muted-foreground">Implementation</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground whitespace-pre-line">
              {selectedTech?.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologyRadar;