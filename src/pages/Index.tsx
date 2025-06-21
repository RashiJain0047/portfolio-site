
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import LearningSection from '@/components/LearningSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-element');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-theme-dark text-theme-light min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <LearningSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
