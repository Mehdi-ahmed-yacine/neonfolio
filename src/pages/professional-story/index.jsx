import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TimelineSection from './components/TimelineSection';
import TestimonialsSection from './components/TestimonialsSection';
import ValuesSection from './components/ValuesSection';
import Icon from '../../components/AppIcon';


const ProfessionalStory = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Professional Story - Mehdi Ahmed Yacine | Digital Craftsman Journey</title>
        <meta name="description" content="Discover the journey of Mehdi Ahmed Yacine from curious student to seasoned full-stack developer. Learn about the philosophy, values, and experiences that shape my approach to digital craftsmanship." />
        <meta name="keywords" content="professional story, developer journey, full-stack developer, digital craftsman, Mehdi Ahmed Yacine, career timeline, developer philosophy" />
        <meta property="og:title" content="Professional Story - Mehdi Ahmed Yacine | Digital Craftsman Journey" />
        <meta property="og:description" content="Discover the journey of Mehdi Ahmed Yacine from curious student to seasoned full-stack developer. Learn about the philosophy, values, and experiences that shape my approach to digital craftsmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/professional-story" />
        <link rel="canonical" href="/professional-story" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <PhilosophySection />
          <TimelineSection />
          <TestimonialsSection />
          <ValuesSection />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 clip-hexagon bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg font-code">N</span>
                </div>
                <span className="text-xl font-bold text-foreground">NeonFolio</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Building digital futures through elegant code and innovative solutions.
              </p>
              
              <div className="flex justify-center space-x-6 mb-8">
                {[
                  { name: 'GitHub', icon: 'Github' },
                  { name: 'LinkedIn', icon: 'Linkedin' },
                  { name: 'Twitter', icon: 'Twitter' },
                  { name: 'Email', icon: 'Mail' }
                ]?.map((social) => (
                  <button
                    key={social?.name}
                    className="w-10 h-10 rounded-full bg-muted/30 hover:bg-primary/20 border border-muted hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
                  >
                    <Icon name={social?.icon} size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </button>
                ))}
              </div>
              
              <div className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Mehdi Ahmed Yacine. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProfessionalStory;