import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const HeroActions = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    window.open('/assets/images/Mehdi Ahmed Yacine.pdf', '_blank');
  };

  const handleExploreProjects = () => {
    navigate('/project-showcase');
  };

  const handleViewSkills = () => {
    navigate('/skills-matrix');
  };

  const handleContactScroll = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl">
      {/* Primary CTA */}
      <Button
        variant="default"
        size="lg"
        onClick={handleExploreProjects}
        iconName="FolderOpen"
        iconPosition="left"
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
      >
        Explore Projects
      </Button>

      {/* Secondary CTA */}
      <Button
        variant="outline"
        size="lg"
        onClick={handleViewSkills}
        iconName="Code2"
        iconPosition="left"
        className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 w-full sm:w-auto"
      >
        View Skills Matrix
      </Button>

      {/* Tertiary CTA */}
      <Button
        variant="ghost"
        size="lg"
        onClick={handleDownloadResume}
        iconName="Download"
        iconPosition="left"
        className="text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all duration-300 w-full sm:w-auto"
      >
        Download Resume
      </Button>
    </div>
  );
};

export default HeroActions;