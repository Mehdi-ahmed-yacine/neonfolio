import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import FeaturedProject from './components/FeaturedProject';
import ProjectStats from './components/ProjectStats';

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Application",
      description: "A comprehensive e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      fullDescription: `A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing through Stripe integration, and comprehensive analytics dashboard. The application includes user authentication, product catalog management, shopping cart functionality, order tracking, and admin panel for business management.\n\nThe platform handles high-traffic scenarios with optimized database queries and implements advanced caching strategies for improved performance.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redis", "AWS S3"],
      status: "Live",
      featured: true,
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/mehdi/ecommerce-platform",
      metrics: [
        { value: "40%", label: "Performance Boost" },
        { value: "15K+", label: "Monthly Users" },
        { value: "99.9%", label: "Uptime" }
      ],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "Advanced analytics dashboard",
        "Multi-vendor support",
        "Mobile-responsive design",
        "SEO optimization"
      ],
      challenges: [
        {
          challenge: "Handling high-traffic scenarios during flash sales",
          solution: "Implemented Redis caching and database query optimization to handle 10x traffic spikes"
        },
        {
          challenge: "Complex inventory management across multiple vendors",
          solution: "Designed a microservices architecture with real-time synchronization"
        }
      ],
      duration: "4 months",
      teamSize: "Solo Project"
    },
    {
      id: 2,
      title: "Task Management SaaS",
      category: "SaaS Application",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      fullDescription: `A comprehensive task management SaaS application designed for modern teams. Built with React and Node.js, featuring real-time collaboration, advanced project tracking, and intelligent reporting systems.\n\nThe application includes features like drag-and-drop task boards, time tracking, team chat integration, file sharing, and customizable workflows that adapt to different team methodologies.`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker", "AWS", "TypeScript"],
      status: "Live",
      featured: false,
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/mehdi/task-manager",
      metrics: [
        { value: "50%", label: "Productivity Increase" },
        { value: "5K+", label: "Active Users" },
        { value: "4.8/5", label: "User Rating" }
      ],
      features: [
        "Real-time collaboration",
        "Drag-and-drop task boards",
        "Time tracking & reporting",
        "Team chat integration",
        "File sharing & storage",
        "Custom workflow automation"
      ],
      duration: "3 months",
      teamSize: "2 developers"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "Data Visualization",
      description: "An intelligent analytics platform that uses machine learning to provide actionable insights from complex business data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
      status: "Live",
      featured: false,
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/mehdi/ai-analytics",
      metrics: [
        { value: "85%", label: "Accuracy Rate" },
        { value: "60%", label: "Time Saved" },
        { value: "12+", label: "Data Sources" }
      ],
      duration: "5 months",
      teamSize: "3 developers"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      category: "Web Application",
      description: "A modern real estate platform with property listings, virtual tours, and integrated mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Mapbox", "Stripe", "AWS"],
      status: "Live",
      featured: false,
      liveUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/mehdi/real-estate",
      metrics: [
        { value: "30%", label: "Lead Increase" },
        { value: "2K+", label: "Properties Listed" },
        { value: "95%", label: "User Satisfaction" }
      ],
      duration: "4 months",
      teamSize: "Solo Project"
    },
    {
      id: 5,
      title: "Healthcare Management System",
      category: "Enterprise Application",
      description: "A comprehensive healthcare management system for clinics with patient records, appointment scheduling, and billing.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Docker", "HIPAA Compliant"],
      status: "In Progress",
      featured: false,
      githubUrl: "https://github.com/mehdi/healthcare-system",
      metrics: [
        { value: "70%", label: "Efficiency Gain" },
        { value: "500+", label: "Patients Managed" },
        { value: "100%", label: "HIPAA Compliant" }
      ],
      duration: "6 months",
      teamSize: "4 developers"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      category: "Marketing Tool",
      description: "A unified social media management platform with scheduling, analytics, and engagement tracking across multiple platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Social APIs", "Chart.js"],
      status: "Live",
      featured: false,
      liveUrl: "https://socialdash-demo.com",
      githubUrl: "https://github.com/mehdi/social-dashboard",
      metrics: [
        { value: "45%", label: "Engagement Boost" },
        { value: "10+", label: "Platforms Supported" },
        { value: "1K+", label: "Active Users" }
      ],
      duration: "3 months",
      teamSize: "Solo Project"
    }
  ];

  // Filter projects based on active filters
  useEffect(() => {
    let filtered = projects;

    // Apply status filter
    if (activeFilter !== 'all') {
      switch (activeFilter) {
        case 'featured':
          filtered = filtered?.filter(project => project?.featured);
          break;
        case 'recent':
          filtered = filtered?.slice(0, 4);
          break;
        case 'live':
          filtered = filtered?.filter(project => project?.status === 'Live');
          break;
        default:
          break;
      }
    }

    // Apply category filter
    if (activeCategory !== 'all') {
      const categoryMap = {
        'fullstack': ['Full-Stack Application', 'SaaS Application', 'Enterprise Application'],
        'frontend': ['Web Application', 'Marketing Tool'],
        'backend': ['API & Integration'],
        'mobile': ['Mobile Application'],
        'api': ['Data Visualization']
      };
      
      if (categoryMap?.[activeCategory]) {
        filtered = filtered?.filter(project => 
          categoryMap?.[activeCategory]?.includes(project?.category)
        );
      }
    }

    setFilteredProjects(filtered);
  }, [activeFilter, activeCategory]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const featuredProject = projects?.find(project => project?.featured);
  const regularProjects = filteredProjects?.filter(project => !project?.featured || activeFilter !== 'all');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Icon name="FolderOpen" size={16} className="text-primary mr-2" />
              <span className="text-primary font-medium text-sm">Project Portfolio</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Crafting Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-4">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore a collection of innovative projects that showcase technical expertise, 
              creative problem-solving, and measurable business impact across diverse industries.
            </p>
          </div>

          {/* Project Stats */}
          <ProjectStats />

          {/* Featured Project */}
          {featuredProject && activeFilter === 'all' && (
            <div className="mb-16">
              <FeaturedProject 
                project={featuredProject} 
                onViewDetails={handleViewDetails}
              />
            </div>
          )}

          {/* Project Filter */}
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            projectCount={filteredProjects?.length}
          />

          {/* Projects Grid */}
          <div className="mb-16">
            {regularProjects?.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    {activeFilter === 'all' ? 'All Projects' : 
                     activeFilter === 'featured' ? 'Featured Projects' :
                     activeFilter === 'recent' ? 'Recent Projects' :
                     activeFilter === 'live' ? 'Live Projects' : 'Projects'}
                  </h2>
                  <div className="text-sm text-muted-foreground">
                    {regularProjects?.length} project{regularProjects?.length !== 1 ? 's' : ''} found
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularProjects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more projects.
                </p>
                <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={() => {
                    setActiveFilter('all');
                    setActiveCategory('all');
                  }}
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-card via-muted/20 to-card rounded-2xl p-12 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology 
              and innovative solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow"
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
              >
                Download Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ProjectShowcase;