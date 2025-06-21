
import React, { useRef, useEffect } from 'react';
import { Code, Image, Terminal, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: "Design",
    icon: <Palette className="h-6 w-6 text-theme-purple" />,
    skills: [
      { name: "Figma", level: 55 },
      { name: "Photoshop", level: 85 },
      { name: "Illustrator", level: 80 },
      { name: "Canva", level: 95 },
    ]
  },
  {
    title: "Development",
    icon: <Code className="h-6 w-6 text-theme-cyan" />,
    skills: [
      { name: "HTML/CSS", level: 75 },
      { name: "Python", level: 40 },
      { name: "SQL", level: 35 },
      { name: "JavaScript", level: 55 },
    ]
  },
  {
    title: "AI Tools",
    icon: <Terminal className="h-6 w-6 text-theme-purple" />,
    skills: [
      { name: "Generative AI", level: 80 },
      { name: "AI for Design", level: 85 },
      { name: "Prompt Engineering", level: 75 },
      { name: "AI Workflow", level: 70 },
    ]
  }
];

const SkillsSection = () => {
  // Fix the type by specifying HTMLDivElement instead of HTMLElement
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    categoryRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-theme-dark-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-element" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-theme-light/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical and creative abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="glass-card p-6 reveal-element"
              ref={el => categoryRefs.current[idx] = el}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-theme-dark-light mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-theme-light/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-theme-dark-light rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-theme-purple to-theme-cyan rounded-full"
                        style={{ 
                          width: `${skill.level}%`, 
                          transition: 'width 1.5s ease'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
