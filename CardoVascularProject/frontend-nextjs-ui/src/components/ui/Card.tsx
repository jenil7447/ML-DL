// frontend/src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
}) => {
  const variants = {
    default: 'bg-white border border-[#C1E8FF]',
    primary: 'bg-[#021024] text-white',
    secondary: 'bg-[#052659] text-white',
    accent: 'bg-gradient-to-br from-[#5483B3] to-[#7DA0CA] text-white',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        rounded-2xl shadow-lg
        ${variants[variant]}
        ${paddings[padding]}
        ${hover ? 'transition-transform hover:scale-105 hover:shadow-xl duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};