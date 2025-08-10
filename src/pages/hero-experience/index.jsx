import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroBackground from './components/HeroBackground';
import HeroProfile from './components/HeroProfile';
import LiveCodeSnippet from './components/LiveCodeSnippet';
import HeroActions from './components/HeroActions';
import GitHubVisualization from './components/GitHubVisualization';
import ScrollIndicator from './components/ScrollIndicator';
import ContactSection from './components/ContactSection';

const HeroExperience = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements?.forEach(el => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Main Headline */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Available for Projects</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-3">
                    Digital Futures
                  </span>
                  <br />
                  Through Elegant Code
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Full-stack developer crafting innovative web experiences with modern technologies. 
                  Transforming complex problems into elegant, scalable solutions.
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['React', 'Node.js', 'Python', 'Django', 'TypeScript', 'AWS']?.map((tech, index) => (
                  <div
                    key={tech}
                    className="glass-effect rounded-lg px-4 py-2 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-4">
                <HeroActions />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/10">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-success">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Column - Profile */}
            <div className="flex justify-center lg:justify-end">
              <HeroProfile />
            </div>
          </div>
        </div>
      </section>
      {/* Live Code Section */}
      <section className="py-20 px-6 lg:px-8 reveal-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Code in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-3">
                Action
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch my development process in real-time. Clean, efficient, and well-documented code is my signature.
            </p>
          </div>
          
          <div className="flex justify-center">
            <LiveCodeSnippet />
          </div>
        </div>
      </section>
      {/* Development Activity section removed per request */}
      {/* Contact Section */}
      <ContactSection />
      {/* Scroll Indicator */}
      <ScrollIndicator />
      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 clip-hexagon bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-code">N</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">NeonFolio</p>
                <p className="text-xs text-muted-foreground">Digital Craftsman</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Mehdi Ahmed Yacine. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with React & passion for innovation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroExperience;