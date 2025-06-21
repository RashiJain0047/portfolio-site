
import React from 'react';
import { Github, Linkedin, Terminal, Mail } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      link: "https://github.com/RashiJain0047",
      color: "bg-gray-800 hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/rashijain041/",
      color: "bg-blue-800 hover:bg-blue-700"
    },
    {
      name: "Behance",
      icon: <Terminal size={24} />,
      link: "https://www.behance.net/rashijain047",
      color: "bg-blue-600 hover:bg-blue-500"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-theme-dark-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-theme-light/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 md:p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <p className="text-theme-light/70 mb-8">
              Feel free to connect with me on these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-white transition-all ${social.color}`}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            <div className="border-t border-theme-dark-light pt-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Mail size={20} className="text-theme-purple" />
                Email Me
              </h4>
              <a 
                href="mailto:rashi.jain.0047@gmail.com"
                className="text-theme-cyan hover:text-theme-purple transition-colors text-lg"
              >
                rashi.jain.0047@gmail.com
              </a>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Let's work together</h3>
            <p className="text-theme-light/70">
              Looking for a designer with development skills? Let's create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
