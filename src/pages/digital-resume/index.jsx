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
    name: "Ahmed Yacine Mehdi",
    title: "Full-Stack Developer | Master’s Student | Sonatrach Intern",
    summary: `Master's student at University of Algiers 1 with a Bachelor's degree in Software and Information Systems Engineering. Experienced full-stack developer with professional internship at Sonatrach DP Hydra where I developed a web application named \"Reshume\".`,
    email: "yacinemehdi2005@gmail.com",
    phone: "+213 562 17 29 59",
    location: "Algeria",
    website: "",
    profileImage: "/assets/images/5798831463582517533.jpg",
    socialLinks: [
      { icon: "Github", label: "GitHub", url: "https://github.com/yacine454-may" },
      { icon: "Linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-yacine-mehdi-5941a4303/" }
    ]
  };

  // Mock data for professional experience
  const experiences = [
    {
      position: "Développeur Web (Projet de Fin d'Études)",
      company: "Sonatrach - Division Production HSE",
      location: "Alger, Algérie",
      duration: "2023",
      type: "Stage / Projet",
      current: false,
      description: `Application Reshume pour Sonatrach — Dans le cadre d’un projet de fin d’études, j’ai conçu et développé Reshume, une application web innovante pour le département HSE de la Division Production de Sonatrach. Cette plateforme, développée avec HTML, CSS, JavaScript, Django, et MySQL, automatise la gestion des remboursements des frais de mission des employés. Elle intègre des fonctionnalités clés telles que la gestion des utilisateurs, le suivi des missions via un tableau de bord, l’historique des transactions, et l’envoi de notifications par email pour une communication transparente. En utilisant des bibliothèques comme Chart.js pour les visualisations et Moment.js pour la gestion des dates, Reshume offre une interface moderne, responsive et compatible avec le mode sombre. Ce projet a permis d’optimiser les processus manuels, de réduire les erreurs et d’améliorer l’efficacité opérationnelle, démontrant mes compétences en développement web et mon engagement à répondre aux besoins spécifiques de Sonatrach.`,
      technologies: ["HTML", "CSS", "JavaScript", "Django", "MySQL", "Chart.js", "Moment.js"],
      projects: [],
      metrics: []
    },
    {
      position: "Développeur Web",
      company: "CHU Mustapha - Service Pied Diabétique",
      location: "Alger, Algérie",
      duration: "2022-2023",
      type: "Projet",
      current: false,
      description: `Bucha Tech est une application web développée en deux mois pour le service de prise en charge du pied diabétique du CHU Mustapha. Son objectif est de gérer de manière détaillée les données des patients, ainsi que celles des médecins et infirmiers, à travers une interface moderne, intuitive et facile à utiliser. L’application intègre des graphiques pour visualiser les informations, facilitant le suivi médical et améliorant l’efficacité des processus cliniques.`,
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      projects: [],
      metrics: []
    }
  ];

  // Education: University of Algiers 1 (2024-2025)
  const education = [
    {
      degree: "Licence en Génie Logiciel et Systèmes d’Information",
      institution: "Université d’Alger 1",
      duration: "2024 - 2025",
      location: "Alger, Algérie",
      gpa: "",
      honors: "",
      relevantCourses: [],
      projects: []
    }
  ];

  // Certifications: Only ML certificate from code213
  const certifications = [
    {
      name: "Machine Learning Certificate",
      issuer: "code213 school",
      issueDate: "2024",
      expiryDate: "",
      credentialId: "",
      skills: ["Machine Learning", "Python", "Data Science"],
      description: "Formation de 4 mois en Machine Learning à code213 school."
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
                onClick={() => window.open('/assets/images/Mehdi Ahmed Yacine.pdf', '_blank')}
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