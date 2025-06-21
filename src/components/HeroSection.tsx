
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const animElements = useRef<HTMLSpanElement[]>([]);
  
  useEffect(() => {
    // Text animation
    const animateText = () => {
      animElements.current.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('revealed');
        }, 300 * index);
      });
    };
    
    // Delay the start of animation
    setTimeout(animateText, 500);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-theme-purple/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-80 h-80 rounded-full bg-theme-cyan/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="h-12">
              {['Hello', 'I\'m', 'a', 'Creative'].map((word, index) => (
                <span
                  key={index}
                  ref={(el) => el && (animElements.current[index] = el)}
                  className="reveal-element inline-block mr-3 text-2xl text-theme-light opacity-0"
                >
                  {word}
                </span>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading">
              <span className="block reveal-element"
                ref={(el) => el && (animElements.current[4] = el)}>
                Designer<span className="text-theme-purple">.</span>
              </span>
              <span className="block reveal-element" 
                ref={(el) => el && (animElements.current[5] = el)}>
                Developer<span className="text-theme-cyan">.</span>
              </span>
              <span className="block reveal-element"
                ref={(el) => el && (animElements.current[6] = el)}>
                Creative<span className="text-gradient">.</span>
              </span>
            </h1>
            
            <p className="text-xl text-theme-light/80 max-w-xl reveal-element"
              ref={(el) => el && (animElements.current[7] = el)}>
              Blending visual design expertise with emerging development skills to create
              beautiful, functional digital experiences.
            </p>
            
            <div className="pt-4 reveal-element"
              ref={(el) => el && (animElements.current[8] = el)}>
              <Button className="button-glow text-white" size="lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
