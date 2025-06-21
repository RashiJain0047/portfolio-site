
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [showName, setShowName] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide scroll during animation
    document.body.style.overflow = 'hidden';

    // Start name animation after 2 seconds
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 2000);

    // Start fade out animation at 4.5 seconds (1.5 seconds before completion)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    // Complete the loading screen at exactly 6 seconds
    const completeTimer = setTimeout(() => {
      // Restore scroll when animation completes
      document.body.style.overflow = 'unset';
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      // Ensure scroll is restored if component unmounts early
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-theme-dark flex items-center justify-center z-50 transition-all duration-1000 ${fadeOut ? 'opacity-0 scale-125' : 'opacity-100 scale-110'}`}>
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-theme-purple/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-theme-cyan/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main name display with blur effect on exit */}
      <div className={`text-center transition-all duration-1500 ${showName ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${fadeOut ? 'blur-md' : 'blur-none'}`}>
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-theme-light relative">
          <span className="inline-block">
            Rashi
          </span>
          <span className="mx-4 text-theme-purple">
            Jain
          </span>
        </h1>
        
        {/* Glowing underline effect */}
        <div className={`mt-4 mx-auto transition-all duration-1500 delay-1000 ${showName ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}>
          <div className="h-1 bg-gradient-to-r from-theme-purple to-theme-cyan rounded-full animate-glow"></div>
        </div>
        
        {/* Subtle tagline */}
        <p className={`mt-6 text-xl text-theme-light/80 transition-all duration-1500 delay-1500 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Creative Designer & Developer
        </p>
      </div>
      
      {/* Loading dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-theme-purple rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-theme-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-theme-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
