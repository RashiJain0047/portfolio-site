import React, { useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Database, Code } from 'lucide-react';

const learningJourneys = [
  {
    category: "python",
    title: "Python Development",
    icon: <Code className="h-5 w-5" />,
    milestones: [
      {
        title: "Python Basics",
        description: "Learned Python syntax, data types, and control structures through online courses and practice projects.",
        completed: true
      },
      {
        title: "Python Libraries",
        description: "Explored popular libraries like Pandas and Matplotlib for data manipulation and visualization.",
        completed: true
      },
      {
        title: "Object-Oriented Programming",
        description: "Mastered OOP concepts in Python including classes, inheritance, and polymorphism.",
        completed: false
      },
      {
        title: "Building Web Applications",
        description: "Learning Flask and Django frameworks for web development.",
        completed: false
      }
    ]
  },
  {
    category: "sql",
    title: "SQL & Databases",
    icon: <Database className="h-5 w-5" />,
    milestones: [
      {
        title: "SQL Fundamentals",
        description: "Learned basic SQL queries, filtering, and sorting data.",
        completed: true
      },
      {
        title: "Database Design",
        description: "Studied relational database design, normalization, and entity-relationship diagrams.",
        completed: true
      },
      {
        title: "Advanced SQL",
        description: "Mastered joins, subqueries, and aggregate functions for complex data retrieval.",
        completed: false
      },
      {
        title: "NoSQL Databases",
        description: "Exploring MongoDB and document-based data storage concepts.",
        completed: false
      }
    ]
  },
  {
    category: "dsa",
    title: "Data Structures & Algorithms",
    icon: <BookOpen className="h-5 w-5" />,
    milestones: [
      {
        title: "Basic Data Structures",
        description: "Learned arrays, linked lists, stacks, and queues implementations.",
        completed: true
      },
      {
        title: "Searching & Sorting",
        description: "Studied various searching and sorting algorithms and their time complexities.",
        completed: false
      },
      {
        title: "Advanced Data Structures",
        description: "Learning trees, graphs, and hash tables implementations.",
        completed: false
      },
      {
        title: "Algorithm Design",
        description: "Planning to learn dynamic programming and greedy algorithms.",
        completed: false
      }
    ]
  }
];

const LearningSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const milestoneRefs = useRef<(HTMLLIElement | null)[]>([]);

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

    milestoneRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="learning" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Journey</h2>
          <p className="text-theme-light/70 max-w-2xl mx-auto">
            Tracking my progress in development skills and continuous learning.
          </p>
        </div>

        <Tabs defaultValue="python" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass-card">
              <TabsTrigger value="python" className="flex items-center gap-2">
                <Code className="h-4 w-4" /> Python
              </TabsTrigger>
              <TabsTrigger value="sql" className="flex items-center gap-2">
                <Database className="h-4 w-4" /> SQL
              </TabsTrigger>
              <TabsTrigger value="dsa" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> DSA
              </TabsTrigger>
            </TabsList>
          </div>

          {learningJourneys.map((journey) => (
            <TabsContent key={journey.category} value={journey.category} className="animate-reveal mt-0">
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    {journey.icon} {journey.title}
                  </h3>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-theme-dark-light"></div>

                  <ul className="space-y-8">
                    {journey.milestones.map((milestone, index) => (
                      <li 
                        key={index} 
                        className="relative pl-12 reveal-element"
                        ref={el => milestoneRefs.current.push(el)}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                          milestone.completed 
                            ? 'border-theme-purple bg-theme-purple/20' 
                            : 'border-theme-light/30 bg-theme-dark-light'
                        }`}>
                          {milestone.completed && (
                            <div className="w-3 h-3 rounded-full bg-theme-purple"></div>
                          )}
                        </div>

                        <div className="glass-card p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold">{milestone.title}</h4>
                          </div>
                          <p className="text-theme-light/70 text-sm">
                            {milestone.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default LearningSection;
