import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const timeline = [
    {
      year: "2019",
      phase: "The Spark",
      title: "First Lines of Code",
      description: "Discovered the magic of programming during university. Built my first web application - a simple task manager that sparked a lifelong passion for creating digital solutions.",
      achievements: [
        "Learned HTML, CSS, and JavaScript fundamentals",
        "Built first full-stack application with Node.js",
        "Contributed to open-source projects",
        "Won university hackathon with team project"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      color: "primary"
    },
    {
      year: "2020-2021",
      phase: "The Foundation",
      title: "Building Core Skills",
      description: "Dove deep into modern web development frameworks and best practices. Completed multiple internships and freelance projects, establishing a solid foundation in full-stack development.",
      achievements: [
        "Mastered React and Vue.js frameworks",
        "Completed 3 successful internships",
        "Delivered 15+ freelance projects",
        "Earned AWS Cloud Practitioner certification"
      ],
      technologies: ["React", "Vue.js", "Python", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
      color: "accent"
    },
    {
      year: "2022",
      phase: "The Growth",
      title: "Professional Breakthrough",
      description: "Joined a fast-growing startup as a junior developer. Led my first major project redesign that improved user engagement by 40% and reduced load times by 60%.",
      achievements: [
        "Led complete platform redesign project",
        "Improved application performance by 60%",
        "Mentored 2 junior developers",
        "Implemented CI/CD pipelines"
      ],
      technologies: ["Next.js", "TypeScript", "Docker", "Kubernetes", "Redis"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      color: "success"
    },
    {
      year: "2023",
      phase: "The Expansion",
      title: "Technical Leadership",
      description: "Promoted to senior developer role. Architected microservices infrastructure serving 100K+ users. Started contributing to technical blogs and speaking at local meetups.",
      achievements: [
        "Architected scalable microservices platform",
        "Reduced infrastructure costs by 35%",
        "Published 12 technical articles",
        "Spoke at 5 developer conferences"
      ],
      technologies: ["Microservices", "GraphQL", "Terraform", "Monitoring", "DevOps"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      color: "warning"
    },
    {
      year: "2024",
      phase: "The Innovation",
      title: "Digital Craftsman",
      description: "Established myself as a full-stack architect and digital craftsman. Currently working on cutting-edge projects involving AI integration and advanced user experiences.",
      achievements: [
        "Integrated AI/ML capabilities into web apps",
        "Built real-time collaboration platforms",
        "Achieved 99.9% uptime across all projects",
        "Launched personal brand and consultancy"
      ],
      technologies: ["AI/ML", "WebRTC", "WebAssembly", "Edge Computing", "Advanced React"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent font-code">My Journey</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Evolution of a
            <span className="block text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
              Digital Craftsman
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every expert was once a beginner. Here's the story of my transformation from curious student to seasoned developer, marked by continuous learning and meaningful impact.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {timeline?.map((item, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activePhase === index
                  ? `bg-${item?.color}/20 text-${item?.color} border border-${item?.color}/30 shadow-glow-sm`
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-transparent'
              }`}
            >
              <span className="font-code text-sm">{item?.year}</span>
              <span className="ml-2 hidden sm:inline">{item?.phase}</span>
            </button>
          ))}
        </div>

        {/* Active Timeline Item */}
        <div className="relative">
          {timeline?.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activePhase === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-${item?.color}/20 flex items-center justify-center`}>
                        <span className={`text-${item?.color} font-bold text-lg font-code`}>
                          {item?.year?.slice(-2)}
                        </span>
                      </div>
                      <div>
                        <div className={`text-${item?.color} font-code text-sm font-medium`}>
                          {item?.phase}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {item?.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item?.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Trophy" size={20} className={`text-${item?.color} mr-2`} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {item?.achievements?.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={16} className={`text-${item?.color} mt-1 flex-shrink-0`} />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Code2" size={20} className={`text-${item?.color} mr-2`} />
                      Technologies Mastered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item?.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-${item?.color}/10 text-${item?.color} border border-${item?.color}/20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className={`relative rounded-2xl overflow-hidden shadow-elevation-card border border-${item?.color}/20`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${item?.color}/20 to-transparent`}></div>
                    <Image
                      src={item?.image}
                      alt={`${item?.title} - ${item?.year}`}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </div>
                  
                  {/* Floating Year Badge */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-${item?.color}/20 backdrop-blur-sm border border-${item?.color}/30 flex items-center justify-center`}>
                    <span className={`text-${item?.color} font-bold text-lg font-code`}>
                      {item?.year?.slice(-2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {timeline?.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activePhase === index ? 'bg-primary w-8' : 'bg-muted'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;