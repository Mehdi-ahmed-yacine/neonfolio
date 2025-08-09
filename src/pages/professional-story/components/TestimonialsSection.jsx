import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Mehdi's ability to translate complex business requirements into elegant technical solutions is remarkable. He delivered our e-commerce platform 2 weeks ahead of schedule with performance metrics that exceeded our expectations by 40%.`,
      rating: 5,
      project: "E-commerce Platform Redesign",
      metrics: "40% performance improvement, 2 weeks early delivery"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupLab Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with Mehdi was a game-changer for our startup. His full-stack expertise and attention to user experience helped us secure Series A funding. The investors were particularly impressed with the technical architecture and scalability.`,
      rating: 5,
      project: "MVP Development & Scaling",
      metrics: "Series A funding secured, 99.9% uptime achieved"
    },
    {
      name: "Emily Watson",
      role: "Senior Developer",
      company: "Digital Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Mehdi is not just a skilled developer but an excellent mentor. His code reviews are thorough and educational, and his approach to problem-solving has significantly improved our team's development practices.`,
      rating: 5,
      project: "Team Leadership & Mentoring",
      metrics: "3 junior developers mentored, 50% code quality improvement"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "HealthTech Pro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Mehdi transformed our healthcare platform with his innovative approach to real-time data visualization. The new dashboard reduced diagnosis time by 30% and received outstanding feedback from medical professionals.`,
      rating: 5,
      project: "Healthcare Dashboard Development",
      metrics: "30% faster diagnosis, 95% user satisfaction"
    },
    {
      name: "Lisa Thompson",
      role: "Design Director",
      company: "Creative Studios",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: `Mehdi bridges the gap between design and development beautifully. He understands the importance of user experience and implements designs with pixel-perfect precision while suggesting valuable improvements.`,
      rating: 5,
      project: "Design System Implementation",
      metrics: "100% design fidelity, 25% development time reduction"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <Icon name="MessageSquare" size={16} className="text-success" />
            <span className="text-sm font-medium text-success font-code">Client Voices</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What People
            <span className="block text-transparent bg-gradient-to-r from-success to-primary bg-clip-text">
              Say About Me
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The best measure of success is the impact we create for others. Here's what clients, colleagues, and collaborators have to say about working together.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeTestimonial === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="glass-effect rounded-3xl p-8 lg:p-12 border border-primary/10 shadow-elevation-card">
                  {/* Quote Icon */}
                  <div className="text-6xl text-primary/20 mb-6 font-serif">"</div>
                  
                  {/* Content */}
                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                    {testimonial?.content}
                  </blockquote>
                  
                  {/* Project Info */}
                  <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <div className="text-sm font-medium text-primary mb-1">Project</div>
                        <div className="text-foreground font-semibold">{testimonial?.project}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary mb-1">Results</div>
                        <div className="text-foreground font-semibold">{testimonial?.metrics}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={testimonial?.avatar}
                          alt={testimonial?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                        <Icon name="Check" size={12} className="text-card" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-lg">{testimonial?.name}</div>
                      <div className="text-muted-foreground">{testimonial?.role}</div>
                      <div className="text-primary font-medium">{testimonial?.company}</div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial?.rating)]?.map((_, starIndex) => (
                        <Icon key={starIndex} name="Star" size={16} className="text-warning fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-muted/30 hover:bg-primary/20 border border-muted hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
            >
              <Icon name="ChevronLeft" size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </button>
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-muted/30 hover:bg-primary/20 border border-muted hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
            >
              <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Happy Clients", icon: "Users" },
            { value: "98%", label: "Project Success Rate", icon: "TrendingUp" },
            { value: "24/7", label: "Support Availability", icon: "Clock" },
            { value: "5.0", label: "Average Rating", icon: "Star" }
          ]?.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={stat?.icon} size={24} className="text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat?.value}</div>
              <div className="text-muted-foreground text-sm">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;