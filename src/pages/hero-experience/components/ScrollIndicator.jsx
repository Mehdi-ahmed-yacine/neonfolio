import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <button
        onClick={handleScrollDown}
        className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-all duration-300"
      >
        <span className="text-sm font-medium opacity-80 group-hover:opacity-100">
          Scroll to explore
        </span>
        
        <div className="relative">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </div>
        
        <Icon 
          name="ChevronDown" 
          size={20} 
          className="animate-bounce group-hover:text-primary transition-colors duration-300" 
        />
      </button>
    </div>
  );
};

export default ScrollIndicator;