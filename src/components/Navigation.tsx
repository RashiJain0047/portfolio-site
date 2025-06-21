
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Palette, Terminal, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: "Projects", href: "#projects", icon: <Palette size={16} /> },
    { name: "Skills", href: "#skills", icon: <Code size={16} /> },
    { name: "Learning", href: "#learning", icon: <Terminal size={16} /> },
    { name: "Contact", href: "#contact", icon: null },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/RashiJain0047", icon: <Github size={18} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/rashijain041/", icon: <Linkedin size={18} /> },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300", 
        scrolled ? "bg-theme-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-heading font-bold text-theme-light hover:text-theme-purple transition-colors">
          RJ<span className="text-theme-purple">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="flex items-center gap-1.5 text-theme-light hover:text-theme-purple transition-colors"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-theme-light hover:text-theme-purple transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-theme-light hover:text-theme-purple"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-theme-dark-light/95 backdrop-blur-lg`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="flex items-center gap-2 py-2 text-theme-light hover:text-theme-purple transition-colors"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <div className="flex items-center justify-start py-2">
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-theme-light hover:text-theme-purple transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
