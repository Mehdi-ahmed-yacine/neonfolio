import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveCodeSnippet = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    {
      language: 'javascript',
      code: `const developer = {
  name: 'Mehdi Ahmed Yacine',
  role: 'Full Stack Developer',
  skills: ['React', 'Node.js', 'Python'],
  passion: 'Building Digital Futures',
  status: 'Available for Projects'
};

console.log(developer.passion);`
    },
    {
      language: 'python',
      code: `class DigitalCraftsman:
    def __init__(self):
        self.name = "Mehdi Ahmed Yacine"
        self.expertise = ["React", "Django", "AI/ML"]
        self.mission = "Elegant Code Solutions"
    
    def build_future(self):
        return "Innovation through Technology"`
    },
    {
      language: 'jsx',
      code: `const Portfolio = () => {
  const [innovation, setInnovation] = useState('unlimited');
  
  return (
    <div className="digital-future">
      <h1>Building Tomorrow's Web</h1>
      <TechStack frameworks={['React', 'Next.js']} />
      <Innovation level={innovation} />
    </div>
  );
};`
    }
  ];

  const currentSnippet = codeSnippets?.[currentIndex];

  useEffect(() => {
    if (!isTyping) return;

    const targetCode = currentSnippet?.code;
    
    if (displayedCode?.length < targetCode?.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(targetCode?.slice(0, displayedCode?.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      const pauseTimer = setTimeout(() => {
        setDisplayedCode('');
        setCurrentIndex((prev) => (prev + 1) % codeSnippets?.length);
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(pauseTimer);
    }
  }, [displayedCode, currentSnippet?.code, isTyping, currentIndex]);

  const getLanguageIcon = (language) => {
    switch (language) {
      case 'javascript': return 'Code2';
      case 'python': return 'FileCode';
      case 'jsx': return 'Component';
      default: return 'Code';
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/* Code Editor Window */}
      <div className="glass-effect rounded-xl border border-primary/20 overflow-hidden shadow-elevation-card">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-primary/10">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-error rounded-full" />
              <div className="w-3 h-3 bg-warning rounded-full" />
              <div className="w-3 h-3 bg-success rounded-full" />
            </div>
            <div className="flex items-center space-x-2">
              <Icon name={getLanguageIcon(currentSnippet?.language)} size={16} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {currentSnippet?.language}.{currentSnippet?.language === 'jsx' ? 'jsx' : currentSnippet?.language === 'python' ? 'py' : 'js'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded hover:bg-muted/20 transition-colors">
              <Icon name="Copy" size={14} className="text-muted-foreground hover:text-primary" />
            </button>
            <button className="p-1 rounded hover:bg-muted/20 transition-colors">
              <Icon name="Play" size={14} className="text-success hover:text-success/80" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 bg-deep-focus/50">
          <pre className="font-code text-sm leading-relaxed">
            <code className="text-foreground">
              {displayedCode}
              <span className="animate-pulse text-primary">|</span>
            </code>
          </pre>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-surface/30 border-t border-primary/10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs text-muted-foreground">Live Coding</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {displayedCode?.length} / {currentSnippet?.code?.length} chars
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={12} className="text-primary" />
            <span className="text-xs text-primary">Real-time</span>
          </div>
        </div>
      </div>
      {/* Language Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {codeSnippets?.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setDisplayedCode('');
              setIsTyping(true);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary shadow-glow-sm' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveCodeSnippet;