/**
 * Reusable card components with consistent glass morphism styling
 */

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  animation?: boolean;
  delay?: number;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
  delay?: number;
}

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
  className?: string;
}

/**
 * Base glass card with consistent styling
 */
export function GlassCard({ children, className = '', padding = 'md', animation = false, delay = 0 }: CardProps) {
  const paddingClasses = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
  };

  const baseClasses = `bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 ${paddingClasses[padding]} ${className}`;

  if (animation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={baseClasses}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

/**
 * Feature card with icon, title, and description
 */
export function FeatureCard({ icon, title, description, href, className = '', delay = 0 }: FeatureCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 hover:scale-105 transition-all duration-500 ${className} ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="text-6xl mb-6 animate-float">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

/**
 * Stat/metric card for displaying numbers and labels
 */
export function StatCard({ number, label, delay = 0, className = '' }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`text-center ${className}`}
    >
      <div className="text-6xl md:text-7xl font-bold mb-4 text-gray-900">
        {number}
      </div>
      <div className="text-lg md:text-xl text-gray-600">
        {label}
      </div>
    </motion.div>
  );
}

/**
 * Icon card with floating animation
 */
export function IconCard({ icon, title, description, className = '', delay = 0 }: Omit<FeatureCardProps, 'href'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 ${className}`}
    >
      <div className="text-5xl mb-4 animate-float">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}
