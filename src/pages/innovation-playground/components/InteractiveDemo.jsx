import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('neural-network');
  const [isRunning, setIsRunning] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const demos = [
    {
      id: 'neural-network',
      title: 'Neural Network Visualization',
      description: 'Interactive neural network with real-time learning simulation',
      icon: 'Brain',
      complexity: 'Advanced'
    },
    {
      id: 'particle-system',
      title: 'Particle Physics Engine',
      description: 'WebGL-powered particle system with collision detection',
      icon: 'Zap',
      complexity: 'Intermediate'
    },
    {
      id: 'code-morphing',
      title: 'Code Morphing Animation',
      description: 'Dynamic code transformation with syntax highlighting',
      icon: 'Code2',
      complexity: 'Basic'
    },
    {
      id: 'data-flow',
      title: 'Real-time Data Flow',
      description: 'Live data visualization with WebSocket integration',
      icon: 'Activity',
      complexity: 'Advanced'
    }
  ];

  // Neural Network Demo
  const drawNeuralNetwork = (ctx, time) => {
    const width = ctx?.canvas?.width;
    const height = ctx?.canvas?.height;
    
    ctx?.clearRect(0, 0, width, height);
    
    // Network layers
    const layers = [4, 6, 6, 3];
    const layerSpacing = width / (layers?.length + 1);
    
    layers?.forEach((neurons, layerIndex) => {
      const x = layerSpacing * (layerIndex + 1);
      const neuronSpacing = height / (neurons + 1);
      
      for (let i = 0; i < neurons; i++) {
        const y = neuronSpacing * (i + 1);
        
        // Draw connections to next layer
        if (layerIndex < layers?.length - 1) {
          const nextLayerNeurons = layers?.[layerIndex + 1];
          const nextX = layerSpacing * (layerIndex + 2);
          const nextNeuronSpacing = height / (nextLayerNeurons + 1);
          
          for (let j = 0; j < nextLayerNeurons; j++) {
            const nextY = nextNeuronSpacing * (j + 1);
            const activity = Math.sin(time * 0.01 + i + j) * 0.5 + 0.5;
            
            ctx.strokeStyle = `rgba(0, 255, 136, ${activity * 0.8})`;
            ctx.lineWidth = activity * 3;
            ctx?.beginPath();
            ctx?.moveTo(x, y);
            ctx?.lineTo(nextX, nextY);
            ctx?.stroke();
          }
        }
        
        // Draw neuron
        const activity = Math.sin(time * 0.02 + i + layerIndex) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(0, 255, 136, ${activity})`;
        ctx?.beginPath();
        ctx?.arc(x, y, 8 + activity * 4, 0, Math.PI * 2);
        ctx?.fill();
        
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 2;
        ctx?.stroke();
      }
    });
  };

  // Particle System Demo
  const drawParticleSystem = (ctx, time) => {
    const width = ctx?.canvas?.width;
    const height = ctx?.canvas?.height;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx?.fillRect(0, 0, width, height);
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2 + time * 0.01;
      const radius = 100 + Math.sin(time * 0.005 + i) * 50;
      const x = width / 2 + Math.cos(angle) * radius;
      const y = height / 2 + Math.sin(angle) * radius;
      
      const hue = (time * 0.1 + i * 10) % 360;
      ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
      
      ctx?.beginPath();
      ctx?.arc(x, y, 3, 0, Math.PI * 2);
      ctx?.fill();
      
      // Trail effect
      ctx.strokeStyle = `hsla(${hue}, 70%, 60%, 0.3)`;
      ctx.lineWidth = 1;
      ctx?.beginPath();
      ctx?.moveTo(x, y);
      ctx?.lineTo(
        width / 2 + Math.cos(angle - 0.1) * (radius - 10),
        height / 2 + Math.sin(angle - 0.1) * (radius - 10)
      );
      ctx?.stroke();
    }
  };

  // Code Morphing Demo
  const drawCodeMorphing = (ctx, time) => {
    const width = ctx?.canvas?.width;
    const height = ctx?.canvas?.height;
    
    ctx?.clearRect(0, 0, width, height);
    
    const codeLines = [
      'const neural = new NeuralNetwork();',
      'neural.addLayer(128, "relu");',
      'neural.addLayer(64, "sigmoid");',
      'neural.compile("adam", "mse");',
      'await neural.train(dataset);'
    ];
    
    ctx.font = '16px "Fira Code", monospace';
    ctx.textAlign = 'left';
    
    codeLines?.forEach((line, index) => {
      const y = 50 + index * 40;
      const chars = line?.split('');
      
      chars?.forEach((char, charIndex) => {
        const x = 20 + charIndex * 10;
        const wave = Math.sin(time * 0.01 + charIndex * 0.1 + index) * 10;
        const alpha = Math.sin(time * 0.005 + charIndex * 0.05) * 0.3 + 0.7;
        
        // Syntax highlighting colors
        let color = '#ffffff';
        if (char === '(' || char === ')' || char === '{' || char === '}') color = '#00d4ff';
        if (char === '"' || char === "'") color = '#00ff88';
        if (/[0-9]/?.test(char)) color = '#ffb800';
        
        ctx.fillStyle = `${color}${Math.floor(alpha * 255)?.toString(16)?.padStart(2, '0')}`;
        ctx?.fillText(char, x, y + wave);
      });
    });
  };

  // Data Flow Demo
  const drawDataFlow = (ctx, time) => {
    const width = ctx?.canvas?.width;
    const height = ctx?.canvas?.height;
    
    ctx?.clearRect(0, 0, width, height);
    
    // Draw data nodes
    const nodes = [
      { x: 100, y: height / 2, label: 'Input' },
      { x: width / 2, y: 100, label: 'Process' },
      { x: width / 2, y: height - 100, label: 'Transform' },
      { x: width - 100, y: height / 2, label: 'Output' }
    ];
    
    // Draw connections with flowing data
    const connections = [
      [0, 1], [0, 2], [1, 3], [2, 3]
    ];
    
    connections?.forEach(([from, to]) => {
      const fromNode = nodes?.[from];
      const toNode = nodes?.[to];
      
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx?.beginPath();
      ctx?.moveTo(fromNode?.x, fromNode?.y);
      ctx?.lineTo(toNode?.x, toNode?.y);
      ctx?.stroke();
      
      // Flowing data points
      for (let i = 0; i < 3; i++) {
        const progress = ((time * 0.01 + i * 0.3) % 1);
        const x = fromNode?.x + (toNode?.x - fromNode?.x) * progress;
        const y = fromNode?.y + (toNode?.y - fromNode?.y) * progress;
        
        ctx.fillStyle = '#00d4ff';
        ctx?.beginPath();
        ctx?.arc(x, y, 4, 0, Math.PI * 2);
        ctx?.fill();
      }
    });
    
    // Draw nodes
    nodes?.forEach((node, index) => {
      const pulse = Math.sin(time * 0.02 + index) * 0.3 + 0.7;
      
      ctx.fillStyle = `rgba(0, 255, 136, ${pulse})`;
      ctx?.beginPath();
      ctx?.arc(node?.x, node?.y, 20, 0, Math.PI * 2);
      ctx?.fill();
      
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx?.stroke();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Inter';
      ctx.textAlign = 'center';
      ctx?.fillText(node?.label, node?.x, node?.y - 30);
    });
  };

  const animate = (timestamp) => {
    const canvas = canvasRef?.current;
    if (!canvas) return;
    
    const ctx = canvas?.getContext('2d');
    
    switch (activeDemo) {
      case 'neural-network':
        drawNeuralNetwork(ctx, timestamp);
        break;
      case 'particle-system':
        drawParticleSystem(ctx, timestamp);
        break;
      case 'code-morphing':
        drawCodeMorphing(ctx, timestamp);
        break;
      case 'data-flow':
        drawDataFlow(ctx, timestamp);
        break;
    }
    
    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef?.current) {
        cancelAnimationFrame(animationRef?.current);
      }
    }
    
    return () => {
      if (animationRef?.current) {
        cancelAnimationFrame(animationRef?.current);
      }
    };
  }, [isRunning, activeDemo]);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (canvas) {
      canvas.width = canvas?.offsetWidth;
      canvas.height = canvas?.offsetHeight;
    }
  }, [activeDemo]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    const canvas = canvasRef?.current;
    if (canvas) {
      const ctx = canvas?.getContext('2d');
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Interactive Demonstrations</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Live demonstrations of advanced web technologies and algorithms. 
          Each demo showcases different aspects of modern web development capabilities.
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
                ? 'bg-primary/10 border-primary/30 text-primary' :'bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
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
                <Icon name="Play" size={14} className="text-primary" />
              )}
            </div>
          </button>
        ))}
      </div>
      {/* Demo Canvas */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h4 className="font-semibold text-foreground">
              {demos?.find(d => d?.id === activeDemo)?.title}
            </h4>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-success animate-pulse' : 'bg-muted-foreground'}`}></div>
              <span className="text-sm text-muted-foreground">
                {isRunning ? 'Running' : 'Stopped'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleStart}
              disabled={isRunning}
              iconName="Play"
              iconPosition="left"
            >
              Start
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleStop}
              disabled={!isRunning}
              iconName="Pause"
              iconPosition="left"
            >
              Stop
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Reset
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="w-full h-96 bg-deep-focus"
            style={{ display: 'block' }}
          />
          
          {!isRunning && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="text-center">
                <Icon name="Play" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">Demo Ready</p>
                <p className="text-muted-foreground text-sm">Click Start to begin the demonstration</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Demo Information */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Info" size={20} className="text-primary" />
            <h4 className="font-semibold text-foreground">About This Demo</h4>
          </div>
          <p className="text-muted-foreground text-sm">
            {demos?.find(d => d?.id === activeDemo)?.description}
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Code2" size={20} className="text-accent" />
            <h4 className="font-semibold text-foreground">Technologies Used</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeDemo === 'neural-network' && ['Canvas API', 'Animation Frames', 'Mathematical Functions']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'particle-system' && ['WebGL', 'Physics Engine', 'Real-time Rendering']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'code-morphing' && ['Typography', 'Text Animation', 'Syntax Highlighting']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
            {activeDemo === 'data-flow' && ['Data Visualization', 'Real-time Updates', 'Node Graphs']?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Lightbulb" size={20} className="text-warning" />
            <h4 className="font-semibold text-foreground">Key Insights</h4>
          </div>
          <p className="text-muted-foreground text-sm">
            This demonstration showcases the potential of browser-based computing and real-time visualization capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;