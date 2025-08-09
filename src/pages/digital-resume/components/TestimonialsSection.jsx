import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const getRoleIcon = (role) => {
    const iconMap = {
      'CEO': 'Crown',
      'CTO': 'Cpu',
      'Manager': 'Users',
      'Lead': 'Star',
      'Director': 'Building2',
      'Client': 'Handshake'
    };
    return iconMap?.[role] || 'User';
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-elevation-card border border-border/50">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-success" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Testimonials & References</h2>
          <p className="text-muted-foreground">What colleagues and clients say</p>
        </div>
      </div>
      {/* Featured Testimonial */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex items-start space-x-6">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/30">
                <Image
                  src={testimonials?.[currentTestimonial]?.avatar}
                  alt={testimonials?.[currentTestimonial]?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Quote" size={12} className="text-primary-foreground" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                "{testimonials?.[currentTestimonial]?.content}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="font-bold text-foreground">{testimonials?.[currentTestimonial]?.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name={getRoleIcon(testimonials?.[currentTestimonial]?.role)} size={14} className="text-primary" />
                      <span>{testimonials?.[currentTestimonial]?.role}</span>
                      <span>•</span>
                      <span>{testimonials?.[currentTestimonial]?.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={`${i < testimonials?.[currentTestimonial]?.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {testimonials?.[currentTestimonial]?.rating}/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-card border-primary/30 hover:bg-primary/10"
          >
            <Icon name="ChevronLeft" size={20} className="text-primary" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-card border-primary/30 hover:bg-primary/10"
          >
            <Icon name="ChevronRight" size={20} className="text-primary" />
          </Button>
        </div>
      </div>
      {/* Testimonial Indicators */}
      <div className="flex justify-center space-x-2 mb-8">
        {testimonials?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial
                ? 'bg-primary shadow-glow-primary'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
      {/* All Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials?.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-muted/20 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
              index === currentTestimonial
                ? 'ring-2 ring-primary/30 bg-primary/5' :'hover:bg-muted/30'
            }`}
            onClick={() => setCurrentTestimonial(index)}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-border/30 flex-shrink-0">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-1">{testimonial?.name}</h4>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Icon name={getRoleIcon(testimonial?.role)} size={12} className="text-primary" />
                  <span>{testimonial?.role}</span>
                </div>
                <p className="text-xs text-muted-foreground">{testimonial?.company}</p>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className={`${i < testimonial?.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
            </div>

            <blockquote className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              "{testimonial?.content}"
            </blockquote>

            {testimonial?.project && (
              <div className="mt-3 pt-3 border-t border-border/30">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="Briefcase" size={12} className="text-accent" />
                  <span>Project: {testimonial?.project}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Contact References */}
      <div className="mt-8 pt-8 border-t border-border/30">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">Professional References</h3>
          <p className="text-muted-foreground mb-6">
            Additional references available upon request with prior consent
          </p>
          <Button
            variant="outline"
            iconName="Mail"
            iconPosition="left"
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Request References
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;