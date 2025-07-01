import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "PCAS Website",
    description: "Complete website design with modern UI/UX and responsive design.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=900",
    category: "uiux",
    link: "https://www.figma.com/proto/BhLFnpDZm8tGbRtFifsWZf/PCAS-WEBSITE?node-id=481-111&starting-point-node-id=481%3A111&t=2mO8Mon6NNN5vU9A-1"
  },
  {
    id: 2,
    title: "Job Portal Platform",
    description: "Comprehensive job portal design with user-friendly interface for job seekers and employers, featuring advanced search and filtering.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=900",
    category: "uiux",
    link: "https://www.figma.com/design/cNym4Qw9CaPH537YABM0oc/Untitled?node-id=0-1&t=GPeOUO3PcGcESbRy-1"
  },
  // {
  //   id: 3,
  //   title: "Social Media Stories",
  //   description: "Creative Instagram and Facebook story designs for various brands with engaging visual elements and animations.",
  //   image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=900",
  //   category: "graphic",
  //      link: "https://www.canva.com/design/DAGjF5Ygcm0/bQz6HzjEewjwMqKXhsq4eg/view?utm_content=DAGjF5Ygcm0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4beb71cfd"

"
  // },
  {
    id: 4,
    title: "Magazine Layout Design",
    description: "Modern magazine layout design with creative typography and visual hierarchy for better readability.",
    image: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&fit=crop&q=80&w=900",
    category: "graphic",
    link: "https://www.canva.com/design/DAGjF5Ygcm0/bQz6HzjEewjwMqKXhsq4eg/view?utm_content=DAGjF5Ygcm0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4beb71cfd"

  },
  {
    id: 5,
     title: "Newsletter Design",
    description: "Professional newsletter templates with clean layouts and engaging visual elements for email marketing campaigns.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=900",
    category: "graphic",
      link: "https://www.canva.com/design/DAGjF5Ygcm0/bQz6HzjEewjwMqKXhsq4eg/view?utm_content=DAGjF5Ygcm0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4beb71cfd"

   },
  {
    id: 6,
    title: "Social Media Posts",
    description: "Creative social media post designs for various platforms including promotional content and brand awareness campaigns.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900",
    category: "graphic",
    link: "https://www.canva.com/design/DAGjF5Ygcm0/bQz6HzjEewjwMqKXhsq4eg/view?utm_content=DAGjF5Ygcm0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4beb71cfd"
  }
];

// Observer for scroll animations
const useScrollObserver = (elementsRef: React.MutableRefObject<(HTMLElement | null)[]>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [elementsRef]);
};

const ProjectsSection = () => {
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  useScrollObserver(projectRefs);
  
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <p className="text-theme-light/70 max-w-2xl mx-auto">
            A showcase of my design projects, UI/UX work, and creative explorations.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass-card">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="uiux">UI/UX Design</TabsTrigger>
              <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="animate-reveal mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  ref={(el) => (projectRefs.current[index] = el)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uiux" className="animate-reveal mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(p => p.category === 'uiux')
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    ref={(el) => (projectRefs.current[index + projects.length] = el)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="graphic" className="animate-reveal mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(p => p.category === 'graphic')
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    ref={(el) => (projectRefs.current[index + projects.length * 2] = el)}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = React.forwardRef<HTMLDivElement, { project: typeof projects[0] }>(
  ({ project }, ref) => {
    return (
      <Card 
        className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02] reveal-element"
        ref={ref}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-theme-light/70 text-sm">{project.description}</p>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex justify-between">
          <div className="flex items-center text-sm text-theme-light/50">
            <Image className="h-4 w-4 mr-1" />
            {project.category === 'uiux' ? 'UI/UX Design' : 'Graphic Design'}
          </div>
          <a
            href={project.link}
            className="text-theme-purple hover:text-theme-cyan transition-colors flex items-center text-sm"
          >
            View Project <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </CardFooter>
      </Card>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectsSection;
