/**
 * Reusable section heading component with consistent animation
 */

import React from 'react';
import { motion } from 'framer-motion';
import { SECTION_HEADING } from '@/lib/animations';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  delay?: number;
}

export default function SectionHeading({
  children,
  className = '',
  size = 'lg',
  align = 'center',
  delay = 0
}: SectionHeadingProps) {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.h2
      {...SECTION_HEADING}
      transition={{ delay }}
      className={`${sizeClasses[size]} ${alignClasses[align]} font-bold mb-16 text-gray-900 ${className}`}
    >
      {children}
    </motion.h2>
  );
}

/**
 * Section heading variant for hero/main titles
 */
export function HeroHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-gray-900 ${className}`}
    >
      {children}
    </motion.h1>
  );
}

/**
 * Section subtitle component
 */
export function SectionSubtitle({ children, className = '', delay = 0.2 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`text-xl text-gray-700 mb-12 ${className}`}
    >
      {children}
    </motion.p>
  );
}
