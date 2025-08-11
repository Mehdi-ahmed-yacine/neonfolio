import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const timeline = [
    {
      year: "2019",
      phase: "Learning Basics",
      title: "HTML & CSS",
      description: "Découverte du développement web et apprentissage des bases avec HTML et CSS.",
      achievements: [
        "Structure des pages web",
        "Styles responsives de base",
        "Premières maquettes"
      ],
      technologies: ["HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      color: "primary"
    },
    {
      year: "2021-2022",
      phase: "Baccalauréat",
      title: "Obtention du Bac",
      description: "Achèvement du baccalauréat et préparation au parcours universitaire.",
      achievements: [
        "Focus sur les matières scientifiques",
        "Orientation vers l'informatique"
      ],
      technologies: ["Maths", "Physique", "Informatique"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
      color: "accent"
    },
    {
      year: "2022-2023",
      phase: "Début en Informatique",
      title: "Étudiant en Informatique",
      description: "Entrée à l'université en informatique et apprentissage des bases de la programmation.",
      achievements: [
        "Algorithmes et structures de données",
        "Bases de la programmation",
        "Découverte des frameworks"
      ],
      technologies: ["Python", "JavaScript"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      color: "success"
    },
    {
      year: "2023-2024",
      phase: "Premiers Projets",
      title: "Premier Site Web",
      description: "Réalisation du premier site web complet et publication en ligne.",
      achievements: [
        "Site web responsive",
        "Bonnes pratiques UI/UX"
      ],
      technologies: ["React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      color: "warning"
    },
    {
      year: "2024",
      phase: "Première Application",
      title: "Première App",
      description: "Conception et développement d'une première application complète.",
      achievements: [
        "Auth, CRUD, déploiement",
        "Optimisations de performance"
      ],
      technologies: ["React", "Node.js"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      color: "primary"
    },
    {
      year: "2025",
      phase: "Grand Départ",
      title: "Le début du grand voyage",
      description: "Lancement de projets ambitieux et montée en puissance sur des applications réelles.",
      achievements: [
        "Applications professionnelles",
        "Vision long terme"
      ],
      technologies: ["Django", "React", "MySQL"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      color: "accent"
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