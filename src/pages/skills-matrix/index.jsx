import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

import SkillDetailPanel from './components/SkillDetailPanel';
import CategoryFilter from './components/CategoryFilter';
import LearningTimeline from './components/LearningTimeline';
// GitHub stats section removed per request
import SkillsHexGrid from './components/SkillsHexGrid';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('matrix');

  // Mock skills data
  const skillsData = [
    {
      id: 1,
      name: "React",
      category: "frontend",
      proficiency: "Expert",
      experience: 4,
      icon: "Code2",
      projectCount: 15,
      isNew: false,
      description: `Advanced React development with deep understanding of hooks, context, performance optimization, and modern patterns. Experienced in building scalable applications with complex state management and real-time features.`,
      recentProjects: [
        { name: "NeonFolio Portfolio", year: "2025" },
        { name: "E-commerce Dashboard", year: "2024" },
        { name: "Real-time Chat App", year: "2024" }
      ],
      learningPath: [
        { title: "Started with React basics", date: "2021", completed: true },
        { title: "Mastered Hooks & Context", date: "2022", completed: true },
        { title: "Advanced patterns & optimization", date: "2023", completed: true },
        { title: "React Server Components", date: "2024", completed: true }
      ],
      certifications: [
        { name: "React Developer Certification", issuer: "Meta", date: "2023" }
      ],
      lastUpdated: "Jan 2025"
    },
    {
      id: 2,
      name: "TypeScript",
      category: "frontend",
      proficiency: "Advanced",
      experience: 3,
      icon: "FileCode",
      projectCount: 12,
      isNew: false,
      description: `Strong TypeScript skills with experience in complex type definitions, generics, and advanced patterns. Proficient in migrating JavaScript codebases to TypeScript and implementing type-safe architectures.`,
      recentProjects: [
        { name: "Type-safe API Client", year: "2024" },
        { name: "Component Library", year: "2024" },
        { name: "Backend Services", year: "2023" }
      ],
      learningPath: [
        { title: "Basic TypeScript syntax", date: "2022", completed: true },
        { title: "Advanced types & generics", date: "2023", completed: true },
        { title: "Decorators & metadata", date: "2024", completed: true }
      ],
      lastUpdated: "Dec 2024"
    },
    {
      id: 3,
      name: "Node.js",
      category: "backend",
      proficiency: "Advanced",
      experience: 3,
      icon: "Server",
      projectCount: 10,
      isNew: false,
      description: `Experienced in building scalable backend services with Node.js, including RESTful APIs, GraphQL endpoints, and real-time applications. Proficient with Express.js, Fastify, and various middleware patterns.`,
      recentProjects: [
        { name: "Microservices Architecture", year: "2024" },
        { name: "Real-time API Gateway", year: "2024" },
        { name: "Authentication Service", year: "2023" }
      ],
      learningPath: [
        { title: "Node.js fundamentals", date: "2022", completed: true },
        { title: "Express.js mastery", date: "2022", completed: true },
        { title: "Microservices patterns", date: "2023", completed: true },
        { title: "Performance optimization", date: "2024", completed: true }
      ],
      lastUpdated: "Nov 2024"
    },
    {
      id: 4,
      name: "PostgreSQL",
      category: "database",
      proficiency: "Advanced",
      experience: 3,
      icon: "Database",
      projectCount: 8,
      isNew: false,
      description: `Proficient in PostgreSQL database design, optimization, and administration. Experience with complex queries, indexing strategies, and database performance tuning for high-traffic applications.`,
      recentProjects: [
        { name: "Analytics Database", year: "2024" },
        { name: "User Management System", year: "2024" },
        { name: "E-commerce Backend", year: "2023" }
      ],
      learningPath: [
        { title: "SQL fundamentals", date: "2022", completed: true },
        { title: "Advanced queries & joins", date: "2022", completed: true },
        { title: "Performance optimization", date: "2023", completed: true },
        { title: "Database administration", date: "2024", completed: true }
      ],
      lastUpdated: "Oct 2024"
    },
    {
      id: 6,
      name: "Figma",
      category: "design",
      proficiency: "Intermediate",
      experience: 2,
      icon: "Palette",
      projectCount: 8,
      isNew: false,
      description: `Competent in UI/UX design using Figma, including component systems, prototyping, and design handoff. Experience in creating design systems and collaborating with development teams.`,
      recentProjects: [
        { name: "Portfolio Design System", year: "2024" },
        { name: "Mobile App Prototype", year: "2024" },
        { name: "Dashboard UI Kit", year: "2023" }
      ],
      learningPath: [
        { title: "Figma basics", date: "2023", completed: true },
        { title: "Component systems", date: "2023", completed: true },
        { title: "Advanced prototyping", date: "2024", completed: true }
      ],
      lastUpdated: "Aug 2024"
    },
    {
      id: 7,
      name: "Next.js",
      category: "frontend",
      proficiency: "Advanced",
      experience: 2,
      icon: "Zap",
      projectCount: 7,
      isNew: false,
      description: `Proficient in Next.js framework with experience in SSR, SSG, API routes, and the new App Router. Skilled in performance optimization and SEO implementation for production applications.`,
      recentProjects: [
        { name: "E-commerce Platform", year: "2024" },
        { name: "Blog Platform", year: "2024" },
        { name: "Corporate Website", year: "2023" }
      ],
      learningPath: [
        { title: "Next.js fundamentals", date: "2023", completed: true },
        { title: "App Router mastery", date: "2024", completed: true },
        { title: "Performance optimization", date: "2024", completed: true }
      ],
      lastUpdated: "Dec 2024"
    },
    {
      id: 8,
      name: "Python",
      category: "backend",
      proficiency: "Intermediate",
      experience: 2,
      icon: "Code",
      projectCount: 5,
      isNew: false,
      description: `Solid Python programming skills with experience in web development using FastAPI and Django. Also familiar with data analysis libraries and automation scripting.`,
      recentProjects: [
        { name: "API Automation Scripts", year: "2024" },
        { name: "Data Processing Pipeline", year: "2024" },
        { name: "FastAPI Service", year: "2023" }
      ],
      learningPath: [
        { title: "Python fundamentals", date: "2023", completed: true },
        { title: "Web frameworks", date: "2023", completed: true },
        { title: "Data science libraries", date: "2024", completed: true }
      ],
      lastUpdated: "Nov 2024"
    },
    {
      id: 10,
      name: "TensorFlow.js",
      category: "ai",
      proficiency: "Beginner",
      experience: 1,
      icon: "Brain",
      projectCount: 2,
      isNew: true,
      description: `Currently exploring machine learning in the browser with TensorFlow.js. Working on integrating AI capabilities into web applications and learning model deployment strategies.`,
      recentProjects: [
        { name: "Image Classification Demo", year: "2024" },
        { name: "Text Analysis Tool", year: "2024" }
      ],
      learningPath: [
        { title: "ML fundamentals", date: "2024", completed: true },
        { title: "TensorFlow.js basics", date: "2024", completed: true },
        { title: "Model deployment", date: "2025", completed: false },
        { title: "Advanced ML patterns", date: "2025", completed: false }
      ],
      lastUpdated: "Jan 2025"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: 'Grid3x3', count: skillsData?.length },
    { id: 'frontend', name: 'Frontend', icon: 'Monitor', count: skillsData?.filter(s => s?.category === 'frontend')?.length },
    { id: 'backend', name: 'Backend', icon: 'Server', count: skillsData?.filter(s => s?.category === 'backend')?.length },
    { id: 'database', name: 'Database', icon: 'Database', count: skillsData?.filter(s => s?.category === 'database')?.length },
    { id: 'devops', name: 'DevOps', icon: 'Settings', count: skillsData?.filter(s => s?.category === 'devops')?.length },
    { id: 'design', name: 'Design', icon: 'Palette', count: skillsData?.filter(s => s?.category === 'design')?.length },
    { id: 'ai', name: 'AI/ML', icon: 'Brain', count: skillsData?.filter(s => s?.category === 'ai')?.length }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData?.filter(skill => skill?.category === activeCategory);

  const tabs = [
    { id: 'matrix', name: 'Skills Matrix', icon: 'Grid3x3' },
    { id: 'timeline', name: 'Learning Journey', icon: 'TrendingUp' }
  ];

  useEffect(() => {
    // Close skill detail panel when category changes
    setSelectedSkill(null);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Technical Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Matrix</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A dynamic visualization of my technical expertise, continuous learning journey, and real-time development activity. 
              Explore proficiency levels, project experience, and growth trajectory across the full-stack ecosystem.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{skillsData?.length}</div>
              <div className="text-sm text-muted-foreground">Total Skills</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-accent mb-2">
                {skillsData?.filter(s => s?.proficiency === 'Expert')?.length}
              </div>
              <div className="text-sm text-muted-foreground">Expert Level</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-warning/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-warning mb-2">3</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-success/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-success mb-2">
                {skillsData?.filter(s => s?.isNew)?.length}
              </div>
              <div className="text-sm text-muted-foreground">Learning Now</div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex bg-muted/30 rounded-xl p-1">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground shadow-glow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Content Sections */}
      <div className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'matrix' && (
            <div className="space-y-16">
              {/* Category Filter */}
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {/* Skills Grid */}
              <div className="relative">
                <SkillsHexGrid
                  skills={filteredSkills}
                  onSkillClick={setSelectedSkill}
                  activeSkill={selectedSkill}
                />

                {/* Legend */}
                <div className="flex justify-center mt-12">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-foreground mb-4 text-center">Proficiency Levels</h3>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <span className="text-xs text-muted-foreground">Expert (90%+)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                        <span className="text-xs text-muted-foreground">Advanced (70%+)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-warning rounded-full" />
                        <span className="text-xs text-muted-foreground">Intermediate (50%+)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-muted-foreground rounded-full" />
                        <span className="text-xs text-muted-foreground">Beginner (30%+)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && <LearningTimeline />}
        </div>
      </div>
      {/* Skill Detail Panel */}
      {selectedSkill && (
        <SkillDetailPanel
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
      {/* Call to Action */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Rocket" size={32} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's leverage these skills to create exceptional digital experiences. Whether it's a complex web application or a simple landing page, I'm ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                onClick={() => window.open('/assets/images/Mehdi Ahmed Yacine.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsMatrix;