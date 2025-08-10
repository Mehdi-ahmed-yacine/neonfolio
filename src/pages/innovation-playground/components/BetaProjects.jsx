import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BetaProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const betaProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      status: "active",
      progress: 80,
      description: `Plateforme e-commerce moderne avec gestion de stock en temps réel, paiements sécurisés et analytics.`,
      features: ["Inventaire temps réel", "Paiements Stripe", "Analytics"],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/yacine454-may/shop-visions",
      image: "/assets/images/Screenshot 2025-08-09 232234.png",
      lastUpdate: "2025-01-05",
      challenges: "Optimisation des performances en forte charge",
      nextSteps: "SEO avancé et fonctionnalités multi-vendeurs"
    },
    {
      id: 2,
      title: "Reshume - Sonatrach",
      category: "enterprise",
      status: "testing",
      progress: 90,
      description: `Application interne pour la gestion des remboursements des frais de mission (HSE).`,
      features: ["Gestion utilisateurs", "Suivi missions", "Historique & emails"],
      tech: ["Django", "MySQL", "Chart.js"],
      demoUrl: "",
      githubUrl: "",
      image: "/assets/images/5992453786196625355.jpg",
      lastUpdate: "2025-01-08",
      challenges: "Normalisation des données et export",
      nextSteps: "Déploiement interne et audit sécurité"
    },
    {
      id: 3,
      title: "BuchaTech - CHU Mustapha",
      category: "healthcare",
      status: "active",
      progress: 70,
      description: `Gestion des patients, médecins et infirmiers avec visualisations et suivi clinique.`,
      features: ["Dossiers patients", "Dashboard", "Graphiques"],
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      demoUrl: "https://buchatech.vercel.app",
      githubUrl: "",
      image: "/assets/images/6017122291638454968.jpg",
      lastUpdate: "2025-01-02",
      challenges: "Modélisation des données médicales",
      nextSteps: "Gestion des rôles et archivage"
    },
    {
      id: 4,
      title: "Gym Management App",
      category: "management",
      status: "prototype",
      progress: 60,
      description: `Gestion des abonnements, coachs et paiements avec tableaux de bord et statistiques.`,
      features: ["Gestion clients", "Paiements", "Statistiques"],
      tech: ["React", "Node.js", "MongoDB"],
      demoUrl: "",
      githubUrl: "",
      image: "/assets/images/Screenshot 2025-08-09 232249.png",
      lastUpdate: "2025-01-01",
      challenges: "Intégration paiement et rôles",
      nextSteps: "Facturation et export PDF"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Layers' },
    { id: 'ai', name: 'AI/ML', icon: 'Brain' },
    { id: 'graphics', name: 'Graphics', icon: 'Palette' },
    { id: 'security', name: 'Security', icon: 'Shield' },
    { id: 'ar', name: 'AR/VR', icon: 'Eye' },
    { id: 'blockchain', name: 'Blockchain', icon: 'Link' },
    { id: 'accessibility', name: 'Accessibility', icon: 'Heart' }
  ];

  const statusConfig = {
    active: { color: 'text-success', bg: 'bg-success/10', border: 'border-success/30', label: 'Active Development' },
    testing: { color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/30', label: 'Testing Phase' },
    experimental: { color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30', label: 'Experimental' },
    prototype: { color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30', label: 'Prototype' },
    concept: { color: 'text-muted-foreground', bg: 'bg-muted/10', border: 'border-muted', label: 'Concept' }
  };

  const filteredProjects = activeFilter === 'all' 
    ? betaProjects 
    : betaProjects?.filter(project => project?.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Beta Projects</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experimental projects and proof-of-concepts that push the boundaries of web development. 
          Each project explores emerging technologies and innovative solutions.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveFilter(category?.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeFilter === category?.id
                ? 'bg-primary/10 text-primary border border-primary/30' :'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.name}</span>
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.map((project) => {
          const status = statusConfig?.[project?.status];
          
          return (
            <div
              key={project?.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className={`px-2 py-1 rounded text-xs font-medium ${status?.bg} ${status?.color} border ${status?.border}`}>
                    {status?.label}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm">{project?.progress}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2 mt-1">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project?.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project?.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project?.description?.split('\n')?.[0]}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project?.tech?.slice(0, 3)?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project?.tech?.length > 3 && (
                    <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-border">
                      +{project?.tech?.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Updated {new Date(project.lastUpdate)?.toLocaleDateString()}</span>
                  <div className="flex items-center space-x-2">
                    <Icon name="ExternalLink" size={14} />
                    <Icon name="Github" size={14} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject?.title}</h3>
                  <div className="flex items-center space-x-4">
                    <div className={`px-3 py-1 rounded text-sm font-medium ${statusConfig?.[selectedProject?.status]?.bg} ${statusConfig?.[selectedProject?.status]?.color} border ${statusConfig?.[selectedProject?.status]?.border}`}>
                      {statusConfig?.[selectedProject?.status]?.label}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {selectedProject?.progress}% Complete
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <Image
                    src={selectedProject?.image}
                    alt={selectedProject?.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Description</h4>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {selectedProject?.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {selectedProject?.features?.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                            <Icon name="Check" size={16} className="text-success" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.tech?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Current Challenges</h4>
                    <p className="text-muted-foreground">{selectedProject?.challenges}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Next Steps</h4>
                    <p className="text-muted-foreground">{selectedProject?.nextSteps}</p>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="default"
                      iconName="ExternalLink"
                      iconPosition="left"
                      onClick={() => window.open(selectedProject?.demoUrl, '_blank')}
                    >
                      View Demo
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Github"
                      iconPosition="left"
                      onClick={() => window.open(selectedProject?.githubUrl, '_blank')}
                    >
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BetaProjects;