import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('react-counter');
  const [isRunning, setIsRunning] = useState(false);
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [calcValue, setCalcValue] = useState('');
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const demos = [
    {
      id: 'react-counter',
      title: 'React Counter',
      description: 'Simple state management with useState hook',
      icon: 'Plus',
      complexity: 'Basic'
    },
    {
      id: 'css-animation',
      title: 'CSS Animation',
      description: 'Basic CSS transitions and animations',
      icon: 'Palette',
      complexity: 'Basic'
    },
    {
      id: 'simple-form',
      title: 'Form Handling',
      description: 'React form with controlled inputs',
      icon: 'FileText',
      complexity: 'Basic'
    },
    {
      id: 'basic-calculator',
      title: 'Basic Calculator',
      description: 'Simple math operations with React',
      icon: 'Calculator',
      complexity: 'Basic'
    }
  ];

  // React Counter Demo
  const CounterDemo = () => (
    <div className="text-center p-8">
      <div className="text-6xl font-bold text-primary mb-6">{counter}</div>
      <div className="flex justify-center space-x-4">
        <Button
          onClick={() => setCounter(prev => prev - 1)}
          variant="outline"
          size="lg"
          iconName="Minus"
          iconPosition="left"
        >
          Decrease
        </Button>
        <Button
          onClick={() => setCounter(0)}
          variant="outline"
          size="lg"
          iconName="RotateCcw"
          iconPosition="left"
        >
          Reset
        </Button>
        <Button
          onClick={() => setCounter(prev => prev + 1)}
          variant="outline"
          size="lg"
          iconName="Plus"
          iconPosition="left"
        >
          Increase
        </Button>
      </div>
      <div className="mt-6 text-muted-foreground">
        <p>This demonstrates React's useState hook for managing component state.</p>
        <p className="text-sm mt-2">Click the buttons to see the counter change in real-time!</p>
      </div>
    </div>
  );

  // CSS Animation Demo
  const CSSAnimationDemo = () => (
    <div className="text-center p-8">
      <div className="flex justify-center space-x-8 mb-8">
        <div className={`w-20 h-20 bg-primary rounded-lg transition-all duration-500 ${isRunning ? 'animate-bounce' : ''}`}>
          <div className="flex items-center justify-center h-full text-white font-bold">Bounce</div>
        </div>
        <div className={`w-20 h-20 bg-accent rounded-lg transition-all duration-500 ${isRunning ? 'animate-pulse' : ''}`}>
          <div className="flex items-center justify-center h-full text-white font-bold">Pulse</div>
        </div>
        <div className={`w-20 h-20 bg-warning rounded-lg transition-all duration-500 ${isRunning ? 'animate-spin' : ''}`}>
          <div className="flex items-center justify-center h-full text-white font-bold">Spin</div>
        </div>
      </div>
      <div className="mb-6">
        <Button
          onClick={() => setIsRunning(!isRunning)}
          variant={isRunning ? "destructive" : "default"}
          size="lg"
          iconName={isRunning ? "Pause" : "Play"}
          iconPosition="left"
        >
          {isRunning ? 'Stop' : 'Start'} Animations
        </Button>
      </div>
      <div className="text-muted-foreground">
        <p>These are basic CSS animations using Tailwind CSS classes.</p>
        <p className="text-sm mt-2">Click Start to see the animations in action!</p>
      </div>
    </div>
  );

  // Simple Form Demo
  const FormDemo = () => (
    <div className="p-8 max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your email"
          />
        </div>
        <Button
          onClick={() => alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`)}
          className="w-full"
          iconName="Send"
          iconPosition="left"
        >
          Submit Form
        </Button>
      </div>
      
      <div className="mt-6 p-4 bg-muted/20 rounded-lg">
        <h4 className="font-medium text-foreground mb-2">Form Data (Live Preview):</h4>
        <pre className="text-sm text-muted-foreground">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
      
      <div className="mt-4 text-center text-muted-foreground text-sm">
        <p>This shows controlled inputs and form state management in React.</p>
      </div>
    </div>
  );

  // Basic Calculator Demo
  const CalculatorDemo = () => {
    const [result, setResult] = useState('');
    
    const handleNumber = (num) => {
      setCalcValue(prev => prev + num);
    };
    
    const handleOperator = (op) => {
      setCalcValue(prev => prev + ' ' + op + ' ');
    };
    
    const calculate = () => {
      try {
        const calculated = eval(calcValue);
        setResult(calculated);
      } catch (error) {
        setResult('Error');
      }
    };
    
    const clear = () => {
      setCalcValue('');
      setResult('');
    };
    
    return (
      <div className="p-8 max-w-sm mx-auto">
        <div className="bg-muted/20 p-4 rounded-lg mb-4">
          <div className="text-right text-2xl font-mono text-foreground mb-2">
            {calcValue || '0'}
          </div>
          <div className="text-right text-lg font-mono text-muted-foreground">
            {result || '='}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === '=') calculate();
                else if (['+', '-', '*', '/'].includes(item)) handleOperator(item);
                else handleNumber(item);
              }}
              className={`p-4 text-lg font-medium rounded-lg transition-colors ${
                item === '='
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : ['+', '-', '*', '/'].includes(item)
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'bg-card text-foreground hover:bg-muted/50 border border-border'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Button onClick={clear} variant="outline" size="sm">
            Clear
          </Button>
        </div>
        
        <div className="mt-4 text-center text-muted-foreground text-sm">
          <p>A simple calculator using React state and basic JavaScript eval().</p>
        </div>
      </div>
    );
  };

  const renderDemo = () => {
    switch (activeDemo) {
      case 'react-counter':
        return <CounterDemo />;
      case 'css-animation':
        return <CSSAnimationDemo />;
      case 'simple-form':
        return <FormDemo />;
      case 'basic-calculator':
        return <CalculatorDemo />;
      default:
        return <CounterDemo />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Interactive Demonstrations</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Simple, beginner-friendly demos showing basic React concepts. 
          Each demo demonstrates fundamental web development skills you can learn and build upon.
        </p>
      </div>
      
      {/* Demo Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {demos?.map((demo) => (
          <button
            key={demo?.id}
            onClick={() => setActiveDemo(demo?.id)}
            className={`p-4 rounded-xl border transition-all duration-300 text-left ${
              activeDemo === demo?.id
                ? 'bg-primary/10 border-primary/30 text-primary' 
                : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
            }`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <Icon name={demo?.icon} size={20} />
              <span className="font-medium">{demo?.title}</span>
            </div>
            <p className="text-sm opacity-80 mb-2">{demo?.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs px-2 py-1 bg-muted/20 rounded">
                {demo?.complexity}
              </span>
              {activeDemo === demo?.id && (
                <Icon name="Check" size={14} className="text-primary" />
              )}
            </div>
          </button>
        ))}
      </div>
      
      {/* Demo Display */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <h4 className="font-semibold text-foreground">
            {demos?.find(d => d?.id === activeDemo)?.title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            {demos?.find(d => d?.id === activeDemo)?.description}
          </p>
        </div>
        
        <div className="min-h-96">
          {renderDemo()}
        </div>
      </div>
      
      {/* Demo Information */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Info" size={20} className="text-primary" />
            <h4 className="font-semibold text-foreground">What You'll Learn</h4>
          </div>
          <p className="text-muted-foreground text-sm">
            {activeDemo === 'react-counter' && 'React hooks, state management, event handling'}
            {activeDemo === 'css-animation' && ['CSS Animations', 'Tailwind CSS', 'React State']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'simple-form' && ['Form Handling', 'Controlled Inputs', 'State Updates']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'basic-calculator' && ['State Management', 'Event Handling', 'Basic Logic']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Code2" size={20} className="text-accent" />
            <h4 className="font-semibold text-foreground">Technologies Used</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeDemo === 'react-counter' && ['React Hooks', 'useState', 'Event Handling']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'css-animation' && ['CSS Animations', 'Tailwind CSS', 'React State']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'simple-form' && ['Form Handling', 'Controlled Inputs', 'State Updates']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'basic-calculator' && ['State Management', 'Event Handling', 'Basic Logic']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Lightbulb" size={20} className="text-warning" />
            <h4 className="font-semibold text-foreground">Next Steps</h4>
          </div>
          <p className="text-muted-foreground text-sm">
            Try modifying these demos! Change colors, add new features, or combine concepts from different demos to create something new.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;