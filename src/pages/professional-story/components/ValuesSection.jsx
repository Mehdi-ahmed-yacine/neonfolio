import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      icon: "Shield",
      title: "Integrity",
      description: "Honest communication, transparent processes, and ethical practices in every project. I believe trust is the foundation of all successful partnerships.",
      principles: [
        "Clear project timelines and expectations",
        "Honest assessment of technical challenges",
        "Transparent pricing and billing",
        "Ethical use of data and privacy protection"
      ]
    },
    {
      icon: "Zap",
      title: "Excellence",
      description: "Commitment to delivering exceptional quality that exceeds expectations. Every line of code is crafted with precision and purpose.",
      principles: [
        "Rigorous testing and quality assurance",
        "Performance optimization as standard",
        "Clean, maintainable code architecture",
        "Continuous improvement and refinement"
      ]
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Great products are built by great teams. I foster open communication and shared ownership of success across all stakeholders.",
      principles: [
        "Active listening and empathy",
        "Knowledge sharing and mentorship",
        "Cross-functional team integration",
        "Constructive feedback and iteration"
      ]
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Embracing new technologies and creative solutions to solve complex problems. Innovation happens at the intersection of curiosity and expertise.",
      principles: [
        "Exploring emerging technologies",
        "Creative problem-solving approaches",
        "Experimentation and rapid prototyping",
        "Learning from failure and iteration"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6">
            <Icon name="Compass" size={16} className="text-warning" />
            <span className="text-sm font-medium text-warning font-code">Core Values</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Principles That
            <span className="block text-transparent bg-gradient-to-r from-warning to-primary bg-clip-text">
              Guide My Work
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Values are not just words on a wall—they're the compass that guides every decision, every line of code, and every client interaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {values?.map((value, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl glass-effect border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-elevation-card">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={value?.icon} size={32} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {value?.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {value?.description}
                  </p>
                  
                  {/* Principles */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      In Practice
                    </h4>
                    <ul className="space-y-2">
                      {value?.principles?.map((principle, principleIndex) => (
                        <li key={principleIndex} className="flex items-start space-x-3">
                          <Icon name="ArrowRight" size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto glass-effect rounded-3xl p-8 lg:p-12 border border-primary/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's combine your vision with my expertise to create digital experiences that make a real impact. Every great project starts with a conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 shadow-glow-sm hover:shadow-glow flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Start a Conversation</span>
              </button>
              
              <button className="px-8 py-4 border border-primary/30 text-primary hover:bg-primary/10 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Schedule a Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;