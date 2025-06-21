
import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import BehanceIcon from './ui/BehanceIcon';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-theme-dark border-t border-theme-dark-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-theme-light/60 text-sm">
              © {new Date().getFullYear()} Rashi Jain. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#projects" className="text-sm text-theme-light/60 hover:text-theme-light transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm text-theme-light/60 hover:text-theme-light transition-colors">
              Skills
            </a>
            <a href="#learning" className="text-sm text-theme-light/60 hover:text-theme-light transition-colors">
              Learning
            </a>
            <a href="#contact" className="text-sm text-theme-light/60 hover:text-theme-light transition-colors">
              Contact
            </a>
            
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/RashiJain0047"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-theme-light/60 hover:text-theme-light transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rashijain041/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-theme-light/60 hover:text-theme-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.behance.net/rashijain047"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-theme-light/60 hover:text-theme-light transition-colors"
                aria-label="Behance"
              >
                <BehanceIcon className="h-4 w-4" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-theme-purple/20 hover:bg-theme-purple/30 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 text-theme-purple" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
