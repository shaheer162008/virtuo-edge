// Example Icon Component Template
// Copy this structure for each new icon

import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const GlobeCode: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-cyan-400 ${className}`}
    >
      {/* 
        STRUCTURE:
        - Use #33BBCF or #00F6FF as stroke/fill colors
        - Stroke width: 2-3px
        - Create modern, minimalist design
        - Add subtle gradients using <defs><linearGradient>
        
        Example paths below:
      */}
      
      <defs>
        <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#33BBCF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00F6FF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Example: Globe */}
      <circle cx="256" cy="256" r="200" stroke="url(#cyan-gradient)" strokeWidth="3" />
      <path
        d="M 256 56 Q 300 150 256 256 Q 212 150 256 56"
        stroke="url(#cyan-gradient)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Example: Code brackets */}
      <path
        d="M 320 180 L 380 256 L 320 332"
        stroke="url(#cyan-gradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 192 180 L 132 256 L 192 332"
        stroke="url(#cyan-gradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

/*
REMEMBER:
✓ Replace the example paths with your actual icon design
✓ Keep stroke-width between 2-3px for consistency
✓ Use cyan gradient from #33BBCF to #00F6FF
✓ Use strokeLinecap="round" for modern look
✓ SVG viewBox should be "0 0 512 512"
✓ Export as: export const IconNameHere: React.FC<IconProps> = ...
*/
