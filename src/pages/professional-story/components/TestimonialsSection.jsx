import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-muted/30 border border-border mb-6">
          <Icon name="MessageSquare" size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground font-code">Testimonials</span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">What People Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Coming soon.</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;