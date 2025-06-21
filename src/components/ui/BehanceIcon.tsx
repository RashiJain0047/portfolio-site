
import React from 'react';

const BehanceIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M8 10a2.5 2.5 0 1 0 0 4 2.5 2.5 0 1 0 0-4z" />
      <path d="M18 12.3h-4.8" />
      <path d="M14.25 14.25h-1.5A2.75 2.75 0 0 1 10 11.5v0a2.75 2.75 0 0 1 2.75-2.75h1.5" />
      <path d="M6 15h5" />
      <path d="M6 8.5h3" />
      <path d="M14 8.5h5.5" />
    </svg>
  );
};

export default BehanceIcon;
