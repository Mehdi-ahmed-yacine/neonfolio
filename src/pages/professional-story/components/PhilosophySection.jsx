import React from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const principles = [
    {
      icon: "Target",
      title: "Problem-First Thinking",
      description: "Every line of code serves a purpose. I start with understanding the problem deeply before crafting the solution, ensuring that technology serves human needs, not the other way around."
    },
    {
      icon: "Layers",
      title: "Elegant Simplicity",
      description: "Complexity is easy; simplicity is hard. I believe in creating solutions that are powerful yet intuitive, sophisticated yet accessible, robust yet maintainable."
    },
    {
      icon: "Infinity",
      title: "Continuous Evolution",
      description: "Technology never stops evolving, and neither do I. Every project is an opportunity to learn, every challenge a chance to grow, every solution a step toward mastery."
    },
    {
      icon: "Users",
      title: "Human-Centered Design",
      description: "Behind every click, tap, and interaction is a human being with goals, frustrations, and dreams. I craft experiences that respect and empower users at every touchpoint."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="Heart" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary font-code">My Philosophy</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The Craftsman's
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Mindset
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My approach to development goes beyond writing code. It's about understanding the deeper purpose behind every project and crafting solutions that make a meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {principles?.map((principle, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass-effect border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-elevation-card"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={principle?.icon} size={28} className="text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {principle?.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {principle?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-serif">"</div>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed px-8">
              Code is poetry written in logic. Every function is a verse, every algorithm a stanza, and every application a complete work of art that solves real problems.
            </blockquote>
            
            <div className="mt-8 flex items-center justify-center space-x-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <span className="text-primary font-code text-sm">Mehdi Ahmed Yacine</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;