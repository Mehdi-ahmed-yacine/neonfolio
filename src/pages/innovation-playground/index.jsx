import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TechnologyRadar from './components/TechnologyRadar';
import BetaProjects from './components/BetaProjects';
import InteractiveDemo from './components/InteractiveDemo';
import CodeExperiments from './components/CodeExperiments';

const InnovationPlayground = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState({});

  const sections = [
    { id: 'overview', title: 'Overview', icon: 'Zap' },
    { id: 'radar', title: 'Technology Radar', icon: 'Radar' },
    { id: 'beta', title: 'Beta Projects', icon: 'Flask' },
    { id: 'demos', title: 'Interactive Demos', icon: 'Play' },
    { id: 'experiments', title: 'Code Experiments', icon: 'Code2' }
  ];

  const stats = [
    { label: 'Active Experiments', value: '12', icon: 'Flask', color: 'text-primary' },
    { label: 'Technologies Explored', value: '25+', icon: 'Cpu', color: 'text-accent' },
    { label: 'Beta Projects', value: '6', icon: 'Rocket', color: 'text-success' },
    { label: 'Innovation Score', value: '94%', icon: 'TrendingUp', color: 'text-warning' }
  ];

  const innovations = [
    {
      title: "AI-Powered Development",
      description: "Exploring machine learning integration in web applications for intelligent user experiences.",
      icon: "Brain",
      status: "Active Research"
    },
    {
      title: "WebAssembly Performance",
      description: "Pushing browser performance boundaries with WebAssembly for computationally intensive tasks.",
      icon: "Zap",
      status: "In Production"
    },
    {
      title: "Quantum Computing APIs",
      description: "Early exploration of quantum computing integration through cloud-based quantum APIs.",
      icon: "Atom",
      status: "Experimental"
    },
    {
      title: "AR/VR Web Experiences",
      description: "Creating immersive web experiences using WebXR and advanced 3D rendering techniques.",
      icon: "Eye",
      status: "Prototype Phase"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, observerOptions);

    sections?.forEach(section => {
      const element = document.getElementById(section?.id);
      if (element) observer?.observe(element);
    });

    return () => observer?.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Innovation Playground - NeonFolio | Mehdi Ahmed Yacine</title>
        <meta name="description" content="Explore cutting-edge experiments, beta projects, and emerging technology implementations. A showcase of innovation and forward-thinking development." />
        <meta name="keywords" content="innovation, experiments, beta projects, emerging technology, AI, WebAssembly, quantum computing, AR/VR" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
              <Icon name="Zap" size={16} />
              <span>Innovation Lab</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Innovation
              <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Playground
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Where cutting-edge ideas meet practical implementation. Explore experimental projects, 
              emerging technologies, and innovative solutions that push the boundaries of web development.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection('radar')}
                iconName="Radar"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow"
              >
                Explore Technologies
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('beta')}
                iconName="Flask"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                View Beta Projects
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats?.map((stat, index) => (
              <div
                key={stat?.label}
                className={`bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 ${
                  isVisible?.overview ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon name={stat?.icon} size={24} className={stat?.color} />
                  <span className={`text-2xl font-bold ${stat?.color}`}>
                    {stat?.value}
                  </span>
                </div>
                <h3 className="font-medium text-foreground">{stat?.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Navigation */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex space-x-1 py-4 overflow-x-auto">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                  activeSection === section?.id
                    ? 'bg-primary/10 text-primary border border-primary/30' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span>{section?.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      {/* Overview Section */}
      <section id="overview" className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Innovation Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current research and development initiatives exploring the future of web technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovations?.map((innovation, index) => (
              <div
                key={innovation?.title}
                className={`bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group ${
                  isVisible?.overview ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Icon name={innovation?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {innovation?.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/30">
                        {innovation?.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{innovation?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Radar Section */}
      <section id="radar" className="py-16 px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <TechnologyRadar />
        </div>
      </section>
      {/* Beta Projects Section */}
      <section id="beta" className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BetaProjects />
        </div>
      </section>
      {/* Interactive Demos Section */}
      <section id="demos" className="py-16 px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <InteractiveDemo />
        </div>
      </section>
      {/* Code Experiments Section */}
      <section id="experiments" className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CodeExperiments />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's collaborate on innovative projects that push technological boundaries 
            and create meaningful impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow"
            >
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Github"
              iconPosition="left"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Explore Code
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date()?.getFullYear()} Mehdi Ahmed Yacine. Innovation never stops.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InnovationPlayground;