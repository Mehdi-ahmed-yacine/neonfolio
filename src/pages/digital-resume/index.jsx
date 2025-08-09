import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ResumeHeader from './components/ResumeHeader';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const DigitalResume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Mock data for personal information
  const personalInfo = {
    name: "Mehdi Ahmed Yacine",
    title: "Full-Stack Developer & Digital Craftsman",
    summary: `Passionate full-stack developer with 5+ years of experience building scalable web applications and digital solutions. Specialized in React, Node.js, and modern web technologies with a focus on creating exceptional user experiences and robust backend systems.`,
    email: "mehdi.yacine@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.mehdiyacine.dev",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    socialLinks: [
      { icon: "Github", label: "GitHub", url: "https://github.com/mehdiyacine" },
      { icon: "Linkedin", label: "LinkedIn", url: "https://linkedin.com/in/mehdiyacine" },
      { icon: "Twitter", label: "Twitter", url: "https://twitter.com/mehdiyacine" },
      { icon: "Globe", label: "Portfolio", url: "https://mehdiyacine.dev" }
    ]
  };

  // Mock data for professional experience
  const experiences = [
    {
      position: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      type: "Full-time",
      current: true,
      description: `Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Responsible for architecture decisions, code reviews, and mentoring junior developers while delivering high-quality solutions for Fortune 500 clients.`,
      achievements: [
        "Architected and developed 3 major client applications serving 100K+ users",
        "Improved application performance by 40% through optimization and caching strategies",
        "Led a team of 5 developers and established best practices for code quality",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 8 junior developers, with 6 receiving promotions within 18 months"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL"],
      projects: [
        {
          name: "E-commerce Platform Redesign",
          description: "Complete overhaul of legacy e-commerce system with modern React frontend and microservices backend",
          technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"]
        },
        {
          name: "Real-time Analytics Dashboard",
          description: "Built comprehensive analytics platform with real-time data visualization and reporting",
          technologies: ["React", "D3.js", "Socket.io", "PostgreSQL", "Docker"]
        }
      ],
      metrics: [
        { value: "40%", label: "Performance Improvement" },
        { value: "100K+", label: "Users Served" },
        { value: "99.9%", label: "Uptime Achieved" }
      ]
    },
    {
      position: "Full-Stack Developer",
      company: "InnovateLab",
      location: "Austin, TX",
      duration: "Mar 2020 - Dec 2021",
      type: "Full-time",
      current: false,
      description: `Developed and maintained multiple web applications for startup clients, focusing on rapid prototyping and MVP development. Worked closely with designers and product managers to deliver user-centric solutions.`,
      achievements: [
        "Built 12+ web applications from concept to production",
        "Reduced development time by 30% through reusable component libraries",
        "Implemented automated testing increasing code coverage to 85%",
        "Collaborated with cross-functional teams to deliver projects on time"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Firebase", "Heroku", "Jest"],
      projects: [
        {
          name: "Social Media Management Tool",
          description: "Comprehensive platform for managing multiple social media accounts with scheduling and analytics",
          technologies: ["React", "Node.js", "MongoDB", "Firebase"]
        }
      ],
      metrics: [
        { value: "12+", label: "Apps Delivered" },
        { value: "30%", label: "Time Saved" },
        { value: "85%", label: "Test Coverage" }
      ]
    },
    {
      position: "Frontend Developer",
      company: "WebCraft Agency",
      location: "Remote",
      duration: "Jun 2019 - Feb 2020",
      type: "Contract",
      current: false,
      description: `Specialized in creating responsive, accessible web interfaces for various clients. Focused on modern frontend technologies and best practices for user experience optimization.`,
      achievements: [
        "Delivered 20+ responsive websites with perfect accessibility scores",
        "Improved client website loading speeds by average of 50%",
        "Established frontend development standards and documentation"
      ],
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Figma"],
      metrics: [
        { value: "20+", label: "Websites Built" },
        { value: "50%", label: "Speed Improvement" },
        { value: "100%", label: "Accessibility Score" }
      ]
    }
  ];

  // Mock data for education
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      duration: "2015 - 2019",
      location: "Berkeley, CA",
      gpa: "3.8/4.0",
      honors: "Magna Cum Laude",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Machine Learning"
      ],
      projects: [
        "Built a distributed chat application using WebSockets and Node.js",
        "Developed machine learning model for predicting student performance",
        "Created mobile app for campus navigation using React Native"
      ]
    }
  ];

  // Mock data for certifications
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "March 2023",
      expiryDate: "March 2026",
      credentialId: "AWS-SAA-2023-001234",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      issueDate: "January 2023",
      expiryDate: "January 2025",
      credentialId: "GCP-PD-2023-005678",
      skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"]
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      issueDate: "November 2022",
      credentialId: "MDB-DEV-2022-009876",
      skills: ["NoSQL", "Database Design", "Aggregation", "Performance Tuning"]
    },
    {
      name: "React Professional Certification",
      issuer: "Meta (Facebook)",
      issueDate: "August 2022",
      credentialId: "META-REACT-2022-112233",
      skills: ["React", "Redux", "Hooks", "Testing"]
    }
  ];

  // Mock data for skills
  const skills = [
    {
      name: "React.js",
      category: "frontend",
      proficiency: "Expert",
      experience: "5+ years",
      description: "Advanced React development with hooks, context, and performance optimization",
      technologies: ["Redux", "Next.js", "React Router", "Styled Components"],
      certified: true
    },
    {
      name: "Node.js",
      category: "backend",
      proficiency: "Expert",
      experience: "4+ years",
      description: "Server-side JavaScript development with Express and microservices architecture",
      technologies: ["Express.js", "Fastify", "Socket.io", "PM2"],
      certified: false
    },
    {
      name: "TypeScript",
      category: "frontend",
      proficiency: "Advanced",
      experience: "3+ years",
      description: "Type-safe JavaScript development for large-scale applications",
      technologies: ["TSConfig", "Type Guards", "Generics", "Decorators"],
      certified: false
    },
    {
      name: "PostgreSQL",
      category: "database",
      proficiency: "Advanced",
      experience: "4+ years",
      description: "Relational database design, optimization, and administration",
      technologies: ["Prisma", "Sequelize", "PgAdmin", "Query Optimization"],
      certified: false
    },
    {
      name: "MongoDB",
      category: "database",
      proficiency: "Advanced",
      experience: "3+ years",
      description: "NoSQL database design and aggregation pipeline development",
      technologies: ["Mongoose", "Atlas", "Compass", "Aggregation"],
      certified: true
    },
    {
      name: "AWS",
      category: "tools",
      proficiency: "Advanced",
      experience: "3+ years",
      description: "Cloud infrastructure and serverless application deployment",
      technologies: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
      certified: true
    },
    {
      name: "Docker",
      category: "tools",
      proficiency: "Intermediate",
      experience: "2+ years",
      description: "Containerization and orchestration for development and production",
      technologies: ["Docker Compose", "Kubernetes", "Registry", "Multi-stage builds"],
      certified: false
    },
    {
      name: "GraphQL",
      category: "backend",
      proficiency: "Intermediate",
      experience: "2+ years",
      description: "API development with efficient data fetching and real-time subscriptions",
      technologies: ["Apollo Server", "Prisma", "Subscriptions", "Federation"],
      certified: false
    },
    {
      name: "Leadership",
      category: "soft",
      proficiency: "Advanced",
      experience: "3+ years",
      description: "Team leadership, mentoring, and project management",
      technologies: ["Agile", "Scrum", "Code Reviews", "1-on-1s"],
      certified: false
    },
    {
      name: "Problem Solving",
      category: "soft",
      proficiency: "Expert",
      experience: "5+ years",
      description: "Analytical thinking and creative solution development",
      technologies: ["Debugging", "Architecture Design", "Performance Analysis", "Root Cause Analysis"],
      certified: false
    }
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: `Mehdi is an exceptional developer who consistently delivers high-quality solutions. His technical expertise combined with strong leadership skills makes him invaluable to any team. He has the rare ability to translate complex requirements into elegant, scalable code.`,
      rating: 5,
      project: "E-commerce Platform Redesign"
    },
    {
      name: "Michael Chen",
      role: "Lead",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: `Working with Mehdi was a game-changer for our startup. He built our entire platform from scratch and delivered it ahead of schedule. His attention to detail and proactive communication made the entire process smooth and efficient.`,
      rating: 5,
      project: "Social Media Management Tool"
    },
    {
      name: "Emily Rodriguez",
      role: "Manager",
      company: "WebCraft Agency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: `Mehdi's frontend development skills are outstanding. He created pixel-perfect, responsive websites that exceeded our clients' expectations. His code is clean, maintainable, and follows best practices consistently.`,
      rating: 5,
      project: "Multiple Client Websites"
    },
    {
      name: "David Thompson",
      role: "Client",
      company: "RetailMax Inc",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      content: `Mehdi transformed our outdated e-commerce platform into a modern, high-performing application. The results speak for themselves - 40% increase in conversion rates and significantly improved user experience.`,
      rating: 5,
      project: "E-commerce Modernization"
    }
  ];

  const handleDownloadPDF = () => {
    // Mock PDF download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Mehdi_Ahmed_Yacine_Resume.pdf';
    document.body?.appendChild(link);
    link?.click();
    document.body?.removeChild(link);
    
    // Show success message (in real app, this would be a toast notification)
    alert('Resume PDF download started! (This is a demo - no actual file will be downloaded)');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Icon name="FileText" size={16} />
              <span>Professional Resume</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Digital <span className="text-primary">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive professional overview optimized for formal evaluation by recruiters, 
              hiring managers, and potential clients with interactive digital enhancements.
            </p>
          </div>

          <ResumeHeader 
            personalInfo={personalInfo} 
            onDownloadPDF={handleDownloadPDF}
          />
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ExperienceSection experiences={experiences} />
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SkillsSection skills={skills} />
        </div>
      </section>
      {/* Education Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <EducationSection 
            education={education} 
            certifications={certifications} 
          />
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 text-center border border-primary/20">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Rocket" size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Let's discuss how my expertise can help bring your next project to life. 
              I'm always excited to take on new challenges and create exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadPDF}
                iconName="Download"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 clip-hexagon bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-code">M</span>
              </div>
              <div>
                <p className="text-foreground font-semibold">Mehdi Ahmed Yacine</p>
                <p className="text-muted-foreground text-sm">Full-Stack Developer</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {personalInfo?.socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Icon name={link?.icon} size={20} />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © {new Date()?.getFullYear()} Mehdi Ahmed Yacine. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalResume;