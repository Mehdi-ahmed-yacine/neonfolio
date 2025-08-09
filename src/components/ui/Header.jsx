import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { path: '/hero-experience', label: 'Home', icon: 'Home' },
    { path: '/project-showcase', label: 'Projects', icon: 'FolderOpen' },
    { path: '/skills-matrix', label: 'Skills', icon: 'Code2' },
    { path: '/professional-story', label: 'About', icon: 'User' },
    { path: '/digital-resume', label: 'Resume', icon: 'FileText' }
  ];

  const secondaryItems = [
    { path: '/innovation-playground', label: 'Playground', icon: 'Zap' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    // Scroll to contact section or navigate to contact page
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-90 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-elevation-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('/hero-experience')}
          >
            <div className="relative">
              <div className="w-10 h-10 clip-hexagon bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-border-rotate">
                <span className="text-primary-foreground font-bold text-lg font-code">N</span>
              </div>
              <div className="absolute inset-0 clip-hexagon bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-glow"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                NeonFolio
              </h1>
              <p className="text-xs text-muted-foreground font-code">Digital Craftsman</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                  location?.pathname === item?.path
                    ? 'bg-primary/10 text-primary shadow-glow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className={`transition-colors duration-300 ${
                    location?.pathname === item?.path ? 'text-primary' : 'group-hover:text-primary'
                  }`}
                />
                <span>{item?.label}</span>
              </button>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} className="group-hover:text-primary transition-colors duration-300" />
                <span>More</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-xl shadow-elevation-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {secondaryItems?.map((item) => (
                    <button
                      key={item?.path}
                      onClick={() => handleNavigation(item?.path)}
                      className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-3 ${
                        location?.pathname === item?.path
                          ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleContactClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
            >
              Let's Talk
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleContactClick}
              iconName="Rocket"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-3 ${
                  location?.pathname === item?.path
                    ? 'bg-primary/10 text-primary shadow-glow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.label}</span>
              </button>
            ))}
            
            {secondaryItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-3 ${
                  location?.pathname === item?.path
                    ? 'bg-primary/10 text-primary shadow-glow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.label}</span>
              </button>
            ))}

            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={handleContactClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Let's Talk
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={handleContactClick}
                iconName="Rocket"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm"
              >
                Start Project
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;