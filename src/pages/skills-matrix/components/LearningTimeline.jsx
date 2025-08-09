import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningTimeline = () => {
  const timelineData = [
    {
      year: "2025",
      title: "AI/ML Integration",
      description: "Exploring machine learning integration in web applications",
      skills: ["TensorFlow.js", "OpenAI API", "Python"],
      status: "current",
      icon: "Brain"
    },
    {
      year: "2024",
      title: "Advanced React Ecosystem",
      description: "Mastered Next.js 14, React Server Components, and advanced state management",
      skills: ["Next.js 14", "Zustand", "React Query", "Framer Motion"],
      status: "completed",
      icon: "Rocket"
    },
    {
      year: "2023",
      title: "Full-Stack Mastery",
      description: "Achieved proficiency in modern full-stack development with cloud deployment",
      skills: ["Node.js", "PostgreSQL", "Docker", "AWS"],
      status: "completed",
      icon: "Server"
    },
    {
      year: "2022",
      title: "Frontend Specialization",
      description: "Focused on React ecosystem and modern CSS frameworks",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "completed",
      icon: "Code2"
    },
    {
      year: "2021",
      title: "Web Development Foundation",
      description: "Started journey with core web technologies and responsive design",
      skills: ["HTML5", "CSS3", "JavaScript", "Git"],
      status: "completed",
      icon: "Globe"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Learning Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my continuous learning and skill development in the ever-evolving world of technology.
        </p>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-muted rounded-full" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineData?.map((item, index) => (
            <div key={item?.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`bg-card border border-border rounded-xl p-6 shadow-elevation-card hover:shadow-elevation-subtle transition-all duration-300 ${
                  item?.status === 'current' ? 'border-primary/30 bg-primary/5' : ''
                }`}>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      item?.status === 'current' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={item?.icon} size={16} />
                    </div>
                    <span className={`text-sm font-bold ${
                      item?.status === 'current' ? 'text-primary' : 'text-accent'
                    }`}>
                      {item?.year}
                    </span>
                    {item?.status === 'current' && (
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item?.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item?.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted/30 text-muted-foreground text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10">
                <div className={`w-6 h-6 rounded-full border-4 ${
                  item?.status === 'current' ?'bg-primary border-primary shadow-glow-primary animate-glow' :'bg-accent border-accent'
                }`} />
              </div>

              {/* Empty Space */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningTimeline;